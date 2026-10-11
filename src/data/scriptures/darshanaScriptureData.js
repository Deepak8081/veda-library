/**
 * Authentic Shad-Darshanas Scripture Reader Dataset
 * Sourced from:
 * - Patanjali Yoga Sutras (with Vyasa Bhashya & Vachaspati Mishra Tatva-Vaisharadi)
 * - Badarayana Brahma Sutras (with Adi Shankaracharya Shariraka Bhashya)
 * - Samkhya Karika of Ishvarakrishna & Kapila Samkhya Pravachana Sutras
 * - Gautama Nyaya Sutras (with Vatsyayana Bhashya)
 * - Kanada Vaisheshika Sutras (with Prashastapada Bhashya)
 * - Jaimini Mimamsa Sutras (with Shabara Bhashya & Kumarila Bhatta Varttika)
 * Complete with authentic Devanagari Sanskrit, IAST Roman transliteration,
 * Hindi and English translations, and detailed Shastric commentary.
 */

export const DARSHANA_SCRIPTURE_DATA = {
  yoga: {
    label: "पातञ्जल योगसूत्र (योग दर्शन • महर्षि पतञ्जलि)",
    sourceTotal: "४ पाद • १९५ सूत्र (समाधि, साधन, विभूति, कैवल्य)",
    editionNote:
      "महर्षि पतञ्जलि प्रणीत • महर्षि वेदव्यास भाष्य, वाचस्पति मिश्र तत्त्ववैशारदी एवं विज्ञानभिक्षु योगवार्तिक • प्रामाणिक मूल सूत्र पाठ",
    chapters: [
      {
        id: "ys-samadhi-pada",
        title: "प्रथम पाद • समाधि पाद (चित्तवृत्ति-निरोध, अभ्यास-वैराग्य, ईश्वर-प्रणिधान एवं समाधि)",
        items: [
          {
            number: 1,
            devanagari: "ॐ अथ योगानुशासनम्॥१॥",
            transliteration: "oṃ atha yogānuśāsanam || 1 ||",
            hindi:
              "अब (साधना के लिए उत्सुक जिज्ञासु के प्रति) योग का प्रामाणिक शास्त्रीय अनुशासन (उपदेश) प्रारंभ किया जाता है।",
            english:
              "Now, therefore, begins the instruction and sacred discipline of Yoga.",
            commentary:
              "योगसूत्र का मंगलाचरण। 'अथ' शब्द मंगल, अधिकार और अनंतरता (चित्त शुद्धि के उपरांत उपदेश) का सूचक है; 'अनुशासनम्' का अर्थ पूर्व आचार्यों (हिरण्यगर्भ आदि) की सनातन परंपरा का प्रामाणिक अनुगमन है।",
          },
          {
            number: 2,
            devanagari: "योगश्चित्तवृत्तिनिरोधः॥२॥",
            transliteration: "yogaś citta-vṛtti-nirodhaḥ || 2 ||",
            hindi:
              "चित्त (मन, बुद्धि, अहंकार) की समस्त वृत्तियों (चंचल विचार-तरंगों) का सर्वथा निरोध (शांत होना) ही 'योग' है।",
            english:
              "Yoga is the complete cessation and stilling of the fluctuations and modifications of the mind-stuff (chitta).",
            commentary:
              "योग दर्शन का केंद्रीय परिभाषा-सूत्र। चित्त स्वभावतः त्रिगुणात्मक और बहिर्मुख है; जब अभ्यास और वैराग्य से उसकी वृत्तियाँ शांत हो जाती हैं, तब एकाग्र और निरुद्ध अवस्था में समाधि का उदय होता है।",
          },
          {
            number: 3,
            devanagari: "तदा द्रष्टुः स्वरूपेऽवस्थानम्॥३॥",
            transliteration: "tadā draṣṭuḥ svarūpe 'vasthānam || 3 ||",
            hindi:
              "उस समय (चित्तवृत्तियों के शांत हो जाने पर) द्रष्टा (जीवात्मा/पुरुष) अपने वास्तविक शुद्ध, चैतन्य स्वरूप में प्रतिष्ठित हो जाता है।",
            english:
              "Then the Seer (the pure Self / Purusha) abides firmly established in his own essential transcendent nature.",
            commentary:
              "कैवल्य और आत्म-साक्षात्कार का लक्षण: आत्मा अविद्या-जन्य उपाधियों से मुक्त होकर अपने कूटस्थ, असंग, आनंदमय स्वरूप में अवस्थित हो जाती है।",
          },
          {
            number: 4,
            devanagari: "वृत्तिसारूप्यमितरत्र॥४॥",
            transliteration: "vṛtti-sārūpyam itaratra || 4 ||",
            hindi:
              "अन्य अवस्थाओं में (जब वृत्तियाँ शांत नहीं होतीं) द्रष्टा चित्तवृत्तियों के समान रूप वाला प्रतीत होता है (मन के सुख-दुःख को अपना मान लेता है)।",
            english:
              "At other times, the Seer appears to identify and become confluent with the modifications of the mind.",
            commentary:
              "संसार और बंधन का मूल कारण: चित्त की वृत्तियों (सुख, दुःख, क्रोध, भय) के साथ पुरुष का अज्ञानवश तादात्म्य स्थापित कर लेना।",
          },
          {
            number: 5,
            devanagari: "वृत्तयः पञ्चतय्यः क्लिष्टाक्लिष्टाः॥५॥",
            transliteration: "vṛttayaḥ pañcatayyaḥ kliṣṭākliṣṭāḥ || 5 ||",
            hindi:
              "चित्त की वृत्तियाँ पाँच प्रकार की होती हैं, जो क्लिष्ट (बंधनकारी व क्लेश-युक्त) और अक्लिष्ट (मुक्ति-साधक व विवेक-युक्त) दो श्रेणियों में बँटी हैं।",
            english:
              "The modifications of the mind are fivefold; they are either afflictive (producing bondage) or non-afflictive (leading towards liberation).",
            commentary:
              "क्लिष्ट वृत्तियाँ राग-द्वेष और अविद्या को बढ़ाती हैं, जबकि अक्लिष्ट वृत्तियाँ विवेकख्याति और तत्वज्ञान की ओर अग्रसर करती हैं।",
          },
          {
            number: 6,
            devanagari: "प्रमाणविपर्ययविकल्पनिद्रास्मृतयः॥६॥",
            transliteration: "pramāṇa-viparyaya-vikalpa-nidrā-smṛtayaḥ || 6 ||",
            hindi:
              "वे पाँच वृत्तियाँ हैं: प्रमाण (यथार्थ ज्ञान), विपर्यय (मिथ्या ज्ञान), विकल्प (शब्द-कल्पना), निद्रा (सुषुप्ति), और स्मृति (स्मरण)।",
            english:
              "These five modifications are: valid cognition (pramana), error (viparyaya), conceptual imagination (vikalpa), deep sleep (nidra), and memory (smriti).",
            commentary:
              "मानव चेतना की समस्त मानसिक क्रियाएं इन पाँच वृत्तियों के अंतर्गत समाहित हैं।",
          },
          {
            number: 12,
            devanagari: "अभ्यासवैराग्याभ्यां तन्निरोधः॥१२॥",
            transliteration: "abhyāsa-vairāgyābhyāṃ tan-nirodhaḥ || 12 ||",
            hindi:
              "उन पाँचों चित्तवृत्तियों का निरोध 'अभ्यास' (सतत यत्न) और 'वैराग्य' (अनासक्ति) के द्वारा होता है।",
            english:
              "The cessation and stilling of those mental modifications is accomplished through persistent practice (abhyasa) and non-attachment (vairagya).",
            commentary:
              "चित्त रूपी नदी दोनों ओर बहती है—कल्याण की ओर भी और पाप/संसार की ओर भी। वैराग्य से विषय-प्रवाह रुकता है और अभ्यास से विवेक-प्रवाह खुलता है (व्यास भाष्य)। भगवद्गीता (६.३५) में भी भगवान श्रीकृष्ण ने यही उपाय कहा है।",
          },
          {
            number: 13,
            devanagari: "तत्र स्थितौ यत्नोऽभ्यासः॥१३॥",
            transliteration: "tatra sthitau yatno 'bhyāsaḥ || 13 ||",
            hindi:
              "चित्त को प्रशांत, वृत्तिक्षोभ-रहित स्थिति में स्थिर रखने के लिए किया जाने वाला निरंतर उत्साहपूर्वक यत्न ही 'अभ्यास' है।",
            english:
              "Practice (abhyasa) is the steadfast effort to maintain the mind in its tranquil, unperturbed state of stillness.",
            commentary:
              "मन को बार-बार विषयों से खींचकर आत्म-स्वरूप में स्थिर करने का निरंतर प्रयत्न ही अभ्यास है।",
          },
          {
            number: 14,
            devanagari: "स तु दीर्घकालनैरन्तर्यसत्कारासेवितो दृढभूमिः॥१४॥",
            transliteration:
              "sa tu dīrgha-kāla-nairantarya-satkārāsevito dṛḍha-bhūmiḥ || 14 ||",
            hindi:
              "वह अभ्यास जब दीर्घकाल तक, बिना किसी नागा के (निरंतर), और परम श्रद्धा-सत्कार पूर्वक किया जाता है, तब वह दृढ़ स्थिति (अटल नींव) वाला होता है।",
            english:
              "That practice becomes firmly grounded only when cultivated for a long time, without interruption, and with reverent devotion.",
            commentary:
              "साधना की सफलता के तीन सुनहरे नियम: दीर्घकाल, नैरन्तर्य (अनवरत निरंतरता), और सत्कार (श्रद्धा, तप और उत्साह)।",
          },
          {
            number: 23,
            devanagari: "ईश्वरप्रणिधानाद्वा॥२३॥",
            transliteration: "īśvara-praṇidhānād vā || 23 ||",
            hindi:
              "अथवा ईश्वर के प्रति अनन्य भक्ति और पूर्ण आत्म-समर्पण (प्रणिधान) से भी समाधि की शीघ्र सिद्धि हो जाती है।",
            english:
              "Or samadhi is swiftly attained through profound devotion and complete surrender to the Supreme Lord (Ishvara).",
            commentary:
              "योग दर्शन में भक्तियोग का समावेश। ईश्वर-कृपा से साधक के समस्त विघ्न दूर होते हैं और समाधि सहज हो जाती है।",
          },
          {
            number: 24,
            devanagari:
              "क्लेशकर्मविपाकाशयैरपरामृष्टः पुरुषविशेष ईश्वरः॥२४॥",
            transliteration:
              "kleśa-karma-vipākāśayair aparāmṛṣṭaḥ puruṣa-viśeṣa īśvaraḥ || 24 ||",
            hindi:
              "अविद्या आदि क्लेशों, शुभाशुभ कर्मों, कर्मफलों (विपाक) और वासनाओं/संस्कारों (आशय) से सर्वथा अछूता रहने वाला नित्य-मुक्त पुरुषविशेष ही 'ईश्वर' है।",
            english:
              "Ishvara is a distinct, supreme Consciousness (Purusha-vishesha), untouched by afflictions, karmic actions, their fruits, or latent impressions.",
            commentary:
              "योग दर्शन में ईश्वर का शास्त्रीय लक्षण। वह सृष्टि का प्रेरक और योगियों का परम आदर्श है, जो कभी माया या बंधन के अधीन नहीं होता।",
          },
          {
            number: 27,
            devanagari: "तस्य वाचकः प्रणवः॥२७॥",
            transliteration: "tasya vācakaḥ praṇavaḥ || 27 ||",
            hindi: "उस परमेश्वर का वाचक (नाम/ध्वनि-प्रतीक) 'प्रणव' (ॐकार) है।",
            english:
              "His expressive symbol and sacred designator is the sacred syllable Pranava (Om).",
            commentary:
              "ॐकार और ईश्वर का संबंध वाच्य-वाचक भाव है। समस्त वैदिक मन्त्रों का मूल बीज ॐकार ही है।",
          },
          {
            number: 28,
            devanagari: "तज्जपस्तदर्थभावनम्॥२८॥",
            transliteration: "taj-japas tad-artha-bhāvanam || 28 ||",
            hindi:
              "उस ॐकार का निरंतर एकाग्र जप करना और उसके अर्थ (परमेश्वर के अनंत स्वरूप) का आंतरिक ध्यान व भावना करनी चाहिए।",
            english:
              "The constant repetition of that sacred syllable Om and deep meditation upon its profound divine meaning should be cultivated.",
            commentary:
              "केवल तोते की भांति रटना नहीं, अपितु जप के साथ-साथ भगवान के स्वरूप में मन को लीन करना ही 'तदर्थभावनम्' है।",
          },
          {
            number: 33,
            devanagari:
              "मैत्रीकरुणामुदितोपेक्षाणां सुखदुःखपुण्यापुण्यविषयाणां भावनातश्चित्तप्रसादनम्॥३३॥",
            transliteration:
              "maitrī-karuṇā-muditopekṣāṇāṃ sukha-duḥkha-puṇyāpuṇya-viṣayāṇāṃ bhāvanātaś citta-prasādanam || 33 ||",
            hindi:
              "सुखी जनों के प्रति मित्रता (मैत्री), दुःखियों के प्रति दया (करुणा), पुण्यात्माओं के प्रति प्रसन्नता (मुदिता), और पापियों के प्रति उपेक्षा (उदासीनता) की भावना रखने से चित्त निर्मल और परम शांत हो जाता है।",
            english:
              "By cultivating attitudes of friendliness toward the happy, compassion for the sorrowful, delight in the virtuous, and neutral equanimity toward the non-virtuous, the mind attains serene clarity and purification.",
            commentary:
              "चित्त-प्रसादन का सार्वभौमिक मनोवैज्ञानिक सूत्र। ईर्ष्या, घृणा और द्वेष को मिटाकर अंतःकरण को समाधि के योग्य बनाने का सर्वोत्तम साधन।",
          },
          {
            number: 51,
            devanagari: "तस्यापि निरोधे सर्वनिरोधान्निर्बीजः समाधिः॥५१॥",
            transliteration:
              "tasyāpi nirodhe sarva-nirodhān nirbījaḥ samādhiḥ || 51 ||",
            hindi:
              "उस ऋतम्भरा प्रज्ञा के संस्कारों का भी निरोध हो जाने पर, समस्त चित्तवृत्तियों के शांत होने से 'निर्बीज समाधि' सिद्ध होती है।",
            english:
              "When even those subtlest impressions are stilled, through the cessation of all fluctuations, the seedless samadhi (nirbija samadhi) is attained.",
            commentary:
              "समाधि पाद का अंतिम सूत्र। निर्बीज समाधि में जन्म-मरण के बीज (संस्कार) सदा के लिए दग्ध हो जाते हैं और कैवल्य की प्राप्ति होती है।",
          },
        ],
      },
      {
        id: "ys-sadhana-pada",
        title: "द्वितीय पाद • साधन पाद (क्रियायोग, पञ्चक्लेश एवं पूर्ण अष्टाङ्ग योग)",
        items: [
          {
            number: 1,
            devanagari: "ॐ तपःस्वाध्यायेश्वरप्रणिधानानि क्रियायोगः॥१॥",
            transliteration: "oṃ tapaḥ-svādhyāyeśvara-praṇidhānāni kriyā-yogaḥ || 1 ||",
            hindi:
              "तप (इन्द्रिय-संयम), स्वाध्याय (मोक्ष-शास्त्रों का अध्ययन व ॐ जप), और ईश्वरप्रणिधान (कर्मों का समर्पण)—ये तीनों मिलकर 'क्रियायोग' कहलाते हैं।",
            english:
              "Austerity (tapas), self-study and repetition of sacred mantras (svadhyaya), and devotion to God (Ishvara-pranidhana) constitute Kriya Yoga.",
            commentary:
              "साधन पाद का प्रथम सूत्र। मध्यम कोटि के साधकों के लिए क्रियायोग चित्त-शुद्धि का प्रथम सोपान है।",
          },
          {
            number: 2,
            devanagari: "समाधिभावनार्थः क्लेशतनूकरणार्थश्च॥२॥",
            transliteration: "samādhi-bhāvanārthaḥ kleśa-tanū-karaṇārthaś ca || 2 ||",
            hindi:
              "यह क्रियायोग समाधि की भावना को पुष्ट करने के लिए और अविद्या आदि क्लेशों को क्षीण (दुर्बल) करने के लिए किया जाता है।",
            english:
              "That Kriya Yoga is practiced for bringing about samadhi and for attenuating the afflictions (kleshas).",
            commentary:
              "क्रियायोग का दोहरा फल: क्लेशों की शक्ति समाप्त करना और समाधि का मार्ग प्रशस्त करना।",
          },
          {
            number: 3,
            devanagari: "अविद्यास्मितारागद्वेषाभिनिवेशाः क्लेशाः॥३॥",
            transliteration:
              "avidyā-smitā-rāga-dveṣābhiniveśāḥ kleśāḥ || 3 ||",
            hindi:
              "अविद्या (अज्ञान), अस्मिता (अहंकार), राग (आसक्ति), द्वेष (क्रोध/घृणा), और अभिनिवेश (मृत्यु का भय)—ये पाँच 'क्लेश' हैं।",
            english:
              "Ignorance (avidya), egoism (asmita), attachment (raga), aversion (dvesha), and clinging to bodily life / fear of death (abhinivesha) are the five afflictions.",
            commentary:
              "पाँच क्लेश ही समस्त संचित कर्मों और जन्म-मरण के दुःखों की जड़ हैं। अविद्या इनमें मूल कारण है।",
          },
          {
            number: 28,
            devanagari:
              "योगाङ्गानुष्ठानादशुद्धिक्षये ज्ञानदीप्तिरा विवेकख्यातेः॥२८॥",
            transliteration:
              "yogāṅgānuṣṭhānād aśuddhi-kṣaye jñāna-dīptir ā viveka-khyāteḥ || 28 ||",
            hindi:
              "योग के आठ अंगों का निरंतर अनुष्ठान करने से अंतःकरण की अशुद्धि का क्षय होता है और ज्ञान का प्रकाश विवेकख्याति (प्रकृति-पुरुष के पृथक बोध) तक प्रज्वलित हो जाता है।",
            english:
              "Through the steadfast practice of the limbs of Yoga, as spiritual impurities dwindle away, the radiance of wisdom unfolds until discriminating discernment (viveka-khyati) is attained.",
            commentary:
              "अष्टांग योग की अनिवार्यता। अशुद्धि का नाश होते ही ज्ञान स्वतः प्रकाशित हो उठता है।",
          },
          {
            number: 29,
            devanagari:
              "यमनियमासनप्राणायामप्रत्याहारधारणाध्यानसमाधयोऽष्टावङ्गानि॥२९॥",
            transliteration:
              "yama-niyamāsana-prāṇāyāma-pratyāhāra-dhāraṇā-dhyāna-samādhayo 'ṣṭāv aṅgāni || 29 ||",
            hindi:
              "यम, नियम, आसन, प्राणायाम, प्रत्याहार, धारणा, ध्यान और समाधि—ये योग के आठ प्रमुख अंग हैं।",
            english:
              "Restraints (Yama), observances (Niyama), posture (Asana), breath-control (Pranayama), sense-withdrawal (Pratyahara), concentration (Dharana), meditation (Dhyana), and absorption (Samadhi) are the eight limbs of Yoga.",
            commentary:
              "सनातन अष्टांग योग का महासूत्र। प्रथम पाँच बहिरंग साधन हैं, और अंतिम तीन अंतरंग साधन हैं।",
          },
          {
            number: 30,
            devanagari:
              "अहिंसासत्यास्तेयब्रह्मचर्यापरिग्रहा यमाः॥३०॥",
            transliteration:
              "ahiṃsā-satyāsteya-brahmacaryāparigrahā yamāḥ || 30 ||",
            hindi:
              "अहिंसा, सत्य, अस्तेय (चोरी न करना), ब्रह्मचर्य (इन्द्रिय-संयम), और अपरिग्रह (अनावश्यक संग्रह न करना)—ये पाँच 'यम' हैं।",
            english:
              "Non-violence (Ahimsa), Truthfulness (Satya), Non-stealing (Asteya), Continence/Divine conduct (Brahmacharya), and Non-possessiveness (Aparigraha) are the Yamas (restraints).",
            commentary:
              "सामाजिक और नैतिक सदाचार की आधारशिला। बिना यमों की शुद्धि के आध्यात्मिक प्रगति असंभव है।",
          },
          {
            number: 31,
            devanagari:
              "एते जातिदेशकालसमयानवच्छिन्नाः सार्वभौमा महाव्रतम्॥३१॥",
            transliteration:
              "ete jāti-deśa-kāla-samayānavacchinnāḥ sārvabhaumā mahā-vratam || 31 ||",
            hindi:
              "ये पाँचों यम किसी जाति, देश, काल अथवा परिस्थिति की सीमाओं से बंधे नहीं हैं; ये सभी के लिए सर्वत्र और सर्वदा अनिवार्य 'सार्वभौम महाव्रत' हैं।",
            english:
              "These restraints, unrestricted by caste, place, time, or circumstance, constitute the Universal Great Vow (Sarvabhauma Mahavrata).",
            commentary:
              "अहिंसा आदि यमों का सार्वभौमिक महत्व। कोई भी बहाना बनाकर किसी भी अवस्था में हिंसा या असत्य की अनुमति योग में नहीं है।",
          },
          {
            number: 32,
            devanagari:
              "शौचसन्तोषतपःस्वाध्यायेश्वरप्रणिधानानि नियमाः॥३२॥",
            transliteration:
              "śauca-santoṣa-tapaḥ-svādhyāyeśvara-praṇidhānāni niyamāḥ || 32 ||",
            hindi:
              "शौच (बाह्य व आंतरिक पवित्रता), संतोष (प्रसन्नता), तप (द्वन्द्व-सहन), स्वाध्याय (आत्म-अध्ययन व मन्त्र-जप), और ईश्वरप्रणिधान (ईश्वर-समर्पण)—ये पाँच 'नियम' हैं।",
            english:
              "Purity (Shaucha), Contentment (Santosha), Austerity (Tapas), Self-study (Svadhyaya), and Devotional surrender to God (Ishvara-pranidhana) are the Niyamas (observances).",
            commentary:
              "व्यक्तिगत साधना और आंतरिक अनुशासन के पाँच नियम।",
          },
          {
            number: 46,
            devanagari: "स्थिरसुखमासनम्॥४६॥",
            transliteration: "sthira-sukham āsanam || 46 ||",
            hindi:
              "जो स्थिर हो और सुखदायक हो (जिसमें बिना हिले-डुले लंबे समय तक आनंदपूर्वक बैठा जा सके), वही 'आसन' है।",
            english:
              "Posture (Asana) should be steady and comfortable.",
            commentary:
              "आसन की शास्त्रीय परिभाषा। शरीर का अकड़ना या कष्ट पाना आसन नहीं है; स्थिरता और सुख की सह-स्थिति ही आसन की सिद्धि है।",
          },
          {
            number: 47,
            devanagari: "प्रयत्नशैथिल्यानन्तसमापत्तिभ्याम्॥४७॥",
            transliteration:
              "prayatna-śaithilyānanta-samāpattibhyām || 47 ||",
            hindi:
              "शरीर के स्वाभाविक तनाव व प्रयत्न की शिथिलता (सहज विश्राम) और अनंत परमात्मा में चित्त की तल्लीनता से आसन सिद्ध होता है।",
            english:
              "Posture is mastered by the relaxation of conscious effort and by meditating upon the Infinite.",
            commentary:
              "आसन की सिद्धि का गुप्त रहस्य: तनाव-मुक्ति और अनंत में ध्यान।",
          },
          {
            number: 49,
            devanagari:
              "तस्मिन् सति श्वासप्रश्वासयोर्गतिविच्छेदः प्राणायामः॥४९॥",
            transliteration:
              "tasmin sati śvāsa-praśvāsayor gati-vicchedaḥ prāṇāyāmaḥ || 49 ||",
            hindi:
              "आसन सिद्ध हो जाने पर श्वास (भीतर वायु लेना) और प्रश्वास (बाहर वायु छोड़ना) की स्वाभाविक गति का रुक जाना (नियमन) ही 'प्राणायाम' है।",
            english:
              "That posture being firmly established, the regulation and stilling of the movement of inhalation and exhalation is Pranayama.",
            commentary:
              "प्राणायाम प्राण-शक्ति का विस्तार और नियंत्रण है। इससे ज्ञान पर पड़ा अविद्या का पर्दा छिन्न-भिन्न हो जाता है।",
          },
          {
            number: 54,
            devanagari:
              "स्वविषयासम्प्रयोगे चित्तस्य स्वरूपानुकार इवेन्द्रियाणां प्रत्याहारः॥५४॥",
            transliteration:
              "sva-viṣayāsamprayoge cittasya svarūpānukāra ivendriyāṇāṃ pratyāhāraḥ || 54 ||",
            hindi:
              "इन्द्रियों का अपने बाह्य विषयों से संबंध विच्छेद हो जाने पर चित्त के अंतर्मुख स्वरूप का अनुकरण करना ही 'प्रत्याहार' है।",
            english:
              "When the senses withdraw from contact with their external objects and conform, as it were, to the intrinsic nature of the mind, that is Pratyahara.",
            commentary:
              "जैसे रानी मधुमक्खी के रुकने पर समस्त मधुमक्खियाँ छत्ते में लौट आती हैं, वैसे ही चित्त के अंतर्मुख होने पर समस्त इन्द्रियाँ शांत हो जाती हैं।",
          },
        ],
      },
      {
        id: "ys-vibhuti-pada",
        title: "तृतीय पाद • विभूति पाद (अंतरंग योग: धारणा, ध्यान, समाधि, संयम एवं सिद्धियाँ)",
        items: [
          {
            number: 1,
            devanagari: "देशबन्धश्चित्तस्य धारणा॥१॥",
            transliteration: "deśa-bandhaś cittasya dhāraṇā || 1 ||",
            hindi:
              "चित्त को किसी एक निश्चित स्थान (हृदय चक्र, भ्रूमध्य, नाभि, या इष्टदेव की मूर्ति) पर बांध देना 'धारणा' है।",
            english:
              "Dharana (concentration) is the binding and fixing of the mind to a single focal point or region.",
            commentary:
              "अंतरंग योग का प्रथम चरण। चित्त को भटकने से रोककर एक लक्ष्य पर टिकाना।",
          },
          {
            number: 2,
            devanagari: "तत्र प्रत्ययैकतानता ध्यानम्॥२॥",
            transliteration: "tatra pratyayaikatānatā dhyānam || 2 ||",
            hindi:
              "उस धारणा वाले स्थान पर ध्येय वस्तु के ज्ञान-प्रवाह की तेल की अटूट धार के समान एकरस निरंतरता ही 'ध्यान' है।",
            english:
              "Dhyana (meditation) is the unbroken, uninterrupted flow of cognition towards that same single object.",
            commentary:
              "धारणा की परिपक्वता ही ध्यान है, जहाँ अन्य किसी विचार का व्यवधान नहीं रहता।",
          },
          {
            number: 3,
            devanagari: "तदेवार्थमात्रनिर्भासं स्वरूपशून्यमिव समाधिः॥३॥",
            transliteration:
              "tad evārtha-mātra-nirbhāsaṃ svarūpa-śūnyam iva samādhiḥ || 3 ||",
            hindi:
              "जब वही ध्यान केवल ध्येय वस्तु के स्वरूप को ही प्रकाशित करे और ध्याता का अपना स्वतंत्र अस्तित्व शून्य सा प्रतीत हो, तब वह 'समाधि' कहलाती है।",
            english:
              "When that meditation shines forth with the object alone, as if devoid of its own separate form, it is Samadhi (absorption).",
            commentary:
              "ज्ञाता, ज्ञान और ज्ञेय का भेद मिटकर केवल ध्येय मात्र का प्रकाश रह जाना समाधि है।",
          },
          {
            number: 4,
            devanagari: "त्रयमेकत्र संयमः॥४॥",
            transliteration: "trayam ekatra saṃyamaḥ || 4 ||",
            hindi:
              "धारणा, ध्यान और समाधि—इन तीनों का किसी एक ही विषय पर एक साथ घटित होना 'संयम' कहलाता है।",
            english:
              "The three practiced together upon a single object constitute Samyama.",
            commentary:
              "संयम ही योग में अलौकिक शक्तियों और परम प्रज्ञा की प्राप्ति का गुप्त अस्त्र है।",
          },
        ],
      },
      {
        id: "ys-kaivalya-pada",
        title: "चतुर्थ पाद • कैवल्य पाद (चित्त-मुक्ति, धर्ममेघ समाधि एवं परम कैवल्य)",
        items: [
          {
            number: 34,
            devanagari:
              "पुरुषार्थशून्यानां गुणानां प्रतिप्रसवः कैवल्यं स्वरूपप्रतिष्ठा वा चितिशक्तिरिति॥३४॥",
            transliteration:
              "puruṣārtha-śūnyānāṃ guṇānāṃ pratiprasavaḥ kaivalyaṃ svarūpa-pratiṣṭhā vā citi-śaktir iti || 34 ||",
            hindi:
              "पुरुष के लिए भोग और अपवर्ग रूप प्रयोजन समाप्त हो जाने पर तीनों गुणों का अपने मूल कारण प्रकृति में विलीन (प्रतिप्रसव) हो जाना, अथवा चेतन शक्ति (पुरुष) का अपने वास्तविक शुद्ध स्वरूप में प्रतिष्ठित हो जाना ही 'कैवल्य' है।",
            english:
              "Kaivalya (absolute liberation) is the involution of the gunas, now devoid of any purpose for the Purusha, back into their primal cause; or it is the Consciousness-power firmly re-established in its own transcendent essential nature.",
            commentary:
              "पातञ्जल योगसूत्र का अंतिम महासूत्र। द्वैत का अंत, दुःखों का आत्यंतिक उच्छेद, और आत्मा की नित्य मुक्ति।",
          },
        ],
      },
    ],
  },

  vedanta: {
    label: "ब्रह्मसूत्र (वेदान्त दर्शन • बादरायण व्यास)",
    sourceTotal: "४ अध्याय • १६ पाद • ५५५ सूत्र",
    editionNote:
      "महर्षि बादरायण व्यास प्रणीत • आदि शंकराचार्य शारीरक भाष्य, रामानुजाचार्य श्रीभाष्य, मध्वाचार्य अणुभाष्य • प्रामाणिक मूल सूत्र पाठ",
    chapters: [
      {
        id: "bs-adhyaya-1-chatuhsutri",
        title: "प्रथम अध्याय (समन्वय) • चतुःसूत्री एवं मूल समन्वय अधिकरण",
        items: [
          {
            number: 1,
            devanagari: "ॐ अथातो ब्रह्मजिज्ञासा॥१॥",
            transliteration: "oṃ athāto brahma-jijñāsā || 1 ||",
            hindi:
              "अब (साधन-चतुष्टय की प्राप्ति और कर्मफल के अनित्य होने का विवेक होने के उपरांत) अविनाशी परब्रह्म को जानने की जिज्ञासा (विचार) की जाती है।",
            english:
              "Now, therefore, the enquiry into the nature of the Supreme Brahman begins.",
            commentary:
              "वेदान्त दर्शन का प्रथम महासूत्र। 'अथ' शब्द साधन-चतुष्टय (नित्यानित्य विवेक, वैराग्य, शम-दमादि षट् संपत्ति, मुमुक्षुत्व) की पूर्व-योग्यता का सूचक है। धर्म-कर्म का फल अनित्य है, अतः नित्य मोक्ष हेतु ब्रह्म-ज्ञान की जिज्ञासा अनिवार्य है।",
          },
          {
            number: 2,
            devanagari: "जन्माद्यस्य यतः॥२॥",
            transliteration: "janmādy asya yataḥ || 2 ||",
            hindi:
              "जिससे इस नाम-रूप-व्याकृत विचित्र ब्रह्माण्ड की उत्पत्ति, स्थिति और प्रलय होते हैं—वही 'परब्रह्म' है।",
            english:
              "That omniscient, omnipotent Reality from which the origin, sustenance, and dissolution of this universe proceed, is Brahman.",
            commentary:
              "ब्रह्म का तटस्थ लक्षण। तैत्तिरीय उपनिषद् (३.१) 'यतो वा इमानि भूतानि जायन्ते...' का प्रामाणिक समन्वय। जगत का कर्ता और उपादान केवल चेतन परब्रह्म ही हो सकता है, कोई अचेतन प्रकृति नहीं।",
          },
          {
            number: 3,
            devanagari: "शास्त्रयोनित्वात्॥३॥",
            transliteration: "śāstra-yonitvāt || 3 ||",
            hindi:
              "क्योंकि समस्त ऋग्वेद आदि दिव्य शास्त्रों का आदि कारण (योनि) वही सर्वज्ञ ब्रह्म है, अथवा शास्त्र ही ब्रह्म के यथार्थ ज्ञान का एकमात्र प्रामाणिक साधन हैं।",
            english:
              "Because Brahman is the source and author of the sacred scriptures, and scriptures are the sole valid means of rightly knowing Brahman.",
            commentary:
              "ब्रह्म केवल शुष्क बौद्धिक तर्कों का विषय नहीं है, वह 'अपरोक्ष' सत्य है जिसे उपनिषद् श्रुति के आलोक में ही साक्षात् जाना जा सकता है।",
          },
          {
            number: 4,
            devanagari: "तत्तु समन्वयात्॥४॥",
            transliteration: "tat tu samanvayāt || 4 ||",
            hindi:
              "किंतु समस्त उपनिषदों और वेदान्त वाक्यों का परम समन्वय और मुख्य तात्पर्य उस अद्वितीय, नित्य, शुद्ध, बुद्ध, मुक्त सच्चिदानंद ब्रह्म में ही सिद्ध होता है।",
            english:
              "But that Brahman is known exclusively from scripture, because all Upanishadic texts harmonize and converge upon that one Supreme Non-Dual Reality as their primary import.",
            commentary:
              "चतुःसूत्री का अंतिम सूत्र। अद्वैत वेदान्त का सर्वोच्च समन्वय: 'तत्त्वमसि' और 'अहं ब्रह्मास्मि' जैसे महावाक्य कर्म के लिए नहीं, अपितु साक्षात् ब्रह्म-बोध कराने के लिए प्रवृत्त हैं।",
          },
          {
            number: 5,
            devanagari: "ईक्षतेर्नाशब्दम्॥५॥",
            transliteration: "īkṣater nāśabdam || 5 ||",
            hindi:
              "सांख्य का अचेतन प्रधान (प्रकृति) जगत का मूल कारण नहीं हो सकता, क्योंकि श्रुति में सृष्टि से पूर्व 'ईक्षण' (संकल्प/देखना — 'तदैक्षत बहु स्यां प्रजायेय') का उल्लेख है, जो केवल चेतन ब्रह्म में ही संभव है।",
            english:
              "The insentient Pradhana of the Samkhyas cannot be the cause of the world, because the scriptures describe 'seeing' (deliberation/conscious willing) prior to creation, which belongs solely to conscious Brahman.",
            commentary:
              "ईक्षा अधिकरण। सांख्य के अचेतन कारणवाद का खंडन और ब्रह्म के चेतन कर्तृत्व की प्रतिष्ठा।",
          },
          {
            number: 11,
            devanagari: "आनन्दमयोऽभ्यासात्॥११॥",
            transliteration: "ānandamayo 'bhyāsāt || 11 ||",
            hindi:
              "तैत्तिरीय उपनिषद् में वर्णित 'आनन्दमय' जीवात्मा नहीं, अपितु परब्रह्म ही है, क्योंकि वेदों में आनंद पद का बार-बार अभ्यास (पुनरावृत्ति) ब्रह्म के लिए ही हुआ है।",
            english:
              "The 'Anandamaya' (consisting of Bliss) spoken of in the Upanishads is the Supreme Brahman, because of the repeated scriptural emphasis on infinite Bliss as Brahman's essence.",
            commentary:
              "आनन्दमय अधिकरण। ब्रह्म ही परमानंद का मूल स्त्रोत है, जिसको पाकर जीव आनंदित होता है।",
          },
        ],
      },
      {
        id: "bs-adhyaya-2-avirodha",
        title: "द्वितीय अध्याय (अविरोध) • स्मृति-तर्क विरोध परिहार एवं परपक्ष खंडन",
        items: [
          {
            number: 14,
            devanagari: "तदनन्यत्वमारम्भणशब्दादिभ्यः॥१४॥",
            transliteration: "tad-ananyatvam ārambhaṇa-śabdādibhyaḥ || 14 ||",
            hindi:
              "कार्य (जगत) अपने कारण (ब्रह्म) से भिन्न नहीं है, जैसा कि छान्दोग्य उपनिषद् के 'वाचारम्भणं विकारो नामधेयं मृत्तिकेत्येव सत्यम्' आदि वाक्यों से सिद्ध होता है।",
            english:
              "The effect (the universe) is non-different from its material cause (Brahman), as is declared by scriptural passages based on speech-modifications (such as 'the clay alone is real').",
            commentary:
              "आरम्भणाधिकरण (२.१.१४)। अद्वैत विवर्तवाद का मूलाधार: कार्य नाममात्र का विकार है, तात्विक दृष्टि से केवल कारण (ब्रह्म) ही एकमात्र सत्य है।",
          },
          {
            number: 33,
            devanagari: "लोकवत्तु लीलाकैवल्यम्॥३३॥",
            transliteration: "lokavat tu līlā-kaivalyam || 33 ||",
            hindi:
              "जिस प्रकार संसार में किसी पूर्णकाम राजा की चेष्टाएं किसी स्वार्थ के लिए नहीं, अपितु केवल लीला (खेल) के लिए होती हैं, वैसे ही आप्तकाम ब्रह्म की यह सृष्टि-रचना केवल आनंदमयी लीला है।",
            english:
              "Even as in worldly life a king's playful activity proceeds from no unmet desire, so also the cosmic creation is mere sport (lila) of the ever-fulfilled Brahman.",
            commentary:
              "लीला अधिकरण। सृष्टि किसी अपूर्ण इच्छा को पूरी करने के लिए नहीं, अपितु ब्रह्म के अनंत आनंद की सहज अभिव्यक्ति है।",
          },
          {
            number: 1,
            devanagari: "रचनानुपपत्तेश्च नानुमानम्॥१॥",
            transliteration: "racanānupapatteś ca nānumānam || 1 ||",
            hindi:
              "अचेतन प्रधान (सांख्य की प्रकृति) से इस अत्यंत विचित्र, नियमबद्ध और सुव्यवस्थित विश्व की रचना सिद्ध नहीं हो सकती, जैसे अचेतन मिट्टी बिना कुम्हार के स्वयं घड़ा नहीं बना सकती।",
            english:
              "The inferred insentient Pradhana cannot account for the orderly, wonderfully designed creation of the universe, just as clay cannot mold itself into a pot without an intelligent potter.",
            commentary:
              "रचनानुपपत्ति अधिकरण (२.२.१)। सांख्य के स्वतंत्र प्रधानवाद का पूर्ण तार्किक खंडन।",
          },
          {
            number: 28,
            devanagari: "नाभाव उपलब्धेः॥२८॥",
            transliteration: "nābhāva upalabdheḥ || 28 ||",
            hindi:
              "बाह्य वस्तुओं का सर्वथा अभाव (शून्यता/विज्ञप्तिमात्रता) नहीं कहा जा सकता, क्योंकि उनकी प्रत्यक्ष उपलब्धि (अनुभव) प्रत्येक ज्ञान में स्पष्ट रूप से होती है।",
            english:
              "The external world cannot be dismissed as non-existent, because external objects are distinctly apprehended and experienced in perception.",
            commentary:
              "बौद्ध विज्ञानवाद और शून्यवाद का खंडन। स्वप्न और जाग्रत अवस्था में भेद है; जाग्रत जगत व्यावहारिक रूप से सत्य है।",
          },
        ],
      },
      {
        id: "bs-adhyaya-3-sadhana",
        title: "तृतीय अध्याय (साधन) • जीवगति, वैराग्य, विद्याएं एवं परमतत्व",
        items: [
          {
            number: 22,
            devanagari:
              "प्रकृतैतावत्त्वं हि प्रतिषेधति ततो ब्रवीति च भूयः॥२२॥",
            transliteration:
              "prakṛtaitāvattvaṃ hi pratiṣedhati tato bravīti ca bhūyaḥ || 22 ||",
            hindi:
              "बृहदारण्यक उपनिषद् का 'नेति नेति' (यह नहीं, यह नहीं) वाक्य ब्रह्म के स्वरूप का निषेध नहीं करता, बल्कि ब्रह्म को परिच्छिन्न (सीमित) मानने का निषेध करता है, और उसके उपरांत ब्रह्म को उससे भी परे बताता है।",
            english:
              "The scriptural formula 'Neti, Neti' (Not this, not this) denies only the limited forms attributed to Brahman, and then affirms the transcendent Reality that lies beyond all attributes.",
            commentary:
              "नेति-नेति अधिकरण (३.२.२२)। ब्रह्म निर्विशेष और असीम है; समस्त दृश्य प्रपंच का निषेध कर शुद्ध अधिष्ठान ब्रह्म की सिद्धि की जाती है।",
          },
          {
            number: 1,
            devanagari: "पुरुषार्थोऽतः शब्दादिति बादरायणः॥१॥",
            transliteration: "puruṣārtho 'taḥ śabdād iti bādarāyaṇaḥ || 1 ||",
            hindi:
              "महर्षि बादरायण का मत है कि इस स्वतंत्र ब्रह्मविद्या (आत्मज्ञान) से ही मनुष्य के परम पुरुषार्थ (मोक्ष) की प्राप्ति होती है, क्योंकि श्रुति वाक्य यही सिद्ध करते हैं।",
            english:
              "From this self-knowledge of Brahman alone is the supreme goal of human existence (Moksha) accomplished, so declares Badarayana, on the authority of scripture.",
            commentary:
              "पुरुषार्थाधिकरण (३.४.१)। ज्ञान किसी कर्म का अंग नहीं है, ज्ञान स्वयं स्वतंत्र रूप से मोक्ष का साक्षात् हेतु है।",
          },
        ],
      },
      {
        id: "bs-adhyaya-4-phala",
        title: "चतुर्थ अध्याय (फल) • कर्म-विनाश, अर्चिरादि मार्ग एवं परम कैवल्य",
        items: [
          {
            number: 13,
            devanagari:
              "तदधिगम उत्तरपूर्वाघयोरश्लेषविनाशौ तद्व्यपदेशात्॥१३॥",
            transliteration:
              "tad-adhigama uttara-pūrvāghayor aśleṣa-vināśau tad-vyapadeśāt || 13 ||",
            hindi:
              "उस ब्रह्म का साक्षात्कार होने पर आगामी पापों का ज्ञानी से श्लेष (स्पर्श) नहीं होता और पूर्व-संचित पापों का विनाश हो जाता है, क्योंकि श्रुति में ऐसा ही कहा गया है।",
            english:
              "On attaining the knowledge of Brahman, future sins no longer cling to the knower and past accumulated sins are completely destroyed, because scripture so declares.",
            commentary:
              "कर्म-क्षय अधिकरण (४.१.१३)। ब्रह्मज्ञानी के संचित और आगामी कर्म दग्धबीज हो जाते हैं; केवल वर्तमान शरीर को चलाने वाले प्रारब्ध कर्म ही भोग से समाप्त होते हैं।",
          },
          {
            number: 1,
            devanagari: "सम्पद्याविर्भावः स्वेन शब्दात्॥१॥",
            transliteration: "sampadyāvirbhāvaḥ svena śabdāt || 1 ||",
            hindi:
              "परम ज्योतिर्मय ब्रह्म को प्राप्त करके जीवात्मा अपने वास्तविक शुद्ध स्वरूप में आविर्भूत (प्रकट) होती है, कोई नया रूप ग्रहण नहीं करती।",
            english:
              "Having attained the Supreme Light, the liberated soul manifests in its own intrinsic transcendent nature, as is evident from the word 'svena' (in its own).",
            commentary:
              "मुक्ति का स्वरूप: मुक्ति किसी अप्राप्त वस्तु का उत्पादन नहीं, अपितु आत्मा के अपने नित्य सच्चिदानंद स्वरूप की पुनः-प्राप्ति है।",
          },
          {
            number: 22,
            devanagari: "अनावृत्तिः शब्दादनावृत्तिः शब्दात्॥२२॥",
            transliteration: "anāvṛttiḥ śabdād anāvṛttiḥ śabdāt || 22 ||",
            hindi:
              "उस परमपद को प्राप्त मुक्त आत्मा की इस जन्म-मरण रूपी संसार में कभी पुनरावृत्ति (वापसी) नहीं होती—शास्त्र प्रमाण से यह निर्विवाद सत्य है, शास्त्र प्रमाण से यह निर्विवाद सत्य है।",
            english:
              "There is no return for the liberated souls to this cycle of births and deaths, on the authority of scriptural revelation; there is no return, on the authority of scriptural revelation.",
            commentary:
              "ब्रह्मसूत्र का अंतिम सूत्र। सूत्र की द्विरुक्ति ग्रंथ की समाप्ति और मोक्ष की शाश्वत नित्यता को रेखांकित करती है।",
          },
        ],
      },
    ],
  },

  samkhya: {
    label: "सांख्य दर्शन (सांख्यकारिका • ईश्वरकृष्ण एवं सांख्य प्रवचन सूत्र • महर्षि कपिल)",
    sourceTotal: "सांख्यकारिका (७२ कारिकाएँ) • सांख्य प्रवचन सूत्र (६ अध्याय, ५२७ सूत्र)",
    editionNote:
      "ईश्वरकृष्ण विरचित सांख्यकारिका (वाचस्पति मिश्र तत्त्वकौमुदी) एवं महर्षि कपिल प्रणीत सांख्यसूत्र (विज्ञानभिक्षु भाष्य) • प्रामाणिक मूल पाठ",
    chapters: [
      {
        id: "sk-karikas",
        title: "सांख्यकारिका • मूल दार्शनिक कारिकाएँ (ईश्वरकृष्ण)",
        items: [
          {
            number: 1,
            devanagari:
              "दुःखत्रयाभिघाताज्जिज्ञासा तदपघातके हेतौ। दृष्टे सापार्था चेन्नैकान्तात्यन्ततोऽभावात्॥१॥",
            transliteration:
              "duḥkha-trayābhighātāj jijñāsā tad-apaghātake hetau | dṛṣṭe sāpārthā cen naikāntātyantato 'bhāvāt || 1 ||",
            hindi:
              "तीनों प्रकार के दुःखों (आध्यात्मिक, आधिभौतिक, आधिदैविक) के आघात से पीड़ित होने के कारण उनके निवारण के उपाय को जानने की तीव्र जिज्ञासा उत्पन्न होती है। यदि कोई कहे कि लौकिक उपायों (औषधि, धन आदि) से ही दुःख दूर हो जाते हैं, तो यह ठीक नहीं; क्योंकि लौकिक उपायों से दुःखों की न तो निश्चित (ऐकान्तिक) और न ही सदा के लिए (आत्यन्तिक) निवृत्ति होती है।",
            english:
              "Due to the affliction of the threefold suffering (internal, physical, and cosmic/divine), arises the enquiry into the means of their eradication. If it be said that visible empirical remedies render this enquiry useless, we reply: No, because empirical remedies lack certainty (aikantika) and absolute finality (atyantika).",
            commentary:
              "सांख्यकारिका की प्रथम कारिका। समस्त भारतीय दर्शन का आदि बिंदु मानव का दुःख और उसकी शाश्वत मुक्ति है।",
          },
          {
            number: 2,
            devanagari:
              "दृष्टवदानुश्रविकः स ह्यविशुद्धिक्षयातिशययुक्तः। तद्विपरीतः श्रेयान् व्यक्ताव्यक्तज्ञविज्ञानात्॥२॥",
            transliteration:
              "dṛṣṭavad ānuśravikaḥ sa hy aviśuddhi-kṣayātiśaya-yuktaḥ | tad-viparītaḥ śreyān vyaktāvyakta-jña-vijñānāt || 2 ||",
            hindi:
              "वैदिक कर्मकाण्ड (यज्ञ आदि) से मिलने वाले स्वर्ग आदि फल भी लौकिक उपायों के समान ही हैं, क्योंकि वे पशु-हिंसा आदि से अशुद्ध, क्षयशील (पुण्य क्षीण होने पर समाप्त होने वाले), और दूसरों से ईर्ष्या पैदा करने वाले हैं। अतः उनसे विपरीत व्यक्त (संसार), अव्यक्त (प्रकृति), और ज्ञ (चेतन पुरुष) का तात्विक विवेक-ज्ञान ही परम श्रेयस्कर है।",
            english:
              "The scriptural ritual means (seeking heaven through sacrifices) are like empirical means, for they are linked with impurity, decay, and comparative inequality. Superior to both is the path of discriminative wisdom, derived from the profound knowledge of the Manifest (Vyakta), the Unmanifest (Avyakta / Prakriti), and the Knower (Jna / Purusha).",
            commentary:
              "कर्मकाण्ड की सीमाओं का स्पष्ट प्रतिपादन। वास्तविक मुक्ति केवल २५ तत्वों के विवेक-ज्ञान से ही संभव है।",
          },
          {
            number: 3,
            devanagari:
              "मूलप्रकृतिरविकृतिर्महदाद्याः प्रकृतिविकृतयः सप्त। षोडशकस्तु विकारो न प्रकृतिर्न विकृतिः पुरुषः॥३॥",
            transliteration:
              "mūla-prakṛtir avikṛtir mahad-ādyāḥ prakṛti-vikṛtayaḥ sapta | ṣoḍaśakas tu vikāro na prakṛtir na vikṛtiḥ puruṣaḥ || 3 ||",
            hindi:
              "मूलप्रकृति किसी की विकृति (कार्य) नहीं है, वह केवल कारण है। महत (बुद्धि), अहंकार और पाँच तन्मात्राएँ—ये सात तत्व कारण भी हैं और कार्य भी (प्रकृति-विकृति)। सोलह तत्व (मन, ५ ज्ञानेन्द्रिय, ५ कर्मेन्द्रिय, ५ महाभूत) केवल कार्य (विकृति) हैं। और पुरुष न किसी का कारण है और न किसी का कार्य।",
            english:
              "Mula-Prakriti (primal Nature) is uncreated root-cause; the seven beginning with Mahat (Intellect, Ego, and 5 subtle elements) are both causes and effects; the sixteen (mind, 10 senses, and 5 gross elements) are effects only; Purusha (pure Consciousness) is neither cause nor effect.",
            commentary:
              "सांख्य के २५ तत्वों का सुप्रसिद्ध चार श्रेणियों में वैज्ञानिक वर्गीकरण।",
          },
          {
            number: 9,
            devanagari:
              "असदकरणादुपादानग्रहणात् सर्वसंभवाभावात्। शक्तस्य शक्यकरणात् कारणभावाच्च सत्कार्यम्॥९॥",
            transliteration:
              "asad-akaraṇād upādāna-grahaṇāt sarva-sambhavābhāvāt | śaktasya śakya-karaṇāt kāraṇa-bhāvāc ca sat-kāryam || 9 ||",
            hindi:
              "कार्य अपनी उत्पत्ति से पूर्व कारण में सत् (विद्यमान) रहता है, क्योंकि: १. असत् की उत्पत्ति नहीं हो सकती, २. विशिष्ट कार्य हेतु विशिष्ट उपादान लिया जाता है, ३. किसी भी वस्तु से कुछ भी उत्पन्न नहीं हो सकता, ४. समर्थ कारण ही समर्थ कार्य को करता है, और ५. कार्य कारण से अभिन्न रूप होता है।",
            english:
              "The effect pre-exists in the cause prior to its manifestation (Satkaryavada), because: 1. what is non-existent cannot be produced, 2. an appropriate material cause is grasped, 3. everything cannot come from everything, 4. an efficient cause produces only what it is capable of producing, and 5. the effect is of the same nature as the cause.",
            commentary:
              "सांख्य के सत्कार्यवाद का अमर सूत्र। दूध में दही पहले से सूक्ष्म रूप में विद्यमान रहता है, केवल उसका प्रकटीकरण होता है।",
          },
          {
            number: 12,
            devanagari:
              "प्रीत्यप्रीतिविषादात्मकाः प्रकाशप्रवृत्तिनियमार्थाः। अन्योन्याभिभवाश्रयजननमिथुनवृत्तयश्च गुणाः॥१२॥",
            transliteration:
              "prīty-aprīti-viṣādātmakāḥ prakāśa-pravṛtti-niyamārthāḥ | anyonyābhibhavāśraya-janana-mithuna-vṛttayaś ca guṇāḥ || 12 ||",
            hindi:
              "सत्व, रजस और तमस गुण क्रमशः सुख (प्रीति), दुःख (अप्रीति) और मोह (विषाद) स्वरूप वाले हैं; वे प्रकाश, क्रिया और नियमन (रोकने) का कार्य करते हैं। वे परस्पर एक-दूसरे को दबाने वाले, एक-दूसरे का आश्रय लेने वाले, एक-दूसरे को उत्पन्न करने वाले और साथ-साथ रहने वाले हैं।",
            english:
              "The Gunas (Sattva, Rajas, Tamas) are of the nature of pleasure, pain, and delusion; their functions are illumination, activation, and restraint. They operate by mutually dominating, supporting, producing, and co-existing with one another.",
            commentary:
              "त्रिगुण सिद्धांत की सूक्ष्म व्याख्या। प्रकृति की समस्त विविधता इन तीन धागों का ही ताना-बाना है।",
          },
          {
            number: 19,
            devanagari:
              "तस्माच्च विपर्यासात् सिद्धं साक्षित्वमस्य पुरुषस्य। कैवल्यं माध्यस्थ्यं द्रष्टृत्वमकर्तृभावश्च॥१९॥",
            transliteration:
              "tasmāc ca viparyāsāt siddhaṃ sākṣitvam asya puruṣasya | kaivalyaṃ mādhyasthyaṃ draṣṭṛtvam akartṛ-bhāvaś ca || 19 ||",
            hindi:
              "प्रकृति के त्रिगुणों से विपरीत होने के कारण पुरुष (आत्मा) का साक्षी होना, कैवल्य (असंगता), मध्यस्थता (तटस्थता), द्रष्टा होना और अकर्ता होना सिद्ध होता है।",
            english:
              "And from that contrast with the gunas, it is established that the Purusha possesses witness-consciousness (sakshitvam), isolation (kaivalyam), neutral detachment (madhyasthyam), seer-ship (drashtritvam), and non-doership (akartri-bhavam).",
            commentary:
              "पुरुष का विशुद्ध स्वरूप। आत्मा कभी कर्ता या भोक्ता नहीं है, वह केवल तटस्थ साक्षी चैतन्य है।",
          },
          {
            number: 21,
            devanagari:
              "पुरुषस्य दर्शनार्थं कैवल्यार्थं तथा प्रधानस्य। पङ्ग्वन्धवदुभयोरपि संयोगस्तत्कृतः सर्गः॥२१॥",
            transliteration:
              "puruṣasya darśanārthaṃ kaivalyārthaṃ tathā pradhānasya | paṅgv-andha-vad ubhayor api saṃyogas tat-kṛtaḥ sargaḥ || 21 ||",
            hindi:
              "पुरुष द्वारा प्रकृति के दर्शन के लिए और प्रकृति द्वारा पुरुष को कैवल्य (मुक्ति) प्रदान करने के लिए, पंगु (लंगड़े) और अंधे मनुष्य के सहयोग की भांति दोनों का संयोग होता है, और उसी संयोग से सृष्टि का विकास होता है।",
            english:
              "For the Purusha's perception of Prakriti and for his ultimate liberation (Kaivalya), occurs the union of both, like that of a lame man and a blind man; and from that mutual conjunction proceeds creation.",
            commentary:
              "पंगु-अंध न्याय। पुरुष देख सकता है पर चल नहीं सकता (अक्रिय); प्रकृति चल सकती है पर देख नहीं सकती (अचेतन)। दोनों मिलकर संसार-यात्रा चलाते हैं।",
          },
          {
            number: 64,
            devanagari:
              "एवं तत्त्वाभ्यासान्नास्मि न मे नाहमित्यपरिशेषम्। अविपर्ययाद्विशुद्धं केवलमुत्पद्यते ज्ञानम्॥६४॥",
            transliteration:
              "evaṃ tattvābhyāsān nāsmi na me nāham ity apariśeṣam | aviparyayād viśuddhaṃ kevalam utpadyate jñānam || 64 ||",
            hindi:
              "इस प्रकार पच्चीस तत्वों के निरंतर अभ्यास से 'न मैं कर्ता हूँ (नास्मि), न मेरा कुछ है (न मे), और न मैं शरीर-मन हूँ (नाहम्)'—यह विशुद्ध, भ्रम-रहित, पूर्ण कैवल्य ज्ञान उत्पन्न हो जाता है।",
            english:
              "Thus, through the continuous cultivation of the true principles, arises the pure, absolute, and unerroneous knowledge: 'I am not the doer, nothing belongs to me, I am not this ego'.",
            commentary:
              "सांख्य का सर्वोच्च मुक्ति-मंत्र: 'नास्मि न मे नाहम्'। समस्त अहंकार और ममता के विसर्जन से कैवल्य की प्राप्ति।",
          },
        ],
      },
      {
        id: "ss-pravachana-sutras",
        title: "सांख्य प्रवचन सूत्र • महर्षि कपिल",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ अथ त्रिविधदुःखात्यन्तनिवृत्तिरत्यन्तपुरुषार्थः॥१॥",
            transliteration:
              "oṃ atha tri-vidha-duḥkhātyanta-nivṛttir atyanta-puruṣārthaḥ || 1 ||",
            hindi:
              "तीनों प्रकार के दुःखों (आध्यात्मिक, आधिभौतिक, आधिदैविक) की आत्यंतिक (सदा के लिए) निवृत्ति ही मनुष्य का परम पुरुषार्थ (मोक्ष) है।",
            english:
              "Now, the complete and absolute cessation of the threefold suffering is the supreme goal of human life (Purushartha).",
            commentary:
              "महर्षि कपिल का प्रथम सूत्र। दर्शन का प्रयोजन केवल बौद्धिक विलास नहीं, अपितु दुःखों से वास्तविक और अंतिम मुक्ति है।",
          },
          {
            number: 2,
            devanagari: "न दृष्टात् तत्सिद्धिनिवृत्तेरप्यनुवृत्तिदर्शनात्॥२॥",
            transliteration:
              "na dṛṣṭāt tat-siddhir nivṛtter apy anuvṛtti-darśanāt || 2 ||",
            hindi:
              "लौकिक उपायों से दुःखों की आत्यंतिक निवृत्ति नहीं हो सकती, क्योंकि उनमें दुःख के पुनः लौट आने की संभावना देखी जाती है।",
            english:
              "That absolute cessation is not accomplished through empirical worldly means, for suffering is seen to recur even after temporary alleviation.",
            commentary:
              "भौतिक सुख क्षणभंगुर हैं; स्थाई शांति केवल तात्विक विवेक से संभव है।",
          },
        ],
      },
    ],
  },

  nyaya: {
    label: "न्याय सूत्र (न्याय दर्शन • अक्षपाद गौतम)",
    sourceTotal: "५ अध्याय • १० आह्निक • ५२८ सूत्र",
    editionNote:
      "महर्षि अक्षपाद गौतम प्रणीत • वात्स्यायन पक्षिलस्वामी भाष्य, वाचस्पति मिश्र तात्पर्यटीका एवं जयन्त भट्ट न्यायमञ्जरी • प्रामाणिक मूल पाठ",
    chapters: [
      {
        id: "ns-adhyaya-1",
        title: "प्रथम अध्याय • षोडश पदार्थ, चतुर्विध प्रमाण एवं प्रमेय",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ प्रमाणप्रमेयसंशयप्रयोजनदृष्टान्तसिद्धान्तावयवतर्कनिर्णयवादजल्पवितण्डाहेत्वाभासच्छलजातिनिग्रहस्थानानां तत्त्वज्ञानान्निःश्रेयसाधिगमः॥१॥",
            transliteration:
              "oṃ pramāṇa-prameya-saṃśaya-prayojana-dṛṣṭānta-siddhāntāvayava-tarka-nirṇaya-vāda-jalpa-vitaṇḍā-hetvābhāsa-chala-jāti-nigrahasthānānāṃ tattva-jñānān niḥśreyasādhigamaḥ || 1 ||",
            hindi:
              "प्रमाण, प्रमेय, संशय, प्रयोजन, दृष्टान्त, सिद्धान्त, अवयव, तर्क, निर्णय, वाद, जल्प, वितण्डा, हेत्वाभास, छल, जाति और निग्रहस्थान—इन सोलह पदार्थों के यथार्थ तत्त्वज्ञान से निःश्रेयस (मोक्ष/परम कल्याण) की प्राप्ति होती है।",
            english:
              "Supreme beatitude (Moksha) is attained through the true knowledge of the sixteen categories: means of valid knowledge (pramana), objects of knowledge (prameya), doubt (samshaya), purpose (prayojana), example (drishtanta), established doctrine (siddhanta), syllogistic limbs (avayava), hypothetical reasoning (tarka), ascertainment (nirnaya), discussion (vada), wrangling (jalpa), cavil (vitanda), fallacies (hetvabhasa), quibbling (chhala), futile rejoinders (jati), and clinchers/grounds of defeat (nigrahasthana).",
            commentary:
              "न्याय दर्शन का प्रसिद्ध आदि सूत्र। षोडश पदार्थों के ज्ञान से मिथ्याज्ञान का नाश होकर मोक्ष सिद्ध होता है।",
          },
          {
            number: 2,
            devanagari:
              "दुःखजन्मप्रवृत्तिदोषमिथ्याज्ञानानामुत्तरोत्तरापाये तदनन्तरापायादपवर्गः॥२॥",
            transliteration:
              "duḥkha-janma-pravṛtti-doṣa-mithyā-jñānānām uttarottarāpāye tad-anantarāpāyād apavargaḥ || 2 ||",
            hindi:
              "मिथ्याज्ञान के नष्ट होने पर दोष (राग-द्वेष-मोह) नष्ट होते हैं; दोषों के नष्ट होने पर प्रवृत्ति (कर्म) शांत होती है; प्रवृत्ति के शांत होने पर पुनर्जन्म समाप्त होता है; और जन्म न होने पर दुःखों का आत्यंतिक अंत होकर 'अपवर्ग' (मोक्ष) की प्राप्ति होती है।",
            english:
              "Liberation (apavarga) ensues from the successive cessation of wrong cognition, defect, activity, rebirth, and suffering, upon the destruction of each preceding member of the chain.",
            commentary:
              "न्याय दर्शन की मुक्ति-श्रृंखला। मिथ्याज्ञान ही समस्त बंधनों का मूल है; तत्वज्ञान से उसकी जड़ कट जाती है।",
          },
          {
            number: 3,
            devanagari: "प्रत्यक्षानुमानोपमानशब्दाः प्रमाणानि॥३॥",
            transliteration: "pratyakṣānumānopamāna-śabdāḥ pramāṇāni || 3 ||",
            hindi:
              "प्रत्यक्ष, अनुमान, उपमान और शब्द—ये चार ही यथार्थ ज्ञान के 'प्रमाण' हैं।",
            english:
              "Perception (Pratyaksha), Inference (Anumana), Comparison (Upamana), and Verbal Testimony (Shabda) are the four valid means of knowledge.",
            commentary:
              "न्याय की ज्ञानमीमांसा के चार खंभे।",
          },
          {
            number: 4,
            devanagari:
              "इन्द्रियार्थसंनिकर्षोत्पन्नं ज्ञानमव्यपदेश्यमव्यभिचारि व्यवसायात्मकं प्रत्यक्षम्॥४॥",
            transliteration:
              "indriyārtha-sannikarṣotpannaṃ jñānam avyapadeśyam avyabhicāri vyavasāyātmakaṃ pratyakṣam || 4 ||",
            hindi:
              "इन्द्रिय और उसके विषय के साक्षात् संबंध (संनिकर्ष) से उत्पन्न ज्ञान, जो शब्दों पर आश्रित न हो (अव्यपदेश्य), भ्रम-रहित हो (अव्यभिचारि), और संशय-रहित निश्चयात्मक हो (व्यवसायात्मक)—वह 'प्रत्यक्ष' प्रमाण है।",
            english:
              "Perception is that cognition arising from the contact of a sense-organ with its object, which is non-verbal (inexpressible), unerring, and definitive.",
            commentary:
              "प्रत्यक्ष प्रमाण का शास्त्रीय लक्षण। निर्विकल्पक और सविकल्पक दोनों प्रत्यक्ष इसमें समाहित हैं।",
          },
          {
            number: 5,
            devanagari:
              "अथ तत्पूर्वकं त्रिविधमनुमानं पूर्ववच्छेषवत्सामान्यतोदृष्टं च॥५॥",
            transliteration:
              "atha tat-pūrvakaṃ tri-vidham anumānaṃ pūrvavac cheṣavat sāmānyato-dṛṣṭaṃ ca || 5 ||",
            hindi:
              "प्रत्यक्ष के आधार पर होने वाला अनुमान प्रमाण तीन प्रकार का होता है: १. पूर्ववत् (कारण से कार्य का अनुमान, जैसे बादलों से वर्षा), २. शेषवत् (कार्य से कारण का अनुमान, जैसे नदी के बहाव से ऊपर वर्षा), और ३. सामान्यतोदृष्ट (सामान्य साहचर्य से अनुमान, जैसे स्थान बदलने से सूर्य की गति)।",
            english:
              "Now, inference, preceded by perception, is threefold: from cause to effect (purvavat), from effect to cause (sheshavat), and from perceived general concomitance (samanyatodrishta).",
            commentary:
              "अनुमान के तीन कालगत और कारणता-आधारित भेद।",
          },
          {
            number: 9,
            devanagari:
              "आत्मशरीरेन्द्रियार्थबुद्धिमनःप्रवृत्तिदोषप्रेत्यभावफलदुःखापवर्गास्तु प्रमेयम्॥९॥",
            transliteration:
              "ātma-śarīrendriyārtha-buddhi-manaḥ-pravṛtti-doṣa-pretyabhāva-phala-duḥkhāpavargās tu prameyam || 9 ||",
            hindi:
              "आत्मा, शरीर, इन्द्रिय, अर्थ (विषय), बुद्धि (ज्ञान), मन, प्रवृत्ति (कर्म), दोष (राग-द्वेष), प्रेत्यभाव (पुनर्जन्म), फल, दुःख और अपवर्ग (मोक्ष)—ये बारह तत्व जानने योग्य 'प्रमेय' हैं।",
            english:
              "The Self, body, senses, objects of senses, intellect, mind, activity, faults, rebirth, fruit of action, suffering, and absolute liberation are the objects of knowledge (prameya).",
            commentary:
              "न्याय के १२ प्रमेय। इन्हीं के वास्तविक ज्ञान से जीवात्मा बंधन-मुक्त होती है।",
          },
          {
            number: 32,
            devanagari: "प्रतिज्ञाहेतूदाहरणोपनयनिगमनान्यवयवाः॥३२॥",
            transliteration:
              "pratijñā-hetūdāharaṇopanaya-nigamanāny avayavāḥ || 32 ||",
            hindi:
              "प्रतिज्ञा, हेतु, उदाहरण, उपनय और निगमन—ये परार्थानुमान के पाँच अवयव हैं।",
            english:
              "The proposition (pratijna), the reason (hetu), the example (udaharana), the application (upanaya), and the conclusion (nigamana) are the members of the syllogism.",
            commentary:
              "भारतीय न्याय का अमर पञ्चावयव वाक्य।",
          },
        ],
      },
    ],
  },

  vaisheshika: {
    label: "वैशेषिक सूत्र (वैशेषिक दर्शन • महर्षि कणाद)",
    sourceTotal: "१० अध्याय • २० आह्निक • ३७० सूत्र",
    editionNote:
      "महर्षि कणाद (उलूक) प्रणीत • प्रशस्तपाद भाष्य (पदार्थधर्मसंग्रह) एवं उदयनाचार्य किरणावली • प्रामाणिक मूल पाठ",
    chapters: [
      {
        id: "vs-adhyaya-1",
        title: "प्रथम अध्याय • धर्म लक्षण, षट् पदार्थ एवं ९ द्रव्य",
        items: [
          {
            number: 1,
            devanagari: "ॐ अथातो धर्मं व्याख्यास्यामः॥१॥",
            transliteration: "oṃ athāto dharmaṃ vyākhyāsyāmaḥ || 1 ||",
            hindi: "अब हम 'धर्म' की सम्यक वैज्ञानिक व दार्शनिक व्याख्या करेंगे।",
            english: "Now, therefore, we shall expound the nature of Dharma.",
            commentary:
              "वैशेषिक दर्शन का प्रथम सूत्र। धर्म ही मानव और ब्रह्माण्ड का परम नियामक नियम है।",
          },
          {
            number: 2,
            devanagari: "यतोऽभ्युदयनिःश्रेयससिद्धिः स धर्मः॥२॥",
            transliteration: "yato 'bhyudaya-niḥśreyasa-siddhiḥ sa dharmaḥ || 2 ||",
            hindi:
              "जिससे अभ्युदय (इहलौकिक उन्नति, समृद्धि और सुख) तथा निःश्रेयस (पारलौकिक परम कल्याण/मोक्ष) दोनों की सिद्धि होती है, वही 'धर्म' है।",
            english:
              "Dharma is that from which arises both material prosperity and well-being in this empirical world (Abhyudaya) and supreme spiritual beatitude (Nihshreyasa).",
            commentary:
              "धर्म की सनातन सार्वभौमिक परिभाषा। केवल परलोक नहीं, अपितु भौतिक जगत का संतुलन और आध्यात्मिक मोक्ष दोनों धर्म के फल हैं।",
          },
          {
            number: 4,
            devanagari:
              "धर्मविशेषप्रसूताद् द्रव्यगुणकर्मसामान्यविशेषसमवायानां पदार्थानां साधर्म्यवैधर्म्याभ्यां तत्त्वज्ञानान्निःश्रेयसम्॥४॥",
            transliteration:
              "dharma-viśeṣa-prasūtād dravya-guṇa-karma-sāmānya-viśeṣa-samavāyānāṃ padārthānāṃ sādharmya-vaidharmyābhyāṃ tattva-jñānān niḥśreyasam || 4 ||",
            hindi:
              "धर्म के अनुष्ठान से अंतःकरण शुद्ध होने पर द्रव्य, गुण, कर्म, सामान्य, विशेष और समवाय—इन पदार्थों के समानता और भेद के यथार्थ तत्वज्ञान से निःश्रेयस (मोक्ष) की प्राप्ति होती है।",
            english:
              "Supreme liberation is attained through the true knowledge of the similarities and differences among the categories—substance (dravya), quality (guna), action (karma), generality (samanya), particularity (vishesha), and inherence (samavaya)—born from the merit of righteous duty.",
            commentary:
              "पदार्थ-ज्ञान से मोक्ष। जब साधक जड़ और चेतन के भेदों को समझ जाता है, तो आसक्ति मिट जाती है।",
          },
          {
            number: 5,
            devanagari:
              "पृथिव्यापस्तेजो वायुराकाशं कालो दिगात्मा मन इति द्रव्याणि॥५॥",
            transliteration:
              "pṛthivy-āpas-tejo vāyur ākāśaṃ kālo dig ātmā mana iti dravyāṇi || 5 ||",
            hindi:
              "पृथ्वी, जल, तेज, वायु, आकाश, काल, दिक् (दिशा), आत्मा और मन—ये नौ ही 'द्रव्य' हैं।",
            english:
              "Earth, Water, Fire, Air, Ether, Time, Space, Self, and Mind are the nine substances.",
            commentary:
              "ब्रह्माण्ड के ९ मूल भौतिक व आध्यात्मिक तत्व। प्रथम चार भूतात्मक और परमाणु रूप हैं; आकाश, काल, दिक् और आत्मा विभु (सर्वव्यापी) हैं; मन अणुरूप है।",
          },
        ],
      },
      {
        id: "vs-adhyaya-4",
        title: "चतुर्थ अध्याय • परमाणुवाद एवं नित्य-तत्व",
        items: [
          {
            number: 1,
            devanagari: "सदकारणवन्नित्यम्॥१॥",
            transliteration: "sad-akāraṇavan nityam || 1 ||",
            hindi:
              "जो सत् (अस्तित्ववान्) हो और जिसका कोई कारण न हो (अकारणवत्), वह 'नित्य' होता है (जैसे चारों भूतों के मूल परमाणु और आत्मा)।",
            english:
              "That which exists and is uncaused is eternal (such as the primal atoms and the soul).",
            commentary:
              "वैशेषिक परमाणुवाद का आधार। परमाणु अविभाज्य और अनादि हैं; वे कभी नष्ट नहीं होते।",
          },
        ],
      },
    ],
  },

  mimamsa: {
    label: "मीमांसा सूत्र (पूर्व मीमांसा • महर्षि जैमिनि)",
    sourceTotal: "१२ अध्याय • ६० पाद • २,६२१ सूत्र",
    editionNote:
      "महर्षि जैमिनि प्रणीत • शबर स्वामी भाष्य, कुमारिल भट्ट श्लोकवार्तिक एवं प्रभाकर मिश्र बृहती • प्रामाणिक मूल पाठ",
    chapters: [
      {
        id: "ms-adhyaya-1",
        title: "प्रथम अध्याय • धर्म-जिज्ञासा, चोदना लक्षण एवं शब्द-नित्यत्व",
        items: [
          {
            number: 1,
            devanagari: "ॐ अथातो धर्मजिज्ञासा॥१॥",
            transliteration: "oṃ athāto dharma-jijñāsā || 1 ||",
            hindi:
              "अब (वेदों के सांगोपांग स्वाध्याय के उपरांत) धर्म को जानने की गंभीर जिज्ञासा (विचार) प्रारंभ की जाती है।",
            english:
              "Now, therefore, begins the systematic enquiry into the nature and injunctions of Dharma.",
            commentary:
              "पूर्व मीमांसा का आदि सूत्र। धर्म क्या है, उसका प्रमाण क्या है और उसका फल क्या है—इसकी विशद मीमांसा।",
          },
          {
            number: 2,
            devanagari: "चोदनालक्षणोऽर्थो धर्मः॥२॥",
            transliteration: "codanā-lakṣaṇo 'rtho dharmaḥ || 2 ||",
            hindi:
              "वेद की प्रेरणा (विधि-वाक्य/आज्ञा) से लक्षित होने वाला और परम श्रेय को सिद्ध करने वाला प्रयोजन ही 'धर्म' है।",
            english:
              "Dharma is that beneficial purpose which is characterized and enjoined by Vedic impulsion (Chodana).",
            commentary:
              "धर्म केवल मनुष्य की बुद्धि की कल्पना नहीं है; कर्तव्य का यथार्थ ज्ञान वेद के विधि-वाक्यों ('यजेत स्वर्गकामः' आदि) से ही होता है।",
          },
          {
            number: 5,
            devanagari:
              "औत्पत्तिकस्तु शब्दस्यार्थेन सम्बन्धस्तस्य ज्ञानमुपदेशोऽव्यतिरेकश्चैकस्मिन्...॥५॥",
            transliteration:
              "autpattikas tu śabdasyārthena sambandhas tasya jñānam upadeśo 'vyatirekaś caikasmin... || 5 ||",
            hindi:
              "शब्द और उसके अर्थ का संबंध 'औत्पत्तिक' (सनातन, अकृत्रिम और नित्य) है; शब्द का ज्ञान कभी व्यभिचारी नहीं होता, अतः वेद स्वतः-प्रमाण हैं।",
            english:
              "The relation between the word and its meaning is primordial, eternal, and inherent; its cognition is unerring, and therefore the Vedic word is self-authoritative.",
            commentary:
              "शब्द-नित्यत्व और अपौरुषेयता का महासूत्र। किसी व्यक्ति विशेष ने शब्द-अर्थ का संबंध नहीं बनाया; वह अनादि है।",
          },
          {
            number: 18,
            devanagari: "नित्यस्तु स्याद्दर्शनस्य परार्थत्वात्॥१८॥",
            transliteration: "nityas tu syād darśanasya parārthatvāt || 18 ||",
            hindi:
              "शब्द वास्तव में नित्य ही है, क्योंकि उसका उच्चारण केवल दूसरों को नित्य अर्थ का बोध कराने के लिए होता है।",
            english:
              "The word is eternal, because its utterance is intended solely for conveying meaning to another.",
            commentary:
              "वर्ण और ध्वनि में भेद: ध्वनि उत्पन्न और नष्ट होती है, किंतु वर्ण और शब्द नित्य रहते हैं।",
          },
        ],
      },
      {
        id: "ms-adhyaya-2",
        title: "द्वितीय अध्याय • कर्मभेद एवं अपूर्व सिद्धांत",
        items: [
          {
            number: 1,
            devanagari:
              "भावार्थाः कर्मशब्दास्तेभ्यः क्रिया प्रतीयेतैष ह्यर्थो विधीयते॥१॥",
            transliteration:
              "bhāvārthāḥ karma-śabdās tebhyaḥ kriyā pratīyetaiṣa hy artho vidhīyate || 1 ||",
            hindi:
              "वैदिक धातुरूप क्रिया-पद कर्म-प्रधान होते हैं; उनसे भावना और क्रिया का बोध होता है, और वही वेद द्वारा विहित मुख्य कर्तव्य है।",
            english:
              "Verbs denoting action indicate dynamic performance; through them religious action is enjoined, which is the primary purpose of Vedic injunctions.",
            commentary:
              "कर्म और क्रिया की प्रधानता।",
          },
          {
            number: 5,
            devanagari: "चोदना पुनरारम्भः॥५॥",
            transliteration: "codanā punar-ārambhaḥ || 5 ||",
            hindi:
              "वैदिक विधि-वाक्य के अनुष्ठान से एक नवीन सूक्ष्म शक्ति (अपूर्व) का आरंभ होता है, जो भविष्य में फल प्रदान करती है।",
            english:
              "The Vedic injunction initiates a new unseen potency (Apurva), which fructifies into the ultimate result in due course.",
            commentary:
              "अपूर्व सिद्धांत। भौतिक कर्म के समाप्त हो जाने पर भी उसकी आध्यात्मिक ऊर्जा (अपूर्व) नष्ट नहीं होती, वह यजमान के साथ रहकर फल देती है।",
          },
        ],
      },
    ],
  },
};
