const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../src/data/vedicArticlesData.js'), 'utf8');

const regex = /^\s{2}"([a-z0-9-]+)":\s*\{/gm;
let match;
const allKeys = [];
while ((match = regex.exec(content)) !== null) {
  allKeys.push(match[1]);
}

console.log('Total keys in COMPREHENSIVE_ARTICLES_DATA:', allKeys.length);
console.log('Keys:', allKeys.join(', '));
