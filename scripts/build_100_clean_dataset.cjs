const fs = require('fs');
const path = require('path');

// Let's create an exhaustive and clean data dictionary for ALL articles
// 1. All 10 Rigveda Mandalas (Mandala 1 to 10)
// 2. All 8 Rigveda Suktas & Mantras (Agni, Purusha, Nasadiya, Hiranyagarbha, Gayatri, Mahamrityunjaya, Vak, Samgathan)
// 3. All 15 Rigveda Granthas (Shakala, Bashkala, Aitareya Brahmana/Aranyaka/Upanishad, Kaushitaki Brahmana/Aranyaka/Upanishad, 4 Sutras, Vasistha Dharmasutra, Rig Pratishakhya, Sayana Bhashya)
// 4. All Yajurveda Granthas & Upanishads (Shatapatha, Taittiriya Brahmana/Aranyaka/Samhita, Isha, Brihadaranyaka, Katha, Taittiriya, Shvetashvatara, Shiva Sankalpa, Baudhayana Sulbasutra, Rudrabhisheka)
// 5. All Samaveda Granthas (Tandya Mahabrahmana, Chandogya, Kena)
// 6. All Atharvaveda Granthas (Gopatha, Mundaka, Mandukya, Prashna, Prithvi Sukta, Kaushika Sutra, Vaitana Shrautasutra)

console.log('Building clean master encyclopedia...');
