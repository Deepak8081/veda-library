const fs = require('fs');
const path = require('path');
const vm = require('vm');

const content = fs.readFileSync(path.join(__dirname, '../src/data/vedicArticlesData.js'), 'utf8');
const lines = content.split('\n');

// Check every top-level article object
let currentKey = null;
let currentKeyStart = -1;
let currentObjLines = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const match = line.match(/^  "([a-z0-9-]+)":\s*\{/);
  if (match) {
    if (currentKey) {
      const code = 'const obj = {\n' + currentObjLines.join('\n') + '\n};';
      try {
        new vm.Script(code);
      } catch (err) {
        console.log(`❌ Error in key [${currentKey}] starting at line ${currentKeyStart}: ${err.message}`);
      }
    }
    currentKey = match[1];
    currentKeyStart = i + 1;
    currentObjLines = [line];
  } else if (currentKey) {
    currentObjLines.push(line);
  }
}

if (currentKey) {
  const code = 'const obj = {\n' + currentObjLines.join('\n') + '\n};';
  try {
    new vm.Script(code);
  } catch (err) {
    console.log(`❌ Error in key [${currentKey}] starting at line ${currentKeyStart}: ${err.message}`);
  }
}
