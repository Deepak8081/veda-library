// Comprehensive Knowledge Branches & Taxonomy Data
// 100% Aligned with Veda Library Specification & Document Structure: ALL BRANCHES (१२+ शाखाएँ)

export const KNOWLEDGE_BRANCHES = [
  {
    id: "vedic-knowledge",
    title: "Vedic Knowledge",
    hindiTitle: "वैदिक ज्ञान",
    subtitle: "The eternal wisdom of the Vedas and related literature",
    icon: "veda",
    subItems: ["Veda", "Vedanga", "Brahmana", "Aranyaka", "Upanishad", "Sutra"],
    cards: [
      {
        id: "veda",
        icon: "veda",
        title: "Veda",
        hindiTitle: "वेद",
        desc: "Rigveda • Yajurveda • Samaveda • Atharvaveda",
        sectionsCount: "4 Sections",
        badgeBg: "bg-amber-100/70",
        iconColor: "text-amber-700"
      },
      {
        id: "vedanga",
        icon: "vedanga",
        title: "Vedanga",
        hindiTitle: "वेदाङ्ग",
        desc: "Shiksha • Vyakarana • Chandas • Nirukta • Jyotisha • Kalpa",
        sectionsCount: "6 Sections",
        badgeBg: "bg-emerald-100/70",
        iconColor: "text-emerald-700"
      },
      {
        id: "brahmana",
        icon: "darshana",
        title: "Brahmana",
        hindiTitle: "ब्राह्मण ग्रंथ",
        desc: "Ritual explanations, liturgical injunctions and interpretations",
        sectionsCount: "14 Brahmanas",
        badgeBg: "bg-orange-100/70",
        iconColor: "text-orange-700"
      },
      {
        id: "aranyaka",
        icon: "dharma",
        title: "Aranyaka",
        hindiTitle: "आरण्यक",
        desc: "Forest texts, esoteric philosophy and contemplative knowledge",
        sectionsCount: "7 Aranyakas",
        badgeBg: "bg-stone-100",
        iconColor: "text-amber-900"
      },
      {
        id: "upanishad",
        icon: "upanishad",
        title: "Upanishad",
        hindiTitle: "उपनिषद",
        desc: "Philosophical wisdom, Brahmavidya and ultimate truth",
        sectionsCount: "10 Principal Texts",
        badgeBg: "bg-cyan-100/70",
        iconColor: "text-cyan-700"
      },
      {
        id: "sutra",
        icon: "samskara",
        title: "Sutra",
        hindiTitle: "सूत्र साहित्य",
        desc: "Shrauta, Grihya, Dharma & Shulba Sutras systematic codification",
        sectionsCount: "4 Sutra Classes",
        badgeBg: "bg-amber-100/70",
        iconColor: "text-amber-700"
      }
    ],
    relatedTags: ["Veda", "Mantra", "Agni", "Yajna", "Samskara", "Rishi", "Devata"]
  },
  {
    id: "shastra-darshana",
    title: "Shastra & Darshana",
    hindiTitle: "शास्त्र एवं दर्शन",
    subtitle: "The six orthodox schools of philosophy and classical treatises",
    icon: "darshana",
    subItems: ["Sankhya", "Yoga", "Nyaya", "Vaisheshika", "Mimamsa", "Vedanta"],
    cards: [
      {
        id: "sankhya",
        icon: "darshana",
        title: "Sankhya Darshana",
        hindiTitle: "सांख्य दर्शन",
        desc: "Prakriti-Purusha dualism founded by Sage Kapila",
        sectionsCount: "6 Adhyayas",
        badgeBg: "bg-indigo-100/70",
        iconColor: "text-indigo-700"
      },
      {
        id: "yoga",
        icon: "dharma",
        title: "Yoga Darshana",
        hindiTitle: "योग दर्शन",
        desc: "Patanjali Yogasutras, Ashtanga Yoga & Chitta-vritti Nirodha",
        sectionsCount: "4 Padas",
        badgeBg: "bg-emerald-100/70",
        iconColor: "text-emerald-700"
      },
      {
        id: "nyaya",
        icon: "upanishad",
        title: "Nyaya Darshana",
        hindiTitle: "न्याय दर्शन",
        desc: "Epistemology, logical analysis & Sage Gautama pramanas",
        sectionsCount: "5 Adhyayas",
        badgeBg: "bg-cyan-100/70",
        iconColor: "text-cyan-700"
      },
      {
        id: "vaisheshika",
        icon: "veda",
        title: "Vaisheshika Darshana",
        hindiTitle: "वैशेषिक दर्शन",
        desc: "Sage Kanada, 7 Padarthas, Atomic theory & Physics of existence",
        sectionsCount: "10 Adhyayas",
        badgeBg: "bg-blue-100/70",
        iconColor: "text-blue-700"
      },
      {
        id: "mimamsa",
        icon: "darshana",
        title: "Mimamsa Darshana",
        hindiTitle: "मीमांसा दर्शन",
        desc: "Sage Jaimini Vedic hermeneutics, Dharma & Ritual injunctions",
        sectionsCount: "12 Adhyayas",
        badgeBg: "bg-orange-100/70",
        iconColor: "text-orange-700"
      },
      {
        id: "vedanta",
        icon: "veda",
        title: "Vedanta Darshana",
        hindiTitle: "वेदांत दर्शन",
        desc: "Brahmasutras, Advaita, Vishishtadvaita & Dvaita traditions",
        sectionsCount: "4 Adhyayas",
        badgeBg: "bg-amber-100/70",
        iconColor: "text-amber-700"
      }
    ],
    relatedTags: ["Atman", "Brahman", "Moksha", "Samadhi", "Pramana", "Maya"]
  },
  {
    id: "itihasa-purana",
    title: "Itihasa & Purana",
    hindiTitle: "इतिहास एवं पुराण",
    subtitle: "Sacred epics, cosmic histories, and genealogies of divine avatars",
    icon: "veda",
    subItems: ["18 Mahapuranas", "Upapuranas", "Valmiki Ramayana", "Mahabharata", "Bhagavad Gita"],
    cards: [
      {
        id: "mahapuranas",
        icon: "veda",
        title: "18 Mahapuranas",
        hindiTitle: "१८ महापुराण",
        desc: "Vishnu, Bhagavata, Shiva, Skanda, Garuda & Markandeya Puranas",
        sectionsCount: "18 Puranas",
        badgeBg: "bg-indigo-100/70",
        iconColor: "text-indigo-700"
      },
      {
        id: "ramayana",
        icon: "dharma",
        title: "Valmiki Ramayana",
        hindiTitle: "वाल्मीकि रामायण",
        desc: "Adi Kavya: 7 Kandas, 24,000 Shlokas of Maryada Purushottama",
        sectionsCount: "7 Kandas",
        badgeBg: "bg-orange-100/70",
        iconColor: "text-orange-700"
      },
      {
        id: "mahabharata",
        icon: "darshana",
        title: "Mahabharata",
        hindiTitle: "महाभारत",
        desc: "18 Parvas, 100,000 Shlokas: Dharma, Artha, Kama, Moksha",
        sectionsCount: "18 Parvas",
        badgeBg: "bg-purple-100/70",
        iconColor: "text-purple-700"
      },
      {
        id: "gita",
        icon: "upanishad",
        title: "Bhagavad Gita",
        hindiTitle: "श्रीमद्भगवद्गीता",
        desc: "18 Chapters, 700 verses: Jnana, Karma, and Bhakti Yoga",
        sectionsCount: "18 Chapters",
        badgeBg: "bg-amber-100/70",
        iconColor: "text-amber-700"
      }
    ],
    relatedTags: ["Krishna", "Rama", "Pandavas", "Avatar", "Dharmayuddha", "Bhakti"]
  },
  {
    id: "dharma-jeevan",
    title: "Dharma & Jeevan",
    hindiTitle: "धर्म एवं जीवन",
    subtitle: "Dharmashastras, ethics, daily duties, and four Purusharthas",
    icon: "dharma",
    subItems: ["Manusmriti", "Yajnavalkya", "Niti Shastra", "Purushartha"],
    cards: [
      {
        id: "dharmashastra",
        icon: "dharma",
        title: "Dharmashastras",
        hindiTitle: "धर्मशास्त्र",
        desc: "Manu, Yajnavalkya, Parashara Smritis and ethical jurisprudence",
        sectionsCount: "12 Smritis",
        badgeBg: "bg-orange-100/70",
        iconColor: "text-orange-700"
      },
      {
        id: "nitishastra",
        icon: "darshana",
        title: "Niti Shastra",
        hindiTitle: "नीति शास्त्र",
        desc: "Chanakya Niti, Vidura Niti, Bhartrihari Niti Shatakam",
        sectionsCount: "4 Texts",
        badgeBg: "bg-stone-100",
        iconColor: "text-stone-800"
      },
      {
        id: "purushartha",
        icon: "dharma",
        title: "Chaturvidha Purushartha",
        hindiTitle: "चार पुरुषार्थ",
        desc: "Dharma, Artha, Kama, and Moksha as universal life goals",
        sectionsCount: "4 Pillars",
        badgeBg: "bg-amber-100/70",
        iconColor: "text-amber-700"
      }
    ],
    relatedTags: ["Ashrama", "Varna", "Sadachara", "Karma", "Kartavya"]
  },
  {
    id: "puja-anushthana",
    title: "Puja & Anushthana",
    hindiTitle: "पूजा एवं अनुष्ठान",
    subtitle: "Worship rituals, Shodashopachara, Abhisheka, and temple vidhi",
    icon: "puja",
    subItems: ["Rudrabhisheka", "Satyanarayan", "Navagraha", "Shodashopachara", "Aarti Vidhi"],
    cards: [
      {
        id: "rudrabhisheka",
        icon: "puja",
        title: "Rudrabhisheka",
        hindiTitle: "रुद्राभिषेक",
        desc: "Yajurvedic Sri Rudram recitation and Mahadeva sacred abhisheka",
        sectionsCount: "11 Anuvakas",
        badgeBg: "bg-rose-100/70",
        iconColor: "text-rose-700"
      },
      {
        id: "shodashopachara",
        icon: "samskara",
        title: "Shodashopachara Puja",
        hindiTitle: "षोडशोपचार पूजा",
        desc: "The 16 sacred steps of traditional Vedic deity invocation",
        sectionsCount: "16 Steps",
        badgeBg: "bg-emerald-100/70",
        iconColor: "text-emerald-700"
      },
      {
        id: "navagraha-puja",
        icon: "jyotisha",
        title: "Navagraha Puja & Shanti",
        hindiTitle: "नवग्रह शांति पूजा",
        desc: "Planetary propitiation, Samidha offerings, and protective mantras",
        sectionsCount: "9 Deities",
        badgeBg: "bg-amber-100/70",
        iconColor: "text-amber-800"
      }
    ],
    relatedTags: ["Shiva", "Vishnu", "Devi", "Ganesha", "Abhisheka", "Naivedya"]
  },
  {
    id: "yagya-sanskar",
    title: "Yagya & Samskara",
    hindiTitle: "यज्ञ एवं संस्कार",
    subtitle: "Sacred fire rituals, Agnihotra, Kunda geometry & 16 Life Samskaras",
    icon: "yagya",
    subItems: ["Agnihotra", "16 Samskaras", "Kunda Shastra", "Havishya", "Somayaga"],
    cards: [
      {
        id: "agnihotra-daily",
        icon: "yagya",
        title: "Daily Agnihotra",
        hindiTitle: "दैनिक अग्निहोत्र",
        desc: "Sunrise and sunset bio-energetic copper pyramid fire ritual",
        sectionsCount: "Daily Vidhi",
        badgeBg: "bg-amber-100/70",
        iconColor: "text-amber-700"
      },
      {
        id: "shodasha-samskara",
        icon: "samskara",
        title: "16 Vedic Samskaras",
        hindiTitle: "षोडश संस्कार",
        desc: "From Garbhadhana, Upanayana to Vivaha and Antyeshti rituals",
        sectionsCount: "16 Rites",
        badgeBg: "bg-teal-100/70",
        iconColor: "text-teal-700"
      },
      {
        id: "kunda-geometry",
        icon: "darshana",
        title: "Kunda Shastra & Geometry",
        hindiTitle: "कुण्ड निर्माण शास्त्र",
        desc: "Sulba Sutras geometry, shapes, measurements & orientation",
        sectionsCount: "8 Kunda Types",
        badgeBg: "bg-orange-100/70",
        iconColor: "text-orange-700"
      }
    ],
    relatedTags: ["Agnihotra", "Upanayana", "Vivaha", "Homa", "Sulba Sutra", "Kunda"]
  },
  {
    id: "mantra-stotra-branch",
    title: "Mantra & Stotra",
    hindiTitle: "मंत्र एवं स्तोत्र",
    subtitle: "Vedic suktas, kavachas, sahasranamas, and divine chants",
    icon: "mantra",
    subItems: ["Gayatri", "Mahamrityunjaya", "Purusha Sukta", "Sri Sukta", "Sahasranama"],
    cards: [
      {
        id: "gayatri",
        icon: "mantra",
        title: "Gayatri Mahamantra",
        hindiTitle: "गायत्री महामंत्र",
        desc: "Rigveda 3.62.10 solar illumination prayer to Savitur",
        sectionsCount: "1 Mantra",
        badgeBg: "bg-purple-100/70",
        iconColor: "text-purple-700"
      },
      {
        id: "mahamrityunjaya",
        icon: "puja",
        title: "Mahamrityunjaya Mantra",
        hindiTitle: "महामृत्युंजय मंत्र",
        desc: "Rigveda 7.59.12 Tryambakam Rudra immortality chant",
        sectionsCount: "1 Mantra",
        badgeBg: "bg-rose-100/70",
        iconColor: "text-rose-700"
      },
      {
        id: "sri-sukta-card",
        icon: "mantra",
        title: "Shri Suktam",
        hindiTitle: "श्री सूक्त",
        desc: "Rigveda parishishta hymn for prosperity, auspiciousness and Lakshmi",
        sectionsCount: "15 Verses",
        badgeBg: "bg-amber-100/70",
        iconColor: "text-amber-800"
      }
    ],
    relatedTags: ["Japa", "Chandas", "Rishi", "Bija Mantra", "Kavacha"]
  },
  {
    id: "devata-tradition",
    title: "Devata & Tradition",
    hindiTitle: "देवता एवं उपासना",
    subtitle: "Smarta Panchayatana, 33 Koti Devas, and iconography",
    icon: "devata",
    subItems: ["Shiva", "Vishnu", "Durga", "Ganesha", "Surya", "33 Vedic Devas"],
    cards: [
      {
        id: "panchayatana",
        icon: "devata",
        title: "Smarta Panchayatana",
        hindiTitle: "स्मार्त पंचायतन",
        desc: "Surya, Ganesha, Ambika, Shiva, and Vishnu mandala",
        sectionsCount: "5 Deities",
        badgeBg: "bg-emerald-100/70",
        iconColor: "text-emerald-800"
      },
      {
        id: "dvadasha-jyotirlinga-card",
        icon: "devata",
        title: "12 Jyotirlingas & Shakti Peethas",
        hindiTitle: "द्वादश ज्योतिर्लिंग व शक्तिपीठ",
        desc: "Sacred Shaiva and Shakta pilgrimage geography across Bharat",
        sectionsCount: "12 + 51 Peethas",
        badgeBg: "bg-rose-100/70",
        iconColor: "text-rose-700"
      }
    ],
    relatedTags: ["Ishta Devata", "Dhyana Shloka", "Murti", "Tattva"]
  },
  {
    id: "jyotisha-branch",
    title: "Jyotisha",
    hindiTitle: "ज्योतिष शास्त्र",
    subtitle: "Vedanga astronomy, 9 Grahas, 12 Rashis, 27 Nakshatras & Muhurta",
    icon: "jyotisha",
    subItems: ["Siddhanta", "Samhita", "Hora", "Kundali", "Nakshatras"],
    cards: [
      {
        id: "hora",
        icon: "jyotisha",
        title: "Hora Shastra",
        hindiTitle: "होरा शास्त्र",
        desc: "Brihat Parashara Hora Shastra, planetary combinations & dashas",
        sectionsCount: "97 Chapters",
        badgeBg: "bg-orange-100/70",
        iconColor: "text-amber-800"
      },
      {
        id: "panchanga-card",
        icon: "jyotisha",
        title: "Panchanga & Muhurta",
        hindiTitle: "पंचांग व मुहूर्त",
        desc: "Tithi, Vara, Nakshatra, Yoga, Karana time calculation science",
        sectionsCount: "5 Limbs",
        badgeBg: "bg-amber-100/70",
        iconColor: "text-amber-700"
      }
    ],
    relatedTags: ["Surya", "Chandra", "Graha", "Rashi", "Dasha", "Gochar"]
  },
  {
    id: "ayurveda-traditional",
    title: "Ayurveda & Traditional",
    hindiTitle: "आयुर्वेद एवं शास्त्र",
    subtitle: "Charaka, Sushruta, Tridosha health, Vastu, and allied sciences",
    icon: "traditional-knowledge",
    subItems: ["Charaka Samhita", "Sushruta Samhita", "Vastu Shastra", "Dhanurveda"],
    cards: [
      {
        id: "charaka",
        icon: "traditional-knowledge",
        title: "Charaka Samhita",
        hindiTitle: "चरक संहिता",
        desc: "Vata-Pitta-Kapha equilibrium, dietetics, and longevity",
        sectionsCount: "8 Sthanas",
        badgeBg: "bg-blue-100/70",
        iconColor: "text-blue-700"
      },
      {
        id: "vastu-card",
        icon: "vastu",
        title: "Vastu Shastra",
        hindiTitle: "वास्तु शास्त्र",
        desc: "Vastu Purusha Mandala, 8 cardinal directions, and sacred space design",
        sectionsCount: "Samarangan Sutradhar",
        badgeBg: "bg-amber-100/70",
        iconColor: "text-amber-900"
      }
    ],
    relatedTags: ["Tridosha", "Prakriti", "Rasayana", "Vastu", "Pancha Mahabhuta"]
  },
  {
    id: "sanskrit-knowledge",
    title: "Sanskrit Knowledge",
    hindiTitle: "संस्कृत एवं भाषा",
    subtitle: "Panini Ashtadhyayi, grammar, linguistics, and Vedic phonetics",
    icon: "veda",
    subItems: ["Ashtadhyayi", "Nirukta", "Amarakosha", "Chandas"],
    cards: [
      {
        id: "ashtadhyayi",
        icon: "veda",
        title: "Panini Ashtadhyayi",
        hindiTitle: "अष्टाध्यायी",
        desc: "Maheshwara Sutras, grammatical formulas, and morpho-syntax",
        sectionsCount: "8 Adhyayas",
        badgeBg: "bg-amber-100/70",
        iconColor: "text-amber-700"
      },
      {
        id: "nirukta-card",
        icon: "vedanga",
        title: "Yaska Nirukta",
        hindiTitle: "यास्क निरुक्त",
        desc: "Vedic etymology, root semantics, and Nighantu vocabulary",
        sectionsCount: "12 Adhyayas",
        badgeBg: "bg-emerald-100/70",
        iconColor: "text-emerald-700"
      }
    ],
    relatedTags: ["Dhatu", "Pratyaya", "Sandhi", "Samasa", "Vaidika Sanskrit"]
  },
  {
    id: "grantha-sangrahalaya",
    title: "Grantha Sangrahalaya",
    hindiTitle: "ग्रंथ संग्रहालय",
    subtitle: "Comprehensive digital repository of Vedic manuscripts and shastras",
    icon: "veda",
    subItems: ["Shruti", "Smriti", "Darshana", "Kavya", "Stotra"],
    cards: [
      {
        id: "shrutis",
        icon: "veda",
        title: "Shruti Collection",
        hindiTitle: "श्रुति संग्रह",
        desc: "4 Samhitas, 14 Brahmanas, Aranyakas, and Principal Upanishads",
        sectionsCount: "100+ Texts",
        badgeBg: "bg-amber-100/70",
        iconColor: "text-amber-700"
      },
      {
        id: "manuscripts-card",
        icon: "grantha",
        title: "Palm-leaf & Grantha Manuscripts",
        hindiTitle: "पाण्डुलिपि संग्रह",
        desc: "High-resolution digital folios of rare Sanskrit manuscripts",
        sectionsCount: "500+ Folios",
        badgeBg: "bg-yellow-100/70",
        iconColor: "text-yellow-800"
      }
    ],
    relatedTags: ["Grantha", "Manuscripts", "Editions", "Commentaries"]
  },
  {
    id: "research-documentation",
    title: "Research & Documentation",
    hindiTitle: "शोध एवं संदर्भ",
    subtitle: "Academic papers, critical editions, palm-leaf archives, and citations",
    icon: "upanishad",
    subItems: ["Critical Editions", "Manuscripts", "Translations", "Bibliography"],
    cards: [
      {
        id: "critical-editions",
        icon: "upanishad",
        title: "Critical Textual Editions",
        hindiTitle: "पाठालोचन व संस्करण",
        desc: "Comparative variant readings, Sayana commentaries, and translations",
        sectionsCount: "50+ Archives",
        badgeBg: "bg-indigo-100/70",
        iconColor: "text-indigo-700"
      },
      {
        id: "concordance-card",
        icon: "research",
        title: "Vedic Word Concordance",
        hindiTitle: "वैदिक पद-अनुक्रमणिका",
        desc: "Cross-referential concordance and root index of Vedic literature",
        sectionsCount: "16 Volumes",
        badgeBg: "bg-cyan-100/70",
        iconColor: "text-cyan-800"
      }
    ],
    relatedTags: ["Manuscript", "Sayana", "Shankara", "Ramanuja", "Citation"]
  }
];
