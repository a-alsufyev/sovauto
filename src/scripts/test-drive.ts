import * as fs from 'fs';

async function test() {
  const url = "https://drive.google.com/drive/folders/16wbpas7L_uQ_QkyLT6gBvenJ0tMRuc0Z";
  console.log("Fetching: " + url);
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
      }
    });
    const html = await res.text();
    console.log("Fetched Length:", html.length);
    
    // Write out the HTML to a file so we can run grep on it, or scan it more robustly
    fs.writeFileSync('drive_folder.html', html);
    console.log("Saved html to drive_folder.html");
    
    // Let's search for filenames with image extensions (jpg, jpeg, png, webp, pdf)
    // We can also extract all strings that look like "name.jpg" or "name.jpeg" or "name.png"
    // Usually Google Drive has items represented as:
    // ["<id>", "<name>", ...]
    // Let's use a regex to find all matches of double-quoted or single-quoted substrings that end in .jpg, .png, etc.
    const fileRegex = /"([^"]+\.(jpeg|jpg|png|webp|gif|pdf|docx|txt))"/gi;
    const fileMatches = [...html.matchAll(fileRegex)].map(m => m[1]);
    console.log(`Found ${fileMatches.length} file names:`, fileMatches);
    
    // Let's write a smarter extractor that finds all occurrences of 33-char drive IDs
    // and scans near them in the HTML to find any filename.
    const driveIdPattern = /1[a-zA-Z0-9_-]{32}/g;
    const allMatches = [...html.matchAll(driveIdPattern)];
    console.log(`Total 33-char ID matches: ${allMatches.length}`);
    
    // Let's search inside the HTML for the string containing initialDataState.
    // Historically, Google Drive uses a format like:
    // data:function(){return [["entry",...],[...]]}
    // Let's look for script blocks that contain "16wbpas7L_uQ_QkyLT6gBvenJ0tMRuc0Z"
    // and analyze them.
    
  } catch(e) {
    console.error(e);
  }
}

test();
