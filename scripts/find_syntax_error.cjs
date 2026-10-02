const fs = require('fs');
const path = require('path');
const vm = require('vm');

const content = fs.readFileSync(path.join(__dirname, '../src/data/vedicArticlesData.js'), 'utf8');
const jsCode = content.replace('export const COMPREHENSIVE_ARTICLES_DATA =', 'const COMPREHENSIVE_ARTICLES_DATA =');

try {
  new vm.Script(jsCode);
  console.log('Valid JS code!');
} catch (err) {
  console.log('Error:', err.message);
  console.log('Stack:', err.stack);
}
