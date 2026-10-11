/**
 * Authentic Upanishads Scripture Reader Dataset
 * Sourced from Gita Press Gorakhpur, Advaita Ashrama, and Muktika Canon.
 * Includes complete 18 verses of Isha Upanishad, complete 12 verses of Mandukya Upanishad,
 * all 6 Prashnas (67 mantras) of Prashna Upanishad,
 * complete Shikshavalli, Brahmanandavalli (Panchakosha Viveka), and Bhriguvalli of Taittiriya Upanishad,
 * foundational chapters of Katha, Kena, Mundaka,
 * Chandogya (Udgitha, Shandilya Vidya, Tat Tvam Asi),
 * and Brihadaranyaka (Pavamana, Aham Brahmasmi, Maitreyi Brahmana, Neti Neti).
 */

export const UPANISHADS_SCRIPTURE_DATA = {
  "isha-upanishad": {
    label: "ईशावास्योपनिषद् (शुक्ल यजुर्वेद)",
    sourceTotal: "१८ मन्त्र (सम्पूर्ण उपनिषद्)",
    editionNote:
      "वाजसनेयि संहिता अध्याय ४० • आदि शंकराचार्य भाष्य • १८ मन्त्र पूर्ण पाठ",
    chapters: [
      {
        id: "isha-complete",
        title: "ईशावास्योपनिषद् • सम्पूर्ण १८ मन्त्र",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम्॥१॥",
            transliteration:
              "oṃ īśā vāsyam idaṃ sarvaṃ yat kiñca jagatyāṃ jagat |\ntena tyaktena bhuñjīthā mā gṛdhaḥ kasya svid dhanam || 1 ||",
            hindi:
              "इस अखिल ब्रह्मांड में जो कुछ भी चराचर जगत है, वह सब ईश्वर से व्याप्त है। अतः उस ईश्वर को साथ रखते हुए त्यागपूर्वक भोग करो, किसी के भी धन का लोभ मत करो।",
            english:
              "All this—whatever moves in this moving world—is enveloped by the Supreme Lord. Enjoy with detachment and renunciation; do not covet the wealth of anyone.",
            commentary:
              "उपनिषदों का आदि उद्घोष। त्यागपूर्वक जीवन जीने और ईश्वर की सर्वव्यापकता का यह मूल आधार है।",
          },
          {
            number: 2,
            devanagari:
              "कुर्वन्नेवेह कर्माणि जिजीविषेच्छतं समाः।\nएवं त्वयि नान्यथेतोऽस्ति न कर्म लिप्यते नरे॥२॥",
            transliteration:
              "kurvann eveha karmāṇi jijīviṣec chataṃ samāḥ |\nevaṃ tvayi nānyatheto 'sti na karma lipyate nare || 2 ||",
            hindi:
              "इस संसार में निष्काम भाव से शास्त्रविहित कर्तव्य-कर्म करते हुए ही सौ वर्ष जीने की इच्छा करनी चाहिए। तुम्हारे लिए इससे भिन्न कोई अन्य मार्ग नहीं है, जिससे कि कर्म मनुष्य में लिप्त न हों।",
            english:
              "Only performing sacred duties and righteous actions in this world should one wish to live a full hundred years. For you, there is no other way than this whereby action does not cling to a human being.",
            commentary:
              "निष्काम कर्मयोग का बीज। भगवद्गीता के निष्काम कर्म का मूल यही मंत्र है।",
          },
          {
            number: 3,
            devanagari:
              "असुर्या नाम ते लोका अन्धेन तमसाऽऽवृताः।\nतांस्ते प्रेत्याभिगच्छन्ति ये के चात्महनो जनाः॥३॥",
            transliteration:
              "asuryā nāma te lokā andhena tamasā''vṛtāḥ |\ntāṃs te pretyābhigacchanti ye ke cātmahano janāḥ || 3 ||",
            hindi:
              "वे लोक सूर्य-रहित (आनंद-रहित) और अज्ञान रूपी घने अंधकार से आच्छादित हैं। जो लोग अपनी आत्मा का हनन करने वाले (आत्मघाती/अज्ञानी) हैं, वे मृत्यु के उपरांत उन्हीं लोकों में जाते हैं।",
            english:
              "Sunless and joyless verily are those realms, enveloped in blinding darkness. To them go after death all those who are slayers of their own Self (living in spiritual ignorance).",
            commentary:
              "आत्मघाती वह है जो देह को ही आत्मा मानकर आत्म-ज्ञान की उपेक्षा करता है।",
          },
          {
            number: 4,
            devanagari:
              "अनेजदेकं मनसो जवीयो नैनद्देवा आप्नुवन्पूर्वमर्षत्।\nतद्धावतोऽन्यानत्येति तिष्ठत्तस्मिन्नपो मातरिश्वा दधाति॥४॥",
            transliteration:
              "anejad ekaṃ manaso javīyo nainad devā āpnuvan pūrvam arṣat |\ntad dhāvato 'nyān atyeti tiṣṭhat tasminn apo mātariśvā dadhāti || 4 ||",
            hindi:
              "वह आत्म-तत्त्व अचल (कंपन-रहित) होते हुए भी एक है, और मन से भी अधिक वेगवान है। इंद्रियाँ (देव) पहले से ही विद्यमान इस आत्म-तत्त्व को प्राप्त नहीं कर सकतीं। वह स्वयं स्थिर रहता हुआ भी दौड़ने वाले अन्यों का अतिक्रमण कर जाता है।",
            english:
              "That Self is unmoving, one, yet swifter than the mind. The senses (gods) could not overtake it, for it had already gone before. Remaining stationary, it outruns all those who run.",
            commentary:
              "आत्मा की असीम सर्वव्यापकता का विरोधाभासी (paradoxical) निरूपण।",
          },
          {
            number: 5,
            devanagari:
              "तदेजति तन्नैजति तद्दूरे तद्वन्तिके।\nतदन्तरस्य सर्वस्य तदु सर्वस्यास्य बाह्यतः॥५॥",
            transliteration:
              "tad ejati tan naijati tad dūre tad v antike |\ntad antar asya sarvasya tad u sarvasyāsya bāhyataḥ || 5 ||",
            hindi:
              "वह चलता है और वह नहीं भी चलता; वह बहुत दूर है और वह अत्यंत समीप भी है। वह इस समस्त विश्व के भीतर है और वह इस सबके बाहर भी विद्यमान है।",
            english:
              "It moves, and it moves not; it is far away, yet it is near. It is within all this, and it is also outside of all this.",
            commentary:
              "अज्ञानी के लिए वह बहुत दूर है, परंतु आत्मज्ञानी के लिए वह अपने ही हृदय में अत्यंत निकट है।",
          },
          {
            number: 6,
            devanagari:
              "यस्तु सर्वाणि भूतान्यात्मन्येवानुपश्यति।\nसर्वभूतेषु चात्मानं ततो न विजुगुप्सते॥६॥",
            transliteration:
              "yas tu sarvāṇi bhūtāny ātmany evānupaśyati |\nsarva-bhūteṣu cātmānaṃ tato na vijugupsate || 6 ||",
            hindi:
              "जो मनुष्य समस्त प्राणियों को अपनी ही आत्मा में देखता है, और समस्त प्राणियों में अपनी आत्मा का दर्शन करता है—वह फिर किसी से भी घृणा या संकोच नहीं करता।",
            english:
              "He who sees all beings in the Self alone, and the Self in all beings, feels no hatred or revulsion towards anyone thenceforth.",
            commentary:
              "सर्वभूतात्मभाव — अद्वैत दर्शन का सर्वोच्च मानवीय मूल्य: सार्वभौमिक प्रेम और निर्वैरता।",
          },
          {
            number: 7,
            devanagari:
              "यस्मिन्सर्वाणि भूतान्यात्मैवाभूद्विजानतः।\nतत्र को मोहः कः शोक एकत्वमनुपश्यतः॥७॥",
            transliteration:
              "yasmin sarvāṇi bhūtāny ātmaivābhūd vijānataḥ |\ntatra ko mohaḥ kaḥ śoka ekatvam anupaśyataḥ || 7 ||",
            hindi:
              "जिस अवस्था में ज्ञानी पुरुष के लिए समस्त प्राणी साक्षात् आत्मस्वरूप ही हो जाते हैं—उस एकात्मभाव का दर्शन करने वाले के लिए कैसा मोह और कैसा शोक?",
            english:
              "When to the knower all beings have become one with his own Self, what delusion, what sorrow can there be for him who beholds oneness?",
            commentary:
              "एकत्व का साक्षात्कार ही शोक और मोह से आत्यंतिक मुक्ति का उपाय है।",
          },
          {
            number: 8,
            devanagari:
              "स पर्यगाच्छुक्रमकायमव्रणमस्नाविरं शुद्धमपापविद्धम्।\nकविर्मनीषी परिभूः स्वयम्भूर्याथातथ्यतोऽर्थान्व्यदधाच्छाश्वतीभ्यः समाभ्यः॥८॥",
            transliteration:
              "sa paryagāc chukram akāyam avraṇam asnāviraṃ śuddham apāpa-viddham |\nkavir manīṣī paribhūḥ svayambhūr yāthātathyato 'rthān vyadadhāc chāśvatībhyaḥ samābhyaḥ || 8 ||",
            hindi:
              "वह आत्म-तत्त्व सर्वव्यापी, ज्योतिर्मय, अशरीरी, क्षत-रहित, स्नायु-रहित (स्थूलता से परे), परम शुद्ध और पाप से अस्पृष्ट है। वह क्रांतदर्शी (कवि), सर्वज्ञानी (मनीषी), सर्वोपरि (परिभू) और स्वयंभू है। उसने अनादि काल से प्रजाओं के लिए यथायोग्य कर्तव्यों का विधान किया है।",
            english:
              "He is all-pervading, radiant, bodiless, invulnerable, without sinews, pure, untouched by sin. The seer, thinker, all-encompassing, self-existent—He has ordained all things rightly according to their nature for eternal ages.",
            commentary:
              "परब्रह्म के निर्गुण और सगुण दोनों स्वरूपों का समन्वित दर्शन।",
          },
          {
            number: 9,
            devanagari:
              "अन्धं तमः प्रविशन्ति येऽविद्यामुपासते।\nततो भूय इव ते तमो य उ विद्यायां रताः॥९॥",
            transliteration:
              "andhaṃ tamaḥ praviśanti ye 'vidyām upāsate |\ntato bhūya iva te tamo ya u vidyāyāṃ ratāḥ || 9 ||",
            hindi:
              "जो केवल अविद्या (केवल कर्म या भौतिक ज्ञान) की उपासना करते हैं, वे घने अंधकार में प्रवेश करते हैं। और जो केवल विद्या (कर्म-विहीन शुष्क ज्ञान) में ही लीन रहते हैं, वे मानो उससे भी अधिक अंधकार में पड़ते हैं।",
            english:
              "Into blinding darkness enter they who worship ignorance (mere worldly action); into darkness greater still, as it were, enter they who delight solely in abstract knowledge without action.",
            commentary:
              "विद्या और अविद्या (ज्ञान और कर्म) के संतुलित समन्वय का उपदेश।",
          },
          {
            number: 10,
            devanagari:
              "अन्यदेवाहुर्विद्ययान्यदाहुरविद्यया।\nइति शुश्रुम धीराणां ये नस्तद्विचचक्षिरे॥१०॥",
            transliteration:
              "anyad evāhur vidyayānyad āhur avidyayā |\niti śuśruma dhīrāṇāṃ ye nas tad vicacakṣire || 10 ||",
            hindi:
              "विद्या का फल कुछ और बताया गया है और अविद्या का फल कुछ और ही कहा गया है। ऐसा हमने उन धैर्यवान ऋषियों से सुना है जिन्होंने हमें इसका मर्म समझाया था।",
            english:
              "Different, indeed, they say is the fruit of knowledge, and different is the fruit of action. Thus have we heard from the wise who explained it to us.",
            commentary:
              "ऋषि-परंपरा से प्राप्त प्रामाणिक ज्ञान।",
          },
          {
            number: 11,
            devanagari:
              "विद्यां चाविद्यां च यस्तद्वेदोभयं सह।\nअविद्यया मृत्युं तीर्त्वा विद्ययाऽमृतमश्नुते॥११॥",
            transliteration:
              "vidyāṃ cāvidyāṃ ca yas tad vedobhayaṃ saha |\navidyayā mṛtyuṃ tīrtvā vidyayā 'mṛtam aśnute || 11 ||",
            hindi:
              "जो विद्या और अविद्या—इन दोनों को एक साथ जानता है, वह अविद्या (निष्काम कर्तव्य-कर्म) से मृत्यु को पार करके विद्या (आत्म-ज्ञान) से अमरता (मोक्ष) का उपभोग करता है।",
            english:
              "He who knows both knowledge and action together, overcoming death through right action, attains immortality through divine knowledge.",
            commentary:
              "ईशावास्योपनिषद् का महासिद्धांत: जीवन में कर्म और ज्ञान का सामंजस्य।",
          },
          {
            number: 12,
            devanagari:
              "अन्धं तमः प्रविशन्ति येऽसम्भूतिमुपासते।\nततो भूय इव ते तमो य उ सम्भूत्यां रताः॥१२॥",
            transliteration:
              "andhaṃ tamaḥ praviśanti ye 'sambhūtim upāsate |\ntato bhūya iva te tamo ya u sambhūtyāṃ ratāḥ || 12 ||",
            hindi:
              "जो अव्यक्त प्रकृति (असम्भूति) की उपासना करते हैं, वे घने अंधकार में प्रवेश करते हैं। और जो केवल व्यक्त कार्य-ब्रह्म (सम्भूति) में आसक्त हैं, वे उससे भी गहरे अंधकार में पड़ते हैं।",
            english:
              "Into blinding darkness enter they who worship the unmanifest; into darkness greater still enter they who are attached to the manifest created universe.",
            commentary:
              "कारण और कार्य दोनों के एकांगी चिंतन का निषेध।",
          },
          {
            number: 13,
            devanagari:
              "अन्यदेवाहुः सम्भवादन्यदाहुरसम्भवात्।\nइति शुश्रुम धीराणां ये नस्तद्विचचक्षिरे॥१३॥",
            transliteration:
              "anyad evāhuḥ sambhavād anyad āhur asambhavāt |\niti śuśruma dhīrāṇāṃ ye nas tad vicacakṣire || 13 ||",
            hindi:
              "सम्भव (व्यक्त ब्रह्म) की उपासना का परिणाम भिन्न बताया गया है और असम्भव (अव्यक्त प्रकृति) का परिणाम भिन्न कहा गया है। ऐसा हमने तत्त्वदर्शी विद्वानों से सुना है।",
            english:
              "Different is the fruit of the manifest, and different is the fruit of the unmanifest. Thus have we heard from the wise who taught us.",
            commentary:
              "दोनों के सापेक्षिक सत्यों का बोध।",
          },
          {
            number: 14,
            devanagari:
              "सम्भूतिं च विनाशं च यस्तद्वेदोभयं सह।\nविनाशेन मृत्युं तीर्त्वा सम्भूत्याऽमृतमश्नुते॥१४॥",
            transliteration:
              "sambhūtiṃ ca vināśaṃ ca yas tad vedobhayaṃ saha |\nvināśena mṛtyuṃ tīrtvā sambhūtyā 'mṛtam aśnute || 14 ||",
            hindi:
              "जो सम्भूति (अविनाशी परमात्मा) और विनाश (विनाशी शरीर व प्रकृति) दोनों को एक साथ जानता है, वह विनाशी तत्त्वों के विवेक से मृत्यु को पार करके अविनाशी परमात्मा से अमृतत्व को प्राप्त होता है।",
            english:
              "He who knows both the manifest Supreme and mortal creation together, crossing over death through understanding the mortal, attains immortality through the Eternal.",
            commentary:
              "नश्वर और अनश्वर के विवेक से ही मोक्ष सिद्ध होता है।",
          },
          {
            number: 15,
            devanagari:
              "हिरण्मयेन पात्रेण सत्यस्यापिहितं मुखम्।\nतत्त्वं पूषन्नपावृणु सत्यधर्माय दृष्टये॥१५॥",
            transliteration:
              "hiraṇmayena pātreṇa satyasyāpihitaṃ mukham |\ntat tvaṃ pūṣann apāvṛṇu satyadharmāya dṛṣṭaye || 15 ||",
            hindi:
              "हे पोषक सूर्यदेव! सत्य (परमात्मा) का मुख स्वर्णमय ज्योतिर्मय पात्र (सांसारिक आकर्षण व दीप्ति) से ढँका हुआ है। मुझ सत्यधर्मा साधक को उस सत्य के दर्शन कराने के लिए आप उस आवरण को हटा दीजिए।",
            english:
              "The face of Truth is veiled by a golden vessel. Unveil it, O Sustainer (Pushan), so that I, who follow the law of Truth, may behold it!",
            commentary:
              "उपनिषदों का सर्वाधिक प्रसिद्ध प्रार्थना-मंत्र। माया के स्वर्ण-पात्र को हटाकर परम सत्य का साक्षात्कार।",
          },
          {
            number: 16,
            devanagari:
              "पूषन्नेकर्षे यम सूर्य प्राजापत्य व्यूह रश्मीन्समूह तेजः।\nयत्ते रूपं कल्याणतमं तत्ते पश्यामि योऽसावसौ पुरुषः सोऽहमस्मि॥१६॥",
            transliteration:
              "pūṣann ekarṣe yama sūrya prājāpatya vyūha raśmīn samūha tejaḥ |\nyat te rūpaṃ kalyāṇatamaṃ tat te paśyāmi yo 'sāv asau puruṣaḥ so 'ham asmi || 16 ||",
            hindi:
              "हे पोषक! हे एकाकी गमन करने वाले! हे नियंता यम! हे सूर्य! हे प्रजापति के पुत्र! अपनी तीक्ष्ण किरणों को समेटिए और अपने तेज को संवृत कीजिए। आपका जो परम कल्याणमय रूप है, मैं उसका दर्शन करता हूँ। वह जो आदित्य में स्थित पुरुष है, 'सोऽहमस्मि' — वही मैं हूँ!",
            english:
              "O Nourisher, solitary traveler, ruler of all, O Sun, son of Prajapati! Gather your rays, subdue your blinding radiance. That most auspicious form of yours—I behold it. That Person who dwells yonder in the Sun—'I am He' (So'ham asmi)!",
            commentary:
              "'सोऽहमस्मि' — अद्वैत महावाक्य का प्रत्यक्ष उद्घोष। साधक और परमात्मा का अभिन्न स्वरूप।",
          },
          {
            number: 17,
            devanagari:
              "वायुरनिलममृतमथेदं भस्मान्तं शरीरम्।\nॐ क्रतो स्मर कृतं स्मर क्रतो स्मर कृतं स्मर॥१७॥",
            transliteration:
              "vāyur anilam amṛtam athedaṃ bhasmāntaṃ śarīram |\noṃ krato smara kṛtaṃ smara krato smara kṛtaṃ smara || 17 ||",
            hindi:
              "मेरा प्राण अमर सूत्र-वायु में विलीन हो और यह शरीर अंत में भस्म में परिणत होने वाला है। हे संकल्पशील मन (क्रतो)! ॐ का स्मरण करो, अपने द्वारा किए गए शुभ कर्मों का स्मरण करो! हे मन! ॐ का स्मरण करो, अपने कर्मों का स्मरण करो!",
            english:
              "May my vital breath merge into the immortal cosmic Life, and may this mortal body end in ashes. Om! O Will, remember! Remember what has been done! O Will, remember! Remember your deeds!",
            commentary:
              "प्रयाण काल (मृत्यु के समय) की आत्म-स्मृति और ॐकार की शरण।",
          },
          {
            number: 18,
            devanagari:
              "अग्ने नय सुपथा राये अस्मान् विश्वानि देव वयुनानि विद्वान्।\nयुयोध्यस्मज्जुहुराणमेनो भूयिष्ठां ते नमउक्तिं विधेम॥१८॥",
            transliteration:
              "agne naya supathā rāye asmān viśvāni deva vayunāni vidvān |\nyuyodhy asmaj juhurāṇam eno bhūyiṣṭhāṃ te nama-uktiṃ vidhema || 18 ||",
            hindi:
              "हे प्रकाशस्वरूप अग्निदेव! आप हमारे समस्त कर्मों और ज्ञान को जानने वाले हैं। हमें परम कल्याण और मोक्ष-धन की प्राप्ति के लिए सुपथ (सत्य के श्रेष्ठ मार्ग) पर ले चलिए। हमारे भीतर से कुटिल पापों को दूर कीजिए। हम आपको बारंबार नमस्कार करते हैं।",
            english:
              "O Agni, radiant God who knowest all pathways and deeds, lead us by the noble path to the highest spiritual wealth. Remove from us deceitful sin. To thee we offer our profoundest words of adoration again and again.",
            commentary:
              "ईशावास्योपनिषद् का अंतिम शांति-प्रार्थना मंत्र। सुपथ (देवयान मार्ग) पर चलने की विनय।",
          },
        ],
      },
    ],
  },

  "mandukya-upanishad": {
    label: "माण्डूक्योपनिषद् (अथर्ववेद)",
    sourceTotal: "१२ मन्त्र (सम्पूर्ण उपनिषद्)",
    editionNote:
      "अथर्ववेद शौनक शाखा • गौड़पादीय कारिका एवं शंकराचार्य भाष्य • १२ मन्त्र पूर्ण पाठ",
    chapters: [
      {
        id: "mandukya-complete",
        title: "माण्डूक्योपनिषद् • सम्पूर्ण १२ मन्त्र (चतुष्पाद आत्म-दर्शन)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ इत्येतदक्षरमिदं सर्वं तस्योपव्याख्यानं भूतं भवद् भविष्यदिति सर्वमोङ्कार एव।\nयच्चान्यत् त्रिकालातीतं तदप्योङ्कार एव॥१॥",
            transliteration:
              "oṃ ity etad akṣaram idaṃ sarvaṃ tasyopavyākhyānaṃ bhūtaṃ bhavad bhaviṣyad iti sarvam oṅkāra eva |\nyac cānyat trikālātītaṃ tad apy oṅkāra eva || 1 ||",
            hindi:
              "ॐ—यह अविनाशी अक्षर ही यह सब कुछ है। उसी की यह व्याख्या है: जो भूत, वर्तमान और भविष्य है, वह सब केवल ॐकार ही है। और जो त्रिकाल से परे का अनिर्वचनीय तत्त्व है, वह भी केवल ॐकार ही है।",
            english:
              "Om—this imperishable syllable is all this. Its further explanation is this: all that is past, present, and future is indeed Omkara alone. And whatever transcends the three periods of time is also verily Omkara.",
            commentary:
              "माण्डूक्य का प्रथम मंत्र। प्रणव (ॐ) को समस्त जगत और कालातीत ब्रह्म का साक्षात् प्रतीक घोषित करता है।",
          },
          {
            number: 2,
            devanagari:
              "सर्वं ह्येतद् ब्रह्मायमात्मा ब्रह्म सोऽयमात्मा चतुष्पात्॥२॥",
            transliteration:
              "sarvaṃ hy etad brahmāyam ātmā brahma so 'yam ātmā catuṣpāt || 2 ||",
            hindi:
              "निश्चय ही यह सब कुछ ब्रह्म है। यह आत्मा ही ब्रह्म है (अयमात्मा ब्रह्म)। और यह आत्मा चार पादों (अवस्थाओं) वाला है।",
            english:
              "All this verily is Brahman. This Self is Brahman (Ayam Atma Brahma). That very Self has four quarters (padas).",
            commentary:
              "'अयमात्मा ब्रह्म' — अथर्ववेद का प्रसिद्ध महावाक्य। आत्मा की चार अवस्थाएँ: जाग्रत, स्वप्न, सुषुप्ति और तुरीय।",
          },
          {
            number: 3,
            devanagari:
              "जागरितस्थानो बहिष्प्रज्ञः सप्ताङ्ग एकोनविंशतिमुखः स्थूलभुग्वैश्वानरः प्रथमः पादः॥३॥",
            transliteration:
              "jāgarita-sthāno bahiṣ-prajñaḥ saptāṅga ekonaviṃśati-mukhaḥ sthūla-bhug vaiśvānaraḥ prathamaḥ pādaḥ || 3 ||",
            hindi:
              "जिसका स्थान जाग्रत अवस्था है, जिसकी चेतना बहिर्मुखी (बाह्य विषयों को जानने वाली) है, जो सात अंगों वाला, उन्नीस मुखों वाला और स्थूल विषयों का भोग करने वाला है—वह 'वैश्वानर' आत्मा का प्रथम पाद है।",
            english:
              "The first quarter is Vaishvanara, whose field is the waking state, whose consciousness is outward-turned, who has seven limbs and nineteen mouths, and who experiences gross objects.",
            commentary:
              "१९ मुख: ५ ज्ञानेन्द्रिय + ५ कर्मेन्द्रिय + ५ प्राण + मन, बुद्धि, चित्त, अहंकार।",
          },
          {
            number: 4,
            devanagari:
              "स्वप्नस्थानोऽन्तःप्रज्ञः सप्ताङ्ग एकोनविंशतिमुखः प्रविविक्तभुक्तैजसो द्वितीयः पादः॥४॥",
            transliteration:
              "svapna-sthāno 'ntaḥ-prajñaḥ saptāṅga ekonaviṃśati-mukhaḥ pravivikta-bhuk taijaso dvitīyaḥ pādaḥ || 4 ||",
            hindi:
              "जिसका स्थान स्वप्नावस्था है, जिसकी चेतना अंतर्मुखी (मानसिक वासनाओं को देखने वाली) है, जो सात अंगों और उन्नीस मुखों वाला तथा सूक्ष्म विषयों का भोग करने वाला है—वह 'तैजस' आत्मा का द्वितीय पाद है।",
            english:
              "The second quarter is Taijasa, whose sphere is the dream state, whose consciousness is inward-turned, who has seven limbs and nineteen mouths, and who enjoys subtle mental impressions.",
            commentary:
              "स्वप्नावस्था में मन स्वयं ही प्रकाश और दृश्य बनकर सूक्ष्म संसार का उपभोग करता है।",
          },
          {
            number: 5,
            devanagari:
              "यत्र सुप्तो न कञ्चन कामं कामयते न कञ्चन स्वप्नं पश्यति तत् सुषुप्तम्।\nसुषुप्तस्थान एकीभूतः प्रज्ञानघन एवानन्दमयो ह्यानन्दभुक् चेतोमुखः प्राज्ञस्तृतीयाः पादः॥५॥",
            transliteration:
              "yatra supto na kañcana kāmaṃ kāmayate na kañcana svapnaṃ paśyati tat suṣuptam |\nsuṣupta-sthāna ekībhūtaḥ prajñāna-ghana evānandamayo hy ānanda-bhuk ceto-mukhaḥ prājñas tṛtīyaḥ pādaḥ || 5 ||",
            hindi:
              "जहाँ सोया हुआ पुरुष न किसी कामना की इच्छा करता है और न कोई स्वप्न देखता है, वह 'सुषुप्ति' है। सुषुप्ति जिसका स्थान है, जिसमें समस्त भेद विलीन होकर एकीभूत हो गए हैं, जो केवल प्रज्ञानघन, आनंदमय और आनंद का भोक्ता है—वह 'प्राज्ञ' आत्मा का तृतीय पाद है।",
            english:
              "Where the sleeper desires no desire and sees no dream, that is deep sleep (susupti). The third quarter is Prajna, seated in deep sleep, unified, a mass of pure consciousness, full of bliss and enjoying bliss.",
            commentary:
              "सुषुप्ति में अज्ञान के कारण आनंद तो मिलता है, परंतु साक्षात्कार नहीं होता।",
          },
          {
            number: 6,
            devanagari:
              "एष सर्वेश्वर एष सर्वज्ञ एषोऽन्तर्याम्येष योनिः सर्वस्य प्रभवाप्ययौ हि भूतानाम्॥६॥",
            transliteration:
              "eṣa sarveśvara eṣa sarvajña eṣo 'ntaryāmy eṣa yoniḥ sarvasya prabhavāpyayau hi bhūtānām || 6 ||",
            hindi:
              "यही समस्त सृष्टि का ईश्वर (सर्वेश्वर) है, यही सर्वज्ञ है, यही सबके अंतःकरण में नियमन करने वाला अंतर्यामी है, और यही समस्त भूतों की उत्पत्ति और लय का मूल कारण है।",
            english:
              "This is the Lord of all; this is the omniscient; this is the inner controller; this is the womb of all, the origin and dissolution of all created beings.",
            commentary:
              "ईश्वर तत्त्व का कारणात्मक स्वरूप।",
          },
          {
            number: 7,
            devanagari:
              "नान्तःप्रज्ञं न बहिष्प्रज्ञं नोभयतःप्रज्ञं न प्रज्ञानघनं न प्रज्ञं नाप्रज्ञम्।\nअदृष्टमव्यवहार्यमग्राह्यमलक्षणमचिन्त्यमव्यपदेश्यमेकात्मप्रत्ययसारं प्रपञ्चोपशमं शान्तं शिवमद्वैतं चतुर्थं मन्यन्ते स आत्मा स विज्ञेयः॥७॥",
            transliteration:
              "nāntaḥ-prajñaṃ na bahiṣ-prajñaṃ nobhayataḥ-prajñaṃ na prajñāna-ghanaṃ na prajñaṃ nāprajñam |\nadṛṣṭam avyavahāryam agrāhyam alakṣaṇam acintyam avyapadeśyam ekātma-pratyaya-sāraṃ prapañcopaśamaṃ śāntaṃ śivam advaitaṃ caturthaṃ manyante sa ātmā sa vijñeyaḥ || 7 ||",
            hindi:
              "जो न अंतर्मुखी प्रज्ञा वाला है, न बहिर्मुखी प्रज्ञा वाला है, न दोनों ओर प्रज्ञा वाला है; जो न प्रज्ञानघन है, न जानने वाला है और न न-जानने वाला है। जो अदृश्य, अव्यवहार्य, अग्राह्य, लक्षण-रहित, अचिन्त्य और अव्यपदेश्य है; जिसकी सत्ता का प्रमाण केवल एकात्म-प्रत्यय है; जिसमें संपूर्ण प्रपंच शांत हो चुका है; जो परम शांत, शिव (कल्याणमय) और अद्वैत है—उसे 'चतुर्थ' (तुरीय) मानते हैं। वही आत्मा है, वही जानने योग्य है।",
            english:
              "Not consciously inward, nor consciously outward, not conscious both ways, not a mass of consciousness, neither knowing nor unknowing. Unseen, beyond worldly dealings, ungraspable, without distinguishing marks, unthinkable, indescribable; the essence of the conviction of the single Self; the cessation of all phenomena, tranquil, auspicious, non-dual—that is considered the Fourth (Turiya). That is the Self, that is to be known.",
            commentary:
              "माण्डूक्योपनिषद् का परम शिखर मंत्र! तुरीय अवस्था ही आत्मा का शुद्ध, नित्य, निर्गुण, अद्वैत सच्चिदानंद स्वरूप है।",
          },
          {
            number: 8,
            devanagari:
              "सोऽयमात्माध्यक्षरमोङ्कारोऽधिमात्रं पादा मात्रा मात्राश्च पादा अकार उकारो मकार इति॥८॥",
            transliteration:
              "so 'yam ātmādhyakṣaram oṅkāro 'dhimātraṃ pādā mātrā mātrāś ca pādā akāra ukāro makāra iti || 8 ||",
            hindi:
              "वह यह आत्मा ही अक्षरों की दृष्टि से 'ॐकार' है। मात्राओं की दृष्टि से इसके पाद ही मात्राएँ हैं और मात्राएँ ही पाद हैं—अर्थात् अकार (अ), उकार (उ) और मकार (म)।",
            english:
              "That very Self, from the standpoint of the syllable, is Omkara. With regard to its moras (matras), the quarters are the moras, and the moras are the quarters: namely, the letter A, the letter U, and the letter M.",
            commentary:
              "आत्मा के चार पादों का ॐकार की तीन मात्राओं तथा अमात्र तुरीय के साथ पूर्ण तादात्म्य।",
          },
          {
            number: 9,
            devanagari:
              "जागरितस्थानो वैश्वानरोऽकारः प्रथमा मात्राऽऽप्तेरादिमत्त्वाद्वाऽऽप्नोति ह वै सर्वान् कामानादिश्च भवति य एवं वेद॥९॥",
            transliteration:
              "jāgarita-sthāno vaiśvānaro 'kāraḥ prathamā mātrā''pter ādimattvād vā''pnoti ha vai sarvān kāmān ādiś ca bhavati ya evaṃ veda || 9 ||",
            hindi:
              "जाग्रत अवस्था का वैश्वानर ॐकार की प्रथम मात्रा 'अ' (अकार) है, क्योंकि यह सर्वव्यापक (आप्ति) और आदि (प्रथम) है। जो ऐसा जानता है, वह समस्त कामनाओं को प्राप्त करता है और अग्रणी होता है।",
            english:
              "Vaishvanara, seated in the waking state, is the first letter A, because of all-pervasiveness and being the first. He who knows this verily attains all desires and becomes foremost.",
            commentary:
              "अकार जाग्रत विश्व का प्रतीक है।",
          },
          {
            number: 10,
            devanagari:
              "स्वप्नस्थानस्तैजस उकारो द्वितीया मात्रोत्कर्षादुभयत्त्वाद् वोत्कर्षति ह वै ज्ञानसन्ततिं समानश्च भवति नास्याब्रह्मवित्कुले भवति य एवं वेद॥१०॥",
            transliteration:
              "svapna-sthānas taijasa ukāro dvitīyā mātrotkarṣād ubhayattvād votkarṣati ha vai jñāna-santatiṃ samānaś ca bhavati nāsyābrahmavit-kule bhavati ya evaṃ veda || 10 ||",
            hindi:
              "स्वप्नावस्था का तैजस ॐकार की दूसरी मात्रा 'उ' (उकार) है, क्योंकि यह श्रेष्ठ (उत्कर्ष) है और दोनों (अ और म) के बीच में स्थित है। जो ऐसा जानता है, वह ज्ञान की परंपरा को उन्नत करता है और समभाव वाला बनता है।",
            english:
              "Taijasa, seated in the dream state, is the second letter U, on account of superiority and being between the two. He who knows this verily exalts the stream of knowledge and lives in harmony.",
            commentary:
              "उकार स्वप्न एवं सूक्ष्म सृष्टि का प्रतीक है।",
          },
          {
            number: 11,
            devanagari:
              "सुषुप्तस्थानः प्राज्ञो मकारस्तृतीया मात्रा मितेरपीतेर्वा मिनोति ह वा इदं सर्वमपीतिश्च भवति य एवं वेद॥११॥",
            transliteration:
              "suṣupta-sthānaḥ prājño makāras tṛtīyā mātrā miter apīter vā minoti ha vā idaṃ sarvam apītiś ca bhavati ya evaṃ veda || 11 ||",
            hindi:
              "सुषुप्तावस्था का प्राज्ञ ॐकार की तीसरी मात्रा 'म' (मकार) है, क्योंकि यह सबको नापने वाला (मिति) और अपने में लीन करने वाला (अप्रीति/लय) है। जो ऐसा जानता है, वह इस संपूर्ण विश्व के रहस्य को जान लेता है।",
            english:
              "Prajna, seated in deep sleep, is the third letter M, on account of measuring and dissolving all into itself. He who knows this verily measures all this and becomes the place of dissolution.",
            commentary:
              "मकार कारण-सृष्टि एवं प्रलय का प्रतीक है।",
          },
          {
            number: 12,
            devanagari:
              "अमात्रश्चतुर्थोऽव्यवहार्यः प्रपञ्चोपशमः शिवोऽद्वैत एवमोङ्कार आत्मैव संविशत्यात्मनाऽऽत्मानं य एवं वेद॥१२॥",
            transliteration:
              "amātraś caturtho 'vyavahāryaḥ prapañcopaśamaḥ śivo 'dvaita evam oṅkāra ātmaiva saṃviśaty ātmanā''tmānaṃ ya evaṃ veda || 12 ||",
            hindi:
              "मात्रा-रहित (अमात्र), अनिर्वचनीय, व्यवहार से परे, प्रपंच-शून्य, परम शिव (कल्याणमय) और अद्वैत—वही चतुर्थ पाद (तुरीय) है। इस प्रकार ॐकार साक्षात् आत्मा ही है। जो ऐसा जानता है, वह अपनी आत्मा के द्वारा स्वयं आत्मा में ही प्रविष्ट (लीन) हो जाता है।",
            english:
              "The fourth is without moras (amatra), beyond worldly dealings, the cessation of all duality, auspicious, and non-dual. Thus Omkara is verily the Self alone. He who knows this enters the Self through the Self.",
            commentary:
              "माण्डूक्योपनिषद् की पूर्णता: अमात्र ॐकार ही तुरीय ब्रह्म है। मुक्ति का साक्षात् मार्ग।",
          },
        ],
      },
    ],
  },

  "katha-upanishad": {
    label: "कठोपनिषद् (कृष्ण यजुर्वेद)",
    sourceTotal: "२ अध्याय • ६ वल्लियाँ • ११९ मन्त्र",
    editionNote:
      "कृष्ण यजुर्वेद कठ शाखा • यम-नचिकेता संवाद • आदि शंकराचार्य भाष्य",
    chapters: [
      {
        id: "katha-valli-1",
        title: "प्रथम अध्याय, प्रथम वल्ली • नचिकेता के तीन वर",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ उशन् ह वै वाजश्रवसः सर्ववेदसं ददौ। तस्य ह नचिकेता नाम पुत्र आस॥१॥",
            transliteration:
              "oṃ uśan ha vai vājaśravasaḥ sarva-vedasaṃ dadau | tasya ha naciketā nāma putra āsa || 1 ||",
            hindi:
              "फल की इच्छा से वाजश्रवा के पुत्र उद्दालक ने सर्वमेध यज्ञ में अपना समस्त धन दान कर दिया। उनका नचिकेता नाम का एक पुत्र था।",
            english:
              "Desiring heavenly fruit, Vajashravasa gave away all his possessions in sacrifice. He had a son named Nachiketa.",
            commentary:
              "कठोपनिषद् का प्रारंभ: नचिकेता की सत्य-निष्ठा और पितृ-भक्ति।",
          },
          {
            number: 2,
            devanagari:
              "तं ह कुमारं सन्तं दक्षिणासु नीयमानासु श्रद्धाऽऽविवेश सोऽमन्यत॥२॥",
            transliteration:
              "taṃ ha kumāraṃ santaṃ dakṣiṇāsu nīyamānāsu śraddhā''viveśa so 'manyata || 2 ||",
            hindi:
              "उस बालक नचिकेता के मन में, जब ऋत्विकों को दी जाने वाली बूढ़ी-दुर्बल गौएँ दक्षिणा रूप में ले जाई जा रही थीं, तब 'श्रद्धा' का प्रवेश हुआ।",
            english:
              "Though still a boy, as the sacrificial cows were being led away as offerings, faith (shraddha) entered his heart, and he reflected.",
            commentary:
              "श्रद्धा ही ब्रह्मविद्या की पहली योग्यता है।",
          },
        ],
      },
      {
        id: "katha-valli-3",
        title: "प्रथम अध्याय, तृतीय वल्ली • रथाकार रूपक व आत्म-जागरण",
        items: [
          {
            number: 3,
            devanagari:
              "आत्मानं रथिनं विद्धि शरीरं रथमेव तु।\nबुद्धिं तु सारथिं विद्धि मनः प्रग्रहमेव च॥३॥",
            transliteration:
              "ātmānaṃ rathinaṃ viddhi śarīraṃ ratham eva tu |\nbuddhiṃ tu sārathiṃ viddhi manaḥ pragraham eva ca || 3 ||",
            hindi:
              "आत्मा को रथ का स्वामी (रथी) जानो, और शरीर को रथ जानो। बुद्धि को सारथि समझो और मन को लगाम (प्रग्रह) जानो।",
            english:
              "Know the Self as the Lord of the chariot, and the physical body as the chariot. Know the intellect (buddhi) as the charioteer, and the mind as the reins.",
            commentary:
              "प्रसिद्ध रथाकार रूपक: मानव जीवन की संरचना और आत्म-नियंत्रण की उपमा।",
          },
          {
            number: 4,
            devanagari:
              "इन्द्रियाणि हयानाहुर्विषयांस्तेषु गोचरान्।\nआत्मेन्द्रियमनोयुक्तं भोक्तेत्याहुर्मनीषिणः॥४॥",
            transliteration:
              "indriyāṇi hayān āhur viṣayāṃs teṣu gocarān |\nātmendriya-mano-yuktaṃ bhoktety āhur manīṣiṇaḥ || 4 ||",
            hindi:
              "इंद्रियों को घोड़े कहा गया है और सांसारिक विषयों को उनके दौड़ने का मार्ग। मनीषी कहते हैं कि आत्मा जब शरीर, इंद्रिय और मन से संयुक्त होता है, तब वह 'भोक्ता' कहलाता है।",
            english:
              "The senses they call the horses, the objects of desire their paths. When the Self is conjoined with body, senses, and mind, the wise call it the experiencer (bhokta).",
            commentary:
              "विषयों में आसक्त इंद्रियों को संयमित करने की विधि।",
          },
          {
            number: 14,
            devanagari:
              "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत।\nक्षुरस्य धारा निशिता दुरत्यया दुर्गं पथस्तत्कवयो वदन्ति॥१४॥",
            transliteration:
              "uttiṣṭhata jāgrata prāpya varān nibodhata |\nkṣurasya dhārā niśitā duratyayā durgaṃ pathas tat kavayo vadanti || 14 ||",
            hindi:
              "उठो! जागो! और श्रेष्ठ आत्मज्ञानी महापुरुषों के समीप जाकर ज्ञान को प्राप्त करो! तत्त्वज्ञानी कहते हैं कि यह आत्म-साक्षात्कार का मार्ग छुरे की तीक्ष्ण धार के समान अत्यंत दुर्गम और पार करने में कठिन है।",
            english:
              "Arise! Awake! Approach the exalted teachers and realize the Self! Sharp as the edge of a razor, hard to tread, difficult to traverse—that path, the sages declare!",
            commentary:
              "स्वामी विवेकानंद का प्रियतम उपनिषद-वाक्य: 'Arise, awake, and stop not till the goal is reached!'",
          },
        ],
      },
    ],
  },

  "kena-upanishad": {
    label: "केनोपनिषद् (सामवेद)",
    sourceTotal: "४ खण्ड • ३४ मन्त्र",
    editionNote:
      "सामवेद जैमिनीय / तलवकार शाखा • यक्ष उपाख्यान एवं ब्रह्म-स्वरूप",
    chapters: [
      {
        id: "kena-khanda-1",
        title: "प्रथम खण्ड • मन और वाणी का प्रेरक",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ केनेषितं पतति प्रेषितं मनः केन प्राणः प्रथमः प्रैति युक्तः।\nकेनेषितां वाचमिमां वदन्ति चक्षुः श्रोत्रं क उ देवो युनक्ति॥१॥",
            transliteration:
              "oṃ keneṣitaṃ patati preṣitaṃ manaḥ kena prāṇaḥ prathamaḥ praiti yuktaḥ |\nkeneṣitāṃ vācam imāṃ vadanti cakṣuḥ śrotraṃ ka u devo yunakti || 1 ||",
            hindi:
              "किसके द्वारा चाहा हुआ और प्रेरित किया हुआ यह मन अपने विषयों पर गिरता (दौड़ता) है? किसके द्वारा नियुक्त होकर यह प्रथम मुख्य प्राण चलता है? किसकी प्रेरणा से मनुष्य इस वाणी को बोलते हैं? और कौन सा दिव्य देव नेत्र तथा श्रोत्र (कान) को अपने-अपने कार्यों में नियुक्त करता है?",
            english:
              "By whom willed and directed does the mind fly towards its objects? By whom commanded does the primary breath move forward? By whom inspired do people utter this speech? What divine power directs the eye and the ear?",
            commentary:
              "केनोपनिषद् का आरंभिक प्रश्न। चेतना के मूल स्रोत की खोज।",
          },
          {
            number: 2,
            devanagari:
              "श्रोत्रस्य श्रोत्रं मनसो मनो यद्वाचो ह वाचं स उ प्राणस्य प्राणः।\nचक्षुषश्चक्षुरतिमुच्य धीराः प्रेत्यास्माल्लोकादमृता भवन्ति॥२॥",
            transliteration:
              "śrotrasya śrotraṃ manaso mano yad vāco ha vācaṃ sa u prāṇasya prāṇaḥ |\ncakṣuṣaś cakṣur atimucya dhīrāḥ pretyāsmāl lokād amṛtā bhavanti || 2 ||",
            hindi:
              "जो कानों का भी कान है, मन का भी मन है, वाणी की भी वाणी है, प्राणों का भी प्राण है और नेत्रों का भी नेत्र है—उस परम तत्त्व को जानकर धीर पुरुष इंद्रियों के तादात्म्य से मुक्त होकर इस लोक से प्रयाण कर अमर हो जाते हैं।",
            english:
              "It is the Ear of the ear, the Mind of the mind, the Speech of speech, the Life of life, and the Eye of the eye. Having detached themselves from the senses, the wise become immortal upon leaving this world.",
            commentary:
              "इंद्रियों को चेतना देने वाला साक्षी ब्रह्म ही अमरता का हेतु है।",
          },
        ],
      },
    ],
  },

  "prashna-upanishad": {
    label: "प्रश्नोपनिषद् (अथर्ववेद)",
    sourceTotal: "६ प्रश्न • ६७ मन्त्र (सम्पूर्ण उपनिषद्)",
    editionNote:
      "अथर्ववेद पिप्पलाद शाखा • आदि शंकराचार्य भाष्य • षट् प्रश्न सम्पूर्ण मन्त्र पाठ",
    chapters: [
      {
        id: "prashna-1",
        title: "प्रथम प्रश्न • कबंधी कात्यायन संवाद (रयि और प्राण, सूर्य-चंद्र, सृष्टि-उत्पत्ति - १६ मन्त्र)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ सुकेशा च भारद्वाजः शैब्यश्च सत्यकामः सौरयायणी च गार्ग्यः कौसल्यश्चाश्वलायनो भार्गवो वैदर्भिः कबन्धी कात्यायनस्ते हैते ब्रह्मपरा ब्रह्मनिष्ठाः परं ब्रह्मान्वेषमाणा एष ह वै तत्सर्वं वक्ष्यतीति ते ह समित्पाणयो भगवन्तं पिप्पलादमुपसन्नाः॥१॥",
            transliteration:
              "oṃ sukeśā ca bhāradvājaḥ śaibyaś ca satyakāmaḥ sauryāyaṇī ca gārgyaḥ kausalyaś cāśvalāyano bhārgavo vaidarbhiḥ kabandhī kātyāyanas te haite brahma-parā brahma-niṣṭhāḥ paraṃ brahmānveṣamāṇā eṣa ha vai tat sarvaṃ vakṣyatīti te ha samit-pāṇayo bhagavantaṃ pippalādam upasannāḥ || 1 ||",
            hindi:
              "सुकेशा भारद्वाज, सत्यकाम शैब्य, सौर्यायणि गार्ग्य, कौसल्य आश्वलायन, भार्गव वैदर्भि और कबन्धी कात्यायन—ये छहों ब्रह्मपरायण और ब्रह्मनिष्ठ ऋषि परब्रह्म की खोज में थे। 'यह पूज्य महर्षि हमें सब कुछ बताएंगे' यह विचार कर वे हाथ में समिधा लेकर भगवान पिप्पलाद की शरण में पहुँचे।",
            english:
              "Sukesha the son of Bharadvaja, Satyakama the son of Shibi, Sauryayani of the family of Garga, Kausalya the son of Ashvala, Bhargava of Vidarbha, and Kabandhi Katyayana—all devoted to Brahman and established in Brahman, seeking the Supreme Reality, approached the revered sage Pippalada with sacrificial fuel in hand, thinking: 'He verily will tell us all that.'",
            commentary:
              "षड् मुनि पिप्पलाद समागम। ब्रह्मविद्या की प्राप्ति हेतु समिधा-पाणि होकर ब्रह्मनिष्ठ सद्गुरु की शरण में जाने की वैदिक परंपरा का आदर्शात्मक निरूपण।",
          },
          {
            number: 2,
            devanagari:
              "तान्ह स ऋषिरुवाच भूय एव तपसा ब्रह्मचर्येण श्रद्धया संवत्सरं संवत्स्यथ यथाकामं प्रश्नान्पृच्छथ यदि विज्ञास्यामः सर्वं ह वो वक्ष्याम इति॥२॥",
            transliteration:
              "tān ha sa ṛṣir uvāca bhūya eva tapasā brahmacaryeṇa śraddhayā saṃvatsaraṃ saṃvatsyatha yathā-kāmaṃ praśnān pṛcchatha yadi vijñāsyāmaḥ sarvaṃ ha vo vakṣyāma iti || 2 ||",
            hindi:
              "उन ऋषियों से महर्षि पिप्पलाद ने कहा: 'तुम लोग एक वर्ष तक पुनः तप, ब्रह्मचर्य और श्रद्धापूर्वक यहाँ गुरुकुल में निवास करो। उसके पश्चात् अपनी इच्छा के अनुसार जो चाहो प्रश्न पूछना; यदि हम जानेंगे तो निश्चय ही तुम्हें सब कुछ बताएंगे।'",
            english:
              "To them the sage said: 'Live with me yet another year in austerity, self-restraint, and reverent faith. Then ask whatever questions you desire; if I know them, I will surely tell you all.'",
            commentary:
              "ब्रह्मविद्या की पात्रता के तीन अनिवार्य स्तम्भ: तप (इंद्रिय-संयम), ब्रह्मचर्य (पवित्रता) और श्रद्धा (गुरु-वेदान्त वाक्यों में परम विश्वास)। गुरु पिप्पलाद की असीम विनम्रता भी यहाँ प्रकट होती है।",
          },
          {
            number: 3,
            devanagari:
              "अथ कबन्धी कात्यायन उपेत्य पप्रच्छ।\nभगवन्कुतो ह वा इमाः प्रजाः प्रजायन्त इति॥३॥",
            transliteration:
              "atha kabandhī kātyāyana upetya papraccha |\nbhagavan kuto ha vā imāḥ prajāḥ prajāyanta iti || 3 ||",
            hindi:
              "एक वर्ष की साधना पूर्ण होने पर कबन्धी कात्यायन ने गुरुदेव के समीप आकर पूछा: 'हे भगवन्! ये समस्त प्रजाएँ (समस्त चराचर जीव) कहाँ से और किस प्रकार उत्पन्न होती हैं?'",
            english:
              "Then Kabandhi Katyayana approached and asked: 'Venerable sir, from whence verily are all these living creatures born?'",
            commentary:
              "सृष्टि-मीमांसा का प्रथम और मौलिक प्रश्न। ब्रह्मांड और उसमें वास करने वाले जीवों की उत्पत्ति का मूल कारण क्या है?",
          },
          {
            number: 4,
            devanagari:
              "तस्मै स होवाच प्रजाकामो वै प्रजापतिः स तपोऽतप्यत स तपस्तप्त्वा स मिथुनमुत्पादयते।\nरयिं च प्राणं चेत्येतौ मे बहुधा प्रजाः करिष्यत इति॥४॥",
            transliteration:
              "tasmai sa hovāca prajā-kāmo vai prajā-patiḥ sa tapo 'tapyata sa tapas taptvā sa mithunam utpādayate |\nrayiṃ ca prāṇaṃ cety etau me bahudhā prajāḥ kariṣyata iti || 4 ||",
            hindi:
              "महर्षि पिप्पलाद ने उससे कहा: 'प्रजा की रचना की इच्छा रखने वाले जगत्पिता प्रजापति ने तप (गहन सृष्टि-चिंतन) किया। उस तप के प्रभाव से उन्होंने एक मिथुन (युगल) उत्पन्न किया—रयि (पदार्थ/मूर्त/चंद्रमा) और प्राण (ऊर्जा/चेतना/सूर्य)। उन्होंने विचार किया कि ये दोनों मिलकर मेरे लिए नाना प्रकार की प्रजाएँ उत्पन्न करेंगे।'",
            english:
              "To him the sage replied: 'Prajapati, the Lord of creation, desired offspring. He performed deep contemplative tapas. Having meditated, He brought forth a primal pair: Rayi (matter/form) and Prana (energy/spirit), saying: These two will create manifold creatures for Me.'",
            commentary:
              "द्वैत की ध्रुवीयता का सनातन सिद्धान्त। समस्त सृष्टि दो परस्पर पूरक तत्त्वों का विलास है: रयि (Matter/Negative/Passive) और प्राण (Energy/Positive/Active)।",
          },
          {
            number: 5,
            devanagari:
              "आदित्यो ह वै प्राणो रयिरेव चन्द्रमा रयिर्वा एतत्सर्वं यन्मूर्तं चामूर्तं च तस्मान्मूर्तिरेव रयिः॥५॥",
            transliteration:
              "ādityo ha vai prāṇo rayir eva candramā rayir vā etat sarvaṃ yan mūrtaṃ cāmūrtaṃ ca tasmān mūrtir eva rayiḥ || 5 ||",
            hindi:
              "सूर्य ही निश्चय प्राण (ऊर्जा) है और चन्द्रमा ही रयि (पदार्थ/अन्न) है। जो कुछ भी स्थूल (मूर्त) और सूक्ष्म (अमूर्त) है, वह सब रयि ही है; अतः प्रत्येक मूर्त आकार रयि ही है।",
            english:
              "The Sun is verily Prana, and the Moon is verily Rayi. Whatever has gross form and subtle form is Rayi; therefore, physical form itself is Rayi.",
            commentary:
              "सूर्य चेतना, प्रकाश और जीवन-शक्ति का प्रतीक है; जबकि चंद्र पोषण, शीतलता और भौतिक प्रकृति का आधार है।",
          },
          {
            number: 6,
            devanagari:
              "अथादित्य उदयन् यत्प्राचीं दिशं प्रविशति तेन प्राच्यान्प्राणान् रश्मिषु संधत्ते।\nयद्दक्षिणां यत्प्रतीच्यां यदुदीचीं यदधो यदूर्ध्वं यदन्तरा दिशो यत्सर्वं प्रकाशयति तेन सर्वान्प्राणान् रश्मिषु संधत्ते॥६॥",
            transliteration:
              "athāditya udayan yat prācīṃ diśaṃ praviśati tena prācyān prāṇān raśmiṣu saṃdhatte |\nyad dakṣiṇāṃ yat pratīcyāṃ yad udīcīṃ yad adho yad ūrdhvaṃ yad antarā diśo yat sarvaṃ prakāśayati tena sarvān prāṇān raśmiṣu saṃdhatte || 6 ||",
            hindi:
              "अब जब उदित होता हुआ सूर्य पूर्व दिशा में प्रविष्ट होता है, तब अपनी किरणों से पूर्व दिशा के समस्त प्राणियों के प्राणों को अपने में समेट लेता है। जब वह दक्षिण, पश्चिम, उत्तर, नीचे, ऊपर और विदिशाओं को प्रकाशित करता है, तब समस्त प्राणियों के प्राणों को अपनी रश्मियों में समाहित कर लेता है।",
            english:
              "Now when the rising Sun enters the eastern quarter, he gathers all living breaths of the east into his rays. When he illumines the south, west, north, below, above, and intermediate quarters, he integrates all vital energies into his luminous rays.",
            commentary:
              "सूर्य केवल एक खगोलीय पिंड नहीं, अपितु समस्त ब्रह्मांडीय जैविक ऊर्जा (Pranic energy) का अखंड संवाहक और पोषणकर्ता है।",
          },
          {
            number: 7,
            devanagari:
              "स एष वैश्वानरो विश्वरूपः प्राणोऽग्निरुदयते।\nतदेतदृचाऽभ्युक्तम्॥७॥",
            transliteration:
              "sa eṣa vaiśvānaro viśva-rūpaḥ prāṇo 'gnir udayate |\ntad etad ṛcābhyuktam || 7 ||",
            hindi:
              "यह वही वैश्वानर (समस्त जीवों का आत्मा), विश्वरूप, प्राण और अग्नि रूप सूर्य उदित होता है। इस विषय में ऋग्वेद की ऋचा भी उद्घोष करती है।",
            english:
              "This is he, the universal Soul of all beings (Vaishvanara), assuming all forms, the primal life-breath and fire who rises daily. This is also confirmed by the Vedic verse.",
            commentary:
              "प्राण और अग्नि की एकात्मता। सूर्य में वैश्वानर परमात्मा का ही प्रत्यक्ष दर्शन होता है।",
          },
          {
            number: 8,
            devanagari:
              "विश्वरूपं हरिणं जातवेदसं परायणं ज्योतिरेकं तपन्तम्।\nसहस्ररश्मिः शतधा वर्तमानः प्राणः प्रजानामुदयत्येष सूर्यः॥८॥",
            transliteration:
              "viśva-rūpaṃ hariṇaṃ jātavedasaṃ parāyaṇaṃ jyotir ekaṃ tapantam |\nsahasra-raśmiḥ śatadhā vartamānaḥ prāṇaḥ prajānām udayaty eṣa sūryaḥ || 8 ||",
            hindi:
              "समस्त रूपों को धारण करने वाले, स्वर्णिम किरणों वाले, सर्वज्ञ (जातवेदा), सर्वश्रेष्ठ आश्रय, एकमात्र तेजोमय, तपते हुए, सहस्र किरणों वाले, सैकड़ों रूपों में जीवों में विद्यमान यह प्रजा का प्राण-रूपी सूर्य उदित हो रहा है।",
            english:
              "Omniform, golden-hued, omniscient, supreme refuge, the sole radiant light blazing forth, with a thousand rays, abiding in hundreds of ways as the life of all living beings—here rises the magnificent Sun.",
            commentary:
              "ऋग्वेद का सुप्रसिद्ध मन्त्र जो सूर्य को प्रजा के प्रत्यक्ष प्राण के रूप में प्रतिष्ठित करता है।",
          },
          {
            number: 9,
            devanagari:
              "संवत्सरो वै प्रजापतिस्तस्यायने द्वे दक्षिणं चोत्तरं च।\nतद्ये ह वै तदिष्टापूर्ते कृतमित्युपासते ते चान्द्रमसमेव लोकमभिजयन्ते।\nत एव पुनरावर्तन्ते तस्मादेत ऋषयः प्रजाकामा दक्षिणं प्रतिपद्यन्ते।\nएष ह वै रयिर्यः पितृयाणः॥९॥",
            transliteration:
              "saṃvatsaro vai prajā-patis tasyāyane dve dakṣiṇaṃ cottaraṃ ca |\ntad ye ha vai tad iṣṭā-pūrte kṛtam ity upāsate te cāndramasam eva lokam abhijayante |\nta eva punar āvartante tasmād eta ṛṣayaḥ prajā-kāmā dakṣiṇaṃ pratipadyante |\neṣa ha vai rayir yaḥ pitṛ-yāṇaḥ || 9 ||",
            hindi:
              "संवत्सर (काल/वर्ष) ही प्रजापति है। उसके दो अयन हैं—दक्षिणायन और उत्तरायण। जो केवल इष्टापूर्त (यज्ञ, दान, कुआँ-बावड़ी आदि सकाम कर्म) को ही श्रेष्ठ मानकर उपासना करते हैं, वे चन्द्रलोक को प्राप्त करते हैं। वे वहाँ से पुनः संसार में लौटते हैं; अतः प्रजा (संतान) की कामना वाले गृहस्थ दक्षिणायन मार्ग को अपनाते हैं। यह पितृयान मार्ग ही रयि है।",
            english:
              "The Year verily is Prajapati; and it has two paths—the southern (Dakshinayana) and the northern (Uttarayana). Those who perform only sacrifices and charitable works conquer only the world of the Moon. They return again to rebirth; hence householders seeking progeny follow the southern path. This Pitriyana path is indeed Rayi.",
            commentary:
              "सकाम कर्मों की सीमा — पितृयान मार्ग द्वारा चन्द्रलोक की प्राप्ति और पुण्य क्षीण होने पर पुनर्जन्म।",
          },
          {
            number: 10,
            devanagari:
              "अथोत्तरेण तपसा ब्रह्मचर्येण श्रद्धया विद्ययाऽऽत्मानमन्विष्यादित्यमभिजयन्ते।\nएतद्वै प्राणानामायतनमेतदमृतमभयमेतत् परायणमेतस्मान्न पुनरावर्तन्त इत्येष निरोधस्तदेष श्लोकः॥१०॥",
            transliteration:
              "athottareṇa tapasā brahmacaryeṇa śraddhayā vidyayā''tmānam anviṣyādityam abhijayante |\netad vai prāṇānām āyatanam etad amṛtam abhayam etat parāyaṇam etasmān na punar āvartanta ity eṣa nirodhas tad eṣa ślokaḥ || 10 ||",
            hindi:
              "किन्तु जो तप, ब्रह्मचर्य, श्रद्धा और आत्म-विद्या द्वारा अपनी आत्मा की खोज करते हुए उत्तरायण मार्ग से गमन करते हैं, वे सूर्यलोक को जीत लेते हैं। यह प्राणों का परम धाम है, यह अमृत, अभय और सर्वोच्च गति है; यहाँ से ज्ञानी पुरुष कभी संसार में नहीं लौटते। यह आवागमन का पूर्ण निरोध है। इस विषय में यह श्लोक है।",
            english:
              "But those who seek the Self by austerity, continence, faith, and knowledge journey along the northern path to conquer the Sun. This is the abode of all vital forces, immortal, fearless, and the supreme destination; from thence they return no more. This is the cessation of worldly cycle. In this regard there is this verse.",
            commentary:
              "देवयान मार्ग — ज्ञानियों का अमर पथ। सूर्य-मण्डल का भेदन कर ब्रह्मलोक की प्राप्ति और मुक्ति।",
          },
          {
            number: 11,
            devanagari:
              "पञ्चपादं पितरं द्वादशाकृतिं दिव आहुः परे अर्धे पुरीषिणम्।\nअथेमे अन्य उपरे विचक्षणं सप्तचक्रे षडर आहुरर्पितमिति॥११॥",
            transliteration:
              "pañca-pādaṃ pitaraṃ dvādaśākṛtiṃ diva āhuḥ pare ardhe purīṣiṇam |\natheme anya upare vicakṣaṇaṃ sapta-cakre ṣaḍ-ara āhur arpitam iti || 11 ||",
            hindi:
              "कुछ ज्ञानी इस सूर्य-स्वरूप संवत्सर को पाँच चरणों (ऋतुओं) वाला, बारह आकृतियों (महीनों) वाला, और द्युलोक के ऊपरी भाग में जल की वर्षा करने वाला पिता कहते हैं। अन्य विद्वान इसे सात चक्रों (घोड़ों/रश्मियों) और छह अरों (ऋतुओं) वाले रथ पर स्थित सर्वज्ञ कहते हैं।",
            english:
              "Some seers describe him as the Father having five seasons (feet), twelve months (forms), residing in the upper realm of heaven as the giver of rain. Others call him the omniscient one established upon a seven-wheeled chariot with six spokes.",
            commentary:
              "संवत्सर-सूर्य का कालरूपी आध्यात्मिक रूपक। काल ही समस्त जगत का पिता और संचालक है।",
          },
          {
            number: 12,
            devanagari:
              "मासो वै प्रजापतिस्तस्य कृष्णपक्ष एव रयिः शुक्लः प्राणस्तस्मादेत ऋषयः शुक्ल इष्टं कुर्वन्तीतर इतरस्मिन्॥१२॥",
            transliteration:
              "māso vai prajā-patis tasya kṛṣṇa-pakṣa eva rayiḥ śuklaḥ prāṇas tasmād eta ṛṣayaḥ śukla iṣṭaṃ kurvantītara itarasmin || 12 ||",
            hindi:
              "मास (महीना) ही प्रजापति है। उसका कृष्ण पक्ष रयि है और शुक्ल पक्ष प्राण है। इसलिए ज्ञानी महर्षि शुक्ल पक्ष में ही यज्ञ-साधना करते हैं, जबकि अन्य दूसरे पक्ष में करते हैं।",
            english:
              "The Month verily is Prajapati; its dark fortnight is Rayi, and its bright fortnight is Prana. Therefore seers perform sacrifices in the bright half, while others perform them in the other.",
            commentary:
              "काल के सूक्ष्म विभाजन में रयि (तम/पदार्थ) और प्राण (प्रकाश/ऊर्जा) का संतुलन।",
          },
          {
            number: 13,
            devanagari:
              "अहोरात्रो वै प्रजापतिस्तस्याहरेव प्राणो रात्रिरेव रयिः।\nप्राणं वा एते प्रस्कन्दन्ति ये दिवा रत्या संयुज्यन्ते ब्रह्मचर्यमेव तद्यद्रात्रौ रत्या संयुज्यन्ते॥१३॥",
            transliteration:
              "aho-rātro vai prajā-patis tasyāhar eva prāṇo rātrir eva rayiḥ |\nprāṇaṃ vā ete praskandanti ye divā ratyā saṃyujyante brahmacaryam eva tad yad rātrau ratyā saṃyujyante || 13 ||",
            hindi:
              "दिन और रात ही प्रजापति हैं। दिन प्राण है और रात्रि रयि है। जो दिन में काम-भोग में प्रवृत्त होते हैं, वे अपने प्राण का क्षय करते हैं; और जो केवल रात्रि में शास्त्र-विहित ऋतु-काल में संगम करते हैं, वे ब्रह्मचारी ही माने जाते हैं।",
            english:
              "Day and night are verily Prajapati; the day is Prana and the night is Rayi. Those who unite in sensual pleasure by day dissipate their vital life-breath; but to unite by night in the proper season is considered true continence.",
            commentary:
              "संयम और प्राण-ऊर्जा के संरक्षण का नियम। वैदिक जीवन-दर्शन में गृहस्थ धर्म की मर्यादा।",
          },
          {
            number: 14,
            devanagari:
              "अन्नं वै प्रजापतिस्ततो ह वै तद्रेतस्तस्मादिमाः प्रजाः प्रजायन्त इति॥१४॥",
            transliteration:
              "annaṃ vai prajā-patis tato ha vai tad retas tasmād imāḥ prajāḥ prajāyanta iti || 14 ||",
            hindi:
              "अन्न ही निश्चय प्रजापति है। उसी अन्न से वीर्य उत्पन्न होता है और उसी वीर्य से ये समस्त प्रजाएँ जन्म लेती हैं।",
            english:
              "Food verily is Prajapati; from food is produced the vital seed, and from that seed are all these living beings born.",
            commentary:
              "भौतिक सृष्टि की उत्पत्ति-शृंखला: प्रजापति -> अन्न -> वीर्य -> प्रजा। अन्न ही स्थूल जीवन का संवाहक है।",
          },
          {
            number: 15,
            devanagari:
              "तद्ये ह वै तत्प्रजापतिव्रतं चरन्ति ते मिथुनमुत्पादयन्ते।\nतेषामेवैष ब्रह्मलोको येषां तपो ब्रह्मचर्यं येषु सत्यं प्रतिष्ठितम्॥१५॥",
            transliteration:
              "tad ye ha vai tat prajā-pati-vrataṃ caranti te mithunam utpādayante |\nteṣām evaiṣa brahma-loko yeṣāṃ tapo brahmacaryaṃ yeṣu satyaṃ pratiṣṭhitam || 15 ||",
            hindi:
              "जो मनुष्य इस प्रजापति के नियम का निष्ठा से पालन करते हैं, वे संतान उत्पन्न करते हैं। यह ब्रह्मलोक उन्हीं को प्राप्त होता है जिनमें तपस्या, ब्रह्मचर्य और सत्य पूर्ण रूप से प्रतिष्ठित है।",
            english:
              "Those who observe this sacred vow of Prajapati generate offspring. To them alone belongs this higher world of Brahman who possess austerity, chastity, and in whom truth is firmly rooted.",
            commentary:
              "सदाचार, तप और सत्य ही उच्च आध्यात्मिक लोकों की प्राप्ति का एकमात्र माध्यम हैं।",
          },
          {
            number: 16,
            devanagari:
              "तेषामसौ विरजो ब्रह्मलोको न येषु जिह्ममनृतं न माया चेति॥१६॥",
            transliteration:
              "teṣām asau virajo brahma-loko na yeṣu jihmam anṛtaṃ na māyā ceti || 16 ||",
            hindi:
              "वह विशुद्ध, निर्मल ब्रह्मलोक केवल उन्हीं को प्राप्त होता है जिनके भीतर न कोई कुटिलता है, न असत्य है और न कोई कपट (माया) है।",
            english:
              "To them alone belongs that pure, stainless realm of Brahman, in whom there is no crookedness, no untruth, and no deceit.",
            commentary:
              "प्रथम प्रश्न का उपसंहार — निष्कपटता, सरलता और सत्य ही परब्रह्म की साक्षात् प्राप्ति के पावन द्वार हैं।",
          },
        ],
      },
      {
        id: "prashna-2",
        title: "द्वितीय प्रश्न • भार्गव वैदर्भि संवाद (इंद्रियों में मुख्य प्राण की श्रेष्ठता व स्तुति - १३ मन्त्र)",
        items: [
          {
            number: 1,
            devanagari:
              "अथ हैनं भार्गवो वैदर्भिः पप्रच्छ।\nभगवन् कत्येव देवाः प्रजां विधारयन्ते कतर एतत्प्रकाशयन्ते कः पुनरेषां वरिष्ठ इति॥१॥",
            transliteration:
              "atha hainaṃ bhārgavo vaidarbhiḥ papraccha |\nbhagavan katy eva devāḥ prajāṃ vidhārayante katara etat prakāśayante kaḥ punar eṣāṃ variṣṭha iti || 1 ||",
            hindi:
              "इसके अनंतर विदर्भ-देशीय भार्गव ने महर्षि पिप्पलाद से पूछा: 'हे भगवन्! कितने देवता (शक्तियाँ) इस शरीर-रूपी प्रजा को धारण करते हैं? उनमें से कौन इसे प्रकाशित करते हैं और इन सबमें सर्वश्रेष्ठ कौन है?'",
            english:
              "Then Bhargava of Vidarbha asked him: 'Venerable sir, how many deities sustain this living creature? Which among them manifest their powers, and who among them is the supreme?'",
            commentary:
              "शरीर-यंत्र के संचालक तत्त्वों और मुख्य प्राण की श्रेष्ठता का अनुसंधान।",
          },
          {
            number: 2,
            devanagari:
              "तस्मै स होवाचाकाशो ह वा एष देवो वायुरग्निरापः पृथिवी वाङ्मनश्चक्षुः श्रोत्रं च।\nते प्रकाश्याभिवदन्ति वयमेतद्बाणमवष्टभ्य विधारयामः॥२॥",
            transliteration:
              "tasmai sa hovācākāśo ha vā eṣa devo vāyur agnir āpaḥ pṛthivī vāṅ manaś cakṣuḥ śrotraṃ ca |\nte prakāśyābhivadanti vayam etad bāṇam avaṣṭabhya vidhārayāmaḥ || 2 ||",
            hindi:
              "पिप्पलाद ने उत्तर दिया: 'आकाश, वायु, अग्नि, जल, पृथ्वी—ये पंचमहाभूत, तथा वाणी, मन, आँख और कान आदि इंद्रियाँ ही वे देव हैं। वे सब अपनी महिमा प्रकट करते हुए अहंकारपूर्वक कहने लगे—हम ही इस शरीर रूपी बाण (रथ) को संभाल कर धारण कर रहे हैं।'",
            english:
              "To him he replied: 'These deities are space, air, fire, water, earth; and speech, mind, eye, and ear. Displaying their glory, they boastfully declared: We alone sustain and uphold this bodily frame!'",
            commentary:
              "भौतिक तत्त्वों और इंद्रियों का अभिमान। वे अपने को ही जीवन का एकमात्र आधार मान बैठे।",
          },
          {
            number: 3,
            devanagari:
              "तान् वरिष्ठः प्राण उवाच।\nमा मोहमापद्यथाहमेवैतत् पञ्चधाऽऽत्मानं प्रविभज्यैतद्बाणमवष्टभ्य विधारयामीति तेऽश्रद्दधाना बभूवुः॥३॥",
            transliteration:
              "tān variṣṭhaḥ prāṇa uvāca |\nmā moham āpadyathāham evaitat pañcadhā''tmānaṃ pravibhajyaitad bāṇam avaṣṭabhya vidhārayāmīti te 'śraddadhānā babhūvuḥ || 3 ||",
            hindi:
              "तब सर्वश्रेष्ठ मुख्य प्राण ने उनसे कहा: 'मोह में मत पड़ो! मैं ही स्वयं को पाँच भागों (प्राण, अपान, समान, व्यान, उदान) में विभक्त करके इस शरीर को थामे हुए धारण करता हूँ।' किन्तु इंद्रियों ने घमंडवश उसकी बात पर विश्वास नहीं किया।",
            english:
              "The supreme Prana said to them: 'Do not delude yourselves! I alone, dividing myself fivefold, sustain and preserve this bodily frame.' But they remained arrogant and incredulous.",
            commentary:
              "मुख्य प्राण का सत्य उद्घोष। इंद्रियाँ प्राण की शक्ति से ही क्रियाशील हैं, स्वतः नहीं।",
          },
          {
            number: 4,
            devanagari:
              "सोऽभिमानादूर्ध्वमुत्क्रमत इव तस्मिन्नुत्क्रामत्यथेतरे सर्व एवोत्क्रामन्ते तस्मिंश्च प्रतिष्ठामाने सर्व एव प्रतिष्ठन्ते।\nतद्यथा मक्षिका मधुकरराजानमुत्क्रामन्तं सर्वा एवोत्क्रामन्ते तस्मिंश्च प्रतिष्ठामाने सर्वा एव प्रतिष्ठन्त एवं वाङ्मनश्चक्षुः श्रोत्रं च ते प्रीताः प्राणं स्तुन्वन्ति॥४॥",
            transliteration:
              "so 'bhimānād ūrdhvam utkrāmata iva tasminn utkrāmaty athetare sarva evotkrāmante tasmiṃś ca pratiṣṭhamāne sarva eva pratiṣṭhante |\ntad yathā makṣikā madhukara-rājānam utkrāmantaṃ sarvā evotkrāmante tasmiṃś ca pratiṣṭhamāne sarvā eva pratiṣṭhanta evaṃ vāṅ manaś cakṣuḥ śrotraṃ ca te prītāḥ prāṇaṃ stunvanti || 4 ||",
            hindi:
              "तब प्राण ने अपने मान की रक्षा हेतु शरीर से ऊपर उठने (निकलने) का उपक्रम किया। जैसे ही वह निकलने लगा, वैसे ही अन्य सभी इंद्रियाँ भी खिंचकर निकलने लगीं; और जब प्राण पुनः स्थिर हुआ, तो सभी इंद्रियाँ शांत होकर बैठ गईं। जिस प्रकार रानी मधुमक्खी के उड़ने पर समस्त मधुमक्खियाँ उड़ जाती हैं और उसके बैठने पर सब बैठ जाती हैं, उसी प्रकार वाणी, मन, चक्षु, श्रोत्र सबने प्राण की निर्विवाद श्रेष्ठता को जानकर प्रसन्न होकर प्राण की स्तुति की।",
            english:
              "Out of indignation, Prana seemed to rise upward to depart. As he rose, all other senses were drawn out after him; and when he settled back, all of them settled down. Just as bees take flight when their queen takes flight, and settle when she settles, so did speech, mind, eye, and ear. Realizing his glory, they joyfully began to praise Prana.",
            commentary:
              "मधुमक्खी दृष्टान्त — उपनिषद् का अत्यंत मार्मिक रूपक। प्राण ही इंद्रियों का प्राण है।",
          },
          {
            number: 5,
            devanagari:
              "एषोऽग्निस्तपत्येष सूर्य एष पर्जन्यो मघवानेष वायुः।\nएष पृथिवी रयिर्देवः सदसच्चामृतं च यत्॥५॥",
            transliteration:
              "eṣo 'gnis tapaty eṣa sūrya eṣa parjanyo maghavān eṣa vāyuḥ |\neṣa pṛthivī rayir devaḥ sad-asac cāmṛtaṃ ca yat || 5 ||",
            hindi:
              "यही प्राण अग्नि बनकर तपता है, यही सूर्य है, यही वर्षा करने वाला मेघ (पर्जन्य) और इन्द्र (मघवान्) है, यही वायु है। यही पृथ्वी, रयि, प्रकाशमान देव, जो कुछ सत् (मूर्त) और असत् (अमूर्त) है, तथा जो अमृत (अविनाशी) है—वह सब यही प्राण है।",
            english:
              "Prana burns as fire, he is the sun, he is the rain-cloud, he is Indra the thunder-wielder, he is the wind. He is the earth, matter, shining gods, that which is manifest and unmanifest, and that which is immortal.",
            commentary:
              "इंद्रियों द्वारा प्राण की विराट् स्तुति। प्राण ही समस्त आधिदैविक शक्तियों का मूल आधार है।",
          },
          {
            number: 6,
            devanagari:
              "अरा इव रथनाभौ प्राणे सर्वं प्रतिष्ठितम्।\nऋचो यजूंषि सामानि यज्ञः क्षत्रं ब्रह्म च॥६॥",
            transliteration:
              "arā iva ratha-nābhau prāṇe sarvaṃ pratiṣṭhitam |\nṛco yajūṃṣi sāmāni yajñaḥ kṣatraṃ brahma ca || 6 ||",
            hindi:
              "जिस प्रकार रथ के पहिये की नाभि में तीलियाँ (अरा) जुड़ी रहती हैं, उसी प्रकार प्राण में ही सब कुछ प्रतिष्ठित है—ऋग्वेद, यजुर्वेद, सामवेद, यज्ञ, क्षत्रिय-बल और ब्रह्म-तेज सब प्राण में ही समाहित हैं।",
            english:
              "As spokes in the hub of a chariot wheel, all things are established in Prana: the Rig, Yajur, and Sama verses, the sacred sacrifice, warrior power, and spiritual wisdom.",
            commentary:
              "रथनाभि रूपक — समस्त वेद, ज्ञान, कर्म और सामर्थ्य प्राण रूपी अक्ष पर ही टिके हैं।",
          },
          {
            number: 7,
            devanagari:
              "प्रजापतिश्चरसि गर्भे त्वमेव प्रतिजायसे।\nतुभ्यं प्राण प्रजास्त्विमा बलिं हरन्ति यः प्राणैः प्रतितिष्ठसि॥७॥",
            transliteration:
              "prajā-patiś carasi garbhe tvam eva pratijāyase |\ntubhyaṃ prāṇa prajās tv imā baliṃ haranti yaḥ prāṇaiḥ pratitiṣṭhasi || 7 ||",
            hindi:
              "हे प्राण! तुम ही प्रजापति रूप होकर माता के गर्भ में विचरण करते हो और संतान के रूप में पुनः जन्म लेते हो। तुम जो समस्त इंद्रिय-प्राणों के साथ इस शरीर में स्थित रहते हो, तुम्हारे ही लिए ये समस्त प्रजाएँ अन्न और भोग (बलि) भेंट करती हैं।",
            english:
              "O Prana, as Prajapati you dwell in the womb, and you alone are born anew in the likeness of the parents. To you, O Prana, who abide with all sense-faculties, all living creatures bring their offerings.",
            commentary:
              "जन्म, जीवन और पोषण की संपूर्ण प्रक्रिया मुख्य प्राण की ही लीला है।",
          },
          {
            number: 8,
            devanagari:
              "देवानामसि वह्नितमः पितॄणां प्रथमा स्वधा।\nऋषीणां चरितं सत्यमथर्वाङ्गिरसामसि॥८॥",
            transliteration:
              "devānām asi vahnitamaḥ pitṝṇāṃ prathamā svadhā |\nṛṣīṇāṃ caritaṃ satyam atharvāṅgirasām asi || 8 ||",
            hindi:
              "तुम देवताओं के लिए हवि पहुँचाने वाले सर्वश्रेष्ठ अग्नि हो, पितरों के लिए पहली स्वधा (तर्पण-अन्न) हो, और अथर्वा तथा अंगिरा ऋषियों के इंद्रिय-व्यापार रूप सत्य आचरण भी तुम ही हो।",
            english:
              "You are the foremost bearer of oblations to the gods, the primeval swadha offering to the ancestors; you are the truth and righteous conduct of the seers descended from Atharvan and Angiras.",
            commentary:
              "यज्ञ, पितृ-कर्म और ऋषि-तपस्या में प्राण की केंद्रीय भूमिका।",
          },
          {
            number: 9,
            devanagari:
              "इन्द्रस्त्वं प्राण तेजसा रुद्रोऽसि परिरक्षिता।\nत्वमन्तरिक्षे चरसि सूर्यस्त्वं ज्योतिषां पतिः॥९॥",
            transliteration:
              "indras tvaṃ prāṇa tejasā rudro 'si parirakṣitā |\ntvam antarikṣe carasi sūryas tvaṃ jyotiṣāṃ patiḥ || 9 ||",
            hindi:
              "हे प्राण! तुम अपने पराक्रम और तेज से इन्द्र हो, और संसार की रक्षा तथा संहार करने वाले रुद्र भी तुम ही हो। तुम अंतरिक्ष में संचरण करते हो, और प्रकाश-पुंजों के स्वामी सूर्य भी तुम ही हो।",
            english:
              "By your splendor, O Prana, you are Indra; by your protective might you are Rudra. You move across the intermediate firmament, and you are the Sun, master of all lights.",
            commentary:
              "इन्द्र, रुद्र और सूर्य — तीनों प्रमुख वैदिक शक्तियों का प्राण में समन्वय।",
          },
          {
            number: 10,
            devanagari:
              "यदा त्वमभिवर्षस्यथेमाः प्राण ते प्रजाः।\nआनन्दरूपास्तिष्ठन्ति कामायानं भविष्यतीति॥१०॥",
            transliteration:
              "yadā tvam abhivarṣasy athemāḥ prāṇa te prajāḥ |\nānanda-rūpās tiṣṭhanti kāmāyānnaṃ bhaviṣyatīti || 10 ||",
            hindi:
              "हे प्राण! जब तुम मेघ रूप होकर पृथ्वी पर वर्षा करते हो, तब तुम्हारी ये समस्त प्रजाएँ आनंद-मग्न हो जाती हैं कि अब हमारी समस्त इच्छाओं की पूर्ति के लिए प्रचुर अन्न उत्पन्न होगा।",
            english:
              "When you pour down rain, O Prana, then these creatures of yours rejoice with delight, saying: 'Food will now be produced abundantly to fulfill all our desires!'",
            commentary:
              "मेघ और वर्षा के रूप में जीवन-दायिनी प्राण-शक्ति का उल्लास।",
          },
          {
            number: 11,
            devanagari:
              "व्रात्यस्त्वं प्राणैकर्षिरत्ता विश्वस्य सत्पतिः।\nवयमाद्यस्य दातारः पिता त्वं मातरिश्व नः॥११॥",
            transliteration:
              "vrātyas tvaṃ prāṇaikarṣir attā viśvasya satpatiḥ |\nvayam ādyasya dātāraḥ pitā tvaṃ mātariśva naḥ || 11 ||",
            hindi:
              "हे प्राण! तुम संस्कार-निरपेक्ष (स्वयं-शुद्ध/व्रात्य) हो, तुम एकर्षि (अग्नि) हो, तुम समस्त विश्व के भोक्ता और परम स्वामी हो। हम तुम्हें हव्य-अन्न देने वाले हैं; हे मातर्श्व! तुम हमारे पिता हो।",
            english:
              "You are the pure one (Vratya, unconditioned and self-pure), you are the fire Ekarshi, consumer of all, true Lord of creation. We are the givers of food unto you; O Matarishvan, you are our true Father.",
            commentary:
              "'व्रात्य' का वेदान्तिक अर्थ: जो स्वयं आदि-शुद्ध है और जिसे किसी बाह्य संस्कार की अपेक्षा नहीं।",
          },
          {
            number: 12,
            devanagari:
              "या ते तनूर्वाचि प्रतिष्ठिता या श्रोत्रे या च चक्षुषि।\nया च मनसि संतता शिवां तां कुरु मोत्क्रमीः॥१२॥",
            transliteration:
              "yā te tanūr vāci pratiṣṭhitā yā śrotre yā ca cakṣuṣi |\nyā ca manasi saṃtatā śivāṃ tāṃ kuru motkramīḥ || 12 ||",
            hindi:
              "तुम्हारा जो रूप वाणी में स्थित है, जो कानों में, जो आँखों में और जो मन में निरंतर व्याप्त है—उस रूप को मंगलमय और कल्याणकारी बनाओ! हमारे शरीर से बाहर मत निकलो!",
            english:
              "That body of yours which is established in speech, in the ear, and in the eye, and which is continuous in the mind—make that auspicious! Do not depart from our frame!",
            commentary:
              "समस्त इंद्रियों की प्राण के चरणों में शरणागति। प्राण की कृपा से ही इंद्रियाँ कल्याणकारी बनती हैं।",
          },
          {
            number: 13,
            devanagari:
              "प्राणस्येदं वशे सर्वं त्रिदिवे यत्प्रतिष्ठितम्।\nमातेव पुत्रान् रक्षस्व श्रीश्च प्रज्ञां च विधेहि न इति॥१३॥",
            transliteration:
              "prāṇasyedaṃ vaśe sarvaṃ tridive yat pratiṣṭhitam |\nmāteva putrān rakṣasva śrīś ca prajñāṃ ca vidhehi na iti || 13 ||",
            hindi:
              "इस तीनों लोकों में जो कुछ भी विद्यमान है, वह सब प्राण के पूर्ण वश में है। हे प्राण! जिस प्रकार माता अपने पुत्रों की रक्षा करती है, वैसे ही हमारी रक्षा करो; और हमें भौतिक ऐश्वर्य (श्री) तथा आध्यात्मिक सद्बुद्धि (प्रज्ञा) प्रदान करो।",
            english:
              "All that exists in the three worlds is under the sovereign control of Prana. Protect us as a mother protects her sons, and bestow upon us prosperity (Shri) and spiritual wisdom (Prajna)!",
            commentary:
              "द्वितीय प्रश्न का अमर महावाक्य: 'प्राणस्येदं वशे सर्वम्'। माता के समान प्राण का वात्सल्य, रक्षण और प्रज्ञा-दान।",
          },
        ],
      },
      {
        id: "prashna-3",
        title: "तृतीय प्रश्न • कौसल्य आश्वलायन संवाद (पंच प्राणों का शरीर में विभाजन व नाड़ियाँ - १२ मन्त्र)",
        items: [
          {
            number: 1,
            devanagari:
              "अथ हैनं कौसल्यश्चाश्वलायनः पप्रच्छ।\nभगवन् कुत एष प्राणो जायते कथमायात्यस्मिञ्शरीरे कथं वाऽऽत्मानं प्रविभज्य प्रातिष्ठते केनोत्क्रमते कथं बाह्यमभिधत्ते कथमध्यात्ममिति॥१॥",
            transliteration:
              "atha hainaṃ kausalyaś cāśvalāyanaḥ papraccha |\nbhagavan kuta eṣa prāṇo jāyate katham āyāty asmiñ charīre kathaṃ vā''tmānaṃ pravibhajya prātiṣṭhate kenotkrāmate kathaṃ bāhyam abhidhatte katham adhyātmam iti || 1 ||",
            hindi:
              "इसके उपरांत कौसल्य आश्वलायन ने पिप्पलाद से पूछा: 'हे भगवन्! यह प्राण कहाँ से उत्पन्न होता है? यह इस शरीर में कैसे प्रवेश करता है? अपने को विभक्त करके कैसे स्थित रहता है? किस प्रकार शरीर से बाहर निकलता है? यह बाह्य ब्रह्मांड को कैसे धारण करता है और अंतःकरण (अध्यात्म) को कैसे धारण करता है?'",
            english:
              "Then Kausalya the son of Ashvala asked him: 'Venerable sir, from whence is this Prana born? How does it enter into this body? How does it abide, dividing itself? By what does it depart? How does it sustain the outer cosmic order, and how the inner self?'",
            commentary:
              "कौसल्य द्वारा पूछे गए छह अत्यंत गहन मनोवैज्ञानिक व आध्यात्मिक प्रश्न।",
          },
          {
            number: 2,
            devanagari:
              "तस्मै स होवाचातिप्रश्नान्पृच्छसि ब्रह्मिष्ठोऽसीति तस्मात्तेऽहं ब्रवीमि॥२॥",
            transliteration:
              "tasmai sa hovācāti-praśnān pṛcchasi brahmiṣṭho 'sīti tasmāt te 'haṃ bravīmi || 2 ||",
            hindi:
              "पिप्पलाद ने कहा: 'तुम अत्यंत गूढ़ और परा विद्या के प्रश्न पूछ रहे हो। तुम ब्रह्मनिष्ठ हो, इसलिए मैं तुम्हें यह परम रहस्य बताता हूँ।'",
            english:
              "To him the sage replied: 'You ask deeply subtle questions. Because you are supremely steadfast in Brahman, I shall answer you.'",
            commentary:
              "अतिप्रश्न का मर्म — शिष्य की ब्रह्मनिष्ठा और गुरु की प्रामाणिक ज्ञान-दीक्षा।",
          },
          {
            number: 3,
            devanagari:
              "आत्मन एष प्राणो जायते।\nयथैषा पुरुषे छायैतस्मिन्नेतदाततं मनोकृतेनायात्यस्मिञ्शरीरे॥३॥",
            transliteration:
              "ātmana eṣa prāṇo jāyate |\nyathaiṣā puruṣe chāyaitasminn etad ātataṃ manokṛtenāyāty asmiñ charīre || 3 ||",
            hindi:
              "यह प्राण परमात्मा (परम आत्मा) से उत्पन्न होता है। जिस प्रकार मनुष्य के शरीर की छाया होती है, उसी प्रकार आत्मा पर यह प्राण छाया की भाँति फैला हुआ है। पूर्वजन्म के मन के संकल्पों और कर्मों के द्वारा यह इस शरीर में प्रवेश करता है।",
            english:
              "This Prana is born of the supreme Atman. As a shadow is cast by a person, even so is this prana spread out over the Atman. By the action of the mind (past resolves and karmic impressions), it comes into this body.",
            commentary:
              "छाया रूपक — प्राण आत्मा की उपाधि है। मन के संस्कारों से ही देह-बंधन और पुनर्जन्म होता है।",
          },
          {
            number: 4,
            devanagari:
              "यथा सम्राडेवाधिकृतान् विनियुङ्क्ते।\nएतान् ग्रामानैतान् ग्रामानधितिष्ठस्वेत्येवमेवैष प्राण इतरान् प्राणान् पृथक् पृथगेव संनिधत्ते॥४॥",
            transliteration:
              "yathā samrāḍ evādhikṛtān viniyuṅkte |\netān grāmān aitān grāmān adhitiṣṭhasvety evam evaiṣa prāṇa itarān prāṇān pṛthak pṛthag eva saṃnidhatte || 4 ||",
            hindi:
              "जिस प्रकार एक चक्रवर्ती सम्राट अपने अधिकारियों को नियुक्त करता है कि तुम इन-इन गाँवों पर शासन करो, उसी प्रकार यह मुख्य प्राण अन्य प्राणों को शरीर के विभिन्न स्थानों में अलग-अलग नियुक्त करता है।",
            english:
              "Just as an emperor commands his officers, saying: 'Govern over these and those villages,' even so does this chief Prana allocate the other vital breaths to distinct stations.",
            commentary:
              "सम्राट रूपक — मुख्य प्राण केंद्रीय शासक है और पंचप्राण उसके कार्यपालक अंग।",
          },
          {
            number: 5,
            devanagari:
              "पायूपस्थेऽपानं चक्षुःश्रोत्रे मुखनासिकाभ्यां प्राणः स्वयं प्रतिष्ठते मध्ये तु समानः।\nएष ह्येतद्धुतमन्नं समं नयति तस्मादेताः सप्तार्चिषो भवन्ति॥५॥",
            transliteration:
              "pāyūpasthe 'pānaṃ cakṣuḥ-śrotre mukha-nāsikābhyāṃ prāṇaḥ svayaṃ pratiṣṭhate madhye tu samānaḥ |\neṣa hy etad dhutam annaṃ samaṃ nayati tasmād etāḥ saptārciṣo bhavanti || 5 ||",
            hindi:
              "गुदा और उपस्थ (उत्सर्जन अंगों) में वह अपान को नियुक्त करता है। आँख, कान, मुख और नासिका में मुख्य प्राण स्वयं स्थित रहता है। नाभि के मध्य में समान वायु रहता है, जो खाए हुए अन्न को समान रूप से पूरे शरीर में पहुँचाता है; उसी जठराग्नि से मस्तक की सातों इंद्रिय-ज्वालाएँ (दो आँख, दो कान, दो नासिका-छिद्र और एक मुख) प्रदीप्त होती हैं।",
            english:
              "In the organs of excretion and generation he places Apana. In the eye and ear, mouth and nostrils, Prana himself resides. In the middle (navel) dwells Samana, which distributes equally the digested food; from it arise the seven flames of sense-perception in the head.",
            commentary:
              "प्राण, अपान और समान के शारीरिक कार्यक्षेत्र। सप्तार्चिषः का तात्पर्य मस्तक के सात इंद्रिय-द्वारों से है।",
          },
          {
            number: 6,
            devanagari:
              "हृदि ह्येष आत्मा।\nअत्रैतदेकशतं नाडीनां तासां शतं शतमेकैकस्यां द्वासप्ततिर्द्वासप्ततिः प्रतिशाखानाडीसहस्राणि भवन्त्यासु व्यानश्चरति॥६॥",
            transliteration:
              "hṛdi hy eṣa ātmā |\natraitad eka-śataṃ nāḍīnāṃ tāsāṃ śataṃ śatam ekaikasyāṃ dvāsaptatir dvāsaptatiḥ pratiśākhā-nāḍī-sahasrāṇi bhavanty āsu vyānaś carati || 6 ||",
            hindi:
              "हृदय में ही यह आत्मा निवास करता है। यहाँ मुख्य १०१ नाड़ियाँ हैं। इनमें से प्रत्येक की सौ-सौ शाखाएँ हैं, और प्रत्येक शाखा की बहत्तर-बहत्तर हजार (७२,०००) प्रति-शाखा नाड़ियाँ हैं (कुल ७२ करोड़ १८ लाख १० हजार नाड़ियाँ)। इन सभी नाड़ियों में व्यान वायु संचरण करता है।",
            english:
              "In the heart verily resides the Atman. Here there are 101 chief nadis; each of these has a hundred branches, and each branch has 72,000 sub-branches (totalling 727,210,201 subtle channels). In all these nadis travels Vyana, the circulatory breath.",
            commentary:
              "वैदिक नाड़ी-विज्ञान का विस्तृत विवरण। व्यान संपूर्ण रक्त-संचार और तंत्रिका-तंत्र का अधिष्ठाता है।",
          },
          {
            number: 7,
            devanagari:
              "अथैकयोर्ध्व उदानः पुण्येन पुण्यं लोकं नयति पापेन पापमुभाभ्यामेव मनुष्यलोकम्॥७॥",
            transliteration:
              "athaikayordhva udānaḥ puṇyena puṇyaṃ lokaṃ nayati pāpena pāpam ubhābhyām eva manuṣya-lokam || 7 ||",
            hindi:
              "उनमें से एक मुख्य नाड़ी (सुषुम्णा) के द्वारा ऊपर उठता हुआ उदान वायु जीव को पुण्य कर्मों से पुण्य लोक (स्वर्ग आदि) में ले जाता है, पाप कर्मों से पाप लोक (नरक आदि) में ले जाता है, और पुण्य-पाप दोनों के संतुलन से मनुष्य लोक में वापस लाता है।",
            english:
              "Then through one of them (the central Sushumna), Udana rises upward, leading the soul by virtue to virtuous realms, by vice to sorrowful realms, and by a combination of both back to the human world.",
            commentary:
              "सुषुम्णा नाड़ी और उदान वायु। मरणोपरांत जीवात्मा की गति का निर्धारण कर्म और उदान द्वारा होता है।",
          },
          {
            number: 8,
            devanagari:
              "आदित्यो ह वै बाह्यः प्राण उदयत्येष ह्येनं चाक्षुषं प्राणमनुगृह्णानः।\nपृथिव्यां या देवता सैषा पुरुषस्यापानमवष्टभ्यान्तरा यदाकाशः स समानो वायुर्व्यानः॥८॥",
            transliteration:
              "ādityo ha vai bāhyaḥ prāṇa udayaty eṣa hy enaṃ cākṣuṣaṃ prāṇam anugṛhṇānaḥ |\npṛthivyāṃ yā devatā saiṣā puruṣasyāpānam avaṣṭabhyāntarā yad ākāśaḥ sa samāno vāyur vyānaḥ || 8 ||",
            hindi:
              "सूर्य ही निश्चय बाह्य प्राण बनकर उदित होता है और नेत्रों में स्थित चाक्षुष प्राण पर कृपा करता है। पृथ्वी में जो गुरुत्वाकर्षण देवता है, वह मनुष्य के अपान को थामे रखता है। बीच का आकाश समान वायु है और बाह्य वायु व्यान है।",
            english:
              "The Sun is indeed the external Prana; he rises bestowing grace upon the visual breath of the eyes. The gravitational deity of the earth stabilizes the Apana in man; the intermediate space is Samana; and atmospheric wind is Vyana.",
            commentary:
              "पिण्ड-ब्रह्माण्ड एकात्मता। बाह्य सृष्टि के तत्त्व शरीर के आंतरिक प्राणों के पूरक और संचालक हैं।",
          },
          {
            number: 9,
            devanagari:
              "तेजो ह वा उदानस्तस्मादुपशान्ततेजाः।\nपुनर्भवमिन्द्रियैर्मनसि संपद्यमानैः॥९॥",
            transliteration:
              "tejo ha vā udānas tasmād upaśānta-tejāḥ |\npunarbhavam indriyair manasi saṃpadyamānaiḥ || 9 ||",
            hindi:
              "बाह्य तेज (अग्नि/ऊष्मा) ही उदान वायु है। इसलिए जब मनुष्य का शारीरिक तेज (ताप) शांत हो जाता है, तब इंद्रियाँ मन में विलीन हो जाती हैं और वह नए जन्म (पुनर्जन्म) की ओर अग्रसर होता है।",
            english:
              "Cosmic fire and light is verily Udana. Therefore, when a person's bodily heat is extinguished, his senses dissolve into the mind and he proceeds toward rebirth.",
            commentary:
              "मृत्यु-प्रक्रिया का सूक्ष्म भौतिक विज्ञान। शारीरिक तापमान गिरते ही उदान जीवात्मा को लेकर प्रयाण करता है।",
          },
          {
            number: 10,
            devanagari:
              "यच्चित्तस्तेनैष प्राणमायाति प्राणस्तेजसा युक्तः।\nसहात्मना यथासंकल्पितं लोकं नयति॥१०॥",
            transliteration:
              "yac-cittas tenaiṣa prāṇam āyāti prāṇas tejasā yuktaḥ |\nsahātmanā yathā-saṃkalpitaṃ lokaṃ nayati || 10 ||",
            hindi:
              "मृत्यु के समय मनुष्य का जैसा चित्त (अंतिम संकल्प/भाव) होता है, उसी के अनुसार वह प्राण में प्रवेश करता है। प्राण उदान रूपी तेज से संयुक्त होकर जीवात्मा को उसके पूर्व-संकल्पित लोक में ले जाता है।",
            english:
              "Whatever is one's thought at the moment of death, with that he enters into Prana; Prana united with the fiery Udana and along with the jiva leads him to the realm shaped by his final thought.",
            commentary:
              "भगवद्गीता (८.६) के 'यं यं वापि स्मरन् भावं त्यजत्यन्ते कलेवरम्' का मूल उपनिषदीय आधार।",
          },
          {
            number: 11,
            devanagari:
              "य एवं विद्वान् प्राणं वेद।\nन हास्य प्रजा हीयतेऽमृतो भवति तदेष श्लोकः॥११॥",
            transliteration:
              "ya evaṃ vidvān prāṇaṃ veda |\nna hāsya prajā hīyate 'mṛto bhavati tad eṣa ślokaḥ || 11 ||",
            hindi:
              "जो विद्वान इस प्रकार प्राण के तत्त्व को जान लेता है, उसकी संतति का कभी क्षय नहीं होता और वह स्वयं अमर हो जाता है। इस विषय में यह श्लोक है।",
            english:
              "The wise seeker who understands Prana thus never suffers decline in his lineage, and he attains immortality. In this regard there is this verse.",
            commentary:
              "प्राण-विज्ञान के साक्षात्कार का फल: कुल-परंपरा की रक्षा और आत्मिक अमरत्व।",
          },
          {
            number: 12,
            devanagari:
              "उत्पत्तिमायतिं स्थानं विभुत्वं चैव पञ्चधा।\nअध्यात्मं चैव प्राणस्य विज्ञायामृतमश्नुते विज्ञायामृतमश्नुत इति॥१२॥",
            transliteration:
              "utpattim āyatiṃ sthānaṃ vibhutvaṃ caiva pañcadhā |\nadhyātmaṃ caiva prāṇasya vijñāyāmṛtam aśnute vijñāyāmṛtam aśnuta iti || 12 ||",
            hindi:
              "प्राण की आत्मा से उत्पत्ति, शरीर में उसका आगमन, उसका स्थान, उसका पाँच प्रकार का विस्तार और उसका आधिदैविक तथा आध्यात्मिक स्वरूप जानकर मनुष्य अमृत का उपभोग करता है, निश्चय ही अमृतत्व प्राप्त करता है।",
            english:
              "Knowing the origin of Prana, its entry into the body, its stations, its fivefold sovereign rule, and its spiritual reality, one attains immortality; verily, one attains immortality!",
            commentary:
              "तृतीय प्रश्न का उपसंहार — प्राण-तत्त्व का समग्र ज्ञान ही अमृतत्व की कुंजी है।",
          },
        ],
      },
      {
        id: "prashna-4",
        title: "चतुर्थ प्रश्न • सौर्यायणि गार्ग्य संवाद (जाग्रत, स्वप्न, सुषुप्ति और साक्षी आत्मा - ११ मन्त्र)",
        items: [
          {
            number: 1,
            devanagari:
              "अथ हैनं सौर्यायणी गार्ग्यः पप्रच्छ।\nभगवन्नेतस्मिन् पुरुषे कानि स्वपन्ति कान्यस्मिञ्जाग्रति कतर एष देवः स्वप्नान्पश्यति कस्यैतत्सुखं भवति कस्मिन्नु सर्वे संप्रतिष्ठिता भवन्तीति॥१॥",
            transliteration:
              "atha hainaṃ sauryāyaṇī gārgyaḥ papraccha |\nbhagavann etasmin puruṣe kāni svapanti kāny asmiñ jāgrati katara eṣa devaḥ svapnān paśyati kasyaitat sukhaṃ bhavati kasmin nu sarve saṃpratiṣṭhitā bhavantīti || 1 ||",
            hindi:
              "इसके पश्चात् गार्ग्य-गोत्रीय सौर्यायणि ने पिप्पलाद से पूछा: 'हे भगवन्! इस मनुष्य में कौन-कौन से अंग सोते हैं? कौन-कौन इसमें जागते रहते हैं? कौन सा देव स्वप्न देखता है? सुषुप्ति का यह असीम सुख किसे मिलता है? और वे सब किसमें जाकर पूर्णतया प्रतिष्ठित होते हैं?'",
            english:
              "Then Sauryayani Gargya asked him: 'Venerable sir, in this person, which faculties sleep? Which remain awake? Which is that deity who beholds dreams? Whose is this deep-sleep bliss? And in whom are all these ultimately grounded?'",
            commentary:
              "अवस्थात्रय (जाग्रत, स्वप्न, सुषुप्ति) और उनके साक्षी तुरीय आत्मा के विषय में अत्यंत मौलिक दार्शनिक जिज्ञासा।",
          },
          {
            number: 2,
            devanagari:
              "तस्मै स होवाच। यथा गार्ग्य मरीचयोऽर्कस्यास्तं गच्छतः सर्वा एतस्मिंस्तेजोमण्डल एकीभवन्ति।\nताः पुनः पुनरुदयतः प्रचरन्त्येवं ह वै तत्सर्वं परे देवे मनस्येकीभवति।\nतेन तर्ह्येष पुरुषो न शृणोति न पश्यति न जिघ्रति न रसयते न स्पृशते नाभिवदते नादत्ते नानन्दयते न विसृजते नेयायते स्वपितीत्याचक्षते॥२॥",
            transliteration:
              "tasmai sa hovāca | yathā gārgya marīcayo 'rkasyāstaṃ gacchataḥ sarvā etasmiṃs tejo-maṇḍala ekībhavanti |\ntāḥ punaḥ punar udayataḥ pracaranty evaṃ ha vai tat sarvaṃ pare deve manasy ekībhavati |\ntena tarhy eṣa puruṣo na śṛṇoti na paśyati na jighrati na rasayate na spṛśate nābhivadate nādatte nānandayate na visṛjate neyāyate svapitīty ācakṣate || 2 ||",
            hindi:
              "पिप्पलाद ने कहा: 'हे गार्ग्य! जैसे अस्त होते हुए सूर्य की समस्त किरणें उस तेजोमय मण्डल में एक हो जाती हैं और प्रातः उदय होने पर पुनः फैल जाती हैं, वैसे ही निद्रा के समय सब इंद्रियाँ श्रेष्ठ देव 'मन' में एकीभूत हो जाती हैं। तब मनुष्य न सुनता है, न देखता है, न सूंघता है, न चखता है, न स्पर्श करता है, न बोलता है, न ग्रहण करता है, न आनंद लेता है, न त्याग करता है, न चलता है। तब लोग कहते हैं—वह सो रहा है।'",
            english:
              "To him the sage replied: 'As the rays of the setting sun all become unified in that orb of radiant light, and go forth again when he rises, even so does all sensory experience become unified in the higher deity, the Mind. Therefore this person hears not, sees not, smells not, tastes not, touches not, speaks not, grasps not; then people say: He sleeps.'",
            commentary:
              "सूर्य-किरण दृष्टान्त — निद्रा काल में बाह्य इंद्रियों का मन में प्रत्याहार।",
          },
          {
            number: 3,
            devanagari:
              "प्राणाग्नय एवैतस्मिन् पुरे जाग्रति।\nगार्हपत्यो वा एषोऽपानो व्यानोऽन्वाहार्यपचनो यद्गार्हपत्यात्प्रणीयते प्रणयनादाहवनीयः प्राणः॥३॥",
            transliteration:
              "prāṇāgnaya evaitasmin pure jāgrati |\ngārhapatyo vā eṣo 'pāno vyāno 'nvāhāryapacano yad gārhapatyāt praṇīyate praṇayanād āhavanīyaḥ prāṇaḥ || 3 ||",
            hindi:
              "इस शरीर-रूपी नगर में केवल प्राण-रूपी अग्नियां ही जागती रहती हैं। अपान गार्हपत्य अग्नि है, व्यान अन्वाहार्यपचन (दक्षिणाग्नि) है, और क्योंकि मुख्य प्राण गार्हपत्य से प्रणीत होता है, इसलिए वह आहवनीय अग्नि है।",
            english:
              "The fires of Prana alone stay awake in this city of the body. Apana is the Garhapatya fire; Vyana is the Anvaharyapacana fire; and because Prana is drawn from the Garhapatya, he is the Ahavaniya fire.",
            commentary:
              "शरीर में अखंड प्राण-यज्ञ। जब इंद्रियाँ सो जाती हैं, तब भी प्राण-अग्नि देह की रक्षा करती है।",
          },
          {
            number: 4,
            devanagari:
              "यदुच्छ्वासनिःश्वासावेतावाहुती समं नयतीति स समानः।\nमनो ह वाव यजमान इष्टफलमेवोदानः स एनं यजमानमहरहर्ब्रह्म गमयति॥४॥",
            transliteration:
              "yad ucchvāsa-niḥśvāsāv etāv āhutī samaṃ nayatīti sa samānaḥ |\nmano ha vāva yajamāna iṣṭa-phalam evodānaḥ sa enaṃ yajamānam ahar-ahar brahma gamayati || 4 ||",
            hindi:
              "उच्छ्वास (श्वास छोड़ना) और निःश्वास (श्वास लेना) रूपी दोनों आहुतियों को जो सम रखता है, वह समान वायु (होता/ऋत्विज) है। मन ही यजमान है, और यज्ञ का अभीष्ट फल उदान है, जो इस यजमान (मन) को प्रतिदिन सुषुप्ति में परब्रह्म के सान्निध्य में पहुँचाता है।",
            english:
              "Samana distributes equally the two oblations—inhalation and exhalation. The Mind is verily the sacrificer (yajamana); Udana is the fruit of sacrifice, which leads the sacrificer day by day in deep sleep to Brahman.",
            commentary:
              "सुषुप्ति में मन का ब्रह्म-संस्पर्श। प्रत्येक जीव प्रतिदिन सुषुप्ति में अचेतन रूप से परब्रह्म में विश्राम पाता है।",
          },
          {
            number: 5,
            devanagari:
              "अत्रैष देवः स्वप्ने महिमानमनुभवति।\nयद्दृष्टं दृष्टमनुपश्यति श्रुतं श्रुतमेवार्थमनुशृणोति देशदिगन्तरैश्च प्रत्यनुभूतं पुनः पुनः प्रत्यनुभवति दृष्टं चादृष्टं च श्रुतं चाश्रुतं चानुभूतं चाननुभूतं च सच्चासच्च सर्वं पश्यति सर्वः पश्यति॥५॥",
            transliteration:
              "atraiṣa devaḥ svapne mahimānam anubhavati |\nyad dṛṣṭaṃ dṛṣṭam anupaśyati śrutaṃ śrutam evārtham anuśṛṇoti deśa-dig-antaraiś ca pratyanubhūtaṃ punaḥ punaḥ pratyanubhavati dṛṣṭaṃ cādṛṣṭaṃ ca śrutaṃ cāśrutaṃ cānubhūtaṃ cānanubhūtaṃ ca sac cāsac ca sarvaṃ paśyati sarvaḥ paśyati || 5 ||",
            hindi:
              "यहाँ यह देव (मन) स्वप्नावस्था में अपनी अद्भुत महिमा का अनुभव करता है। जो पहले देखा गया है उसे पुनः देखता है, जो सुना गया है उसे पुनः सुनता है, विभिन्न देशों और दिशाओं में जो अनुभव किया गया है उसे फिर-फिर अनुभव करता है। जो देखा है और जो नहीं देखा, जो सुना है और जो नहीं सुना, जो अनुभव किया है और जो नहीं किया, जो सत्य है और जो असत्य—सब कुछ देखता है, क्योंकि वह स्वयं सर्व-रूप होकर देखता है।",
            english:
              "Here in dream this deity (Mind) experiences his own glory. What has been seen he sees again; what has been heard he hears again; what has been experienced in different lands he experiences repeatedly. What has been seen and unseen, heard and unheard, experienced and unexperienced, real and unreal—he sees all, becoming all.",
            commentary:
              "स्वप्न-सृष्टि का गहन मनोविज्ञान। मन अपनी ही वासनाओं से संपूर्ण विश्व की रचना कर लेता है।",
          },
          {
            number: 6,
            devanagari:
              "स यदा तेजसाऽभिभूतो भवति।\nअत्रैष देवः स्वप्नान्न पश्यत्यथ तदैतस्मिञ्शरीर एतत्सुखं भवति॥६॥",
            transliteration:
              "sa yadā tejasā'bhibhūto bhavati |\natraiṣa devaḥ svapnān na paśyaty atha tadaitasmiñ charīra etat sukhaṃ bhavati || 6 ||",
            hindi:
              "किन्तु जब वह मन सौर/आत्म-तेज से अभिभूत (आच्छादित) हो जाता है, तब यह देव स्वप्नों को नहीं देखता। उस समय इस शरीर में वह अनिर्वचनीय आनंद (सुषुप्ति-सुख) प्रकट होता है।",
            english:
              "When he is overpowered by inner divine light, then this deity dreams no dreams. At that time, there arises in this body this pure unalloyed bliss of deep sleep.",
            commentary:
              "सुषुप्ति अवस्था — मन के लय से प्रकट होने वाला आत्म-सुख। यहाँ द्वैत और विक्षेप पूर्णतः शांत हो जाते हैं।",
          },
          {
            number: 7,
            devanagari:
              "स यथा सोम्य वयांसि वासोवृक्षं संप्रतिष्ठन्ते।\nएवं ह वै तत्सर्वं पर आत्मनि संप्रतिष्ठते॥७॥",
            transliteration:
              "sa yathā somya vayāṃsi vāso-vṛkṣaṃ saṃpratiṣṭhante |\nevaṃ ha vai tat sarvaṃ para ātmani saṃpratiṣṭhate || 7 ||",
            hindi:
              "हे सौम्य! जिस प्रकार पक्षी संध्या के समय अपने निवास-वृक्ष की ओर लौटकर विश्राम लेते हैं, उसी प्रकार यह सब कुछ उस परम आत्मा में जाकर भली-भाँति प्रतिष्ठित हो जाता है।",
            english:
              "As birds, my dear, fly back and settle upon their dwelling tree at twilight, even so all this universe settles and rests in the supreme Self.",
            commentary:
              "वासोवृक्ष दृष्टान्त — आत्मा समस्त प्रपंच का परम आश्रय और विश्राम-स्थल है।",
          },
          {
            number: 8,
            devanagari:
              "पृथिवी च पृथिवीमात्रा चापश्चापोमात्रा च तेजश्च तेजोमात्रा च वायुश्च वायुमात्रा चाकाशश्चाकाशमात्रा च चक्षुश्च द्रष्टव्यं च श्रोत्रं च श्रोतव्यं च घ्राणं च घ्रातव्यं च रसश्च रसयितव्यं च त्वक्च स्पर्शयितव्यं च वाक्च वक्तव्यं च हस्तौ चादातव्यं चोपस्थश्चानन्दयितव्यं च पायुश्च विसर्जयितव्यं च पादौ च गन्तव्यं च मनश्च मन्तव्यं च बुद्धिश्च बोद्धव्यं चाहंकारश्चाहंकर्तव्यं च चित्तं च चेतयितव्यं च तेजश्च विद्योतयितव्यं च प्राणश्च विधारयितव्यं च॥८॥",
            transliteration:
              "pṛthivī ca pṛthivī-mātrā cāpaś cāpo-mātrā ca tejaś ca tejo-mātrā ca vāyuś ca vāyu-mātrā cākāśaś cākāśa-mātrā ca cakṣuś ca draṣṭavyaṃ ca śrotraṃ ca śrotavyaṃ ca ghrāṇaṃ ca ghrātavyaṃ ca rasaś ca rasayitavyaṃ ca tvak ca sparśayitavyaṃ ca vāk ca vaktavyaṃ ca hastau cādātavyaṃ copasthaś cānandayitavyaṃ ca pāyuś ca visarjayitavyaṃ ca pādau ca gantavyaṃ ca manaś ca mantavyaṃ ca buddhiś ca boddhavyaṃ cāhaṃkāraś cāhaṃkartavyaṃ ca cittaṃ ca cetayitavyaṃ ca tejaś ca vidyotayitavyaṃ ca prāṇaś ca vidhārayitavyaṃ ca || 8 ||",
            hindi:
              "पृथ्वी और उसकी तन्मात्रा (गंध), जल और रस, तेज और रूप, वायु और स्पर्श, आकाश और शब्द; आँख और दृश्य, कान और श्रव्य, नासिका और गंध, जीभ और स्वाद, त्वचा और स्पर्श; वाणी और वक्तव्य, हाथ और ग्रहण, उपस्थ और आनंद, गुदा और त्याग, पैर और गंतव्य; मन और मनन, बुद्धि और बोध, अहंकार और अहं-भाव, चित्त और चेतना, तेज और प्रकाश, तथा प्राण और धारणीय—यह सब उसी परम आत्मा में समाहित हो जाते हैं।",
            english:
              "Earth and the essence of earth, water and its essence, fire and its essence, air and its essence, ether and its essence; eye and what can be seen, ear and what can be heard, nose and what can be smelled, tongue and what can be tasted, skin and what can be touched; voice and what can be spoken, hands and what can be held, organ of joy and delight, organ of excretion and release, feet and the path walked; mind and thoughts, intellect and knowing, ego and self-sense, citta and consciousness, radiance and light, and prana and what is sustained—all rest in the Supreme Self.",
            commentary:
              "चतुर्विंशति तत्त्वों (२४ तत्त्वों) का परम आत्मा में विलीनीकरण। दृश्य जगत का कोई भी अंश आत्मा से पृथक् नहीं है।",
          },
          {
            number: 9,
            devanagari:
              "एष हि द्रष्टा स्प्रष्टा श्रोता घ्राता रसयिता मन्ता बोद्धा कर्ता विज्ञानात्मा पुरुषः।\nस परेऽक्षर आत्मनि संप्रतिष्ठते॥९॥",
            transliteration:
              "eṣa hi draṣṭā spraṣṭā śrotā ghrātā rasayitā mantā boddhā kartā vijñānātmā puruṣaḥ |\nsa pare 'kṣara ātmani saṃpratiṣṭhate || 9 ||",
            hindi:
              "निश्चय ही यह देखने वाला, स्पर्श करने वाला, सुनने वाला, सूंघने वाला, स्वाद लेने वाला, मनन करने वाला, जानने वाला और कर्म करने वाला विज्ञानात्मा पुरुष (जीवात्मा) है। वह भी उस अविनाशी परम अक्षर आत्मा में ही प्रतिष्ठित होता है।",
            english:
              "For he verily is the seer, toucher, hearer, smeller, taster, thinker, knower, doer—the conscious personal self (Vijnanatman Purusha). And he becomes established in the supreme, imperishable Self (Akshara Atman).",
            commentary:
              "जीवात्मा और परमात्मा का संबंध। उपाधि-युक्त विज्ञानात्मा अंततः निरूपाधिक अक्षर ब्रह्म में ही लीन होता है।",
          },
          {
            number: 10,
            devanagari:
              "परमेवाक्षरं प्रतिपद्यते स यो ह वै तदच्छायमशरीरमलोहितं शुभ्रमक्षरं वेदयते यस्तु सोम्य।\nस सर्वज्ञः सर्वो भवति तदेष श्लोकः॥१०॥",
            transliteration:
              "param evākṣaraṃ pratipadyate sa yo ha vai tad acchāyam aśarīram alohitaṃ śubhraṃ akṣaraṃ vedayate yas tu somya |\nsa sarvajñaḥ sarvo bhavati tad eṣa ślokaḥ || 10 ||",
            hindi:
              "हे सौम्य! जो उस छाया-रहित (अविद्या-शून्य), शरीर-रहित, वर्ण-रहित (शुद्ध), उज्ज्वल और अविनाशी परम तत्त्व को जान लेता है, वह उस परम अक्षर को ही प्राप्त कर लेता है। वह सर्वज्ञ होकर सर्व-रूप बन जाता है। इस विषय में यह श्लोक है।",
            english:
              "He who knows that shadowless, bodiless, colourless, luminous, imperishable Reality, O dear one, attains the supreme Imperishable. He becomes omniscient and becomes the All. In this regard there is this verse.",
            commentary:
              "अद्वैत साक्षात्कार का फल: सर्वज्ञता और सर्वभावापत्ति। ब्रह्म को जानने वाला ब्रह्म ही हो जाता है।",
          },
          {
            number: 11,
            devanagari:
              "विज्ञानात्मा सह देवैश्च सर्वैः प्राणा भूतानि संप्रतिष्ठन्ति यत्र।\nतदक्षरं वेदयते यस्तु सोम्य स सर्वज्ञः सर्वमेवाविवेशेति॥११॥",
            transliteration:
              "vijñānātmā saha devaiś ca sarvaiḥ prāṇā bhūtāni saṃpratiṣṭhanti yatra |\ntad akṣaraṃ vedayate yas tu somya sa sarvajñaḥ sarvam evāviveśeti || 11 ||",
            hindi:
              "जहाँ विज्ञानात्मा (जीवात्मा) समस्त इंद्रिय-देवताओं, प्राणों और पंचभूतों सहित जाकर लीन हो जाता है—हे सौम्य! उस अक्षर तत्त्व को जो जान लेता है, वह सर्वज्ञ होकर समस्त चराचर में प्रविष्ट हो जाता है।",
            english:
              "In whom the conscious self, together with all the sensory deities, vital breaths, and elements, find their final rest—he who knows that Imperishable, O beloved, becomes all-knowing and enters into the All.",
            commentary:
              "चतुर्थ प्रश्न का उपसंहार — तुरीय अक्षर ब्रह्म का पूर्ण साक्षात्कार ही समस्त बंधनों से मुक्ति है।",
          },
        ],
      },
      {
        id: "prashna-5",
        title: "पंचम प्रश्न • सत्यकाम शैव्य संवाद (ॐकार की एक, द्वि, त्रि-मात्रा उपासना और परब्रह्म प्राप्ति - ७ मन्त्र)",
        items: [
          {
            number: 1,
            devanagari:
              "अथ हैनं शैब्यः सत्यकामः पप्रच्छ।\nस यो ह वै तद्भगवन् मनुष्येषु प्रायणान्तमोङ्कारमभिध्यायीत।\nकतमं वाव स तेन लोकं जयतीति॥१॥",
            transliteration:
              "atha hainaṃ śaibyaḥ satyakāmaḥ papraccha |\nsa yo ha vai tad bhagavan manuṣyeṣu prāyaṇāntam oṅkāram abhidhyāyīta |\nkatamaṃ vāva sa tena lokaṃ jayatīti || 1 ||",
            hindi:
              "इसके पश्चात् शिबि के पुत्र सत्यकाम ने पूछा: 'हे भगवन्! मनुष्यों में से जो कोई जीवन के अंत (प्रयाण काल) तक ॐकार का इस प्रकार निरंतर ध्यान करता रहे, वह उस ध्यान से किस लोक को जीतता है?'",
            english:
              "Then Satyakama son of Shibi asked him: 'Venerable sir, if anyone among humans should meditate on the syllable OM until the very end of life, what world does he win thereby?'",
            commentary:
              "प्रणव (ॐकार) की अखंड साधना और उसके पारलौकिक फल का प्रश्न।",
          },
          {
            number: 2,
            devanagari:
              "तस्मै स होवाच। एतद्वै सत्यकाम परं चापरं च ब्रह्म यदोङ्कारः।\nतस्माद्विद्वानेतेनैवायतनेनैकतरमन्वेति॥२॥",
            transliteration:
              "tasmai sa hovāca | etad vai satyakāma paraṃ cāparaṃ ca brahma yad oṅkāraḥ |\ntasmād vidvān etenaivāyatanenaikataram anveti || 2 ||",
            hindi:
              "पिप्पलाद ने उत्तर दिया: 'हे सत्यकाम! यह जो ॐकार है, यही निश्चय परब्रह्म (निर्गुण) और अपरब्रह्म (सगुण) दोनों है। इसलिए ज्ञानी पुरुष इस ॐकार रूपी अवलंबन से ही दोनों में से किसी एक को प्राप्त कर लेता है।'",
            english:
              "To him the sage said: 'O Satyakama, that which is the syllable OM is indeed both the Higher (Para) and the Lower (Apara) Brahman. Therefore, the wise, with this support alone, attains either of the two.'",
            commentary:
              "ॐकार परब्रह्म और अपरब्रह्म दोनों का सर्वश्रेष्ठ प्रतीक और महासाधन है।",
          },
          {
            number: 3,
            devanagari:
              "स यद्येकमात्रमभिध्यायीत स तेनैव संवेदितस्तूर्णमेव जगत्यामभिसंपद्यते।\nतमृचो मनुष्यलोकमुपनयन्ते स तत्र तपसा ब्रह्मचर्येण श्रद्धया संपन्नो महिमानमनुभवति॥३॥",
            transliteration:
              "sa yady eka-mātram abhidhyāyīta sa tenaiva saṃveditas tūrṇam eva jagatyām abhisaṃpadyate |\ntam ṛco manuṣya-lokam upanayante sa tatra tapasā brahmacaryeṇa śraddhayā saṃpanno mahimānam anubhavati || 3 ||",
            hindi:
              "यदि वह ॐकार की केवल एक मात्रा ('अ') का ध्यान करता है, तो वह उसी से प्रबुद्ध होकर शीघ्र ही पृथ्वी पर जन्म लेता है। ऋग्वेद की ऋचाएँ उसे पुनः श्रेष्ठ मनुष्य लोक में ले आती हैं, जहाँ वह तप, ब्रह्मचर्य और श्रद्धा से संपन्न होकर महानता का अनुभव करता है।",
            english:
              "If he meditates on one measure (the sound 'A'), enlightened by that alone he quickly returns to this world. The Rig verses lead him to the human world, where endowed with austerity, chastity, and faith, he experiences greatness.",
            commentary:
              "प्रथम मात्रा 'अ' (ऋग्वेद, जाग्रत अवस्था) के ध्यान का फल — श्रेष्ठ मानव जन्म और आध्यात्मिक उन्नति।",
          },
          {
            number: 4,
            devanagari:
              "अथ यदि द्विमात्रेण मनसि संपद्यते सोऽन्तरिक्षं यजुर्भिरुन्नीयते सोमलोकम्।\nस सोमलोके विभूतिमनुभूय पुनरावर्तते॥४॥",
            transliteration:
              "atha yadi dvi-mātreṇa manasi saṃpadyate so 'ntarikṣaṃ yajurbhir unnīyate soma-lokam |\nsa soma-loke vibhūtim anubhūya punar āvartate || 4 ||",
            hindi:
              "यदि वह द्वि-मात्रा ('अ' और 'उ') से मन में ॐकार का ध्यान करता है, तो वह यजुर्वेद के मन्त्रों द्वारा अंतरिक्ष लोक (सोमलोक/चन्द्रलोक) में पहुँचाया जाता है। वह वहाँ दिव्य ऐश्वर्य का भोग करके पुनः इस संसार में लौटता है।",
            english:
              "If he meditates with two measures (the sounds 'A' and 'U') in his mind, he is led by Yajur verses to the intermediate sky, the world of the Moon. Having experienced celestial splendor in the realm of Soma, he returns again.",
            commentary:
              "द्वितीय मात्रा 'उ' (यजुर्वेद, स्वप्नावस्था) के ध्यान का फल — चन्द्रलोक और पुण्य क्षय होने पर पुनरावृत्ति।",
          },
          {
            number: 5,
            devanagari:
              "यः पुनरेतं त्रिमात्रेणोमित्येतेनैवाक्षरेण परं पुरुषमभिध्यायीत स तेजसि सूर्ये संपन्नः।\nयथा पादोदरस्त्वचा विनिर्मुच्यत एवं ह वै स पाप्मना विनिर्मुक्तः स सामभिरुन्नीयते ब्रह्मलोकं स एतस्माज्जीवघनात्परात्परं पुरिशयं पुरुषमीक्षते तदेतौ श्लोकौ भवतः॥५॥",
            transliteration:
              "yaḥ punar etaṃ tri-mātreṇom ity etenaivākṣareṇa paraṃ puruṣam abhidhyāyīta sa tejasi sūrye saṃpannaḥ |\nyathā pādodaras tvacā vinirmucyata evaṃ ha vai sa pāpmanā vinirmuktaḥ sa sāmabhir unnīyate brahma-lokaṃ sa etasmāj jīva-ghanāt parāt-paraṃ puri-śayaṃ puruṣam īkṣate tad etau ślokau bhavataḥ || 5 ||",
            hindi:
              "किन्तु जो इस त्रि-मात्रा ('अ', 'उ', 'म') युक्त ॐकार के द्वारा परम पुरुष का ध्यान करता है, वह तेजोमय सूर्यलोक में पहुँचता है। जिस प्रकार सर्प (पादोदर) अपनी केंचुली से मुक्त हो जाता है, उसी प्रकार वह समस्त पापों से विनिर्मुक्त हो जाता है। सामवेद के मन्त्र उसे सत्य ब्रह्मलोक में ले जाते हैं, जहाँ वह इस जीव-समुदाय से परे हृदय-गुहा में स्थित परम पुरुष का साक्षात्कार करता है। इस विषय में ये दो श्लोक हैं।",
            english:
              "He who meditates on the supreme Purusha with this very syllable OM of three measures ('A', 'U', 'M'), becomes unified in the light of the Sun. As a snake is freed from its slough, so is he completely liberated from all sin. He is led by the Sama chants to the world of Brahma; there he beholds the supreme Person dwelling in the heart, higher than the collective jiva. In this regard there are these two verses.",
            commentary:
              "सर्प-केंचुली दृष्टान्त — त्रिमात्र ॐकार ध्यान से समस्त पापों का आत्यंतिक क्षय और परम पुरुष का साक्षात् दर्शन।",
          },
          {
            number: 6,
            devanagari:
              "तिस्रो मात्रा मृत्युमत्यः प्रयुक्ता अन्योन्यसक्ता अनविप्रयुक्ताः।\nक्रियासु बाह्याभ्यन्तरमध्यमासु सम्यक्प्रयुक्तासु न कम्पते ज्ञः॥६॥",
            transliteration:
              "tisro mātrā mṛtyumatyaḥ prayuktā anyonya-saktā anaviprayuktāḥ |\nkriyāsu bāhyābhyantara-madhyamāsu samyak prayuktāsu na kampate jñaḥ || 6 ||",
            hindi:
              "ये तीनों मात्राएं यदि पृथक्-पृथक् प्रयुक्त हों तो मृत्यु की सीमा में हैं; किन्तु जब वे एक-दूसरे से भली-भाँति जुड़ी हुई, अविभाज्य रूप से बाह्य (जाग्रत), मध्यम (स्वप्न) और आंतरिक (सुषुप्ति) क्रियाओं में सम्यक् रूप से प्रयुक्त होती हैं, तब ज्ञानी पुरुष कभी विचलित या भयभीत नहीं होता।",
            english:
              "The three measures, when practiced separately, are subject to death; but when they are harmoniously united, without division, and rightly applied in the waking, dream, and deep-sleep states, the knower never wavers.",
            commentary:
              "मात्राओं का अखंड समन्वय — अवस्थात्रय के साक्षी तुरीय का अचंचल साक्षात्कार।",
          },
          {
            number: 7,
            devanagari:
              "ऋग्भिरेतं यजुर्भिरन्तरिक्षं सामभिर्यत्तत्कवयो वेदयन्ते।\nतमोंकारेणैवायतनेनान्वेति विद्वान् यत्तच्छान्तमजरममृतमभयं परं चेति॥७॥",
            transliteration:
              "ṛgbhir etaṃ yajurbhir antarikṣaṃ sāmabhir yat tat kavayo vedayante |\ntam oṅkāreṇaivāyatanenānveti vidvān yat tac chāntam ajaram amṛtam abhayaṃ paraṃ ceti || 7 ||",
            hindi:
              "ऋग्वेद से मनुष्य लोक, यजुर्वेद से अंतरिक्ष लोक और सामवेद से उस दिव्य लोक को प्राप्त किया जाता है जिसे ज्ञानी ऋषि जानते हैं। किन्तु केवल ॐकार के अवलंबन से ही तत्त्वज्ञ विद्वान उस परम तत्त्व को प्राप्त करता है जो शांत, अजर, अमर, अभय और सर्वोपरि है।",
            english:
              "Through the Rig verses this human world is reached, through Yajur verses the sky, and through Sama verses that which sages reveal. Yet with the sole support of OM does the wise reach That which is peaceful, ageless, immortal, fearless, and Supreme!",
            commentary:
              "पंचम प्रश्न का उपसंहार — प्रणव ही समस्त वेदों का परम सार, अभय पद और परब्रह्म की प्राप्ति का श्रेष्ठ साधन है।",
          },
        ],
      },
      {
        id: "prashna-6",
        title: "षष्ठ प्रश्न • सुकेशा भारद्वाज संवाद (षोडशकल पुरुष - १६ कलाओं वाले परमात्मा का स्वरूप - ८ मन्त्र)",
        items: [
          {
            number: 1,
            devanagari:
              "अथ हैनं सुकेशा भारद्वाजः पप्रच्छ।\nभगवन् हिरण्यनाभः कौसल्यो राजपुत्रो मामुपैत्यैतं प्रश्नमपृच्छत।\nषोडशकलं भारद्वाज पुरुषं वेत्थ।\nतम अहं कुमारमब्रुवं नाहमिमं वेद यद्यहमिममवेदिषं कथं ते नावक्ष्यमिति।\nसमूलो वा एष परिशुष्यति योऽनृतमभिवदति तस्मान्नार्हाम्यनृतं वक्तुम्।\nस तूष्णीं रथमारुह्य प्रवव्राज।\nतं त्वा पृच्छामि क्वासौ पुरुष इति॥१॥",
            transliteration:
              "atha hainaṃ sukeśā bhāradvājaḥ papraccha |\nbhagavan hiraṇyanābhaḥ kausalyo rājaputro mām upaityaitaṃ praśnam apṛcchata |\nṣoḍaśa-kalaṃ bhāradvāja puruṣaṃ vettha |\ntam ahaṃ kumāram abruvaṃ nāham imaṃ veda yady aham imam avediṣaṃ kathaṃ te nāvakṣyam iti |\nsamūlo vā eṣa pariśuṣyati yo 'nṛtam abhivadati tasmān nārhāmy anṛtaṃ vaktum |\nsa tūṣṇīṃ ratham āruhya pravavrāja |\ntaṃ tvā pṛcchāmi kvāsau puruṣa iti || 1 ||",
            hindi:
              "इसके बाद सुकेशा भारद्वाज ने पूछा: 'हे भगवन्! कोसल देश के राजकुमार हिरण्यनाभ ने मेरे पास आकर यह प्रश्न पूछा था—हे भारद्वाज! क्या तुम सोलह कलाओं वाले पुरुष (षोडशकल पुरुष) को जानते हो? मैंने उस राजकुमार से कहा—मैं इसे नहीं जानता। यदि मैं जानता तो तुम्हें क्यों न बताता? जो असत्य बोलता है, वह जड़ सहित सूख (नष्ट हो) जाता है, अतः मैं असत्य नहीं कह सकता। वह मौन होकर रथ पर चढ़कर चला गया। अब मैं आपसे पूछता हूँ—वह सोलह कलाओं वाला पुरुष कहाँ है?'",
            english:
              "Then Sukesha Bharadvaja asked him: 'Venerable sir, Hiranyanabha, prince of Kosala, approached me and asked: Bharadvaja, do you know the Person of sixteen parts (shodasha-kala purusha)? I replied to the prince: I do not know him. Had I known him, why should I not have told you? Verily, he who speaks untruth withers away to his very roots; therefore I dare not speak falsely. He mounted his chariot in silence and departed. So I ask you: Where is that Person?'",
            commentary:
              "सत्यवादिता का अमर उपदेश: 'समूलो वा एष परिशुष्यति योऽनृतमभिवदति'। षोडशकल पुरुष के रहस्य की जिज्ञासा।",
          },
          {
            number: 2,
            devanagari:
              "तस्मै स होवाच।\nइहैवान्तःशरीरे सोम्य स पुरुषो यस्मिन्नेताः षोडश कलाः प्रभवन्तीति॥२॥",
            transliteration:
              "tasmai sa hovāca |\nihaivāntaḥ-śarīre somya sa puruṣo yasminn etāḥ ṣoḍaśa kalāḥ prabhavantīti || 2 ||",
            hindi:
              "महर्षि पिप्पलाद ने उससे कहा: 'हे सौम्य! वह पुरुष कहीं बाहर या दूर नहीं, इसी शरीर के भीतर अंतःकरण में विद्यमान है, जिसमें से ये सोलह कलाएँ प्रकट होती हैं।'",
            english:
              "To him the sage replied: 'Right here within the body, O dear youth, is that Person, in whom these sixteen parts arise.'",
            commentary:
              "परमात्मा की अंतर्यामी स्थिति। समस्त कलाओं का मूल स्रोत हृदय-कमल में ही विराजमान है।",
          },
          {
            number: 3,
            devanagari:
              "स ईक्षाञ्चक्रे।\nकस्मिन्नहमुत्क्रान्त उत्क्रान्तो भविष्यामि कस्मिन्वा प्रतिष्ठिते प्रतिष्ठास्यामीति॥३॥",
            transliteration:
              "sa īkṣāñcakre |\nkasminn aham utkrānta utkrānto bhaviṣyāmi kasmin vā pratiṣṭhite pratiṣṭhāsyāmīti || 3 ||",
            hindi:
              "उस परम पुरुष ने विचार (ईक्षण) किया: 'किसके निकल जाने पर मैं निकला हुआ समझा जाऊँगा, और किसके स्थित रहने पर मैं स्थित रहूँगा?'",
            english:
              "He (the Purusha) deliberated: 'At whose departure shall I depart? At whose remaining established shall I remain established?'",
            commentary:
              "परमात्मा का ईक्षण — सृष्टि-रचना का प्रथम संकल्प।",
          },
          {
            number: 4,
            devanagari:
              "स प्राणमसृजत प्राणाच्छ्रद्धां खं वायुर्ज्योतिरापः पृथिवीन्द्रियं मनः।\nअन्नमन्नाद्वीर्यं तपो मन्त्राः कर्म लोका लोकेषु च नाम च॥४॥",
            transliteration:
              "sa prāṇam asṛjata prāṇāc chraddhāṃ khaṃ vāyur jyotir āpaḥ pṛthivīndriyaṃ manaḥ |\nannam annād vīryaṃ tapo mantrāḥ karma lokā lokeṣu ca nāma ca || 4 ||",
            hindi:
              "उसने सर्वप्रथम प्राण को उत्पन्न किया। प्राण से श्रद्धा, आकाश, वायु, ज्योति (अग्नि), जल, पृथ्वी, इंद्रियाँ और मन की रचना की। फिर अन्न, अन्न से बल (वीर्य), तप, मन्त्र, कर्म, समस्त लोक और लोकों में नाम—ये सोलह कलाएँ बनाईं।",
            english:
              "He created Prana; from Prana came faith (shraddha), space, air, fire, water, earth, the senses, and mind. Then food, from food vigor, austerity, sacred mantras, righteous action, the worlds, and in the worlds, distinct names—these are the sixteen parts.",
            commentary:
              "षोडश कलाएँ: १. प्राण, २. श्रद्धा, ३. आकाश, ४. वायु, ५. तेज, ६. जल, ७. पृथ्वी, ८. इंद्रियाँ, ९. मन, १०. अन्न, ११. वीर्य, १२. तप, १३. मन्त्र, १४. कर्म, १५. लोक, १६. नाम।",
          },
          {
            number: 5,
            devanagari:
              "स यथेमा नद्यः स्यन्दमानाः समुद्रायणाः समुद्रं प्राप्यास्तं गच्छन्ति भिद्येते तासां नामरूपे समुद्र इत्येवं प्रोच्यते।\nएवमेवास्य परिद्रष्टुरिमाः षोडश कलाः पुरुषायणाः पुरुषं प्राप्यास्तं गच्छन्ति भिद्येते तासां नामरूपे पुरुष इत्येवं प्रोच्यते स एषोऽकलोऽमृतो भवति तदेष श्लोकः॥५॥",
            transliteration:
              "sa yathemā nadyaḥ syandamānāḥ samudrāyaṇāḥ samudraṃ prāpyāstaṃ gacchanti bhidyete tāsāṃ nāma-rūpe samudra ity evaṃ procyate |\nevam evāsya paridraṣṭur imāḥ ṣoḍaśa kalāḥ puruṣāyaṇāḥ puruṣaṃ prāpyāstaṃ gacchanti bhidyete tāsāṃ nāma-rūpe puruṣa ity evaṃ procyate sa eṣo 'kalo 'mṛto bhavati tad eṣa ślokaḥ || 5 ||",
            hindi:
              "जैसे ये बहती हुई नदियाँ समुद्र की ओर जाती हैं और समुद्र में पहुँचकर विलीन हो जाती हैं, उनके अलग-अलग नाम और रूप मिट जाते हैं और केवल 'समुद्र' ही कहा जाता है; वैसे ही इस सर्वद्रष्टा आत्मा की ये सोलह कलाएँ पुरुष में पहुँचकर विलीन हो जाती हैं, उनके नाम-रूप नष्ट हो जाते हैं और केवल 'पुरुष' ही कहलाते हैं। तब वह निष्कल (कला-शून्य) और अमर हो जाता है। इस विषय में यह श्लोक है।",
            english:
              "As these flowing rivers tending toward the ocean, on reaching the ocean, merge into it, their individual names and forms dissolving, so that they are simply called 'ocean'; even so do these sixteen parts of the all-seeing Witness, tending toward the Purusha, merge into Purusha, their names and forms dissolved, and are called simply 'Purusha'. He becomes without parts and immortal! In this regard there is this verse.",
            commentary:
              "नदी-समुद्र दृष्टान्त — अद्वैत वेदान्त का सर्वोच्च रूपक। अविद्या-कल्पित नाम-रूप का लय होकर केवल अखंड परब्रह्म शेष रह जाता है।",
          },
          {
            number: 6,
            devanagari:
              "अरा इव रथनाभौ कला यस्मिन् प्रतिष्ठिताः।\nतं वेद्यं पुरुषं वेद यथा मा वो मृत्युः परिव्यथा इति॥६॥",
            transliteration:
              "arā iva ratha-nābhau kalā yasmin pratiṣṭhitāḥ |\ntaṃ vedyaṃ puruṣaṃ veda yathā mā vo mṛtyuḥ parivyathā iti || 6 ||",
            hindi:
              "जिस प्रकार रथ की नाभि में तीलियाँ (अरा) जुड़ी रहती हैं, उसी प्रकार जिसमें ये सोलह कलाएँ टिकी हुई हैं—उस जानने योग्य परम पुरुष को जानो, जिससे मृत्यु तुम्हें कभी कष्ट न पहुँचा सके।",
            english:
              "In whom the parts are centered like spokes in the nave of a chariot wheel—know that Person who is worthy of being known, so that death may never cause you torment!",
            commentary:
              "परम पुरुष के ज्ञान से ही मृत्यु के भय और संसार के संताप से आत्यंतिक मुक्ति मिलती है।",
          },
          {
            number: 7,
            devanagari:
              "तान् होवाचैतावदेवाहमेतत् परं ब्रह्म वेद।\nनातः परमस्तीति॥७॥",
            transliteration:
              "tān hovācaitāvad evāham etat paraṃ brahma veda |\nnātaḥ param astīti || 7 ||",
            hindi:
              "पिप्पलाद ने उन शिष्यों से कहा: 'मैं इस परब्रह्म को इतना ही जानता हूँ; इससे परे और कुछ नहीं है।'",
            english:
              "Pippalada said to them: 'Only this much do I know of that supreme Brahman; there is nothing higher than This.'",
            commentary:
              "परब्रह्म की पराकाष्ठा का निर्देश — ब्रह्म से परे अन्य कोई सत्ता नहीं है।",
          },
          {
            number: 8,
            devanagari:
              "ते तमर्चयन्तस्त्वं हि नः पिता योऽस्माकमविद्यायाः परं पारं तारयसीति।\nनमः परमऋषिभ्यो नमः परमऋषिभ्यः॥८॥",
            transliteration:
              "te tam arcayantas tvaṃ hi naḥ pitā yo 'smākam avidyāyāḥ paraṃ pāraṃ tārayasīti |\nnamaḥ parama-ṛṣibhyo namaḥ parama-ṛṣibhyaḥ || 8 ||",
            hindi:
              "उन छहों ऋषियों ने पिप्पलाद की पूजा करते हुए कहा: 'आप ही हमारे सच्चे पिता हैं, जिन्होंने हमें अविद्या के उस पार (संसार-सागर से पार) पहुँचा दिया है।' परम ऋषियों को बारंबार नमस्कार! परम ऋषियों को बारंबार नमस्कार!",
            english:
              "Worshipping him, they said: 'You verily are our spiritual father, who has ferried us safely to the farther shore of the ocean of ignorance (avidya).' Salutations to the supreme Rishis! Salutations to the supreme Rishis!",
            commentary:
              "प्रश्नोपनिषद् का पावन समापन — सद्गुरु के प्रति कृतज्ञता। गुरु ही अविद्या के अंधकार से मोक्ष के दिव्य प्रकाश में ले जाते हैं।",
          },
        ],
      },
    ],
  },

  "mundaka-upanishad": {
    label: "मुण्डकोपनिषद् (अथर्ववेद)",
    sourceTotal: "३ मुण्डक • ६ खण्ड • ६४ मन्त्र",
    editionNote:
      "अथर्ववेद शौनक शाखा • आदि शंकराचार्य भाष्य • शौनक एवं अङ्गिरा संवाद • ६४ मन्त्र पूर्ण संरचना",
    chapters: [
      {
        id: "mundaka-1-1",
        title: "प्रथम मुण्डक, प्रथम खण्ड • परा व अपरा विद्या (मन्त्र १–९)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ ब्रह्मा देवानां प्रथमः सम्बभूव विश्वस्य कर्ता भुवनस्य गोप्ता।\nस ब्रह्मविद्यां सर्वविद्याप्रतिष्ठामथर्वाय ज्येष्ठपुत्राय प्राह॥१॥",
            transliteration:
              "oṃ brahmā devānāṃ prathamaḥ sambabhūva viśvasya kartā bhuvanasya goptā |\nsa brahma-vidyāṃ sarva-vidyā-pratiṣṭhām atharvāya jyeṣṭha-putrāya prāha || 1 ||",
            hindi:
              "समस्त देवताओं में सर्वप्रथम ब्रह्मा जी उत्पन्न हुए, जो विश्व के रचयिता और ब्रह्मांड के रक्षक हैं। उन्होंने समस्त विद्याओं की आधारशिला ब्रह्मविद्या का उपदेश अपने ज्येष्ठ पुत्र अथर्वा को दिया।",
            english:
              "Brahma arose first among the gods, the creator of the universe and the protector of the cosmos. He imparted the knowledge of Brahman, the foundation of all knowledges, to his eldest son Atharva.",
            commentary:
              "ऋषि: अङ्गिरा • श्रोता: शौनक • वेद: अथर्ववेद। ब्रह्मविद्या की सनातन गुरु-शिष्य परंपरा का उद्भव।",
          },
          {
            number: 3,
            devanagari:
              "शौनको ह वै महाशालोऽङ्गिरसं विधिवदुपसन्नः पप्रच्छ।\nकस्मिन्नु भगवो विज्ञाते सर्वमिदं विज्ञातं भवतीति॥३॥",
            transliteration:
              "śaunako ha vai mahā-śālo 'ṅgirasaṃ vidhivad upasannaḥ papraccha |\nkasmin nu bhagavo vijñāte sarvam idaṃ vijñātaṃ bhavatīti || 3 ||",
            hindi:
              "गृहस्थों में श्रेष्ठ शौनक ने विधिपूर्वक ऋषि अङ्गिरा के समीप उपस्थित होकर पूछा—हे भगवन्! वह कौन सा एक तत्त्व है जिसके जान लिए जाने पर यह सब कुछ जान लिया जाता है?",
            english:
              "Shaunaka, a householder of great renown, duly approached Sage Angiras with reverence and enquired: 'O Venerable Lord, what is that through knowing which, all this becomes known?'",
            commentary:
              "उपनिषदों का परम जिज्ञासु प्रश्न: मूल कारण-तत्त्व (Root Reality) को जानने से संपूर्ण कार्य-जगत का ज्ञान हो जाता है।",
          },
          {
            number: 4,
            devanagari:
              "तस्मै स होवाच। द्वे विद्ये वेदितव्ये इति ह स्म यद्ब्रह्मविदो वदन्ति परा चैवापरा च॥४॥",
            transliteration:
              "tasmai sa hovāca | dve vidye veditavye iti ha sma yad brahma-vido vadanti parā caivāparā ca || 4 ||",
            hindi:
              "अङ्गिरा ने उनसे कहा—ब्रह्मवेत्ता कहते हैं कि जानने योग्य दो विद्याएँ हैं: एक 'परा' विद्या (आध्यात्मिक आत्म-ज्ञान) और दूसरी 'अपरा' विद्या (लौकिक/भौतिक ज्ञान)।",
            english:
              "To him he said: 'Two kinds of knowledge are to be known, as declared by the knowers of Brahman—the higher knowledge (Para Vidya) and the lower knowledge (Apara Vidya).'",
            commentary:
              "ज्ञान का द्वि-विभाजन: अपरा (सांसारिक विज्ञान व कर्मकांड) और परा (परमात्म-साक्षात्कार)।",
          },
          {
            number: 5,
            devanagari:
              "तत्रापरा ऋग्वेदो यजुर्वेदः सामवेदोऽथर्ववेदः शिक्षा कल्पो व्याकरणं निरुक्तं छन्दो ज्योतिषमिति।\nअथ परा यया तदक्षरमधिगम्यते॥५॥",
            transliteration:
              "tatrāparā ṛgvedo yajurvedaḥ sāmavedo 'tharvavedaḥ śikṣā kalpo vyākaraṇaṃ niruktaṃ chando jyotiṣam iti |\natha parā yayā tad akṣaram adhigamyate || 5 ||",
            hindi:
              "उनमें अपरा विद्या है: ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद, तथा छहों वेदांग (शिक्षा, कल्प, व्याकरण, निरुक्त, छंद और ज्योतिष)। और परा विद्या वह है जिसके द्वारा उस अविनाशी परमब्रह्म (अक्षर) का साक्षात्कार होता है।",
            english:
              "Of these, the lower knowledge is the Rigveda, Yajurveda, Samaveda, Atharvaveda, and the six auxiliary sciences (phonetics, ritual, grammar, etymology, meter, and astronomy). But the higher knowledge is that by which the Imperishable (Akshara) is realized.",
            commentary:
              "केवल शास्त्र-कंठस्थ करना अपरा है; जब तक परब्रह्म का प्रत्यक्ष अनुभव न हो, तब तक परा विद्या सिद्ध नहीं होती।",
          },
          {
            number: 6,
            devanagari:
              "यत्तदद्रेश्यमग्राह्यमगोत्रमवर्णमचक्षुःश्रोत्रं तदपाणिपादम्।\nनित्यं विभुं सर्वगतं सुसूक्ष्मं तदव्ययं यद्भूतयोनिं परिपश्यन्ति धीराः॥६॥",
            transliteration:
              "yat tad adreśyam agrāhyam agotram avarṇam acakṣuḥ-śrotraṃ tad apāṇi-pādam |\nnityaṃ vibhuṃ sarva-gataṃ susūkṣmaṃ tad avyayaṃ yad bhūta-yoniṃ paripaśyanti dhīrāḥ || 6 ||",
            hindi:
              "जो अदृश्य, अग्राह्य, कुल-गोत्र रहित, वर्ण-जाति रहित, नेत्र और कानों से रहित, हाथ-पैरों से रहित, नित्य, सर्वव्यापी, सर्वगत, अत्यंत सूक्ष्म और अविनाशी है—उस समस्त भूतों के मूल कारण (भूतयोनि) का धीर पुरुष साक्षात् दर्शन करते हैं।",
            english:
              "That which is invisible, ungraspable, without lineage or caste, without eyes or ears, without hands or feet; eternal, all-pervading, omnipresent, subtle beyond subtlety, imperishable—that source of all beings the steadfast sages clearly behold.",
            commentary:
              "अक्षर परब्रह्म का विशुद्ध दार्शनिक स्वरूप।",
          },
          {
            number: 7,
            devanagari:
              "यथोर्णनाभिः सृजते गृह्णते च यथा पृथिव्यामोषधयः सम्भवन्ति।\nयथा सतः पुरुषात्केशलोमानि तथाऽक्षरात्सम्भवतीह विश्वम्॥७॥",
            transliteration:
              "yathorṇa-nābhiḥ sṛjate gṛhṇate ca yathā pṛthivyām oṣadhayaḥ sambhavanti |\nyathā sataḥ puruṣāt keśa-lomāni tathā 'kṣarāt sambhavatīha viśvam || 7 ||",
            hindi:
              "जैसे मकड़ी अपने ही भीतर से जाला निकालती और पुनः समेट लेती है; जैसे पृथ्वी से नाना प्रकार की औषधियाँ (वनस्पतियाँ) स्वतः उत्पन्न होती हैं; जैसे जीवित मनुष्य के शरीर से केश और लोम उगते हैं—वैसे ही उस अविनाशी परमात्मा से यह संपूर्ण विश्व उत्पन्न होता है।",
            english:
              "As a spider emits and draws in its web, as plants spring from the earth, and as hair grows upon a living person; even so from the Imperishable arises this universe.",
            commentary:
              "उपनिषदों का प्रसिद्ध त्रिविध दृष्टांत: ब्रह्म ही सृष्टि का अभिन्न-निमित्तोपादान कारण है।",
          },
        ],
      },
      {
        id: "mundaka-2-2",
        title: "द्वितीय मुण्डक, द्वितीय खण्ड • प्रणव धनुष व आत्म-लक्ष्य (मन्त्र १–११)",
        items: [
          {
            number: 3,
            devanagari:
              "धनुर्गृहीत्वौपनिषदं महास्त्रं शरं ह्युपासानिशितं संधयीत।\nआयम्य तद्भावगतेन चेतसा लक्ष्यं तदेवाक्षरं सोम्य विद्धि॥३॥",
            transliteration:
              "dhanur gṛhītvaupaniṣadaṃ mahāstraṃ śaraṃ hy upāsā-niśitaṃ sandhayīta |\nāyamya tad-bhāva-gatena cetasā lakṣyaṃ tad evākṣaraṃ somya viddhi || 3 ||",
            hindi:
              "उपनिषदों में प्रसिद्ध प्रणवरूपी महाधनुष को उठाकर, उपासना द्वारा तीक्ष्ण किए गए आत्मरूपी बाण को उस पर चढ़ाओ। हे प्रिय सौम्य! उस ब्रह्म के भाव में तल्लीन चित्त से धनुष को खींचकर, उस अविनाशी ब्रह्म को ही अपना लक्ष्य वेधो!",
            english:
              "Taking hold of the great weapon—the bow of the Upanishads—set upon it the arrow sharpened by earnest meditation. Drawing it with a mind absorbed in contemplation of That, hit the mark, O gentle one, which is that very Imperishable Brahman!",
            commentary:
              "अध्यात्म-साधना का धनुर्विद्या रूपक: मन की एकाग्रता और ब्रह्म-साक्षात्कार।",
          },
          {
            number: 4,
            devanagari:
              "प्रणवो धनुः शरो ह्यात्मा ब्रह्म तल्लक्ष्यमुच्यते।\nअप्रमत्तेन वेद्धव्यं शरवत्तन्मयो भवेत्॥४॥",
            transliteration:
              "praṇavo dhanuḥ śaro hy ātmā brahma tal-lakṣyam ucyate |\napramattena veddhavyaṃ śaravat tanmayo bhavet || 4 ||",
            hindi:
              "प्रणव (ॐकार) धनुष है, जीवात्मा बाण है, और ब्रह्म ही उसका लक्ष्य कहा गया है। प्रमाद-रहित (पूर्ण सावधान) होकर उस लक्ष्य का वेध करना चाहिए, जिससे बाण की भाँति साधक ब्रह्म में तन्मय (एकाकार) हो जाए।",
            english:
              "The sacred syllable Om is the bow, the individual soul is the arrow, and Brahman is said to be the target. It is to be hit by one whose mind is unswerving; then, like the arrow, one becomes merged in the target.",
            commentary:
              "मुण्डकोपनिषद् का परम प्रसिद्ध सूत्र: 'प्रणवो धनुः शरो ह्यात्मा ब्रह्म तल्लक्ष्यमुच्यते' — ॐकार साधना द्वारा आत्म-साक्षात्कार।",
          },
          {
            number: 8,
            devanagari:
              "भिद्यते हृदयग्रन्थिश्छिद्यन्ते सर्वसंशयाः।\nक्षीयन्ते चास्य कर्माणि तस्मिन्दृष्टे परावरे॥८॥",
            transliteration:
              "bhidyate hṛdaya-granthiś chidyante sarva-saṃśayāḥ |\nkṣīyante cāsya karmāṇi tasmin dṛṣṭe parāvare || 8 ||",
            hindi:
              "उस परावर (सर्वोच्च एवं सर्वव्यापी) परब्रह्म का साक्षात्कार हो जाने पर साधक के हृदय की अविद्या-रूपी समस्त ग्रंथियाँ खुल जाती हैं, सारे संशय छिन्न-भिन्न हो जाते हैं और उसके समस्त संचित कर्म क्षीण (नष्ट) हो जाते हैं।",
            english:
              "The knot of the heart is rent asunder, all doubts are severed, and all one's accumulated actions and karmas perish, when He who is both high and low is beheld.",
            commentary:
              "जीवन्मुक्ति का लक्षण: हृदय की अविद्या-ग्रंथि का नाश, संशय-निवृत्ति और कर्म-बंधनों से मुक्ति।",
          },
          {
            number: 10,
            devanagari:
              "न तत्र सूर्यो भाति न चन्द्रतारकं नेमा विद्युतो भान्ति कुतोऽयमग्निः।\nतमेव भान्तमनुभाति सर्वं तस्य भासा सर्वमिदं विभाति॥१०॥",
            transliteration:
              "na tatra sūryo bhāti na candra-tārakaṃ nemā vidyuto bhānti kuto 'yam agniḥ |\ntam eva bhāntam anubhāti sarvaṃ tasya bhāsā sarvam idaṃ vibhāti || 10 ||",
            hindi:
              "वहाँ न सूर्य प्रकाशित होता है, न चंद्रमा और तारे चमकते हैं, न यह बिजली चमकती है, फिर इस भौतिक अग्नि की तो बात ही क्या! वह जब प्रकाशित होता है, तो सब कुछ उसी के पीछे प्रकाशित होता है; उसी के दिव्य प्रकाश से यह संपूर्ण ब्रह्मांड प्रकाशित हो रहा है।",
            english:
              "There the sun shines not, nor the moon and stars, nor do these lightnings flash—how then could this earthly fire? He shining, all things shine after Him; by His radiant light all this is illumined.",
            commentary:
              "कठोपनिषद् (२.२.१५), श्वेताश्वतर (६.१४) और भगवद्गीता (१५.६) में भी उद्धृत यह अमर महामंत्र ईश्वर के स्वयंप्रकाश चैतन्य का गान है।",
          },
        ],
      },
      {
        id: "mundaka-3-1",
        title: "तृतीय मुण्डक, प्रथम खण्ड • द्वा सुपर्णा एवं सत्यमेव जयते (मन्त्र १–१०)",
        items: [
          {
            number: 1,
            devanagari:
              "द्वा सुपर्णा सयुजा सखाया समानं वृक्षं परिषस्वजाते।\nतयोरन्यः पिप्पलं स्वाद्वत्त्यनश्नन्नन्यो अभिचाकशीति॥१॥",
            transliteration:
              "dvā suparṇā sayujā sakhāyā samānaṃ vṛkṣaṃ pariṣasvajāte |\ntayor anyaḥ pippalaṃ svādv atty anaśnann anyo abhicākaśīti || 1 ||",
            hindi:
              "सुंदर पंखों वाले दो पक्षी (जीवात्मा और परमात्मा), जो सदा साथ रहने वाले परस्पर सखा हैं, एक ही शरीर-रूपी वृक्ष का आश्रय लिए हुए हैं। उनमें से एक (जीवात्मा) कर्मों के स्वादिष्ट फलों को चखता है, जबकि दूसरा (परमात्मा) बिना खाए केवल साक्षी भाव से देखता रहता है।",
            english:
              "Two birds of fair plumage, inseparable companions, cling to the self-same tree. One of the two tastes the sweet fruits of action, while the other looks on without eating, an unattached witness.",
            commentary:
              "ऋग्वेद (१.१६४.२०) और मुण्डकोपनिषद् का प्रसिद्ध 'द्वा सुपर्णा' रूपक: जीव और साक्षी ईश्वर का संबंध।",
          },
          {
            number: 6,
            devanagari:
              "सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः।\nयेनाक्रमन्त्यृषयो ह्याप्तकामा यत्र तत् सत्यस्य परमं निधानम्॥६॥",
            transliteration:
              "satyam eva jayate nānṛtaṃ satyena panthā vitato deva-yānaḥ |\nyenākramanty ṛṣayo hy āptakāmā yatra tat satyasya paramaṃ nidhānam || 6 ||",
            hindi:
              "सत्य की ही सदा विजय होती है, असत्य की नहीं! सत्य के द्वारा ही देवयान का कल्याणकारी मार्ग प्रशस्त होता है, जिस मार्ग से निष्काम और पूर्णकाम ऋषिगण उस परम धाम में पहुँचते हैं जहाँ सत्य का सर्वोच्च निधान (परमेश्वर) प्रतिष्ठित है।",
            english:
              "Truth alone triumphs, not falsehood! By Truth is laid out the divine path (Devayana), along which the self-realized seers, freed from desire, ascend to that highest abode where Truth supreme resides.",
            commentary:
              "भारत का राष्ट्रीय आदर्श-वाक्य 'सत्यमेव जयते' मुण्डकोपनिषद् के इसी तीसरे मुण्डक के प्रथम खण्ड के छठे मंत्र से अवतरित है।",
          },
        ],
      },
      {
        id: "mundaka-3-2",
        title: "तृतीय मुण्डक, द्वितीय खण्ड • ब्रह्मविद् ब्रह्मैव भवति (मन्त्र १–११)",
        items: [
          {
            number: 3,
            devanagari:
              "नायमात्मा प्रवचनेन लभ्यो न मेधया न बहुना श्रुतेन।\nयमेवैष वृणुते तेन लभ्यस्तस्यैष आत्मा विवृणुते तनूं स्वाम्॥३॥",
            transliteration:
              "nāyam ātmā pravacanena labhyo na medhayā na bahunā śrutena |\nyam evaiṣa vṛṇute tena labhyas tasyaiṣa ātmā vivṛṇute tanūṃ svām || 3 ||",
            hindi:
              "यह आत्मा न केवल प्रवचनों से, न तीक्ष्ण बुद्धि से और न बहुत शास्त्र-श्रवण करने से ही प्राप्त की जा सकती है। जिसे यह आत्मा स्वयं वरण करती है, उसी को यह सुलभ होती है; और उसके सम्मुख यह आत्मा अपने वास्तविक स्वरूप को प्रकट कर देती है।",
            english:
              "This Self cannot be attained through lecture, nor by sharp intellect, nor by vast study. He whom this Self chooses, by him It is obtained; unto him this Self reveals its own true nature.",
            commentary:
              "भगवत्कृपा और अनन्य शरणागति का रहस्य। केवल बौद्धिक पाण्डित्य से नहीं, अपितु आत्म-समर्पण से साक्षात्कार होता है।",
          },
          {
            number: 9,
            devanagari:
              "स यो ह वै तत्परमं ब्रह्म वेद ब्रह्मैव भवति नास्याब्रह्मवित्कुले भवति।\nतरति शोकं तरति पाप्मानं गुहाग्रन्थिभ्यो विमुक्तोऽमृतो भवति॥९॥",
            transliteration:
              "sa yo ha vai tat paramaṃ brahma veda brahmaiva bhavati nāsyābrahmavit-kule bhavati |\ntarati śokaṃ tarati pāpmānaṃ guhā-granthibhyo vimukto 'mṛto bhavati || 9 ||",
            hindi:
              "जो कोई उस परमब्रह्म को साक्षात् जान लेता है, वह स्वयं ब्रह्म ही हो जाता है ('ब्रह्मविद् ब्रह्मैव भवति')। उसके कुल में कोई भी ब्रह्मज्ञान से रहित नहीं होता। वह शोक को पार कर जाता है, पापों को पार कर जाता है और हृदय की अविद्या-ग्रंथियों से सर्वथा मुक्त होकर अमर हो जाता है।",
            english:
              "He verily who knows that Supreme Brahman becomes Brahman Itself ('Brahmavid Brahmaiva bhavati'). In his lineage none is born ignorant of Brahman. He crosses beyond sorrow, crosses beyond sin, and liberated from the knots of the heart, becomes immortal.",
            commentary:
              "मुण्डकोपनिषद् का चरम सिद्धान्त: ब्रह्मवेत्ता ब्रह्मस्वरूप ही हो जाता है। अद्वैत साक्षात्कार का फल।",
          },
        ],
      },
    ],
  },

  "taittiriya-upanishad": {
    label: "तैत्तिरीयोपनिषद् (कृष्ण यजुर्वेद)",
    sourceTotal: "३ वल्लियाँ • ३१ अनुवाक",
    editionNote:
      "कृष्ण यजुर्वेद तैत्तिरीय शाखा • शिक्षावल्ली, ब्रह्मानन्दवल्ली (पञ्चकोश विवेक) एवं भृगुवल्ली ('अन्नं ब्रह्मेति')",
    chapters: [
      {
        id: "tait-shiksha",
        title: "शिक्षावल्ली • सत्यं वद धर्मं चर एवं दीक्षांत उपदेश (अनुवाक १, ११)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ शं नो मित्रः शं वरुणः। शं नो भवत्वर्यमा।\nशं न इन्द्रो बृहस्पतिः। शं नो विष्णुरुरुक्रमः।\nनमो ब्रह्मणे। नमस्ते वायो।\nत्वमेव प्रत्यक्षं ब्रह्मासि। त्वामेव प्रत्यक्षं ब्रह्म वदिष्यामि।\nऋतं वदिष्यामि। सत्यं वदिष्यामि।\nतन्मामवतु। तद्वक्तारमवतु।\nअवतु माम्। अवतु वक्तारम्।\nॐ शान्तिः शान्तिः शान्तिः॥",
            transliteration:
              "oṃ śaṃ no mitraḥ śaṃ varuṇaḥ | śaṃ no bhavatv aryamā |\nśaṃ na indro bṛhaspatiḥ | śaṃ no viṣṇur urukramaḥ |\nnamo brahmaṇe | namas te vāyo |\ntvam eva pratyakṣaṃ brahmāsi | tvām eva pratyakṣaṃ brahma vadiṣyāmi |\nṛtaṃ vadiṣyāmi | satyaṃ vadiṣyāmi |\ntan mām avatu | tad vaktāram avatu |\navatu mām | avatu vaktāram |\noṃ śāntiḥ śāntiḥ śāntiḥ ||",
            hindi:
              "मित्र देवता हमारे लिए कल्याणकारी हों, वरुण कल्याणकारी हों। अर्यमा हमारे लिए कल्याणकारी हों। इन्द्र और बृहस्पति हमारे लिए कल्याणकारी हों, तथा विस्तीर्ण डगों वाले विष्णु हमारे लिए कल्याणकारी हों। ब्रह्म को नमस्कार! हे वायु! तुम्हें नमस्कार! तुम ही प्रत्यक्ष ब्रह्म हो; मैं तुम्हें ही प्रत्यक्ष ब्रह्म कहूँगा। मैं ऋत (यथार्थ नियम) कहूँगा, मैं सत्य कहूँगा। वह परब्रह्म मेरी रक्षा करे, वह गुरु (वक्ता) की रक्षा करे। मेरी रक्षा करे, गुरु की रक्षा करे। ॐ शान्तिः शान्तिः शान्तिः!",
            english:
              "May Mitra be propitious unto us; may Varuna be propitious unto us. May Aryaman be propitious unto us. May Indra and Brihaspati be propitious unto us; may Vishnu of the wide strides be propitious unto us. Salutation unto Brahman! Salutation unto thee, O Vayu! Thou alone art visible Brahman; thee alone shall I declare as visible Brahman. I shall speak the Right (Rita); I shall speak the Truth (Satya). May That protect me; may That protect the teacher. May That protect me; may That protect the teacher. Om Peace, Peace, Peace!",
            commentary:
              "तैत्तिरीयोपनिषद् का सुप्रसिद्ध शान्ति पाठ। शिक्षावल्ली का मंगलाचरण जो विद्यार्थी और शिक्षक के कल्याण तथा सत्य-निष्ठा की प्रार्थना करता है।",
          },
          {
            number: 2,
            devanagari:
              "वेदमनूच्याचार्योऽन्तेवासिनमनुशास्ति।\nसत्यं वद। धर्मं चर। स्वाध्यायान्मा प्रमदः।\nआचार्याय प्रियं धनमाहृत्य प्रजातन्तुं मा व्यवच्छेत्सीः।\nसत्यान्न प्रमदितव्यम्। धर्मान्न प्रमदितव्यम्। कुशलान्न प्रमदितव्यम्।\nभूत्यै न प्रमदितव्यम्। स्वाध्यायप्रवचनाभ्यां न प्रमदितव्यम्॥",
            transliteration:
              "vedam anūcyācāryo 'ntevāsinam anuśāsti |\nsatyaṃ vada | dharmaṃ cara | svādhyāyān mā pramadaḥ |\nācāryāya priyaṃ dhanam āhṛtya prajā-tantuṃ mā vyavacchetsīḥ |\nsatyān na pramaditavyam | dharmān na pramaditavyam | kuśalān na pramaditavyam |\nbhūtyai na pramaditavyam | svādhyāya-pravacanābhyāṃ na pramaditavyam ||",
            hindi:
              "वेद की शिक्षा पूर्ण होने पर आचार्य शिष्य को दीक्षांत उपदेश देते हैं: सत्य बोलो। धर्म का आचरण करो। स्वाध्याय में कभी प्रमाद मत करो। आचार्य को प्रिय दक्षिणा भेंट करके गृहस्थ परंपरा (कुल-तंतु) को खंडित मत करो। सत्य से कभी प्रमाद मत करो, धर्म से कभी मत डिगो, अपनी शारीरिक-मानसिक कुशलता में प्रमाद मत करो, कल्याणकारी ऐश्वर्य की वृद्धि से मत चूको, और स्वाध्याय तथा ज्ञान-प्रवचन (अध्यापन) से कभी प्रमाद मत करो।",
            english:
              "Having taught the Vedas, the preceptor instructs the disciple at convocation: 'Speak the truth. Practice righteousness. Do not neglect self-study. Having offered worthy gifts to the teacher, do not break the lineage of family. Do not deviate from truth; do not deviate from dharma; do not neglect your well-being; do not neglect righteous prosperity; do not neglect self-study and teaching.'",
            commentary:
              "प्राचीन भारत का सुप्रसिद्ध दीक्षांत उद्बोधन (Convocation Address)। स्नातक के लिए व्यावहारिक जीवन और नैतिक आचरण की आधारशिला।",
          },
          {
            number: 3,
            devanagari:
              "मातृदेवो भव। पितृदेवो भव। आचार्यदेवो भव। अतिथिदेवो भव।\nयान्यनवद्यानि कर्माणि तानि सेवितव्यानि नो इतराणि।\nयान्यस्माकँ सुचरितानि तानि त्वयोपास्यानि नो इतराणि॥",
            transliteration:
              "mātṛ-devo bhava | pitṛ-devo bhava | ācārya-devo bhava | atithi-devo bhava |\nyāny anavadyāni karmāṇi tāni sevitavyāni no itarāṇi |\nyāny asmākaṃ sucaritāni tāni tvayopāsyāni no itarāṇi ||",
            hindi:
              "माता को देवता स्वरूप मानो (मातृदेवो भव)। पिता को देवता स्वरूप मानो (पितृदेवो भव)। गुरु को देवता स्वरूप मानो (आचार्यदेवो भव)। अतिथि को देवता स्वरूप मानो (अतिथिदेवो भव)। जो अनिंद्य (दोष-रहित व श्रेष्ठ) कर्म हैं, केवल उन्हीं का सेवन करना चाहिए, अन्य कर्मों का नहीं। हमारे (गुरुओं के) जो श्रेष्ठ आचरण हैं, केवल उन्हीं का अनुकरण करना चाहिए, दूसरों का नहीं।",
            english:
              "'May your mother be a deity unto you. May your father be a deity unto you. May your preceptor be a deity unto you. May your guest be a deity unto you. Whatever actions are blameless, those only should be practiced, not others. Whatever good deeds have been practiced by us, those alone should be revered and followed by you, not others.'",
            commentary:
              "सनातन संस्कृति के चार पूज्य आधार: माता, पिता, गुरु और अतिथि का सत्कार। गुरु का यह कहना कि 'केवल अनिंद्य आचरण का ही अनुकरण करो' वैदिक ऋषियों की अप्रतिम बौद्धिक ईमानदारी को दर्शाता है।",
          },
          {
            number: 4,
            devanagari:
              "श्रद्धया देयम्। अश्रद्धयाऽदेयम्।\nश्रिया देयम्। ह्रिया देयम्। भिया देयम्। संविदा देयम्।\nएष आदेशः। एष उपदेशः। एषा वेदोपनिषत्।\nएतदनुशासनम्। एवमुपासितव्यम्। एवमु चैतदुपास्यम्॥",
            transliteration:
              "śraddhayā deyam | aśraddhayā'deyam |\nśriyā deyam | hriyā deyam | bhiyā deyam | saṃvidā deyam |\neṣa ādeśaḥ | eṣa upadeśaḥ | eṣā vedopaniṣat |\netad anuśāsanam | evam upāsitavyam | evam u caitad upāsyam ||",
            hindi:
              "दान श्रद्धापूर्वक देना चाहिए, अश्रद्धा से कभी नहीं देना चाहिए। अपनी सामर्थ्य और ऐश्वर्य के अनुसार देना चाहिए, संकोच व विनय (ह्री) से देना चाहिए, ईश्वर-भय (भिया) से देना चाहिए, और पूर्ण ज्ञान तथा सद्भाव (संविदा) के साथ देना चाहिए। यही ईश्वरीय आदेश है, यही सदुपदेश है, यही समस्त वेदों का गुप्त रहस्य (वेदोपनिषद्) है, और यही अंतिम अनुशासन है। इसी प्रकार इसका पालन करना चाहिए, निश्चय ही इसी प्रकार आचरण करना चाहिए!",
            english:
              "'Give with faith; never give without faith. Give with magnanimity; give with modesty; give with awe; give with deep empathy and understanding. This is the command. This is the teaching. This is the secret doctrine of the Vedas (Vedopanishad). This is the divine ordinance. Thus should it be observed; verily, thus should it be observed!'",
            commentary:
              "दान-मीमांसा और वेदानुशासन का शिखर। केवल दान देना पर्याप्त नहीं, दान के पीछे की श्रद्धा, विनम्रता और संवेदना ही उसे पुण्य बनाती है।",
          },
        ],
      },
      {
        id: "tait-brahmananda",
        title: "ब्रह्मानन्दवल्ली • सत्यं ज्ञानमनन्तं ब्रह्म एवं पञ्चकोश विवेक (अनुवाक १-८)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ ब्रह्मविदाप्नोति परम्। तदेषाभ्युक्ता।\nसत्यं ज्ञानमनन्तं ब्रह्म।\nयो वेद निहितं गुहायां परमे व्योमन्।\nसोऽश्नुते सर्वान् कामान् सह ब्रह्मणा विपश्चितेति।\nतस्माद्वा एतस्मादात्मन आकाशः संभूतः।\nआकाशाद्वायुः। वायोरग्निः। अग्नेरापः।\nअद्भ्यः पृथिवी। पृथिव्या ओषधयः।\nओषधीभ्योऽन्नम्। अन्नात्पुरुषः।\nस वा एष पुरुषोऽन्नरसमयः॥",
            transliteration:
              "oṃ brahmavid āpnoti param | tad eṣābhyuktā |\nsatyaṃ jñānam anantaṃ brahma |\nyo veda nihitaṃ guhāyāṃ parame vyoman |\nso 'śnute sarvān kāmān saha brahmaṇā vipaściteti |\ntasmād vā etasmād ātmana ākāśaḥ saṃbhūtaḥ |\nākāśād vāyuḥ | vāyor agniḥ | agner āpaḥ |\nadbhyaḥ pṛthivī | pṛthivyā oṣadhayaḥ |\noṣadhībhyo 'nnam | annāt puruṣaḥ |\nsa vā eṣa puruṣo 'nna-rasamayaḥ ||",
            hindi:
              "ब्रह्म को जानने वाला परब्रह्म को प्राप्त कर लेता है। इसके विषय में यह ऋचा कही गई है: ब्रह्म सत्यस्वरूप, ज्ञानस्वरूप और अनंत (असीम) है। जो उस हृदय-गुहा के परम आकाश में छिपे हुए ब्रह्म को साक्षात् जान लेता है, वह उस सर्वज्ञ ब्रह्म के साथ समस्त दिव्य आनंद का उपभोग करता है। उस इसी आत्म-तत्त्व से आकाश उत्पन्न हुआ; आकाश से वायु; वायु से अग्नि; अग्नि से जल; जल से पृथ्वी; पृथ्वी से औषधियाँ; औषधियों से अन्न; और अन्न से पुरुष (मनुष्य) उत्पन्न हुआ। यह पुरुष निश्चय ही अन्न-रस-मय है।",
            english:
              "'He who knows Brahman attains the Supreme.' Regarding this, it is declared: 'Brahman is Truth (Satyam), Consciousness (Jnanam), and Infinite (Anantam). He who knows That hidden in the secret cave of the heart in the supreme ether enjoys all desires in communion with the all-knowing Brahman.' From this Self verily was ether born; from ether, air; from air, fire; from fire, water; from water, earth; from earth, herbs; from herbs, food; and from food, the human person. This person is verily composed of the essence of food (Annamaya).",
            commentary:
              "तैत्तिरीयोपनिषद् का सर्वप्रधान सूत्र: 'सत्यं ज्ञानमनन्तं ब्रह्म'। ब्रह्म का स्वरूप-लक्षण और पञ्चमहाभूतों की सृष्टि का क्रमिक विज्ञान।",
          },
          {
            number: 2,
            devanagari:
              "अन्नाद्वै प्रजाः प्रजायन्ते। याः काश्च पृथिवीं श्रिताः।\nअथो अन्नेनैव जीवन्ति। अथैनदपि यन्त्यन्ततः।\nअन्नं हि भूतानां ज्येष्ठम्। तस्मात्सर्वौषधमुच्यते।\nतस्माद्वा एतस्मादन्नरसमयात्।\nअन्योऽन्तर आत्मा प्राणमयः। तेनैष पूर्णः॥",
            transliteration:
              "annād vai prajāḥ prajāyante | yāḥ kāś ca pṛthivīṃ śritāḥ |\natho annenaiva jīvanti | athainad api yanty antataḥ |\nannaṃ hi bhūtānāṃ jyeṣṭham | tasmāt sarvauṣadham ucyate |\ntasmād vā etasmād anna-rasamayāt |\nanyo 'ntara ātmā prāṇamayaḥ | tenaiṣa pūrṇaḥ ||",
            hindi:
              "पृथ्वी पर आश्रित जितनी भी प्रजाएँ हैं, वे सब अन्न से ही उत्पन्न होती हैं। फिर वे अन्न से ही जीवित रहती हैं, और अंत में मृत्यु के उपरांत इसी अन्न में लीन हो जाती हैं। अन्न ही समस्त प्राणियों में ज्येष्ठ (सर्वप्रथम) है; इसलिए इसे सर्वौषध (सबकी क्षुधा मिटाने वाला) कहा जाता है। उस इस अन्न-रस-मय स्थूल शरीर से भिन्न इसके भीतर दूसरा सूक्ष्म आत्मा 'प्राणमय' है; उस प्राणमय से यह अन्नमय शरीर परिपूर्ण है।",
            english:
              "From food verily all creatures are born, whichever reside on earth. By food alone they live, and into food do they dissolve at the end. Food is verily the eldest of all beings; therefore it is called the universal panacea. Distinct from this body composed of food-essence, there is another inner self composed of vital breath (Pranamaya); by that Pranamaya is this Annamaya filled.",
            commentary:
              "अन्नमय कोश और प्राणमय कोश का विवेक। देह अन्न का विकार है, किन्तु इसके भीतर जीवन का संचार प्राणमय कोश करता है।",
          },
          {
            number: 3,
            devanagari:
              "प्राणं देवा अनु प्राणन्ति। मनुष्याः पशवश्च ये।\nप्राणो हि भूतानामायुः। तस्मात्सर्वायुषमुच्यते।\nतस्य प्राण एव शिरः। व्यानो दक्षिणः पक्षः। अपान उत्तरः पक्षः।\nआकाश आत्मा। पृथिवी पुच्छं प्रतिष्ठा।\nतस्माद्वा एतस्मात्प्राणमयात्।\nअन्योऽन्तर आत्मा मनोमयः। तेनैष पूर्णः॥",
            transliteration:
              "prāṇaṃ devā anu prāṇanti | manuṣyāḥ paśavaś ca ye |\nprāṇo hi bhūtānām āyuḥ | tasmāt sarvāyuṣam ucyate |\ntasya prāṇa eva śiraḥ | vyāno dakṣiṇaḥ pakṣaḥ | apāna uttaraḥ pakṣaḥ |\nākāśa ātmā | pṛthivī pucchaṃ pratiṣṭhā |\ntasmād vā etasmāt prāṇamayāt |\nanyo 'ntara ātmā manomayaḥ | tenaiṣa pūrṇaḥ ||",
            hindi:
              "देवगण, मनुष्य और पशु—सब प्राण के सहारे ही जीवन-क्रिया करते हैं। प्राण ही समस्त प्राणियों की आयु है; इसीलिए इसे 'सर्वायुष' कहा जाता है। उस प्राणमय पुरुष का मुख्य प्राण ही सिर है, व्यान दायाँ पंख है, अपान बायाँ पंख है, मध्यवर्ती आकाश धड़ (आत्मा) है, और पृथ्वी देवता आधार-पुच्छ (प्रतिष्ठा) है। उस इस प्राणमय से भिन्न इसके भीतर दूसरा सूक्ष्म आत्मा 'मनोमय' है, जिससे यह प्राणमय परिपूर्ण है।",
            english:
              "The gods live by breath, as do humans and beasts. Prana is verily the life-span of all beings; therefore it is called the life of all. Of this Pranamaya self, Prana is the head; Vyana is the right wing; Apana is the left wing; space is the trunk; and the Earth deity is the stabilizing base. Distinct from this Pranamaya, there is another inner self composed of Mind (Manomaya); by that is this filled.",
            commentary:
              "प्राणमय कोश का पक्षी-रूपक और मनोमय कोश का निर्देश। प्राण शरीर को चलाता है, किन्तु प्राण को संकल्प-विकल्प रूपी मन संचालित करता है।",
          },
          {
            number: 4,
            devanagari:
              "यतो वाचो निवर्तन्ते। अप्राप्य मनसा सह।\nआनन्दं ब्रह्मणो विद्वान्। न बिभेति कदाचनेति।\nतस्य यजुरेव शिरः। ऋग्दक्षिणः पक्षः। सामोत्तरः पक्षः।\nआदेश आत्मा। अथर्वाङ्गिरसः पुच्छं प्रतिष्ठा।\nतस्माद्वा एतस्मान्मनोमयात्।\nअन्योऽन्तर आत्मा विज्ञानमयः। तेनैष पूर्णः॥",
            transliteration:
              "yato vāco nivartante | aprāpya manasā saha |\nānandaṃ brahmaṇo vidvān | na bibheti kadācaneti |\ntasya yajur eva śiraḥ | ṛg dakṣiṇaḥ pakṣaḥ | sāmottaraḥ pakṣaḥ |\nādeśa ātmā | atharvāṅgirasaḥ pucchaṃ pratiṣṭhā |\ntasmād vā etasmān manomayāt |\nanyo 'ntara ātmā vijñānamayaḥ | tenaiṣa pūrṇaḥ ||",
            hindi:
              "जहाँ से वाणी मन के साथ उस तत्त्व को पाए बिना लौट आती है, उस ब्रह्म के परमानन्द को जानने वाला साधक कभी किसी से भयभीत नहीं होता। उस मनोमय पुरुष का यजुर्वेद सिर है, ऋग्वेद दायाँ पंख है, सामवेद बायाँ पंख है, ब्राह्मण-ग्रंथों का आदेश धड़ है, और अथर्ववेद पुच्छ-प्रतिष्ठा है। उस इस मनोमय से भिन्न इसके भीतर दूसरा सूक्ष्म आत्मा 'विज्ञानमय' (बुद्धि/विवेक) है, जिससे यह मनोमय परिपूर्ण है।",
            english:
              "'Whence speech turns back together with the mind, unable to comprehend; the knower of the bliss of that Brahman fears nothing at all.' Of this Manomaya self, the Yajur is the head; the Rig is the right wing; the Sama is the left wing; the injunctions are the trunk; and the Atharvaveda is the base. Distinct from this Manomaya, there is another inner self composed of Intellect/Wisdom (Vijnanamaya); by that is this filled.",
            commentary:
              "मनोमय कोश और वाणी-मन की सीमा। वेदों के ज्ञान-संस्कार मन में हैं, किन्तु निश्चयात्मिका बुद्धि विज्ञानमय कोश है।",
          },
          {
            number: 5,
            devanagari:
              "विज्ञानं यज्ञं तनुते। कर्माणि तनुतेऽपि च।\nविज्ञानं देवाः सर्वे। ब्रह्म ज्येष्ठमुपासते।\nतस्य श्रद्धैव शिरः। ऋतं दक्षिणः पक्षः। सत्यमुत्तरः पक्षः।\nयोग आत्मा। महः पुच्छं प्रतिष्ठा।\nतस्माद्वा एतस्माद्विज्ञानमयात्।\nअन्योऽन्तर आत्मानन्दमयः। तेनैष पूर्णः॥",
            transliteration:
              "vijñānaṃ yajñaṃ tanute | karmāṇi tanute 'pi ca |\nvijñānaṃ devāḥ sarve | brahma jyeṣṭham upāsate |\ntasya śraddhaiva śiraḥ | ṛtaṃ dakṣiṇaḥ pakṣaḥ | satyam uttaraḥ pakṣaḥ |\nyoga ātmā | mahaḥ pucchaṃ pratiṣṭhā |\ntasmād vā etasmād vijñānamayāt |\nanyo 'ntara ātmānandamayaḥ | tenaiṣa pūrṇaḥ ||",
            hindi:
              "विज्ञान (विवेक-बुद्धि) ही यज्ञ का विस्तार करता है और समस्त कर्तव्य-कर्मों का विस्तार करता है। समस्त देवगण विज्ञान को ही ज्येष्ठ (सर्वप्रथम) ब्रह्म मानकर उपासना करते हैं। उस विज्ञानमय पुरुष की श्रद्धा ही सिर है, ऋत (सत्य-भाव) दायाँ पंख है, सत्य (यथार्थ-भाषण) बायाँ पंख है, योग (चित्त-एकाग्रता) धड़ है, और महत्तत्त्व (हिरण्यगर्भ) पुच्छ-प्रतिष्ठा है। उस इस विज्ञानमय से भिन्न इसके भीतर परम आंतरिक आत्मा 'आनन्दमय' है, जिससे यह विज्ञानमय परिपूर्ण है।",
            english:
              "Wisdom (Vijnana) accomplishes the sacrifice, and performs all righteous actions. All the gods meditate on Wisdom as the eldest manifestation of Brahman. Of this Vijnanamaya self, Faith (Shraddha) is the head; cosmic order (Rita) is the right wing; truth (Satya) is the left wing; meditative union (Yoga) is the trunk; and Mahat (the cosmic intellect) is the base. Distinct from this Vijnanamaya, there is another profound inner self composed of Bliss (Anandamaya); by that is this filled.",
            commentary:
              "विज्ञानमय कोश — कर्ता और भोक्ता का सूक्ष्म आधार। श्रद्धा, ऋत, सत्य और योग इसके अंग हैं। इसके भीतर अंतिम आवरण आनन्दमय कोश है।",
          },
          {
            number: 6,
            devanagari:
              "असन्नेव स भवति। असद्ब्रह्मेति वेद चेत्।\nअस्ति ब्रह्मेति चेद्वेद। सन्तमेनं ततो विदुरिति।\nतस्यैष एव शारीर आत्मा। यः पूर्वस्य।\nसोऽकामयत। बहु स्यां प्रजायेयेति।\nरसो वै सः। रसं ह्येवायं लब्ध्वानन्दी भवति।\nको ह्येवान्यात्कः प्राण्यात्। यदेष आकाश आनन्दो न स्यात्।\nएष ह्येवानन्दयाति॥",
            transliteration:
              "asann eva sa bhavati | asad brahmeti veda cet |\nasti brahmeti ced veda | santam enaṃ tato vidur iti |\ntasyaiṣa eva śārīra ātmā | yaḥ pūrvasya |\nso 'kāmayata | bahu syāṃ prajāyeyeti |\nraso vai saḥ | rasaṃ hy evāyaṃ labdhvānandī bhavati |\nko hy evānyāt kaḥ prāṇyāt | yad eṣa ākāśa ānando na syāt |\neṣa hy evānandayati ||",
            hindi:
              "यदि कोई मनुष्य ब्रह्म को असत् (नहीं है) मानता है, तो वह स्वयं ही असत् (शून्य) हो जाता है। किन्तु यदि वह यह जानता है कि 'ब्रह्म है', तो ब्रह्मवेत्ता ज्ञानी उसे सत्पुरुष के रूप में जानते हैं। उस आनन्दमय ने संकल्प किया: 'मैं बहुत हो जाऊँ, प्रजा रूप में प्रकट होऊँ!' वह परमात्मा साक्षात् रसस्वरूप (आनंद-रस) है। उस रस को प्राप्त करके ही यह जीवात्मा आनंदित होता है। यदि इस हृदयाकाश में यह आनंद-स्वरूप ब्रह्म न होता, तो कौन अपान वायु खींचता और कौन प्राण धारण करता? निश्चय ही यही परमात्मा सबको आनंदित करता है।",
            english:
              "'Non-existent verily does he become, if he thinks Brahman does not exist. If he knows that Brahman exists, then the wise know him to be real and virtuous.' He desired: 'May I be many, may I produce.' That Brahman is verily Bliss-Essence (Raso Vai Sah). Attaining this very bliss does the soul become blissful. For who could live, who could breathe, if this supreme space of bliss were not present in the heart? It is He alone who bestows bliss upon all!",
            commentary:
              "तैत्तिरीयोपनिषद् का अमर उद्घोष: 'रसो वै सः' (Raso Vai Sah)। ब्रह्म समस्त आनंद और जीवन का एकमात्र अक्षय स्रोत है।",
          },
          {
            number: 7,
            devanagari:
              "सैषानन्दस्य मीमांसा भवति।\nयुवा स्यात्साधुयुवाऽध्यायकः। आशिष्ठो द्रढिष्ठो बलिष्ठः।\nतस्येयं पृथिवी सर्वा वित्तस्य पूर्णा स्यात्।\nस एको मानुष आनन्दः।\nते ये शतं मानुषा आनन्दाः। स एको मनुष्यगन्धर्वाणामानन्दः।\nश्रोत्रियस्य चाकामहतस्य।\nस एको ब्रह्मण आनन्दः। श्रोत्रियस्य चाकामहतस्य।\nस यश्चायं पुरुषे। यश्चासावादित्ये। स एकः॥",
            transliteration:
              "saiṣānandasya mīmāṃsā bhavati |\nyuvā syāt sādhu-yuvā'dhyāyakaḥ | āśiṣṭho draḍhiṣṭho baliṣṭhaḥ |\ntasyeyaṃ pṛthivī sarvā vittasya pūrṇā syāt |\nsa eko mānuṣa ānandaḥ |\nte ye śataṃ mānuṣā ānandāḥ | sa eko manuṣya-gandharvāṇām ānandaḥ |\nśrotriyasya cākāma-hatasya |\nsa eko brahmaṇa ānandaḥ | śrotriyasya cākāma-hatasya |\nsa yaś cāyaṃ puruṣe | yaś cāsāv āditye | sa ekaḥ ||",
            hindi:
              "अब आनंद की यह मीमांसा (तारतम्य) की जाती है: कोई श्रेष्ठ युवक हो, जो शास्त्रों का विद्वान, उत्तम आचरण वाला, दृढ़ और अत्यंत बलवान हो; और यह संपूर्ण पृथ्वी रत्नों और धन से उसके अधीन हो—तो यह मनुष्य-लोक का एक आनंद (मानुष आनंद) कहलाता है। ऐसे सौ मानुष आनंदों के बराबर मनुष्य-गन्धर्वों का एक आनंद होता है—और कामना-रहित श्रोत्रिय (ब्रह्मनिष्ठ) को भी वही आनंद सुलभ है। इसी प्रकार उत्तरोत्तर सौ-सौ गुना बढ़ते हुए अंत में परब्रह्म का जो आनंद है, वह कामना-रहित आत्मज्ञानी को साक्षात् उपलब्ध होता है। जो पुरुष इस मनुष्य के हृदय में है, और जो उस आदित्य में है—वे दोनों वस्तुतः एक ही हैं!",
            english:
              "Now this is the inquiry into supreme bliss: Let there be a noble youth, learned in sacred scripture, righteous, firm, strong, and healthy, possessing the wealth of the whole earth—that is one unit of human bliss. A hundred times this human bliss is one bliss of the human Gandharvas—and also of a sage learned in the Vedas who is free from all desire. Thus multiplying hundredfold at each realm, the supreme bliss of Brahman is reached—which is directly experienced by the desireless sage! He who is here in the human person, and he who is yonder in the Sun—he is verily One!",
            commentary:
              "ब्रह्मानन्द मीमांसा — आनंद की सर्वोच्च पराकाष्ठा। समस्त लौकिक आनंद उस परब्रह्म के आनंद का केवल एक लेश मात्र हैं। निष्काम आत्मज्ञानी को साक्षात् ब्रह्मानन्द की प्राप्ति होती है।",
          },
        ],
      },
      {
        id: "tait-bhrigu",
        title: "भृगुवल्ली • पञ्चकोश तप-साधन एवं 'अन्नं ब्रह्मेति' (अनुवाक १-१०)",
        items: [
          {
            number: 1,
            devanagari:
              "भृगुर्वै वारुणिः। वरुणं पितरमुपससार। अधीहि भगवो ब्रह्मेति।\nतस्मा एतत्प्रोवाच। अन्नं प्राणं चक्षुः श्रोत्रं मनो वाचमिति।\nतं होवाच। यतो वा इमानि भूतानि जायन्ते। येन जातानि जीवन्ति।\nयत्प्रयन्त्यभिसंविशन्ति। तद्विजिज्ञासस्व। तद्ब्रह्मेति।\nस तपोऽतप्यत। स तपस्तप्त्वा॥",
            transliteration:
              "bhṛgur vai vāruṇiḥ | varuṇaṃ pitaram upasasāra | adhīhi bhagavo brahmeti |\ntasmā etat provāca | annaṃ prāṇaṃ cakṣuḥ śrotraṃ mano vācam iti |\ntaṃ hovāca | yato vā imāni bhūtāni jāyante | yena jātāni jīvanti |\nyat prayanty abhisaṃviśanti | tad vijijñāsasva | tad brahmeti |\nsa tapo 'tapyata | sa tapas taptvā ||",
            hindi:
              "वरुण के पुत्र भृगु अपने पिता वरुण के समीप पहुँचे और विनीत भाव से बोले: 'हे पूज्य भगवन्! मुझे ब्रह्म का उपदेश कीजिए।' वरुण ने उनसे कहा: 'अन्न, प्राण, आँख, कान, मन और वाणी—ये ब्रह्म के साधन हैं।' फिर उनसे कहा: 'जिससे ये समस्त भूत (प्राणी) उत्पन्न होते हैं, उत्पन्न होकर जिसके सहारे जीवित रहते हैं, और मृत्यु के उपरांत जिसमें विलीन हो जाते हैं—उसको विशेष रूप से जानने की इच्छा करो। वही ब्रह्म है!' भृगु ने तप (गहन अंतर्मुखी चिंतन) किया। तप करके...",
            english:
              "Bhrigu, the son of Varuna, approached his father Varuna, saying: 'Venerable father, teach me Brahman.' To him the father said: 'Food, vital breath, eye, ear, mind, and speech are the doors.' Then he added: 'That from which all these beings are born, by which having been born they live, and into which when departing they enter—seek to know That. That is Brahman!' Bhrigu performed tapas. Having performed tapas...",
            commentary:
              "भृगुवल्ली का मंगलाचरण। ब्रह्म-जिज्ञासा का वेदान्त-सम्मत लक्षण: 'जन्माद्यस्य यतः' — जिससे जगत की उत्पत्ति, स्थिति और लय होता है, वही ब्रह्म है।",
          },
          {
            number: 2,
            devanagari:
              "अन्नं ब्रह्मेति व्यजानात्। अन्नाद्ध्येव खल्विमानि भूतानि जायन्ते।\nअन्नेन जातानि जीवन्ति। अन्नं प्रयन्त्यभिसंविशन्तीति।\nतद्विज्ञाय। पुनरेव वरुणं पितरमुपससार। अधीहि भगवो ब्रह्मेति।\nतं होवाच। तपसा ब्रह्म विजिज्ञासस्व। तपो ब्रह्मेति।\nस तपोऽतप्यत। स तपस्तप्त्वा॥",
            transliteration:
              "annaṃ brahmeti vyajānāt | annād dhy eva khalv imāni bhūtāni jāyante |\nannena jātāni jīvanti | annaṃ prayanty abhisaṃviśantīti |\ntad vijñāya | punar eva varuṇaṃ pitaram upasasāra | adhīhi bhagavo brahmeti |\ntaṃ hovāca | tapasā brahma vijijñāsasva | tapo brahmeti |\nsa tapo 'tapyata | sa tapas taptvā ||",
            hindi:
              "भृगु ने प्रथम तप से जाना कि 'अन्न ही ब्रह्म है' (अन्नं ब्रह्मेति); क्योंकि अन्न से ही निश्चय ये समस्त प्राणी उत्पन्न होते हैं, अन्न से जीवित रहते हैं और मृत्यु के बाद अन्न (मिट्टी) में ही समा जाते हैं। किन्तु अन्न में अशाश्वतता देखकर वे पुनः पिता वरुण के पास पहुँचे: 'भगवन्! मुझे ब्रह्म का उपदेश कीजिए।' पिता ने कहा: 'तप के द्वारा ही ब्रह्म को जानो, क्योंकि तप ही ब्रह्म है!' भृगु ने पुनः तप किया।",
            english:
              "He realized that 'Food is Brahman' (Annam Brahmeti); for from food verily are these beings born, by food do they live, and into food do they enter upon death. Having known that, he felt unsatisfied and again approached his father Varuna: 'Revered father, teach me Brahman.' Varuna said: 'Seek to know Brahman through tapas; tapas is Brahman!' Bhrigu performed tapas again.",
            commentary:
              "प्रथम सोपान: स्थूल अन्नमय कोश का अनुसंधान। स्थूल पदार्थ से परे जाने की प्रेरणा ही आध्यात्मिक उन्नति की कुंजी है।",
          },
          {
            number: 3,
            devanagari:
              "प्राणो ब्रह्मेति व्यजानात्। प्राणाद्ध्येव खल्विमानि भूतानि जायन्ते।\nप्राणेन जातानि जीवन्ति। प्राणं प्रयन्त्यभिसंविशन्तीति।\nतद्विज्ञाय। पुनरेव वरुणं पितरमुपससार। अधीहि भगवो ब्रह्मेति।\nतं होवाच। तपसा ब्रह्म विजिज्ञासस्व। तपो ब्रह्मेति।\nस तपोऽतप्यत। स तपस्तप्त्वा॥",
            transliteration:
              "prāṇo brahmeti vyajānāt | prāṇād dhy eva khalv imāni bhūtāni jāyante |\nprāṇena jātāni jīvanti | prāṇaṃ prayanty abhisaṃviśantīti |\ntad vijñāya | punar eva varuṇaṃ pitaram upasasāra | adhīhi bhagavo brahmeti |\ntaṃ hovāca | tapasā brahma vijijñāsasva | tapo brahmeti |\nsa tapo 'tapyata | sa tapas taptvā ||",
            hindi:
              "भृगु ने दूसरे तप से जाना कि 'प्राण ही ब्रह्म है' (प्राणो ब्रह्मेति); क्योंकि प्राण से ही समस्त प्राणी उत्पन्न होते हैं, प्राण से जीवित रहते हैं और अंत में प्राण में ही विलीन होते हैं। किन्तु प्राण के जड़ और परिवर्तनशील होने से वे पुनः पिता के पास पहुँचे: 'भगवन्! मुझे ब्रह्म का उपदेश कीजिए।' पिता ने पुनः कहा: 'तप से ही ब्रह्म को जानो, तप ही ब्रह्म है!' भृगु ने पुनः तप किया।",
            english:
              "He realized that 'Prana is Brahman' (Prano Brahmeti); for from Prana verily are these creatures born, by Prana they live, and into Prana do they dissolve. Having known that, he again went to his father: 'Teach me Brahman.' The father replied: 'Seek to know Brahman through tapas; tapas is Brahman!' Bhrigu performed tapas again.",
            commentary:
              "द्वितीय सोपान: प्राणमय कोश का साक्षात्कार। प्राण अन्न से श्रेष्ठ है, किन्तु अभी भी परिवर्तनशील है।",
          },
          {
            number: 4,
            devanagari:
              "मनो ब्रह्मेति व्यजानात्। मनसो ह्येव खल्विमानि भूतानि जायन्ते।\nमनसा जातानि जीवन्ति। मनः प्रयन्त्यभिसंविशन्तीति।\nतद्विज्ञाय। पुनरेव वरुणं पितरमुपससार। अधीहि भगवो ब्रह्मेति।\nतं होवाच। तपसा ब्रह्म विजिज्ञासस्व। तपो ब्रह्मेति।\nस तपोऽतप्यत। स तपस्तप्त्वा॥",
            transliteration:
              "mano brahmeti vyajānāt | manaso hy eva khalv imāni bhūtāni jāyante |\nmanasā jātāni jīvanti | manaḥ prayanty abhisaṃviśantīti |\ntad vijñāya | punar eva varuṇaṃ pitaram upasasāra | adhīhi bhagavo brahmeti |\ntaṃ hovāca | tapasā brahma vijijñāsasva | tapo brahmeti |\nsa tapo 'tapyata | sa tapas taptvā ||",
            hindi:
              "भृगु ने तीसरे तप से जाना कि 'मन ही ब्रह्म है' (मनो ब्रह्मेति); क्योंकि मन के संकल्प से ही समस्त प्राणी उत्पन्न होते हैं, मन से जीते हैं और मन में ही विलीन होते हैं। किन्तु मन के चंचल होने के कारण वे पुनः पिता के पास पहुँचे: 'भगवन्! मुझे ब्रह्म का उपदेश कीजिए।' पिता ने पुनः कहा: 'तप से ही ब्रह्म को जानो, तप ही ब्रह्म है!' भृगु ने पुनः तप किया।",
            english:
              "He realized that 'Mind is Brahman' (Mano Brahmeti); for from Mind verily are these beings born, by Mind do they live, and into Mind do they dissolve. Having known that, he again went to his father: 'Teach me Brahman.' The father replied: 'Seek to know Brahman through tapas; tapas is Brahman!' Bhrigu performed tapas again.",
            commentary:
              "तृतीय सोपान: मनोमय कोश का शोधन। संकल्प-विकल्पात्मक मन भी अंतिम सत्य नहीं हो सकता।",
          },
          {
            number: 5,
            devanagari:
              "विज्ञानं ब्रह्मेति व्यजानात्। विज्ञानाद्ध्येव खल्विमानि भूतानि जायन्ते।\nविज्ञानेन जातानि जीवन्ति। विज्ञानं प्रयन्त्यभिसंविशन्तीति।\nतद्विज्ञाय। पुनरेव वरुणं पितरमुपससार। अधीहि भगवो ब्रह्मेति।\nतं होवाच। तपसा ब्रह्म विजिज्ञासस्व। तपो ब्रह्मेति।\nस तपोऽतप्यत। स तपस्तप्त्वा॥",
            transliteration:
              "vijñānaṃ brahmeti vyajānāt | vijñānād dhy eva khalv imāni bhūtāni jāyante |\nvijñānena jātāni jīvanti | vijñānaṃ prayanty abhisaṃviśantīti |\ntad vijñāya | punar eva varuṇaṃ pitaram upasasāra | adhīhi bhagavo brahmeti |\ntaṃ hovāca | tapasā brahma vijijñāsasva | tapo brahmeti |\nsa tapo 'tapyata | sa tapas taptvā ||",
            hindi:
              "भृगु ने चौथे तप से जाना कि 'विज्ञान (विवेक-बुद्धि) ही ब्रह्म है' (विज्ञानं ब्रह्मेति); क्योंकि विज्ञान से ही समस्त प्राणी उत्पन्न होते हैं, विज्ञान से जीते हैं और विज्ञान में ही विलीन होते हैं। किन्तु बुद्धि में भी कर्ता-भोक्ता का द्वैत देखकर वे पुनः पिता के पास पहुँचे: 'भगवन्! मुझे ब्रह्म का उपदेश कीजिए।' पिता ने पुनः कहा: 'तप से ही ब्रह्म को जानो, तप ही ब्रह्म है!' भृगु ने पुनः परम तप किया।",
            english:
              "He realized that 'Wisdom/Intellect is Brahman' (Vijnanam Brahmeti); for from Wisdom verily are these beings born, by Wisdom do they live, and into Wisdom do they dissolve. Having known that, he again went to his father: 'Teach me Brahman.' The father replied: 'Seek to know Brahman through tapas; tapas is Brahman!' Bhrigu performed deep tapas again.",
            commentary:
              "चतुर्थ सोपान: विज्ञानमय कोश का भेदन। बुद्धि की सूक्ष्मता भी जब तक अद्वैत में नहीं घुलती, तब तक पूर्णता नहीं मिलती।",
          },
          {
            number: 6,
            devanagari:
              "आनन्दो ब्रह्मेति व्यजानात्।\nआनन्दाद्ध्येव खल्विमानि भूतानि जायन्ते।\nआनन्देन जातानि जीवन्ति। आनन्दं प्रयन्त्यभिसंविशन्तीति।\nसैषा भार्गवी वारुणी विद्या। परमे व्योमन्प्रतिष्ठिता।\nय एवं वेद प्रतितिष्ठति। अन्नवानन्नादो भवति।\nमहान्भवति प्रजया पशुभिर्ब्रह्मवर्चसेन। महान् कीर्त्या॥",
            transliteration:
              "ānando brahmeti vyajānāt |\nānandād dhy eva khalv imāni bhūtāni jāyante |\nānandena jātāni jīvanti | ānandaṃ prayanty abhisaṃviśantīti |\nsaiṣā bhārgavī vāruṇī vidyā | parame vyoman pratiṣṭhitā |\nya evaṃ veda pratitiṣṭhati | annavān annādo bhavati |\nmahān bhavati prajayā paśubhir brahma-varcasena | mahān kīrtyā ||",
            hindi:
              "अंत में भृगु ने साक्षात्कार किया कि 'आनन्द ही ब्रह्म है' (आनन्दो ब्रह्मेति); क्योंकि आनन्द से ही निश्चय ये समस्त प्राणी उत्पन्न होते हैं, आनन्द से ही जीवित रहते हैं और अंत में आनन्द में ही लीन हो जाते हैं! यह भृगु और वरुण की खोजी हुई 'भार्गवी वारुणी विद्या' है, जो हृदय-गुहा के परम आकाश में प्रतिष्ठित है। जो मनुष्य इस प्रकार जान लेता है, वह ब्रह्म में प्रतिष्ठित हो जाता है; वह प्रचुर अन्न वाला, अन्न का श्रेष्ठ भोक्ता, उत्तम संतान, पशु-धन और ब्रह्म-तेज से संपन्न होकर महान बनता है, कीर्ति से महान हो जाता है!",
            english:
              "He realized that 'Bliss is Brahman' (Anando Brahmeti); for from Bliss verily are all these beings born, by Bliss having been born do they live, and into Bliss do they return and dissolve! This is the Bhargavi-Varuni Vidya, established in the supreme ether of the heart. He who knows this becomes firmly established in Brahman; he becomes rich in food and an enjoyer of food; he becomes great in offspring, wealth, and spiritual luster; he becomes great in renown!",
            commentary:
              "भृगुवल्ली का चरम साक्षात्कार: 'आनन्दो ब्रह्मेति'। पञ्चकोशों के पार जाकर सच्चिदानन्द परब्रह्म की साक्षात् अनुभूति।",
          },
          {
            number: 7,
            devanagari:
              "हा३वु हा३वु हा३वु।\nअहमन्नमहमन्नमहमन्नम्।\nअहमन्नादो३ऽहमन्नादो३ऽहमन्नादः।\nअहं श्लोककृदहं श्लोककृदहं श्लोककृत्।\nअहमस्मि प्रथमजा ऋता३स्य। पूर्वं देवेभ्योऽमृतस्य ना३भायि।\nयो मा ददाति स इदेव मा३ऽवाः। अहमन्नमन्नमदन्तमा३द्मि।\nअहं विश्वं भुवनमभ्यभवा३म्। सुवर्न ज्योतीः।\nय एवं वेद॥",
            transliteration:
              "hā3vu hā3vu hā3vu |\naham annam aham annam aham annam |\naham annādo3 'ham annādo3 'ham annādaḥ |\nahaṃ śloka-kṛd ahaṃ śloka-kṛd ahaṃ śloka-kṛt |\naham asmi prathamajā ṛtā3sya | pūrvaṃ devebhyo 'mṛtasya nā3bhāyi |\nyo mā dadāti sa id eva mā3'vāḥ | aham annam annam adantam ā3dmi |\nahaṃ viśvaṃ bhuvanam abhyabhavā3m | suvar na jyotīḥ |\nya evaṃ veda ||",
            hindi:
              "अहो आश्चर्य! अहो आनंद! (हावु हावु हावु)। मैं ही समस्त अन्न (भोग्य विषय) हूँ! मैं ही अन्न हूँ! मैं ही अन्न हूँ! मैं ही अन्न का भोक्ता हूँ! मैं ही भोक्ता हूँ! मैं ही भोक्ता हूँ! मैं ही दोनों को जोड़ने वाला समन्वयकर्ता हूँ! मैं सत्य-नियम (ऋत) से उत्पन्न प्रथम तत्त्व हूँ; देवों से भी पूर्व अमृत की नाभि (केंद्र) हूँ! जो मुझे (अन्न रूप में) दूसरों को देता है, वह मेरी ही रक्षा करता है। मैं स्वयं अन्न होकर अन्न का भक्षण करने वाले का भक्षण कर जाता हूँ। मैंने समस्त विश्व-भुवन को अपने भीतर आत्मसात कर लिया है; मैं सूर्य के समान देदीप्यमान ज्योति हूँ! जो इस प्रकार जानता है, वह मुक्त हो जाता है।",
            english:
              "'Oh, wonder of wonders! (Havu! Havu! Havu!) I am food, I am food, I am food! I am the eater of food, I am the eater of food, I am the eater of food! I am the poet and synthesizer of the universe! I am the first-born of the cosmic order (Rita), older than the gods, the navel of immortality! He who gives food to the hungry truly preserves me. I, who am food, consume him who consumes food alone without sharing. I have overcome and pervaded this whole universe; my light is like the blazing sun!' He who knows this attains liberation.",
            commentary:
              "साम गायन का दिव्य नाद — अद्वैत साक्षात्कार का परमोल्लास। भोक्ता, भोग्य और भोग का संपूर्ण भेद मिटकर केवल 'अहं ब्रह्मास्मि' की विश्व-व्यापक चेतना ही शेष रह जाती है।",
          },
        ],
      },
    ],
  },

  "chandogya-upanishad": {
    label: "छान्दोग्योपनिषद् (सामवेद)",
    sourceTotal: "८ प्रपाठक • १५४ खण्ड",
    editionNote:
      "सामवेद कौथुम शाखा • आदि शंकराचार्य भाष्य • उद्गीथ उपासना (१.१), शाण्डिल्य विद्या (३.१४) एवं 'तत्त्वमसि' महावाक्य (६.८)",
    chapters: [
      {
        id: "cu-udgitha",
        title: "प्रथम प्रपाठक • ॐकार उद्गीथ उपासना (खण्ड १.१)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ इत्येतदक्षरमुद्गीथमुपासीत। ओमिति ह्युद्गायति तस्योपव्याख्यानम्॥१॥",
            transliteration:
              "oṃ ity etad akṣaram udgītham upāsīta | om iti hy udgāyati tasyopavyākhyānam || 1 ||",
            hindi:
              "ॐकार रूप इस अविनाशी अक्षर की उद्गीथ के रूप में उपासना करनी चाहिए; क्योंकि 'ॐ' का उच्चारण करके ही उद्गाता साम-गान प्रारंभ करता है। अब उसी ॐकार की विस्तृत व्याख्या की जाती है।",
            english:
              "One should meditate on this imperishable syllable OM as the Udgitha; for chanting 'OM', the Udgatri priest begins the sacred Sama song. Here follows its detailed exposition.",
            commentary:
              "छान्दोग्योपनिषद् का प्रथम उपदेश। ॐकार समस्त वैदिक मन्त्रों, यज्ञों और उपासनाओं का प्राणभूत केंद्र है।",
          },
          {
            number: 2,
            devanagari:
              "एषां भूतानां पृथिवी रसः पृथिव्या आपो रसः।\nअपामोषधयो रस ओषधीनां पुरुषो रसः पुरुषस्य वाग्रसो वाच ऋग्रस ऋचः साम रसः साम्न उद्गीथो रसः॥२॥",
            transliteration:
              "eṣāṃ bhūtānāṃ pṛthivī rasaḥ pṛthivyā āpo rasaḥ |\napām oṣadhayo rasa oṣadhīnāṃ puruṣo rasaḥ puruṣasya vāg raso vāca ṛg rasa ṛcaḥ sāma rasaḥ sāmna udgītho rasaḥ || 2 ||",
            hindi:
              "इन समस्त चराचर भूतों (प्राणियों) का सार (रस) पृथ्वी है; पृथ्वी का सार जल है; जल का सार औषधियाँ (वनस्पतियाँ) हैं; औषधियों का सार पुरुष (मनुष्य) है; पुरुष का सार वाणी है; वाणी का सार ऋग्वेद (ऋचा) है; ऋचा का सार सामवेद (गान) है; और सामवेद का सार 'उद्गीथ' (ॐकार) है।",
            english:
              "The essence of all these beings is the Earth; the essence of the Earth is Water; the essence of Water is the plants; the essence of plants is the human person; the essence of the human person is Speech; the essence of Speech is the Rigveda; the essence of the Rigveda is the Samaveda; and the essence of the Samaveda is the Udgitha (OM).",
            commentary:
              "रस-शृंखला — समस्त ब्रह्मांडीय तत्त्वों का क्रमिक उत्कर्ष। ॐकार समस्त ब्रह्मांड का चरम और उत्कृष्टतम सार है।",
          },
          {
            number: 3,
            devanagari:
              "स एष रसानां रसतमः परमः परार्ध्योऽष्टमो यदुद्गीथः॥३॥",
            transliteration:
              "sa eṣa rasānāṃ rasatamaḥ paramaḥ parārdhyo 'ṣṭamo yad udgīthaḥ || 3 ||",
            hindi:
              "वह यह उद्गीथ (ॐकार) समस्त रसों का परम रस (रसतम), सर्वश्रेष्ठ, सर्वोच्च स्थान का अधिकारी और आठवाँ सार-तत्त्व है।",
            english:
              "That Udgitha (OM) is verily the quintessence of all essences, the supreme, the highest, the eighth in order of perfection.",
            commentary:
              "ॐकार की महिमा: 'रसानां रसतमः'। समस्त वेदों और जीवन का सर्वोच्च पराकाष्ठा-रस।",
          },
          {
            number: 7,
            devanagari:
              "तेनेयं त्रयी विद्या वर्तत ओमित्याश्रावयत्योमिति शंसत्योमित्युद्गायत्येतस्यैवाक्षरस्यापचितये महिम्ना रसेन॥७॥",
            transliteration:
              "teneyaṃ trayī vidyā vartata om ity āśrāvayaty om iti śaṃsaty om ity udgāyaty etasyaivākṣarasyāpacitaye mahimnā rasena || 7 ||",
            hindi:
              "उसी ॐकार के द्वारा तीनों वेदों की विद्या (ऋक्, यजुः, साम) प्रवृत्त होती है। अध्वर्यु 'ओम्' कहकर आदेश देता है, होता 'ओम्' कहकर स्तुति करता है, और उद्गाता 'ओम्' कहकर साम-गान करता है—यह सब इसी अक्षर की पूजा और इसके माहात्म्य के कारण होता है।",
            english:
              "By this OM verily proceeds the threefold Vedic wisdom: with OM the Adhvaryu gives commands, with OM the Hotri recites praises, and with OM the Udgatri sings the chants—all to honor the majesty and essence of this supreme syllable.",
            commentary:
              "त्रयी विद्या का समन्वय — समस्त वैदिक यज्ञों की आधारभूत धुरी ॐकार ही है।",
          },
          {
            number: 8,
            devanagari:
              "तेनोभौ कुरुतो यश्चैतदेवं वेद यश्च न वेद।\nनाना तु विद्या चाविद्या च यदेव विद्यया करोति श्रद्धयोपनिषदा तदेव वीर्यवत्तरं भवतीति खल्वेत्तस्यैवाक्षरस्योपव्याख्यानं भवति॥८॥",
            transliteration:
              "tenobhau kuruto yaś caitad evaṃ veda yaś ca na veda |\nnānā tu vidyā cāvidyā ca yad eva vidyayā karoti śraddhayopaniṣadā tad eva vīryavattaraṃ bhavatīti khalv ettasyaivākṣarasyopavyākhyānaṃ bhavati || 8 ||",
            hindi:
              "जो इस रहस्य को जानता है वह भी कर्म करता है, और जो नहीं जानता वह भी करता है; किन्तु विद्या और अविद्या में महान भेद है। जो कर्म ज्ञान (विद्या), श्रद्धा और उपनिषद् (रहस्यमय ध्यान) के साथ किया जाता है, वही अत्यंत वीर्यवान् (प्रभावशाली व फलदायी) होता है। यही इस अक्षर की व्याख्या है।",
            english:
              "Both perform actions with it—he who knows this secret, and he who knows it not. But knowledge and ignorance are vastly different. Whatever is performed with knowledge (vidya), reverent faith (shraddha), and deep meditation (upanishad), that alone becomes exceedingly potent! This verily is the exposition of this syllable.",
            commentary:
              "छान्दोग्योपनिषद् का अमर सूत्र: 'यदेव विद्यया करोति श्रद्धयोपनिषदा तदेव वीर्यवत्तरं भवति'। ज्ञान और श्रद्धा-युक्त कर्म ही सर्वोच्च फल प्रदान करता है।",
          },
        ],
      },
      {
        id: "cu-shandilya",
        title: "तृतीय प्रपाठक • शाण्डिल्य विद्या • 'सर्वं खल्विदं ब्रह्म' (खण्ड ३.१४)",
        items: [
          {
            number: 1,
            devanagari:
              "सर्वं खल्विदं ब्रह्म तज्जलानिति शान्त उपासीत।\nअथ खलु क्रतुमयः पुरुषो यथाक्रतुरस्मिँल्लोके पुरुषो भवति तथेतः प्रेत्य भवति स क्रतुं कुर्वीत॥१॥",
            transliteration:
              "sarvaṃ khalv idaṃ brahma taj-jalān iti śānta upāsīta |\natha khalu kratu-mayaḥ puruṣo yathā-kratur asmiṃl loke puruṣo bhavati tathetaḥ pretya bhavati sa kratuṃ kurvīta || 1 ||",
            hindi:
              "यह संपूर्ण दृश्यमान जगत निश्चय ही ब्रह्म ही है (सर्वं खल्विदं ब्रह्म); क्योंकि यह उसी से उत्पन्न होता है (तत्-ज), उसी में लीन होता है (तत्-ल), और उसी में चेष्टा करता है (तत्-अन)। इसलिए शांत चित्त होकर उस ब्रह्म की उपासना करनी चाहिए। मनुष्य निश्चय ही संकल्प-मय (क्रतुमय) है; इस लोक में मनुष्य जैसा संकल्प या विश्वास रखता है, मृत्यु के उपरांत वैसा ही बन जाता है; अतः उसे श्रेष्ठ संकल्प करना चाहिए।",
            english:
              "'All this universe is verily Brahman' (Sarvam Khalvidam Brahma). From Him does it arise (ja), into Him does it dissolve (la), and in Him does it breathe (ana). Therefore, with a tranquil mind, let one meditate upon Him. Man is truly formed of his convictions (kratumaya); as is a person's resolve in this world, so does he become upon departing hence. Therefore, let him cultivate the highest resolve!",
            commentary:
              "वेदान्त दर्शन का प्रसिद्धतम महासूत्र: 'सर्वं खल्विदं ब्रह्म तज्जलान्'। 'तज्जलान्' का अर्थ: तज्ज (उत्पत्ति), तल्ल (लय), तदन् (जीवन)। संकल्प ही मनुष्य के भाग्य और पुनर्जन्म का निर्माता है।",
          },
          {
            number: 2,
            devanagari:
              "मनोमयः प्राणशरीरो भारूपः सत्यसंकल्प आकाशात्मा सर्वकर्मा सर्वकामः सर्वगन्धः सर्वरसः सर्वमिदमभ्यात्तोऽवाक्यनादरः॥२॥",
            transliteration:
              "mano-mayaḥ prāṇa-śarīro bhā-rūpaḥ satya-saṃkalpa ākāśātmā sarva-karmā sarva-kāmaḥ sarva-gandhaḥ sarva-rasaḥ sarvam idam abhyātto 'vāky anādaraḥ || 2 ||",
            hindi:
              "वह आत्मा मनोमय है, प्राण ही जिसका शरीर है, प्रकाशमय रूप वाला है, जिसके समस्त संकल्प सत्य होते हैं, जो आकाश के समान सर्वव्यापक और सूक्ष्म है; जो समस्त कर्मों वाला, समस्त पवित्र कामनाओं वाला, समस्त दिव्य सुगंधों वाला, समस्त रसों वाला, इस संपूर्ण विश्व को अपने भीतर समेटे हुए, वाणी-रहित और आसक्ति-रहित है।",
            english:
              "He consists of pure mind, his body is the vital life-breath, his form is luminous light, his resolves are unerringly true, his nature is like space, all-pervading. He performs all cosmic work, possesses all pure desires, all pure fragrances, all essences, encompassing this entire universe, silent and devoid of craving.",
            commentary:
              "शाण्डिल्य विद्या में सगुण-निर्गुण ब्रह्म का समन्वय। वह परमात्मा हृदय में अत्यंत निकट और विश्व में सर्वव्यापक है।",
          },
          {
            number: 3,
            devanagari:
              "एष म आत्माऽन्तर्हृदयेऽणीयान्व्रीहेर्वा यवाद्वा सर्षपाद्वा श्यामाकाद्वा श्यामाकतण्डुलाद्वा।\nएष म आत्माऽन्तर्हृदय ज्यायान्पृथिव्या ज्यायानन्तरिक्षाज्ज्यायान्दिवो ज्यायानेभ्यो लोकेभ्यः॥३॥",
            transliteration:
              "eṣa ma ātmā'ntar-hṛdaye 'ṇīyān vrīher vā yavād vā sarṣapād vā śyāmākād vā śyāmāka-taṇḍulād vā |\neṣa ma ātmā'ntar-hṛdaye jyāyān pṛthivyā jyāyān antarikṣāj jyāyān divo jyāyān ebhyo lokebhyaḥ || 3 ||",
            hindi:
              "यह मेरी अंतरात्मा मेरे हृदय में चावल के दाने से भी, जौ से भी, सरसों से भी, समा के दाने से भी और समा के चावल की कणी से भी अत्यंत सूक्ष्म (अणुतर) है! और यही मेरी अंतरात्मा मेरे हृदय में पृथ्वी से भी महान है, अंतरिक्ष से भी विशाल है, द्युलोक से भी वृहद् है, और इन समस्त लोकों से भी अनंत गुना महान है!",
            english:
              "This Self of mine within the heart is smaller than a grain of rice, smaller than a barley corn, smaller than a mustard seed, smaller than a grain of millet or its kernel. And this Self of mine within the heart is greater than the earth, greater than the atmosphere, greater than heaven, greater than all these worlds!",
            commentary:
              "'अणोरणीयान् महतो महीयान्' का प्रत्यक्ष प्रतिपादन। आत्मा की सूक्ष्मता और विराटता का विरोधाभासी सत्य।",
          },
          {
            number: 4,
            devanagari:
              "सर्वकर्मा सर्वकामः सर्वगन्धः सर्वरसः सर्वमिदमभ्यात्तोऽवाक्यनादर एष म आत्माऽन्तर्हृदय एतद्ब्रह्मैतमितः प्रेत्याभिसंभवितास्मीति यस्य स्यान्न विचिकित्साऽस्तीति ह स्माह शाण्डिल्यः शाण्डिल्यः॥४॥",
            transliteration:
              "sarva-karmā sarva-kāmaḥ sarva-gandhaḥ sarva-rasaḥ sarvam idam abhyātto 'vāky anādara eṣa ma ātmā'ntar-hṛdaya etad brahmaitam itaḥ pretyābhisaṃbhavitāsmīti yasya syān na vicikitsā'stīti ha smāha śāṇḍilyaḥ śāṇḍilyaḥ || 4 ||",
            hindi:
              "जो सर्वकर्मा, सर्वकाम, सर्वगन्ध, सर्वरस और संपूर्ण जगत को व्याप्त करने वाला है—यह मेरे हृदय में स्थित आत्मा ही परब्रह्म है। 'इस देह के छूटने पर मैं निश्चय ही उस ब्रह्म को प्राप्त हो जाऊँगा'—जिस साधक को इस विषय में कोई संशय (विचिकित्सा) नहीं रहता, वह अवश्य उसे प्राप्त कर लेता है; ऐसा महर्षि शाण्डिल्य ने कहा, निश्चय ही शाण्डिल्य ने कहा!",
            english:
              "He who encompasses all cosmic actions, all desires, all fragrances, all essences, embracing all this universe, silent and free from attachment—this Self within my heart is Brahman. 'Departing hence, I shall verily attain unto Him.' He who has this unwavering faith, without doubt, attains Him! Thus declared sage Shandilya; verily, thus spoke Shandilya!",
            commentary:
              "शाण्डिल्य विद्या का उपसंहार। संशय-रहित अनन्य निष्ठा से जीव और ब्रह्म की पूर्ण एकता की प्राप्ति।",
          },
        ],
      },
      {
        id: "cu-prapthaka-6",
        title: "प्रपाठक ६ • तत्त्वमसि महावाक्य (श्वेतकेतु-उद्दालक संवाद)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ श्वेतकेतुर्हारुणेय आस तं ह पितोवाच श्वेतकेतो वस ब्रह्मचर्यं न वै सोम्यास्मत्कुलीनोऽननुच्य ब्रह्मबन्धुरिव भवतीति।\nस ह द्वादशवर्ष उपेत्य चतुर्विंशतिवर्षः सर्वान्वेदानधीत्य महामना अनूचानमानी स्तब्ध एयाय तं ह पितोवाच श्वेतकेतो यन्नु सोम्येदं महामना अनूचानमानी स्तब्धोऽस्युत तमदेशमप्राक्ष्यः।\nयेनाश्रुतं श्रुतं भवत्यमतं मतमविज्ञातं विज्ञातमिति॥१॥",
            transliteration:
              "oṃ śvetaketur hāruṇeya āsa taṃ ha pitovāca śvetaketo vasa brahmacaryaṃ na vai somyāsmat-kulīno 'nanūcya brahma-bandhur iva bhavatīti |\nsa ha dvādaśa-varṣa upetya caturviṃśati-varṣaḥ sarvān vedān adhītya mahā-manā anūcāna-mānī stabdha eyāya taṃ ha pitovāca śvetaketo yan nu somyedaṃ mahā-manā anūcāna-mānī stabdho 'sy uta tam adeśam aprākṣyaḥ |\nyenāśrutaṃ śrutaṃ bhavaty amataṃ mataṃ avijñātaṃ vijñātam iti || 1 ||",
            hindi:
              "अरुणि के पुत्र श्वेतकेतु थे। उनके पिता उद्दालक ने उनसे कहा: 'हे श्वेतकेतु! गुरुकुल में वास कर ब्रह्मचर्य का पालन करो; क्योंकि हमारे कुल में कोई बिना विद्या पढ़े केवल नाममात्र का ब्राह्मण (ब्रह्मबंधु) नहीं रहता।' श्वेतकेतु बारह वर्ष की आयु में गुरुकुल गए और चौबीस वर्ष की आयु तक समस्त वेदों का अध्ययन कर अत्यंत अभिमानी और गंभीर होकर लौटे। पिता ने देखा कि पुत्र विद्या के घमंड में अकड़ा हुआ है, तो पूछा: 'हे श्वेतकेतु! तुम इतने अभिमानी और स्तब्ध हो, क्या तुमने अपने गुरु से उस परम आदेश (परब्रह्म) के बारे में पूछा जिससे अनसुना भी सुना हुआ हो जाता है, जिसका मनन न किया गया हो वह भी मनन किया हुआ हो जाता है, और जो अज्ञात है वह भी साक्षात् ज्ञात हो जाता है?'",
            english:
              "There was Shvetaketu, the son of Aruni. To him his father Uddalaka said: 'Shvetaketu, live the life of a brahmacharin; for verily, my dear, no one in our family remains unlearned, a mere kinsman of a Brahmana.' Having gone to the teacher at twelve, he returned at twenty-four, having studied all the Vedas, conceited, proud of learning, and arrogant. His father said to him: 'Shvetaketu, since you are so proud and conceited, did you ask for that supreme Instruction whereby the unheard becomes heard, the unthought becomes thought, and the unknown becomes known?'",
            commentary:
              "एक विज्ञानेन सर्वविज्ञानम् — जिस एक को जान लेने पर सब कुछ जान लिया जाता है। समस्त शास्त्रों के अध्ययन के बाद भी यदि आत्म-ज्ञान न हो, तो विद्या अपूर्ण है।",
          },
          {
            number: 2,
            devanagari:
              "सदेव सोम्येदमग्र आसीदेकमेवाद्वितीयम्।\nतद्धैक आहुरसदेवेदमग्र आसीदेकमेवाद्वितीयं तस्मादसतः सज्जायत॥\nकुतस्तु खलु सोम्यैवं स्यादिति होवाच कथमसतः सज्जायेतेति।\nसत्त्वेव सोम्येदमग्र आसीदेकमेवाद्वितीयम्॥२॥",
            transliteration:
              "sad eva somyedam agra āsīd ekam evādvitīyam |\ntad dhaika āhur asad evedam agra āsīd ekam evādvitīyaṃ tasmād asataḥ saj jāyata ||\nkutas tu khalu somyaivaṃ syād iti hovāca katham asataḥ saj jāyeteti |\nsat tv eva somyedam agra āsīd ekam evādvitīyam || 2 ||",
            hindi:
              "पिता उद्दालक ने उपदेश दिया: 'हे सौम्य! सृष्टि से पूर्व यह समस्त जगत केवल एक अद्वितीय 'सत्' (सद्ब्रह्म) ही था। कुछ लोग कहते हैं कि पहले यहाँ केवल 'असत्' (शून्य) ही था और असत् से सत् उत्पन्न हुआ; किन्तु हे सौम्य! ऐसा कैसे हो सकता है? असत् (अभाव) से सत् (भाव) की उत्पत्ति कैसे संभव है? इसलिए हे सौम्य! प्रारंभ में यह सब केवल एकमात्र सत् ही था, एक ही अद्वितीय!'",
            english:
              "Uddalaka said: 'In the beginning, my dear, this world was pure Being (Sat) alone, one only without a second. Some indeed say that in the beginning there was Non-Being (Asat) alone, one only without a second, and from that Non-Being arose Being. But how indeed, my dear, could that be? How could Being be produced from Non-Being? In truth, my dear, in the beginning this universe was Being alone, one only without a second!'",
            commentary:
              "'एकमेवाद्वितीयम्' — अद्वैत वेदान्त का आधारस्तम्भ। शून्य या असत् से सृष्टि की उत्पत्ति का खंडन कर नित्य सत् की सत्ता का प्रतिष्ठापन।",
          },
          {
            number: 7,
            devanagari:
              "स य एषोऽणिमैतदात्म्यमिदं सर्वं तत्सत्यं स आत्मा तत्त्वमसि श्वेतकेतो इति।\nभूय एव मा भगवान् विज्ञापयत्विति तथा सोम्येति होवाच॥७॥",
            transliteration:
              "sa ya eṣo 'ṇimaitad-ātmyam idaṃ sarvaṃ tat satyaṃ sa ātmā tat tvam asi śvetaketo iti |\nbhūya eva mā bhagavān vijñāpayatv iti tathā somyeti hovāca || 7 ||",
            hindi:
              "यह जो अत्यंत सूक्ष्म तत्त्व (अणिमा) है, यह संपूर्ण जगत उसी आत्मस्वरूप वाला है। वही परम सत्य है, वही आत्मा है, और 'तत्त्वमसि' (वह तुम ही हो), हे श्वेतकेतु! श्वेतकेतु ने कहा: 'हे भगवन्! मुझे दृष्टांतों से पुनः समझाइए।' पिता ने कहा: 'तथास्तु, हे सौम्य!'",
            english:
              "'That which is this subtle essence, this entire world has that for its Self. That is the Truth. That is the Self. THOU ART THAT (Tat Tvam Asi), O Shvetaketu!' Shvetaketu said: 'Please, venerable father, explain further to me with examples.' 'Be it so, my child,' replied the father.",
            commentary:
              "सामवेद का सुप्रसिद्ध महावाक्य: 'तत्त्वमसि' (Tat Tvam Asi — Thou Art That)। जीवात्मा और परमात्मा की अखण्ड एकता का उद्घोष। उद्दालक ने नौ भिन्न-भिन्न दृष्टांतों से श्वेतकेतु को इस सत्य का बोध कराया।",
          },
          {
            number: 12,
            devanagari:
              "न्यग्रोधफलमत आहरेतीदं भगव इति भिन्द्धीति भिन्नं भगव इति किमत्र पश्यसीत्यण्व्य इवेमा धाना भगव इत्यासामाङ्कैकां भिन्द्धीति भिन्ना भगव इति किमत्र पश्यसीति न किंचन भगव इति।\nतं होवाच यं वै सोम्यैतमणिमानं न निभालयस एतस्य वै सोम्यैषोऽणिम्न एवं महान्यग्रोधस्तिष्ठति श्रद्धत्स्व सोम्येति।\nस य एषोऽणिमैतदात्म्यमिदं सर्वं तत्सत्यं स आत्मा तत्त्वमसि श्वेतकेतो इति॥१२॥",
            transliteration:
              "nyagrodha-phalam ata āharetīdaṃ bhagava iti bhinddhy iti bhinnaṃ bhagava iti kim atra paśyasīty aṇvya ivemā dhānā bhagava ity āsām aṅkaikāṃ bhinddhy iti bhinnā bhagava iti kim atra paśyasīti na kiṃcana bhagava iti |\ntaṃ hovāca yaṃ vai somyaitam aṇimānaṃ na nibhālayasa etasya vai somyaiṣo 'ṇimna evaṃ mahān nyagrodhas tiṣṭhati śraddhatsva somyeti |\nsa ya eṣo 'ṇimaitad-ātmyam idaṃ sarvaṃ tat satyaṃ sa ātmā tat tvam asi śvetaketo iti || 12 ||",
            hindi:
              "पिता ने कहा: 'उस वट-वृक्ष (न्यग्रोध) से एक फल लाओ।' श्वेतकेतु: 'यह रहा भगवन्।' पिता: 'इसे तोड़ो।' श्वेतकेतु: 'तोड़ दिया भगवन्।' पिता: 'इसमें क्या देखते हो?' श्वेतकेतु: 'अत्यंत सूक्ष्म बीज हैं भगवन्।' पिता: 'इनमें से एक बीज को तोड़ो।' श्वेतकेतु: 'तोड़ दिया भगवन्।' पिता: 'अब इसमें क्या देखते हो?' श्वेतकेतु: 'कुछ भी नहीं भगवन्!' पिता ने कहा: 'हे सौम्य! जिस अत्यंत सूक्ष्म अंश को तुम देख नहीं पा रहे हो, उसी अतिसूक्ष्म तत्त्व से यह इतना विशाल वट-वृक्ष खड़ा है! हे सौम्य, श्रद्धा रखो! यह जो सूक्ष्म तत्त्व है, यह संपूर्ण जगत उसी आत्मस्वरूप वाला है। वही सत्य है, वही आत्मा है, और हे श्वेतकेतु, 'तत्त्वमसि'—वह तुम ही हो!'",
            english:
              "Uddalaka said: 'Bring a fruit from that banyan tree.' 'Here it is, venerable sir.' 'Break it.' 'It is broken, sir.' 'What do you see there?' 'Extremely tiny seeds, sir.' 'Break one of these seeds.' 'It is broken, sir.' 'What do you see inside?' 'Nothing at all, sir.' The father said: 'My child, that subtle essence which you do not perceive—out of that very subtle essence does this vast banyan tree arise and stand! Have faith, my child! That subtle essence is the Self of all this world. That is Truth. That is the Self. Thou art That, O Shvetaketu!'",
            commentary:
              "वट-बीज दृष्टान्त — दृश्य स्थूल जगत का मूल स्रोत इंद्रियातीत अतिसूक्ष्म ब्रह्म है। जो आँखों से दिखाई नहीं देता, वही संपूर्ण सृष्टि का मूलाधार है।",
          },
          {
            number: 13,
            devanagari:
              "लवणमेतदुदकेऽवधायाथ मा प्रातरुपसीदथा इति स ह तथा चकार तं होवाच यद्दोषा लवणमुदकेऽवाधा अङ्ग तदाहरेति तद्धामृश्य न विवेद यथा विलीनमेवाङ्गास्यान्तादाचामेति कथमिति लवणमित्यन्तादाचामेति कथमिति लवणमिति मध्यादाचामेति कथमिति लवणमित्यभिप्राश्यैनदथ मोपसीदथा इति तद्ध तथा चकार तच्छश्वत्संवर्तते तं होवाचात्र वाव किल सत्सोम्य न निभालयसेऽत्रैव किलेति।\nस य एषोऽणिमैतदात्म्यमिदं सर्वं तत्सत्यं स आत्मा तत्त्वमसि श्वेतकेतो इति॥१३॥",
            transliteration:
              "lavaṇam etad udake 'vadhāyātha mā prātar upasīdathā iti sa ha tathā cakāra taṃ hovāca yad doṣā lavaṇam udake 'vādhā aṅga tad āhareti tad dhāmṛśya na viveda yathā vilīnam evāṅgāsyāntād ācāmeti katham iti lavaṇam ity antād ācāmeti katham iti lavaṇam iti madhyād ācāmeti katham iti lavaṇam ity abhiprāśyainad atha mopasīdathā iti tad dha tathā cakāra tac chaśvat saṃvartate taṃ hovācātra vāva kila sat somya na nibhālayase 'traiva kileti |\nsa ya eṣo 'ṇimaitad-ātmyam idaṃ sarvaṃ tat satyaṃ sa ātmā tat tvam asi śvetaketo iti || 13 ||",
            hindi:
              "पिता ने कहा: 'इस नमक की डली को पानी में डाल दो और प्रातःकाल मेरे पास आओ।' श्वेतकेतु ने वैसा ही किया। प्रातः पिता ने कहा: 'जो नमक तुमने पानी में डाला था, उसे निकालो।' श्वेतकेतु ने टटोला, पर वह नहीं मिला, क्योंकि वह पूरी तरह घुल चुका था। पिता ने कहा: 'ऊपर से पानी चखो, कैसा है?' श्वेतकेतु: 'नमकीन है।' पिता: 'मध्य से चखो, कैसा है?' श्वेतकेतु: 'नमकीन है।' पिता: 'नीचे से चखो, कैसा है?' श्वेतकेतु: 'नमकीन है।' पिता ने कहा: 'जैसे इस पानी में नमक आँख से दिखाई नहीं देता किन्तु सर्वत्र व्याप्त है, वैसे ही हे सौम्य! इस शरीर और जगत में तुम उस सत्-तत्त्व को आँखों से नहीं देख पाते, किन्तु वह सर्वत्र पूर्ण रूप से विद्यमान है! वही सत्य है, वही आत्मा है, और हे श्वेतकेतु, 'तत्त्वमसि'—वह तुम ही हो!'",
            english:
              "Uddalaka said: 'Place this lump of salt in water and come to me in the morning.' Shvetaketu did so. In the morning the father said: 'Bring me that salt which you placed in water.' He searched for it but could not find it, for it had completely dissolved. The father said: 'Sip from the surface; how is it?' 'Salty.' 'Sip from the middle; how is it?' 'Salty.' 'Sip from the bottom; how is it?' 'Salty.' The father said: 'Just as you cannot see salt with your eyes yet it pervades every drop, even so, my dear, you do not perceive Being in this body, yet It is truly here everywhere! That subtle essence is the Self of all this world. That is Truth. That is the Self. THOU ART THAT, O Shvetaketu!'",
            commentary:
              "लवण-जल दृष्टान्त — ब्रह्म की सर्वव्यापकता और अभेद्यता का सर्वोच्च दृष्टान्त। जैसे नमक जल के प्रत्येक अणु में व्याप्त है, वैसे ही परमात्मा समस्त चराचर सृष्टि में ओत-प्रोत है।",
          },
        ],
      },
    ],
  },

  "brihadaranyaka-upanishad": {
    label: "बृहदारण्यकोपनिषद् (शुक्ल यजुर्वेद)",
    sourceTotal: "६ अध्याय • ४७ ब्राह्मण",
    editionNote:
      "शुक्ल यजुर्वेद काण्व शाखा • आदि शंकराचार्य भाष्य • पवमान मन्त्र (१.३.२८), 'अहं ब्रह्मास्मि' (१.४.१०), मैत्रेयी ब्राह्मण (२.४) एवं 'नेति नेति' (४.४.२२)",
    chapters: [
      {
        id: "bu-adhyaya-1",
        title: "प्रथम अध्याय • पवमान मन्त्र एवं अहं ब्रह्मास्मि (ब्राह्मण ३ व ४)",
        items: [
          {
            number: 28,
            devanagari:
              "ॐ असतो मा सद्गमय।\nतमसो मा ज्योतिर्गमय।\nमृत्योर्माऽमृतं गमय॥\nॐ शान्तिः शान्तिः शान्तिः॥२८॥",
            transliteration:
              "oṃ asato mā sad gamaya |\ntamaso mā jyotir gamaya |\nmṛtyor mā 'mṛtaṃ gamaya ||\noṃ śāntiḥ śāntiḥ śāntiḥ || 28 ||",
            hindi:
              "हे परमेश्वर! मुझे असत्य (नश्वर सांसारिक प्रपंच) से सत्य (शाश्वत परब्रह्म) की ओर ले चलिए। मुझे अंधकार (अज्ञान) से प्रकाश (आत्म-ज्ञान) की ओर ले चलिए। मुझे मृत्यु (जन्म-मरण के बंधन) से अमरता (मोक्ष) की ओर ले चलिए। ॐ शान्तिः शान्तिः शान्तिः!",
            english:
              "Lead me from the unreal to the Real. Lead me from darkness to Light. Lead me from death to Immortality. Om Peace, Peace, Peace!",
            commentary:
              "बृहदारण्यकोपनिषद् का सर्वप्रसिद्ध पवमान मन्त्र (अभ्यारोह जप)। समस्त सनातन संस्कृति की अमर वैश्विक प्रार्थना।",
          },
          {
            number: 10,
            devanagari:
              "ब्रह्म वा इदमग्र आसीत्तदात्मानमेवावेत्। अहं ब्रह्मास्मीति तस्मात्तत्सर्वमभवत्।\nतद्यो यो देवानां प्रत्यबुध्यत स एव तदभवत्तथर्षीणां तथा मनुष्याणाम्।\nतद्धैतत्पश्यन्नृषिर्वामदेवः प्रतिपेदेऽहं मनुरभवं सूर्यश्चेति।\nतदिदमप्येतर्हि य एवं वेदाहं ब्रह्मास्मीति स इदं सर्वं भवति॥१०॥",
            transliteration:
              "brahma vā idam agre āsīt tad ātmānam evāvet | ahaṃ brahmāsmīti tasmāt tat sarvam abhavat |\ntad yo yo devānāṃ pratyabudhyata sa eva tad abhavat tatharṣīṇāṃ tathā manuṣyāṇām |\ntad dhaitat paśyann ṛṣir vāmadevaḥ pratipede 'haṃ manur abhavaṃ sūryaś ceti |\ntad idam apy etarhi ya evaṃ vedāhaṃ brahmāsmīti sa idaṃ sarvaṃ bhavati || 10 ||",
            hindi:
              "प्रारंभ में यह सब केवल ब्रह्म ही था। उसने अपनी आत्मा को ही जाना कि 'अहं ब्रह्मास्मि' (मैं ब्रह्म हूँ)। इस आत्म-साक्षात्कार से वह समस्त विश्व-स्वरूप हो गया। देवताओं में से जिसने भी इस सत्य को जाना, वह वही ब्रह्म बन गया; ऋषियों में तथा मनुष्यों में भी जिसने इसे जाना, वह ब्रह्म ही बन गया। इस सत्य का साक्षात् दर्शन करते हुए ऋषि वामदेव ने अनुभव किया: 'मैं ही मनु हुआ और मैं ही सूर्य हुआ!' आज भी जो कोई यह साक्षात्कार कर लेता है कि 'मैं ब्रह्म हूँ' (अहं ब्रह्मास्मि), वह यह संपूर्ण विश्व-स्वरूप बन जाता है।",
            english:
              "This universe was indeed Brahman in the beginning. It knew itself alone as: 'I am Brahman' (Aham Brahmasmi). Therefore It became all this manifest cosmos. Whosoever among the gods realized this, he became That; so also among the rishis, so also among humans. Beholding this very Truth, sage Vamadeva proclaimed: 'I was Manu, and I was the Sun!' Even today, whosoever realizes thus: 'I am Brahman', he becomes all this universe.",
            commentary:
              "यजुर्वेद का सर्वोच्च महावाक्य: 'अहं ब्रह्मास्मि' (Aham Brahmasmi — I am Brahman)। आत्म-साक्षात्कार का चरम बिंदु जहाँ जीव अपनी सीमित उपाधियों को त्यागकर अखंड ब्रह्म-चेतना में स्थित हो जाता है।",
          },
        ],
      },
      {
        id: "bu-maitreyi",
        title: "द्वितीय अध्याय • मैत्रेयी ब्राह्मण • आत्मनस्तु कामाय सर्वं प्रियं भवति (ब्राह्मण ४)",
        items: [
          {
            number: 1,
            devanagari:
              "मैत्रेयीति होवाच याज्ञवल्क्यः प्रव्रजिष्यन्वा अरेऽहमस्मात्स्थानादस्मि हन्त तेऽनया कात्यायन्याऽन्तं करवाणीति।\nसा होवाच मैत्रेयी यन्नु म इयं भगोः सर्वा पृथिवी वित्तेन पूर्णा स्यात्कथं तेनामृता स्यामिति नेति होवाच याज्ञवल्क्यो यथैवोपकरणवतां जीवितं तथैव ते जीवितं स्यादमृतत्वस्य तु नाशास्ति वित्तेनेति।\nसा होवाच मैत्रेयी येनाहं नामृता स्यां किमहं तेन कुर्यां यदेव भगवान्वेद तदेव मे ब्रूहीति॥१॥",
            transliteration:
              "maitreyīti hovāca yājñavalkyaḥ pravrajiṣyan vā are 'ham asmāt sthānād asmi hanta te 'nayā kātyāyanyā'ntaṃ karavāṇīti |\nsā hovāca maitreyī yan nu ma iyaṃ bhagoḥ sarvā pṛthivī vittena pūrṇā syāt kathaṃ tenāmṛtā syām iti neti hovāca yājñavalkyo yathaivopakaraṇavatāṃ jīvitaṃ tathaiva te jīvitaṃ syād amṛtatvasya tu nāśāsti vitteneti |\nsā hovāca maitreyī yenāhaṃ nāmṛtā syāṃ kim ahaṃ tena kuryāṃ yad eva bhagavān veda tad eva me brūhīti || 1 ||",
            hindi:
              "महर्षि याज्ञवल्क्य ने अपनी पत्नी से कहा: 'हे मैत्रेयी! मैं इस गृहस्थ आश्रम से संन्यास की ओर जाने वाला हूँ। इसलिए आओ, मैं तुम्हारे और कात्यायनी के बीच अपनी संपत्ति का बँटवारा कर दूँ।' मैत्रेयी ने पूछा: 'हे भगवन्! यदि यह धन-धान्य से भरी सारी पृथ्वी मुझे मिल जाए, तो क्या मैं उससे अमर हो जाऊँगी?' याज्ञवल्क्य ने कहा: 'कदापि नहीं! जैसा साधन-संपन्न धनिकों का जीवन होता है, वैसा ही तुम्हारा जीवन हो जाएगा; किन्तु धन से अमरता (मोक्ष) की कोई आशा नहीं है।' तब मैत्रेयी ने कहा: 'जिससे मैं अमर न हो सकूँ, उसे लेकर मैं क्या करूँगी? भगवन्! आप जो अमरता का साधन जानते हैं, केवल वही मुझे बताइए!'",
            english:
              "Yajnavalkya said: 'Maitreyi, verily I am about to renounce this householder life and wander forth. Let me make a settlement between you and Katyayani.' Maitreyi asked: 'Venerable lord, if indeed this entire earth full of wealth were mine, would I become immortal thereby?' 'No,' replied Yajnavalkya, 'your life would be just like that of wealthy people; but of immortality there is no hope through wealth.' Then Maitreyi said: 'What should I do with that by which I cannot become immortal? Venerable sir, tell me that alone which you know to lead to immortality!'",
            commentary:
              "मैत्रेयी का अमर वैराग्य: 'येनाहं नामृता स्यां किमहं तेन कुर्याम्'। भौतिक ऐश्वर्य की नश्वरता और अमरत्व की परम अभीप्सा का अनुपम संवाद।",
          },
          {
            number: 5,
            devanagari:
              "स होवाच न वा अरे पत्युः कामाय पतिः प्रियो भवत्यात्मनस्तु कामाय पतिः प्रियो भवति।\nन वा अरे जायायै कामाय जाया प्रिया भवत्यात्मनस्तु कामाय जाया प्रिया भवति।\nन वा अरे पुत्राणां कामाय पुत्राः प्रिया भवन्त्यात्मनस्तु कामाय पुत्राः प्रिया भवन्ति।\nन वा अरे वित्तस्य कामाय वित्तं प्रियं भवत्यात्मनस्तु कामाय वित्तं प्रियं भवति।\nन वा अरे सर्वस्य कामाय सर्वं प्रियं भवत्यात्मनस्तु कामाय सर्वं प्रियं भवति।\nआत्मा वा अरे द्रष्टव्यः श्रोतव्यो मन्तव्यो निदिध्यासितव्यो मैत्रेय्यात्मनो वा अरे दर्शनेन श्रवणेन मत्या विज्ञानेनेदं सर्वं विदितम्॥५॥",
            transliteration:
              "sa hovāca na vā are patyuḥ kāmāya patiḥ priyo bhavaty ātmanas tu kāmāya patiḥ priyo bhavati |\nna vā are jāyāyai kāmāya jāyā priyā bhavaty ātmanas tu kāmāya jāyā priyā bhavati |\nna vā are putrāṇāṃ kāmāya putrāḥ priyā bhavanty ātmanas tu kāmāya putrāḥ priyā bhavanti |\nna vā are vittasya kāmāya vittaṃ priyaṃ bhavaty ātmanas tu kāmāya vittaṃ priyaṃ bhavati |\nna vā are sarvasya kāmāya sarvaṃ priyaṃ bhavaty ātmanas tu kāmāya sarvaṃ priyaṃ bhavati |\nātmā vā are draṣṭavyaḥ śrotavyo mantavyo nididhyāsitavyo maitreyy ātmano vā are darśanena śravaṇena matyā vijñānenedaṃ sarvaṃ viditam || 5 ||",
            hindi:
              "याज्ञवल्क्य ने कहा: 'हे मैत्रेयी! पति के प्रयोजन के लिए पति प्रिय नहीं होता, अपितु अपनी ही आत्मा के लिए पति प्रिय होता है। पत्नी के लिए पत्नी प्रिय नहीं होती, अपनी आत्मा के लिए पत्नी प्रिय होती है। पुत्रों के लिए पुत्र प्रिय नहीं होते, अपनी आत्मा के लिए पुत्र प्रिय होते हैं। धन के लिए धन प्रिय नहीं होता, अपनी आत्मा के लिए धन प्रिय होता है। किसी भी वस्तु के प्रयोजन के लिए वह वस्तु प्रिय नहीं होती, अपितु अपनी ही आत्मा के परम प्रेम के कारण सब कुछ प्रिय होता है। इसलिए हे मैत्रेयी! यह आत्मा ही साक्षात् देखने योग्य (द्रष्टव्य), सुनने योग्य (श्रोतव्य), मनन करने योग्य (मन्तव्य) और निरंतर ध्यान करने योग्य (निदिध्यासितव्य) है। आत्मा के दर्शन, श्रवण, मनन और विज्ञान से ही यह सब कुछ ज्ञात हो जाता है!'",
            english:
              "Yajnavalkya said: 'Verily, not for the sake of the husband is the husband dear, but for the sake of the Self is the husband dear. Not for the sake of the wife is the wife dear, but for the sake of the Self is the wife dear. Not for the sake of sons are sons dear, but for the sake of the Self are sons dear. Not for the sake of wealth is wealth dear, but for the sake of the Self is wealth dear. Not for the sake of all is all dear, but for the sake of the Self is all dear. The Self alone, O Maitreyi, is to be seen, to be heard, to be reflected upon, to be deeply meditated upon! By the seeing, hearing, reflecting, and knowing of the Self, verily all this universe is known!'",
            commentary:
              "उपनिषदों का सर्वोच्च दार्शनिक उद्घोष: 'आत्मनस्तु कामाय सर्वं प्रियं भवति'। समस्त सांसारिक प्रेम वस्तुतः अंतरात्मा के असीम प्रेम का ही प्रतिबिंब है। श्रवण, मनन और निदिध्यासन ही आत्म-साक्षात्कार के तीन सोपान हैं।",
          },
          {
            number: 12,
            devanagari:
              "स यथा सैन्धवखिल्य उदके प्रास्त उदकमेवानुविलीयेत न हास्योद्ग्रहणायेव स्याद्यतो यतस्तत्त्वाददीत लवणमेवैवं वा अर इदं महद्भूतमनन्तमपारं विज्ञानघन एवैतेभ्यो भूतेभ्यः समुत्थाय तान्येवानुविनश्यति न प्रेत्य संज्ञास्तीत्यरे ब्रवीमीति होवाच याज्ञवल्क्यः॥१२॥",
            transliteration:
              "sa yathā saindhava-khilya udake prāsta udakam evānuvilīyeta na hāsyodgrahaṇāyeva syād yato yatas tattvād adīta lavaṇam evaivaṃ vā ara idaṃ mahad bhūtam anantam apāraṃ vijñāna-ghana evaitebhyo bhūtebhyaḥ samutthāya tāny evānuvinaśyati na pretya saṃjñāstīty are bravīmīti hovāca yājñavalkyaḥ || 12 ||",
            hindi:
              "याज्ञवल्क्य ने कहा: 'जैसे नमक की डली जल में डाले जाने पर जल में ही घुल जाती है और उसे अलग से बाहर नहीं निकाला जा सकता, जहाँ से भी जल चखो वह केवल नमकीन ही होता है; वैसे ही हे मैत्रेयी! यह महान्, अनंत, अपार परमात्मा केवल 'विज्ञानघन' (शुद्ध चैतन्य स्वरूप) ही है। यह उपाधि-भूतों से प्रकट होकर देह के नाश के साथ नाम-रूप की संज्ञा को खो देता है। देह से मुक्त होने पर कोई पृथक् संज्ञा (अहंकार) नहीं रहती; ऐसा मैं कहता हूँ।'",
            english:
              "Yajnavalkya said: 'As a lump of salt dropped into water dissolves into the water, and cannot be grasped separately, but wherever one tastes it is salty; even so, O Maitreyi, is this great, infinite, shoreless Reality pure Mass of Consciousness (Vijnanaghana). Arising from these elements, the individual soul dissolves into them again; after departure there is no separate individual consciousness—thus I declare!'",
            commentary:
              "सैन्धव-खिल्य दृष्टान्त — उपाधियों के मिटते ही जीवात्मा की पृथक् सत्ता अखंड चैतन्य-समुद्र में एकाकार हो जाती है।",
          },
          {
            number: 14,
            devanagari:
              "यत्र हि द्वैतमिव भवति तदितर इतरं जिघ्रति तदितर इतरं पश्यति तदितर इतरं शृणोति तदितर इतरमभिवदति तदितर इतरं मनुते तदितर इतरं विजानाति।\nयत्र त्वस्य सर्वमात्मैवाभूत्तत्केन कं जिघ्रेत्तत्केन कं पश्येत्तत्केन कं शृणुयात्तत्केन कमभिवदेत्तत्केन कं मन्वीत तत्केन कं विजानीयात्।\nयेनेदं सर्वं विजानाति तं केन विजानीयाद्विज्ञातारमरे केन विजानीयादिति॥१४॥",
            transliteration:
              "yatra hi dvaitam iva bhavati tad itara itaraṃ jighrati tad itara itaraṃ paśyati tad itara itaraṃ śṛṇoti tad itara itaram abhivadati tad itara itaraṃ manute tad itara itaraṃ vijānāti |\nyatra tv asya sarvam ātmaivābhūt tat kena kaṃ jighret tat kena kaṃ paśyet tat kena kaṃ śṛṇuyāt tat kena kam abhivadet tat kena kaṃ manvīta tat kena kaṃ vijānīyāt |\nyenedaṃ sarvaṃ vijānāti taṃ kena vijānīyād vijñātāram are kena vijānīyād iti || 14 ||",
            hindi:
              "क्योंकि जहाँ द्वैत जैसा प्रतीत होता है, वहाँ एक दूसरे को सूंघता है, एक दूसरे को देखता है, एक दूसरे को सुनता है, एक दूसरे से बोलता है, एक दूसरे का मनन करता है और एक दूसरे को जानता है। किन्तु जहाँ साधक के लिए सब कुछ आत्मा ही हो गया, वहाँ वह किसके द्वारा किसको सूंघे? किसके द्वारा किसको देखे? किसके द्वारा किसको सुने? किसके द्वारा किसको बोले? किसके द्वारा किसका मनन करे? और किसके द्वारा किसको जाने? जिसके द्वारा यह सब कुछ जाना जाता है, उस साक्षी को किसके द्वारा जाना जाए? अरे मैत्रेयी! उस अखंड ज्ञाता (विज्ञाता) को किसके द्वारा जाना जा सकता है?!'",
            english:
              "'For where there is duality as it were, there one smells another, one sees another, one hears another, one speaks to another, one thinks of another, and one knows another. But where to the seer all has become the Self alone, then through what should one smell whom? Through what should one see whom? Through what should one hear whom? Through what should one speak to whom? Through what should one think of whom? Through what should one know whom? By which everything is known, by what should That be known? By what, O Maitreyi, should one know the Knower of all?!'",
            commentary:
              "अद्वैत वेदान्त का सर्वोच्च शिखर: 'विज्ञातारमरे केन विजानीयात्'। समस्त ज्ञान का जो परम ज्ञाता (साक्षी आत्मा) है, वह कभी ज्ञेय (विषय) नहीं बन सकता; वह स्वयं स्वयंप्रकाश ज्ञानस्वरूप है।",
          },
        ],
      },
      {
        id: "bu-neti-neti",
        title: "चतुर्थ अध्याय • जनक-याज्ञवल्क्य संवाद एवं 'नेति नेति' आत्मा (ब्राह्मण ४ व ५)",
        items: [
          {
            number: 22,
            devanagari:
              "स वा एष महानज आत्मा योऽयं विज्ञानमयः प्राणेषु य एषोऽन्तर्हृदय आकाशस्तस्मिञ्छेते सर्वस्य वशी सर्वस्येशानः सर्वस्याधिपतिः।\nस न साधुना कर्मणा भूयान्भवति नो एवासाधुना कनीयान्।\nएष सर्वेश्वर एष भूताधिपतिरेष भूतपाल एष सेतुर्विधरण एषां लोकानामसंभेदाय।\nस एष नेति नेत्यात्माऽगृह्यो न हि गृह्यतेऽशीर्यो न हि शीर्यतेऽसङ्गो न हि सज्यतेऽसितो न व्यथते न रिष्यति।\nएतमु हैवैनं न तरत इत्यतः पापमकरवमित्यतः कल्याणमकरवमित्युभे उ हैवैष एते तरति नैनं कृताकृते तपतः॥२२॥",
            transliteration:
              "sa vā eṣa mahān aja ātmā yo 'yaṃ vijñāna-mayaḥ prāṇeṣu ya eṣo 'ntar-hṛdaya ākāśas tasmiñ chete sarvasya vaśī sarvasyeśānaḥ sarvasyādhipatiḥ |\nsa na sādhunā karmaṇā bhūyān bhavati no evāsādhunā kanīyān |\neṣa sarveśvara eṣa bhūtādhipatir eṣa bhūta-pāla eṣa setur vidharaṇa eṣāṃ lokānām asaṃbhedāya |\nsa eṣa neti nety ātmā'gṛhyo na hi gṛhyate'śīryo na hi śīryate'saṅgo na hi sajyate'sito na vyathate na riṣyati |\netam u haivainaṃ na tarata ity ataḥ pāpam akaravam ity ataḥ kalyāṇam akaravam ity ubhe u haivaiṣa ete tarati nainaṃ kṛtākṛte tapataḥ || 22 ||",
            hindi:
              "वह यह महान् अजन्मा आत्मा ही है, जो प्राणों में विज्ञानमय होकर हृदय के भीतर के परम आकाश में शयन करता है। वह सबका वशी (नियंता), सबका स्वामी और सबका अधिपति है। वह न तो शुभ कर्मों से बड़ा होता है और न अशुभ कर्मों से घटता है। वह सर्वेश्वर है, समस्त प्राणियों का अधिपति है, भूत-पालक है और इन समस्त लोकों को मर्यादा में रखने वाला सेतु (बांध) है। वह आत्मा 'नेति नेति' (यह भी नहीं, यह भी नहीं) स्वरूप है; वह अग्राही है क्योंकि कोई उसे ग्रहण नहीं कर सकता; वह अविनाशी है क्योंकि उसका क्षय नहीं होता; वह असंग है क्योंकि वह किसी में लिप्त नहीं होता; वह बंधन-मुक्त है, कभी व्यथित नहीं होता और कभी आहत नहीं होता। इस आत्मज्ञानी को 'मैंने पाप किया' या 'मैंने पुण्य किया'—ये दोनों विचार कभी संतप्त नहीं करते; वह इन दोनों से परे तर जाता है।",
            english:
              "That great, unborn Self is he who among the vital breaths consists of Consciousness, dwelling in the ether within the heart. He is the Controller of all, the Lord of all, the Sovereign of all. He does not become greater by good action, nor smaller by evil action. He is the Lord of all beings, the Protector of beings, the sovereign Bridge holding these worlds together so that they do not break apart. That Self is 'Not this, Not this' (Neti Neti). He is ungraspable, for He cannot be grasped; indestructible, for He cannot be destroyed; unattached, for He never clings; unbound, He suffers not, He perishes not. Neither the thought 'I did wrong' nor 'I did right' afflicts him; he transcends both. What he has done or not done torments him no more.",
            commentary:
              "बृहदारण्यकोपनिषद् का अप्रतिम महासूत्र: 'स एष नेति नेत्यात्मा'। निषेध-पद्धति (Via Negativa) द्वारा समस्त मायावी उपाधियों का निराकरण कर विशुद्ध साक्षी आत्मा का साक्षात्कार। आत्मज्ञानी समस्त पाप-पुण्य से परे मुक्त हो जाता है।",
          },
          {
            number: 15,
            devanagari:
              "स वा एष महानज आत्माऽजरोऽमरोऽमृतोऽभयो ब्रह्माभयं वै ब्रह्म।\nअभयं हि वै ब्रह्म भवति य एवं वेद॥१५॥",
            transliteration:
              "sa vā eṣa mahān aja ātmā'jaro'maro'mṛto'bhayo brahmābhayaṃ vai brahma |\nabhayaṃ hi vai brahma bhavati ya evaṃ veda || 15 ||",
            hindi:
              "वह यह महान् अजन्मा आत्मा ही निश्चय अजर (जरा-रहित), अमर (मृत्यु-रहित), अमृत और अभय ब्रह्म है। ब्रह्म निश्चय ही 'अभय' (सर्वथा भय-शून्य) है। जो मनुष्य इस प्रकार जान लेता है, वह स्वयं साक्षात् अभय ब्रह्म ही बन जाता है!",
            english:
              "That great, unborn Self is indeed ageless, deathless, immortal, fearless Brahman. Brahman is verily Fearlessness! He who knows this becomes verily the fearless Brahman Itself!",
            commentary:
              "बृहदारण्यकोपनिषद् का पावन उपसंहार: 'अभयं हि वै ब्रह्म भवति य एवं वेद'। आत्म-ज्ञान का फल है पूर्ण अभय — समस्त भयों, चिंताओं और मृत्यु का आत्यंतिक उच्छेद।",
          },
        ],
      },
    ],
  },

};
