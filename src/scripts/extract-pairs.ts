import * as fs from 'fs';

function extractPairs() {
  const html = fs.readFileSync('drive_folder.html', 'utf-8');
  console.log("HTML loaded, length:", html.length);
  
  // Let's find all pairs of [id, filename] in the initial data state or javascript array elements.
  // In Google Drive folder view, the initialDataState contains arrays or serialized representations where the file ID
  // and name are nested together. 
  // Let's search for regex matches: an ID of length 33, followed by some metadata, and a filename.
  // Or we can just find any occurrence of a 33-character ID starting with '1' and search in its surrounding 
  // substring (e.g. 500 characters before and after) for filenames ending in .jpg / .png / etc.
  
  const driveIdRegex = /\b(1[a-zA-Z0-9_-]{32})\b/g;
  const ids = Array.from(new Set([...html.matchAll(driveIdRegex)].map(m => m[1])));
  console.log(`Found ${ids.length} unique drive-like IDs.`);
  
  const results: { name: string; id: string; distance: number }[] = [];
  
  // For each ID, let's find where it appears in the HTML, and search nearby for filenames ending in .jpg/.png
  const fileRegex = /([a-zA-Z0-9_-]+\.(jpeg|jpg|png|webp|gif|pdf|docx|txt))/gi;
  
  // Let's locate occurrences
  ids.forEach(id => {
    // Skip common folder IDs if we know them
    if (id === '16wbpas7L_uQ_QkyLT6gBvenJ0tMRuc0Z') return;
    
    let pos = -1;
    while ((pos = html.indexOf(id, pos + 1)) !== -1) {
      // Extract a portion of the text around this position
      const start = Math.max(0, pos - 400);
      const end = Math.min(html.length, pos + 400);
      const surrounding = html.substring(start, end);
      
      // Let's run the filename regex in this context
      fileRegex.lastIndex = 0;
      let fileMatch;
      while ((fileMatch = fileRegex.exec(surrounding)) !== null) {
        const name = fileMatch[1].toLowerCase();
        // Skip common system icons / urls
        if (name.includes('ssl.gstatic') || name.includes('gstatic') || name.includes('logo_') || name.includes('broken_image')) {
          continue;
        }
        
        // Calculate offset-distance
        const distance = Math.abs((start + fileMatch.index) - pos);
        results.push({ name, id, distance });
      }
    }
  });
  
  // Group results by filename, picking the best (closest) ID match
  const bestMatches: Record<string, { id: string; distance: number }> = {};
  results.forEach(r => {
    if (!bestMatches[r.name] || bestMatches[r.name].distance > r.distance) {
      bestMatches[r.name] = { id: r.id, distance: r.distance };
    }
  });
  
  console.log("BEST MATCHES FOUND (" + Object.keys(bestMatches).length + "):");
  const sortedNames = Object.keys(bestMatches).sort();
  sortedNames.forEach(name => {
    console.log(`  "${name}": "${bestMatches[name].id}"`);
  });
  
  // Let's write the mapped pairs to a JSON file so that we can easily consume it in our next steps.
  fs.writeFileSync('src/data/drive_images_map.json', JSON.stringify(bestMatches, null, 2));
  console.log("Wrote mappings to src/data/drive_images_map.json");
}

extractPairs();
