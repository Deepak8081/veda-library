/**
 * Unified Scripture Reader Registry & Lookup
 * Coordinates authentic modular scripture datasets across:
 * - Vedas (Rigveda, Yajurveda, Samaveda, Atharvaveda)
 * - Mukhya Upanishads (Isha, Mandukya, Katha, Kena, Prashna, Mundaka, Taittiriya, Chandogya, etc.)
 * - Itihasas (Bhagavad Gita, Valmiki Ramayana, Mahabharata)
 * - 18 Mahapuranas (Bhagavata, Vishnu, Shiva, Markandeya, Garuda, Brahma, Padma, etc.)
 * - Shad-Darshanas (Yoga, Vedanta, Samkhya, Nyaya, Vaisheshika, Mimamsa)
 */

import { VEDAS_SCRIPTURE_DATA } from "./vedasScriptureData.js";
import { UPANISHADS_SCRIPTURE_DATA } from "./upanishadsScriptureData.js";
import { ITIHASA_SCRIPTURE_DATA } from "./itihasaScriptureData.js";
import { PURANAS_SCRIPTURE_DATA } from "./puranasScriptureData.js";
import { DARSHANA_SCRIPTURE_DATA } from "./darshanaScriptureData.js";

export const ALL_SCRIPTURE_READER_LIBRARY = {
  ...VEDAS_SCRIPTURE_DATA,
  ...UPANISHADS_SCRIPTURE_DATA,
  ...ITIHASA_SCRIPTURE_DATA,
  ...PURANAS_SCRIPTURE_DATA,
  ...DARSHANA_SCRIPTURE_DATA,
};

/**
 * Robust scripture data resolver
 * Resolves slug matching variations e.g. "purana/vishnu-purana", "vishnu-purana", "shukla-yajurveda"
 */
export function getScriptureReaderData(subjectSlug = "") {
  if (!subjectSlug) return null;

  const cleanSlug = subjectSlug.toLowerCase().trim();
  const directMatch = ALL_SCRIPTURE_READER_LIBRARY[cleanSlug];
  if (directMatch) return directMatch;

  // Check without category prefix (e.g. "purana/vishnu-purana" -> "vishnu-purana")
  if (cleanSlug.includes("/")) {
    const afterSlash = cleanSlug.split("/").pop();
    if (ALL_SCRIPTURE_READER_LIBRARY[afterSlash]) {
      return ALL_SCRIPTURE_READER_LIBRARY[afterSlash];
    }
  }

  // Check with upanishad suffix variants
  if (!cleanSlug.endsWith("-upanishad")) {
    const withUpanishad = `${cleanSlug}-upanishad`;
    if (ALL_SCRIPTURE_READER_LIBRARY[withUpanishad]) {
      return ALL_SCRIPTURE_READER_LIBRARY[withUpanishad];
    }
  }

  // Check with purana suffix variants
  if (!cleanSlug.endsWith("-purana")) {
    const withPurana = `${cleanSlug}-purana`;
    if (ALL_SCRIPTURE_READER_LIBRARY[withPurana]) {
      return ALL_SCRIPTURE_READER_LIBRARY[withPurana];
    }
  }

  return null;
}

export {
  VEDAS_SCRIPTURE_DATA,
  UPANISHADS_SCRIPTURE_DATA,
  ITIHASA_SCRIPTURE_DATA,
  PURANAS_SCRIPTURE_DATA,
  DARSHANA_SCRIPTURE_DATA,
};
