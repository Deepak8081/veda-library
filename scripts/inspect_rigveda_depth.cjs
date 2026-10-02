const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../src/data/vedicArticlesData.js'), 'utf8');

// List of all Rigveda articles:
const rigvedaSlugs = [
  "mandala-1", "mandala-2", "mandala-3", "mandala-4", "mandala-5",
  "mandala-6", "mandala-7", "mandala-8", "mandala-9", "mandala-10",
  "shakala-samhita", "bashkala-samhita",
  "aitareya-brahmana", "kaushitaki-brahmana",
  "aitareya-aranyaka", "kaushitaki-aranyaka",
  "aitareya-upanishad", "kaushitaki-upanishad",
  "ashvalayana-shrautasutra", "shankhayana-shrautasutra",
  "ashvalayana-grihyasutra", "shankhayana-grihyasutra",
  "vasistha-dharmasutra", "rig-pratishakhya", "sayana-bhashya",
  "agnisukta", "gayatri-mantra", "mahamrityunjaya-mantra",
  "purusha-sukta", "nasadiya-sukta", "hiranyagarbha-sukta",
  "vak-sukta", "samgathan-sukta"
];

console.log('=== RIGVEDA COMPLETE ARTICLE INVENTORY & DEPTH ===');
rigvedaSlugs.forEach((slug, idx) => {
  // Find where this slug is defined
  const regex = new RegExp(`"${slug}":\\s*\\{([\\s\\S]*?)\\n {2}\\}(?:,|$)`, 'm');
  const match = content.match(regex);
  if (!match) {
    console.log(`${idx+1}. ❌ MISSING: ${slug}`);
  } else {
    const raw = match[1];
    const titleMatch = raw.match(/hindiTitle:\s*["']([^"']+)["']/);
    const hindiTitle = titleMatch ? titleMatch[1] : '';
    const introMatch = raw.match(/intro:\s*["']([^"']+)["']/);
    const introLen = introMatch ? introMatch[1].length : 0;
    const mantraMatch = raw.match(/allMantras:\s*\[/);
    const historyMatch = raw.match(/historyResearch:\s*["']([\s\S]*?)["']\s*,/);
    const historyLen = historyMatch ? historyMatch[1].length : 0;
    const byteLen = raw.length;

    console.log(`${(idx+1).toString().padStart(2)}. [${slug.padEnd(25)}] : ${byteLen.toString().padStart(5)} bytes | Intro: ${introLen.toString().padStart(3)} chars | Hist: ${historyLen.toString().padStart(3)} chars | Mantras: ${mantraMatch ? 'MULTI' : 'SINGLE'}`);
  }
});
