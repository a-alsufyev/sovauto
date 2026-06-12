import { execSync } from "child_process";
import fs from "fs";

let log = "";
function run(cmd) {
  log += `\n=== Running: ${cmd} ===\n`;
  try {
    const stdout = execSync(cmd, { encoding: "utf8" });
    log += stdout;
  } catch (err) {
    log += `ERROR: ${err.message}\n${err.stderr || ""}\n`;
  }
}

run("git status");
run("git diff src/data/vehicles.ts");
run("git checkout -- src/data/vehicles.ts");
run("git status");

fs.writeFileSync("restore.log", log);
console.log("Restoration log written to restore.log");
