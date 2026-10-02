const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../src/data/vedicArticlesData.js'), 'utf8');
const lines = content.split('\n');

lines.forEach((line, i) => {
  const match = line.match(/^  "([a-z0-9-]+)":\s*\{/);
  if (match) {
    console.log(`${(i + 1).toString().padStart(5)}: [${match[1]}]`);
  }
});
