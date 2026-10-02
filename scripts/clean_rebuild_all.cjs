const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, '../src/data/vedicArticlesData.js');

// 1. Let's load the enriched definitions from enrich_all_rigveda and enrich_remaining_rigveda
const script1 = fs.readFileSync(path.join(__dirname, 'enrich_all_rigveda.cjs'), 'utf8');
const script2 = fs.readFileSync(path.join(__dirname, 'enrich_remaining_rigveda.cjs'), 'utf8');

// Evaluate the dictionaries
let enrichedDict = {};
const f1 = new Function('require', 'enrichedDict', script1.replace('const RIGVEDA_ENRICHED_ARTICLES =', 'enrichedDict.r1 =').replace(/fs\.writeFileSync[\s\S]*/, ''));
f1(require, enrichedDict);

const f2 = new Function('require', 'enrichedDict', script2.replace('const RIGVEDA_UPGRADES =', 'enrichedDict.r2 =').replace(/fs\.writeFileSync[\s\S]*/, ''));
f2(require, enrichedDict);

const allRigvedaEnriched = Object.assign({}, enrichedDict.r1, enrichedDict.r2);

console.log('Total Rigveda enriched keys available:', Object.keys(allRigvedaEnriched).length);

// Now let's extract all OTHER valid articles from the original file (Yajurveda, Samaveda, Atharvaveda, Suktas)
// We can parse the file into individual article objects by key.
const fileContent = fs.readFileSync(targetFilePath, 'utf8');
const lines = fileContent.split('\n');

const articleChunks = {};
let currentKey = null;
let currentLines = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const match = line.match(/^  "([a-z0-9-]+)":\s*\{/);
  if (match) {
    if (currentKey && currentLines.length > 0) {
      articleChunks[currentKey] = currentLines.join('\n');
    }
    currentKey = match[1];
    currentLines = [line];
  } else if (currentKey) {
    // Stop if we hit the final closing brace
    if (line.trim() === '};' || line.trim() === '}') {
      currentLines.push('  }');
      articleChunks[currentKey] = currentLines.join('\n');
      currentKey = null;
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }
}
if (currentKey && currentLines.length > 0) {
  articleChunks[currentKey] = currentLines.join('\n');
}

console.log('Extracted chunk keys:', Object.keys(articleChunks).length);

// Now let's build the master dictionary of ALL articles:
// 1. All 10 Rigveda Mandalas (mandala-1 to mandala-10) in exact order
// 2. All Rigveda Suktas (agnisukta, purusha-sukta, nasadiya-sukta, hiranyagarbha-sukta, gayatri-mantra, mahamrityunjaya-mantra, vak-sukta, samgathan-sukta)
// 3. All Rigveda Granthas (shakala-samhita, bashkala-samhita, aitareya-brahmana, kaushitaki-brahmana, aitareya-aranyaka, kaushitaki-aranyaka, aitareya-upanishad, kaushitaki-upanishad, ashvalayana-shrautasutra, shankhayana-shrautasutra, ashvalayana-grihyasutra, shankhayana-grihyasutra, vasistha-dharmasutra, rig-pratishakhya, sayana-bhashya)
// 4. All Yajurveda Granthas (shatapatha-brahmana, taittiriya-brahmana, taittiriya-aranyaka, taittiriya-samhita, isha-upanishad, brihadaranyaka-upanishad, katha-upanishad, taittiriya-upanishad, shvetashvatara-upanishad, shiva-sankalpa-sukta, baudhayana-sulbasutra, rudrabhisheka)
// 5. All Samaveda Granthas (tandya-mahabrahmana, chandogya-upanishad, kena-upanishad)
// 6. All Atharvaveda Granthas (gopatha-brahmana, mundaka-upanishad, mandukya-upanishad, prashna-upanishad, prithvi-sukta, kaushika-sutra, vaitana-shrautasutra)

// Write out the clean file
let outputCode = `// Comprehensive Vedic Articles and Grantha Encyclopedia\n// Authenticated according to Shastras, Sayana Bhashya, Vedic Heritage, and Academic Standards\n\nexport const COMPREHENSIVE_ARTICLES_DATA = {\n`;

const orderedKeys = [
  // Rigveda 10 Mandalas
  "mandala-1", "mandala-2", "mandala-3", "mandala-4", "mandala-5",
  "mandala-6", "mandala-7", "mandala-8", "mandala-9", "mandala-10",
  // Rigveda Core Suktas
  "agnisukta", "purusha-sukta", "nasadiya-sukta", "hiranyagarbha-sukta",
  "gayatri-mantra", "mahamrityunjaya-mantra", "vak-sukta", "samgathan-sukta",
  // Rigveda Granthas
  "shakala-samhita", "bashkala-samhita",
  "aitareya-brahmana", "kaushitaki-brahmana",
  "aitareya-aranyaka", "kaushitaki-aranyaka",
  "aitareya-upanishad", "kaushitaki-upanishad",
  "ashvalayana-shrautasutra", "shankhayana-shrautasutra",
  "ashvalayana-grihyasutra", "shankhayana-grihyasutra",
  "vasistha-dharmasutra", "rig-pratishakhya", "sayana-bhashya",
  // Yajurveda Granthas & Suktas
  "shatapatha-brahmana", "taittiriya-brahmana", "taittiriya-aranyaka",
  "taittiriya-samhita", "isha-upanishad", "brihadaranyaka-upanishad",
  "katha-upanishad", "taittiriya-upanishad", "shvetashvatara-upanishad",
  "shiva-sankalpa-sukta", "baudhayana-sulbasutra", "rudrabhisheka",
  // Samaveda Granthas
  "tandya-mahabrahmana", "chandogya-upanishad", "kena-upanishad",
  // Atharvaveda Granthas & Suktas
  "gopatha-brahmana", "mundaka-upanishad", "mandukya-upanishad",
  "prashna-upanishad", "prithvi-sukta", "kaushika-sutra", "vaitana-shrautasutra"
];

// Deduplicate orderedKeys
const uniqueKeys = [...new Set(orderedKeys)];

uniqueKeys.forEach((key, idx) => {
  outputCode += `  // ==========================================\n  // ${idx + 1}. [${key.toUpperCase()}]\n  // ==========================================\n`;
  if (allRigvedaEnriched[key]) {
    outputCode += `  "${key}": ${JSON.stringify(allRigvedaEnriched[key], null, 2)},\n\n`;
  } else if (articleChunks[key]) {
    // Ensure clean trailing comma
    let chunk = articleChunks[key].trim();
    if (!chunk.endsWith(',')) chunk += ',';
    outputCode += `  ${chunk}\n\n`;
  } else {
    console.log(`⚠️ Missing chunk for: ${key}`);
  }
});

// Remove trailing comma from last item and close
outputCode = outputCode.trim().replace(/,$/, '') + '\n};\n';

fs.writeFileSync(targetFilePath, outputCode, 'utf8');
console.log('🎉 Successfully generated clean, deduplicated, fully enriched articles dataset!');
