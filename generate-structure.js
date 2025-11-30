// generate-structure.js
// Reads architecture.md and creates all folders + empty files from the tree.

const fs = require("fs");
const path = require("path");

// 1. read the architecture.md file
const raw = fs.readFileSync(path.join(__dirname, "architecture.md"), "utf8");
const lines = raw.split("\n");

// 2. start from the line that has "services/" (skip prompt text above)
const startIndex = lines.findIndex((line) => line.trim() === "services/");
const treeLines = startIndex === -1 ? lines : lines.slice(startIndex);

let stack = []; // holds folder names by level

treeLines.forEach((line) => {
  if (!line.trim()) return; // skip empty lines

  const indentMatch = line.match(/^(\s*)/);
  const indent = indentMatch ? indentMatch[1].length : 0;
  const level = Math.floor(indent / 2); // assuming 2 spaces per level
  const trimmed = line.trim();

  // Directory (ends with /)
  if (trimmed.endsWith("/")) {
    const dirName = trimmed.replace(/\/$/, "");
    stack[level] = dirName;
    stack = stack.slice(0, level + 1);

    const dirPath = path.join(__dirname, ...stack);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log("DIR  :", path.relative(__dirname, dirPath));
    }
  } else {
    // File (e.g. app.js, Dockerfile, .env.example, etc.)
    const fileName = trimmed;
    const dirParts = stack.slice(0, level); // parent dirs
    const filePath = path.join(__dirname, ...dirParts, fileName);

    const parentDir = path.dirname(filePath);
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "");
      console.log("FILE :", path.relative(__dirname, filePath));
    }
  }
});

console.log("\n✅ Done. Folders and files created from architecture.md");
