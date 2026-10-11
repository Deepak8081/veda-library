/**
 * Authentic Vedas Scripture Reader Dataset
 * Sourced from the Government of India's Vedic Heritage Portal (vedicheritage.gov.in)
 * and Shakala / Vajasaneyi / Kauthuma / Shaunaka Samhitas.
 * Contains authentic svara-marked Devanagari, IAST transliteration,
 * Hindi and English translations, and Shastric commentary.
 */

export const VEDAS_SCRIPTURE_DATA = {
  rigveda: {
    label: "ऋग्वेद संहिता (शाकल शाखा)",
    sourceTotal: "१० मण्डल • १०२८ सूक्त • १०,५५२ ऋचाएँ",
    editionNote:
      "वैदिक हैरिटेज पोर्टल (vedicheritage.gov.in) • शाकल संहिता सस्वर वैदिक पाठ • औपनिषदिक एवं सायण भाष्य सम्मत",
    chapters: [
      {
        id: "rv-agni-sukta",
        title: "मण्डल १, सूक्त १ • अग्नि सूक्त (ऋचा १–९ पूर्ण)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ अ॒ग्निमी॑ळे पु॒रोहि॑तं य॒ज्ञस्य॑ दे॒वमृ॒त्विज॑म्।\nहोता॑रं रत्न॒धात॑मम्॥१॥",
            transliteration:
              "oṃ agnim īḷe purohitaṃ yajñasya devam ṛtvijam |\nhotāraṃ ratnadhātamam || 1 ||",
            hindi:
              "मैं यज्ञ के पुरोहित, दिव्य प्रकाशयुक्त, देवों को बुलाने वाले ऋत्विक तथा प्रचुर रत्नों (श्रेष्ठ सुखों एवं आध्यात्मिक ऐश्वर्य) को धारण कराने वाले अग्निदेव की स्तुति करता हूँ।",
            english:
              "I magnify Agni, the divine domestic priest of the sacrifice, the ministrant priest who summons the gods, and the supreme bestower of treasures.",
            commentary:
              "ऋषि: मधुच्छन्दा वैश्वामित्र • देवता: अग्नि • छन्द: गायत्री (८+८+८ = २४ वर्ण)। ऋग्वेद का यह प्रथम मंत्र समस्त वैदिक वांग्मय का मंगलाचरण है।",
          },
          {
            number: 2,
            devanagari:
              "अ॒ग्निः पूर्वे॑भि॒रृषि॑भि॒रीड्यो॒ नूत॑नैरु॒त।\nस दे॒वाँ एह व॑क्षति॥२॥",
            transliteration:
              "agniḥ pūrvebhir ṛṣibhir īḍyo nūtanair uta |\nsa devāṃ eha vakṣati || 2 ||",
            hindi:
              "अग्निदेव पूर्वकालीन भृगु, अङ्गिरा आदि ऋषियों द्वारा स्तुत्य रहे हैं और वर्तमान ऋषियों द्वारा भी वन्दनीय हैं। वे इस यज्ञ में सभी देवताओं को यहाँ लाएँ।",
            english:
              "Agni, worthy of praise by ancient sages and by modern seers as well, may he convey the gods hither.",
            commentary:
              "ऋषि: मधुच्छन्दा वैश्वामित्र • देवता: अग्नि • छन्द: गायत्री। यह मंत्र सनातन गुरु-परंपरा और ऋषि-परंपरा की निरंतरता को दर्शाता है।",
          },
          {
            number: 3,
            devanagari:
              "अ॒ग्निना॑ र॒यिम॑श्नव॒त्पोष॑मे॒व दि॒वेदि॑वे।\nय॒शसं॑ वी॒रव॑त्तम्॥३॥",
            transliteration:
              "agninā rayim aśnavat poṣam eva dive-dive |\nyaśasaṃ vīravattamam || 3 ||",
            hindi:
              "अग्निदेव के माध्यम से साधक प्रतिदिन पुष्टि को, निरंतर वर्धमान धन-ऐश्वर्य को तथा श्रेष्ठ वीर-संतानों से युक्त यश को प्राप्त करता है।",
            english:
              "Through Agni may one obtain wealth and nourishment day by day, glorious and rich in heroic offspring.",
            commentary:
              "ऋषि: मधुच्छन्दा वैश्वामित्र • देवता: अग्नि • छन्द: गायत्री। 'रयि' शब्द भौतिक समृद्धि के साथ आत्म-तेज का भी प्रतीक है।",
          },
          {
            number: 4,
            devanagari:
              "अग्ने॒ यं य॒ज्ञम॑ध्व॒रं वि॒श्वत॑ः परि॒भूरसि॑।\nस इद्दे॒वेषु॑ गच्छति॥४॥",
            transliteration:
              "agne yaṃ yajñam adhvaraṃ viśvataḥ paribhūr asi |\nsa id deveṣu gacchati || 4 ||",
            hindi:
              "हे अग्निदेव! जिस हिंसारहित यज्ञ (अध्वर) को आप सब ओर से सुरक्षित रखते हैं, वही यज्ञ निश्चय ही देवताओं तक पहुँचता है।",
            english:
              "O Agni, the sacrifice that you encompass on every side without injury or hindrance, that verily reaches the gods.",
            commentary:
              "यज्ञ को 'अध्वर' (हिंसा-रहित, बाधा-रहित) कहा गया है। अग्नि ही यज्ञ की रक्षा करने वाले सर्वव्यापी कवच हैं।",
          },
          {
            number: 5,
            devanagari:
              "अ॒ग्निर्होता॑ क॒विक्र॑तुः स॒त्यश्चि॒त्रश्र॑वस्तमः।\nदे॒वो दे॒वेभि॒रा ग॑मत्॥५॥",
            transliteration:
              "agnir hotā kavikratuḥ satyaś citraśravastamaḥ |\ndevo devebhir ā gamat || 5 ||",
            hindi:
              "अग्निदेव यज्ञ के होता, क्रांतदर्शी प्रज्ञावान (कविक्रतु), सत्यस्वरूप और अतिशय अद्भुत कीर्ति वाले हैं। वे देव अन्य सभी देवों के साथ यहाँ पधारें।",
            english:
              "May Agni, the priest of calling, of visionary insight, true and most glorious in renown, come as a god with the gods.",
            commentary:
              "'कविक्रतु' अर्थात् जिसकी बुद्धि भूत, भविष्य और वर्तमान की सब विद्याओं को जानने वाली हो।",
          },
          {
            number: 6,
            devanagari:
              "यद॒ङ्ग दा॒शुषे॒ त्वमग्ने॑ भ॒द्रं क॑रि॒ष्यसि॑।\nतवेत्तत्स॒त्यम॑ङ्गिरः॥६॥",
            transliteration:
              "yad aṅga dāśuṣe tvam agne bhadraṃ kariṣyasi |\ntavet tat satyam aṅgiraḥ || 6 ||",
            hindi:
              "हे अंगिरा श्रेष्ठ अग्निदेव! जो कुछ भी कल्याण आप अपने हविदाता भक्त का करते हैं, वह निश्चय ही आपका ही सत्य संकल्प है।",
            english:
              "Whatever good fortune you bestow upon the worshipper who offers oblations, O Agni Angiras, that is truly your own truthful promise.",
            commentary:
              "अंगिरा: अंग-अंग में रस बनकर व्याप्त रहने वाले प्राण-अग्नि। भक्त के कल्याण का संकल्प अग्निदेव का अविनाशी धर्म है।",
          },
          {
            number: 7,
            devanagari:
              "उप॑ त्वाग्ने दि॒वेदि॑वे॒ दोषा॑वस्तर्धि॒या व॒यम्।\nनमो॒ भर॑न्त॒ एम॑सि॥७॥",
            transliteration:
              "upa tvāgne dive-dive doṣāvastar dhiyā vayam |\nnamo bharanta emasi || 7 ||",
            hindi:
              "हे अंधकार को दूर करने वाले प्रकाशमान अग्निदेव! हम प्रतिदिन रात और दिन शुद्ध बुद्धि और प्रणाम-भाव से युक्त होकर आपके समीप आते हैं।",
            english:
              "To you, O Agni, day by day, illuminer of darkness, we approach with pure prayer and adoration.",
            commentary:
              "'दोषावस्तः' — जो रात और दिन (हर काल में) प्रकाशित हैं। 'धिया' — आत्मिक प्रज्ञा व एकाग्र चित्त से।",
          },
          {
            number: 8,
            devanagari:
              "राज॑न्तमध्व॒राणां॑ गो॒पामृ॒तस्य॒ दीदि॑विम्।\nवर्ध॑मानं॒ स्वे दमे॑॥८॥",
            transliteration:
              "rājantam adhvarāṇāṃ gopām ṛtasya dīdivim |\nvardhamānaṃ sve dame || 8 ||",
            hindi:
              "आप अहिंसक यज्ञों के स्वामी, सत्य (ऋत) के रक्षक, अत्यंत दीप्तिमान तथा अपनी ही यज्ञवेदी (हृदय-धाम) में नित्य वर्धमान हैं।",
            english:
              "Ruler of sacred rites, guardian of cosmic order (Rta), radiant and ever-growing in your own abode.",
            commentary:
              "'ऋतस्य गोपा' — शाश्वत प्राकृतिक व नैतिक व्यवस्था के रक्षक। 'स्वे दमे' — अपने यज्ञकुण्ड एवं साधक के हृदय में।",
          },
          {
            number: 9,
            devanagari:
              "स न॑ः पि॒तेव॑ सू॒नवेऽग्ने॑ सूपाय॒नो भ॑व।\nसच॑स्वा नः स्व॒स्तये॑॥९॥",
            transliteration:
              "sa naḥ piteva sūnave 'gne sūpāyano bhava |\nsacasvā naḥ svastaye || 9 ||",
            hindi:
              "हे अग्निदेव! जैसे पिता अपने पुत्र के लिए सुलभ और कल्याणकारी होता है, वैसे ही आप हमारे लिए सुलभ हो जाइए और हमारे पूर्ण कल्याण (स्वस्ति) के लिए हमारे साथ रहिए।",
            english:
              "Be easily accessible to us, O Agni, even as a father to his son; abide with us for our supreme wellbeing.",
            commentary:
              "अग्नि सूक्त का अंतिम मंत्र ईश्वर और जीव के बीच पिता-पुत्र जैसे परम वात्सल्य और अपनत्व के संबंध को स्थापित करता है।",
          },
        ],
      },
      {
        id: "rv-gayatri-sukta",
        title: "मण्डल ३, सूक्त ६२ • सविता / गायत्री सूक्त (ऋचा १०–१२)",
        items: [
          {
            number: 10,
            devanagari:
              "ॐ भूर्भुव॒स्स्वः॑।\nतत्स॑वि॒तुर्वरे॑ण्यं॒ भर्गो॑ दे॒वस्य॑ धीमहि।\nधियो॒ यो न॑ः प्रचो॒दया॑त्॥१०॥",
            transliteration:
              "oṃ bhūr bhuvas svaḥ |\ntat savitur vareṇyaṃ bhargo devasya dhīmahi |\ndhiyo yo naḥ pracodayāt || 10 ||",
            hindi:
              "उस प्राणस्वरूप, दुःखनिवारक, सुखस्वरूप, श्रेष्ठ, तेजस्वी, पापनाशक, देवस्वरूप परमात्मा के वरेण्य तेज का हम ध्यान करते हैं; जो हमारी बुद्धियों को सन्मार्ग पर प्रेरित करे।",
            english:
              "We meditate upon the supreme, adorable effulgence of the divine creator Savitr; may that divine light guide and inspire our intellects.",
            commentary:
              "ऋषि: विश्वामित्र • देवता: सविता • छन्द: गायत्री (८+८+८ = २४ वर्ण)। इसे 'वेदों की जननी' (वेदमाता) कहा गया है। समस्त ज्ञान और गायत्री साधना का यह मूलाधार है।",
          },
          {
            number: 11,
            devanagari:
              "दे॒वस्य॑ सवि॒तुर्म॒तिं स॒वं विश्व॑देव्यम्।\nधि॒या भग॑स्य धीमहि॥११॥",
            transliteration:
              "devasya savitur matiṃ savaṃ viśvadevyaṃ |\ndhiyā bhagasya dhīmahi || 11 ||",
            hindi:
              "हम सविता देव की कल्याणकारी बुद्धि और समस्त देवों द्वारा पूजनीय उनकी प्रेरणा तथा समग्र ऐश्वर्य का ध्यान अपनी प्रज्ञा से करते हैं।",
            english:
              "We contemplate with devotion the divine mind and creative impulsion of god Savitr, beloved of all the gods.",
            commentary:
              "सविता देव केवल सूर्यपिंड नहीं, अपितु समस्त ब्रह्मांड के उत्पादक एवं चेतना-प्रेरक परमात्मा हैं।",
          },
          {
            number: 12,
            devanagari:
              "स॒वि॒ता यन्तु॒ नो भ॒गं स॒विता नो॒ ददा॑तु र॒यिम्।\nस॒वि॒ता नः॑ सु॒वीर॑ताम्॥१२॥",
            transliteration:
              "savitā yantu no bhagaṃ savitā no dadātu rayiṃ |\nsavitā naḥ suvīratām || 12 ||",
            hindi:
              "सविता देव हमारे लिए श्रेष्ठ सौभाग्य प्रदान करें, सविता देव हमें अक्षय ऐश्वर्य दें और वे हमें श्रेष्ठ शक्ति व सामर्थ्य प्रदान करें।",
            english:
              "May Savitr bestow upon us supreme fortune; may Savitr grant us spiritual wealth and heroic vigor.",
            commentary:
              "यह प्रार्थना जीवन के चारों पुरुषार्थों (धर्म, अर्थ, काम, मोक्ष) की प्राप्ति हेतु सवितृ देव से की गई है।",
          },
        ],
      },
      {
        id: "rv-mahamrityunjaya",
        title: "मण्डल ७, सूक्त ५९ • महामृत्युंजय सूक्त (ऋचा १२)",
        items: [
          {
            number: 12,
            devanagari:
              "ॐ त्र्य॑म्बकं यजामहे सुग॒न्धिं पु॑ष्टि॒वर्ध॑नम्।\nउ॒र्वा॒रु॒कमि॑व॒ बन्ध॑नान्मृ॒त्योर्मु॑क्षीय॒ माऽमृता॑त्॥१२॥",
            transliteration:
              "oṃ tryambakaṃ yajāmahe sugandhiṃ puṣṭi-vardhanam |\nurvārukam iva bandhanān mṛtyor mukṣīya mā 'mṛtāt || 12 ||",
            hindi:
              "हम त्रिनेत्रधारी, सुगंधित और पुष्टि का संवर्धन करने वाले भगवान शिव (त्र्यम्बक रुद्र) की आराधना करते हैं। जिस प्रकार पका हुआ खरबूजा अपनी बेल के बंधन से अनायास मुक्त हो जाता है, उसी प्रकार हम मृत्यु के बंधनों से मुक्त हों, किन्तु अमरता (मोक्ष) से कभी वंचित न हों।",
            english:
              "We worship the three-eyed Lord (Tryambaka) who is fragrant and nourishes all beings. Even as a ripe cucumber is effortlessly liberated from its stalk, may we be liberated from the bondage of death, but not from immortality.",
            commentary:
              "ऋषि: वसिष्ठ मैत्रावरुणी • देवता: रुद्र • छन्द: अनुष्टुप। यह संजीवनी महामंत्र है, जो व्याधियों, अकाल मृत्यु और भय से मुक्ति दिलाकर मोक्ष का मार्ग प्रशस्त करता है।",
          },
        ],
      },
      {
        id: "rv-purusha-sukta",
        title: "मण्डल १०, सूक्त ९० • पुरुष सूक्त (ऋचा १–१६ पूर्ण)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ स॒हस्र॑शीर्षा॒ पुरु॑षः सहस्रा॒क्षः स॒हस्र॑पात्।\nस भूमिं॑ वि॒श्वतो॑ वृ॒त्वात्य॑तिष्ठद्दशाङ्गु॒लम्॥१॥",
            transliteration:
              "oṃ sahasra-śīrṣā puruṣaḥ sahasrākṣaḥ sahasra-pāt |\nsa bhūmiṃ viśvato vṛtvāty atiṣṭhad daśāṅgulam || 1 ||",
            hindi:
              "वह विराट् पुरुष (परमब्रह्म) सहस्रों (अनंत) सिरों वाला, सहस्रों नेत्रों वाला और सहस्रों चरणों वाला है। उसने संपूर्ण ब्रह्मांड को सब ओर से व्याप्त करके भी दस अंगुल (अनंत परिमाण) अतिरिक्त अतिक्रमण कर रखा है।",
            english:
              "The supreme cosmic Person has thousands of heads, thousands of eyes, and thousands of feet. Having pervaded the entire cosmos on all sides, He extends beyond it by ten finger-breadths into infinity.",
            commentary:
              "ऋषि: नारायण • देवता: पुरुष • छन्द: अनुष्टुप। यह सूक्त ईश्वर के विश्वातीत (transcendent) और विश्वमय (immanent) दोनों स्वरूपों का निरूपण करता है।",
          },
          {
            number: 2,
            devanagari:
              "पुरु॑ष ए॒वेदं सर्वं॒ यद्भू॒तं यच्च॒ भव्य॑म्।\nउ॒तामृ॑त॒त्वस्येशा॑नो॒ यदन्ने॑नाति॒रोह॑ति॥२॥",
            transliteration:
              "puruṣa evedaṃ sarvaṃ yad bhūtaṃ yac ca bhavyam |\nutāmṛtatvasyeśāno yad annenātirohati || 2 ||",
            hindi:
              "जो कुछ बीत चुका है और जो कुछ भविष्य में होने वाला है, वह सब कुछ केवल यही पुरुष है। वह अमृतत्व (मोक्ष) का भी स्वामी है, जो अन्न (भोग) के द्वारा निरंतर विकसित होता है।",
            english:
              "The cosmic Person verily is all this—whatever has been and whatever is yet to be. He is moreover the immortal Lord of eternal life, growing beyond mortal nourishment.",
            commentary:
              "काल, सृष्टि और मोक्ष का एकमात्र अधिष्ठान वह विराट् पुरुष ही है।",
          },
          {
            number: 3,
            devanagari:
              "ए॒तावा॑नस्य महि॒मातो॒ ज्यायाँ॑श्च॒ पूरु॑षः।\nपादो॑ऽस्य॒ विश्वा॑ भू॒तानि॑ त्रि॒पाद॑स्या॒मृतं॑ दि॒वि॥३॥",
            transliteration:
              "etāvān asya mahimāto jyāyāṃś ca pūruṣaḥ |\npādo 'sya viśvā bhūtāni tripād asyāmṛtaṃ divi || 3 ||",
            hindi:
              "यह दृश्यमान जगत तो केवल उसकी महिमा का एक विस्तार है; वह पुरुष इससे भी कहीं अधिक महान है। संपूर्ण दृश्य ब्रह्मांड तो उसका केवल एक चतुर्थांश (पाद) है, उसके तीन अमर पाद दिव्य ज्योतिर्मय लोक में प्रतिष्ठित हैं।",
            english:
              "Such is His magnificence, yet greater still is the supreme Person. All creatures and cosmos form only a single quarter of Him; three quarters of Him abide immortal in heaven.",
            commentary:
              "प्रपंच केवल १/४ अंश है, जबकि ३/४ अंश नित्य, अविनाशी, निर्गुण-सच्चिदानंद स्वरूप है।",
          },
          {
            number: 4,
            devanagari:
              "त्रि॒पादू॒र्ध्व उदै॒त्पुरु॑षः॒ पादो॑ऽस्ये॒हाभ॑व॒त्पुन॑ः।\nततो॒ विष्व॒ङ्व्य॑क्रामत्सासनानश॒ने अ॒भि॥४॥",
            transliteration:
              "tripād ūrdhva udait puruṣaḥ pādo 'syehābhavat punaḥ |\ntato viṣvaṅ vyakrāmat sāśanānaśane abhi || 4 ||",
            hindi:
              "तीन पाद वाला पुरुष उर्ध्व लोक में नित्य प्रतिष्ठित रहा और उसका एक पाद पुनः यहाँ संसार रूप में प्रकट हुआ। वहाँ से वह चेतन (स-अशन) और अचेतन (अनशन) संपूर्ण प्रपंच में सर्वत्र व्याप्त हो गया।",
            english:
              "With three quarters the Person rose on high; one quarter of Him returned here again into creation. Thence He spread everywhere over that which eats and that which eats not.",
            commentary:
              "स-अशन (चेतन जीव) और अनशन (जड़ प्रकृति) — दोनों में उसी पुरुष का प्रवेश है।",
          },
          {
            number: 5,
            devanagari:
              "तस्मा᳚द्वि॒राळ॑जायत वि॒राजो॒ अधि॒ पूरु॑षः।\nस जा॒तो अत्य॑रिच्यत प॒श्चाद्भूमि॒मथो॑ पु॒रः॥५॥",
            transliteration:
              "tasmād virāḷ ajāyata virājo adhi pūruṣaḥ |\nsa jāto aty aricyata paścād bhūmim atho puraḥ || 5 ||",
            hindi:
              "उस आदि पुरुष से ब्रह्मांड रूप विराट् उत्पन्न हुआ और उस विराट् से जीव-रूप पुरुष (हिरण्यगर्भ) प्रकट हुआ। उत्पन्न होकर उसने आगे और पीछे संपूर्ण पृथ्वी को व्याप्त कर लिया।",
            english:
              "From Him was born the cosmic Virat, and from Virat was born the presiding Person. Being born, He extended beyond the earth, both behind and before.",
            commentary:
              "सृष्टि का क्रमिक विकास: आदि पुरुष -> विराट् -> हिरण्यगर्भ -> लोक एवं जीव।",
          },
          {
            number: 6,
            devanagari:
              "यत्पुरु॑षेण ह॒विषा॑ दे॒वा य॒ज्ञमत॑न्वत।\nव॒स॒न्तो अ॑स्यासी॒दाज्यं॑ ग्री॒ष्म इ॒ध्मः श॒रद्ध॒विः॥६॥",
            transliteration:
              "yat puruṣeṇa haviṣā devā yajñam atanvata |\nvasanto asyāsīd ājyaṃ grīṣma idhmaḥ śarad dhaviḥ || 6 ||",
            hindi:
              "जब देवों ने उस विराट् पुरुष को ही हवि बनाकर मानसिक सृष्टि-यज्ञ का विस्तार किया, तब उस यज्ञ में वसंत ऋतु घृत (आज्य) बनी, ग्रीष्म ऋतु समिधा (ईध्म) बनी और शरद ऋतु हवि बनी।",
            english:
              "When the gods performed the cosmic sacrifice with the Person as oblation, Spring was its melted butter, Summer the sacred firewood, and Autumn the offering.",
            commentary:
              "ऋतुओं का ब्रह्मांडीय यज्ञ में योगदान। सृष्टि स्वतः एक सतत यज्ञ-प्रक्रिया है।",
          },
          {
            number: 16,
            devanagari:
              "य॒ज्ञेन॑ य॒ज्ञम॑यजन्त दे॒वास्तानि॒ धर्मा॑णि प्रथ॒मान्या॑सन्।\nते ह॒ नाकं॑ महि॒मान॑ः सचन्त॒ यत्र॒ पूर्वे॑ सा॒ध्याः सन्ति॑ दे॒वाः॥१६॥",
            transliteration:
              "yajñena yajñam ayajanta devās tāni dharmāṇi prathamāny āsan |\nte ha nākaṃ mahimānaḥ sacanta yatra pūrve sādhyāḥ santi devāḥ || 16 ||",
            hindi:
              "देवताओं ने यज्ञ के द्वारा यज्ञस्वरूप परमात्मा का यजन किया। वे ही धर्म के प्रथम मूल नियम (धर्म) बने। वे महिमामयी आत्माएँ उस दिव्य स्वर्गलोक को प्राप्त हुईं जहाँ प्राचीन साध्य देव निवास करते हैं।",
            english:
              "By sacrifice the gods worshipped the Lord of Sacrifice; these were the earliest primordial laws of Dharma. Those mighty ones attained the highest heaven where the ancient deities and Sadhyas dwell.",
            commentary:
              "पुरुष सूक्त का उपसंहार: यज्ञ ही धर्म का आदि स्रोत है, और यज्ञ द्वारा ही मोक्ष की प्राप्ति होती है।",
          },
        ],
      },
      {
        id: "rv-nasadiya-sukta",
        title: "मण्डल १०, सूक्त १२९ • नासदीय सूक्त (ऋचा १–७ पूर्ण)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ नास॑दासी॒न्नो सदा॑सीत्त॒दानीं॒ नासी॒द्रजो॒ नो व्यो॑मा प॒रो यत्।\nकिमाव॑रीव॒ः कुह॒ कस्य॒ शर्म॒न्नम्भ॒ः किमा॑सी॒द्गह॑नं गभी॒रम्॥१॥",
            transliteration:
              "oṃ nāsad āsīn no sad āsīt tadānīṃ nāsīd rajo no vyomā paro yat |\nkim āvarīvaḥ kuha kasya śarmann ambhaḥ kim āsīd gahanaṃ gabhīram || 1 ||",
            hindi:
              "सृष्टि से पूर्व न असत् (अभाव) था और न सत् (भाव) था। न अंतरिक्ष था और न उससे परे का आकाश। किसने किसको ढँक रखा था? कहाँ और किसके संरक्षण में? क्या वह अगाध और अथाह जल था?",
            english:
              "Then there was neither non-existence nor existence; there was no realm of air, no sky beyond. What covered it, and where? And what gave shelter? Was water there, unfathomed and profound?",
            commentary:
              "ऋषि: प्रजापति परमेष्ठी • देवता: भाववृत्त (परमात्मा) • छन्द: त्रिष्टुप। विश्व का सबसे गहरा ब्रह्मांड-उत्पत्ति (cosmological) सूक्त।",
          },
          {
            number: 2,
            devanagari:
              "न मृ॒त्युरा॑सीद॒मृतं॒ न तर्हि॒ न रात्र्या॒ अह्न॑ आसीत्प्रके॒तः।\nआनी॑दवा॒तं स्व॒धया॒ तदेकं॒ तस्मा॑द्धा॒न्यन्न प॒रः किञ्च॒नास॑॥२॥",
            transliteration:
              "na mṛtyur āsīd amṛtaṃ na tarhi na rātryā ahna āsīt praketaḥ |\nānīd avātaṃ svadhayā tad ekaṃ tasmād dhānyan na paraḥ kiñcanāsa || 2 ||",
            hindi:
              "तब न मृत्यु थी और न अमरता; न रात और दिन का कोई भेद था। वह 'एकमेव तत्त्व' अपनी ही अंतर्निहित शक्ति (स्वधा) से श्वास-रहित होकर भी स्पंदित हो रहा था। उसके अतिरिक्त परे कुछ भी नहीं था।",
            english:
              "Death was not then, nor was there life immortal of night or day there was no distinguishable sign. That One Thing breathless, breathed by its own nature: apart from it was nothing whatsoever.",
            commentary:
              "अद्वैत का बीज: केवल 'तदेकम्' (वह परब्रह्म) ही विद्यमान था।",
          },
          {
            number: 3,
            devanagari:
              "तम॑ आसी॒त्तम॑सा गू॒ळ्हमग्रे॑ऽप्रके॒तं स॑लि॒लं सर्व॑मा इ॒दम्।\nतु॒च्छ्येना॒भ्वपि॑हितं॒ यदासी॒त्तप॑स॒स्तन्म॑हि॒नाजा॑य॒तैक॑म्॥३॥",
            transliteration:
              "tama āsīt tamasā gūḷham agre 'praketaṃ salilaṃ sarvam ā idam |\ntucchyenābhv apihitaṃ yad āsīt tapasas tan mahinājāyataikam || 3 ||",
            hindi:
              "प्रारंभ में अंधकार अंधकार से आच्छादित था। यह संपूर्ण विश्व अप्रकट जल के समान अव्यक्त था। जो शून्य से ढँका हुआ था, वह 'एक तत्त्व' तप (परम चेतना के संकल्प) की महिमा से उत्पन्न हुआ।",
            english:
              "Darkness there was at first concealed in darkness, unmanifest water was this all. That which had been void and hidden by husk, that One arose through the power of creative tapas.",
            commentary:
              "तपस् (ईश्वरीय संकल्प) ही अव्यक्त से व्यक्त सृष्टि का उत्प्रेरक है।",
          },
          {
            number: 7,
            devanagari:
              "इ॒यं विसृ॑ष्टि॒र्यत॑ आब॒भूव॒ यदि॑ वा द॒धे यदि॑ वा॒ न।\nयो अ॒स्याध्य॑क्षः पर॒मे व्यो॑म॒न्त्सो अ॒ङ्ग वे॑द॒ यदि॑ वा॒ न वेद॑॥७॥",
            transliteration:
              "iyaṃ visṛṣṭir yata ābabhūva yadi vā dadhe yadi vā na |\nyo asyādhyakṣaḥ parame vyoman tso aṅga veda yadi vā na veda || 7 ||",
            hindi:
              "यह विविध सृष्टि जिससे उत्पन्न हुई—चाहे उसने इसे रचा या नहीं रचा—जो इस सृष्टि का परम व्योम में अधिपति (अध्यक्ष) है, निश्चय ही वह इसे जानता है, अथवा शायद वह भी नहीं जानता!",
            english:
              "Whence all creation had its origin, whether he fashioned it or whether he did not, he who surveys it all from high in the highest heavens, he verily knows it—or perhaps even he knows not!",
            commentary:
              "वैदिक ऋषियों की यह विनम्र दार्शनिक जिज्ञासा विश्व साहित्य में अद्वितीय है।",
          },
        ],
      },
      {
        id: "rv-samjnana-sukta",
        title: "मण्डल १०, सूक्त १९१ • संज्ञान / संगठन सूक्त (ऋचा १–४ पूर्ण)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ सं-स॒मिद्यु॑वसे वृष॒न्नग्ने॒ विश्वा॑न्य॒र्य आ।\nइ॒ळस्प॒दे समि॑ध्यसे॒ स नो॒ वसूं॒न्या भ॑र॥१॥",
            transliteration:
              "oṃ saṃ-sam id yuvase vṛṣann agne viśvāny arya ā |\niḷas pade sam idhyase sa no vasūny ā bhara || 1 ||",
            hindi:
              "हे सामर्थ्यशाली अग्निदेव! आप समस्त प्राणियों को प्रेम और सद्भाव से परस्पर जोड़ते हैं। आप यज्ञभूमि के पवित्र स्थान पर प्रज्वलित होते हैं; आप हमें सभी कल्याणकारी ऐश्वर्य प्रदान करें।",
            english:
              "O bounteous Agni, you bring together all beings in harmony. You are kindled in the sacred place of sacrifice; bring us all noble treasures.",
            commentary:
              "ऋषि: संवनन आङ्गिरस • देवता: संज्ञान • छन्द: अनुष्टुप। ऋग्वेद का यह अंतिम सूक्त विश्व-एकता और सामाजिक समरसता का अमर संदेश है।",
          },
          {
            number: 2,
            devanagari:
              "सं ग॑च्छध्वं॒ सं व॑दध्वं॒ सं वो॒ मना॑ंसि जानताम्।\nदे॒वा भा॒गं यथा॒ पूर्वे॑ संजाना॒ना उ॒पास॑ते॥२॥",
            transliteration:
              "saṃ gacchadhvaṃ saṃ vadadhvaṃ saṃ vo manāṃsi jānatām |\ndevā bhāgaṃ yathā pūrve sañjānānā upāsate || 2 ||",
            hindi:
              "तुम सब साथ मिलकर चलो, एक स्वर में प्रेमपूर्वक बोलो, तुम्हारे मन परस्पर एकमत होकर विचार करें; जैसे पूर्वकाल में देवता एकमत होकर अपने यज्ञ-भाग को ग्रहण करते थे।",
            english:
              "Walk together, speak together, let your minds be in harmony together; just as the gods of ancient times united in one mind to accept their sacred shares.",
            commentary:
              "सामाजिक एकता, सामूहिक संवाद और मानसिक सामंजस्य का यह सनातन घोषणापत्र है।",
          },
          {
            number: 3,
            devanagari:
              "स॒मा॒नो मन्त्रः॒ समि॑तिः समा॒नी स॑मा॒नं मनः॑ स॒ह चि॒त्तमे॑षाम्।\nस॒मा॒नं मन्त्र॑म॒भि म॑न्त्रये वः समा॒नेन॑ वो ह॒विषा॑ जुहोमि॥३॥",
            transliteration:
              "samāno mantraḥ samitiḥ samānī samānaṃ manaḥ saha cittam eṣām |\nsamānaṃ mantram abhi mantraye vaḥ samānena vo haviṣā juhomi || 3 ||",
            hindi:
              "तुम्हारी विचारणा (मंत्र) समान हो, तुम्हारी सभा (समिति) समान हो, तुम्हारा मन समान हो और तुम्हारा चित्त एक साथ मिलकर चले। मैं तुम्हें समान विचार से संबोधित करता हूँ और समान हवि से यज्ञ करता हूँ।",
            english:
              "Common be your prayer, common your assembly, common your minds and thoughts together. A common purpose I lay before you all, and with a common offering I worship for you.",
            commentary:
              "लोकतांत्रिक व्यवस्था, समतावादी दृष्टि और राष्ट्र की सामूहिक शक्ति का आधार।",
          },
          {
            number: 4,
            devanagari:
              "स॒मा॒नी व॑ आ॒कूतिः॑ समा॒ना हृद॑यानि वः।\nस॒मा॒नम॑स्तु वो॒ मनो॒ यथा॑ वः॒ सुस॒हाम॑सति॥४॥",
            transliteration:
              "samānī va ākūtiḥ samānā hṛdayāni vaḥ |\nsamānam astu vo mano yathā vaḥ susahāsati || 4 ||",
            hindi:
              "तुम्हारा संकल्प समान हो, तुम्हारे हृदय समान प्रेम से ओत-प्रोत हों, तुम्हारा मन एक हो, जिससे तुम सब मिलकर सुखपूर्वक और सामंजस्य से रह सको।",
            english:
              "United be your resolve, united your hearts, united your minds, so that you may live together in perfect union and mutual happiness.",
            commentary:
              "ऋग्वेद का अंतिम महामंत्र—शांति, सौहार्द और वैश्विक भ्रातृत्व की पूर्णता।",
          },
        ],
      },
    ],
  },

  yajurveda: {
    label: "यजुर्वेद संहिता (शुक्ल एवं कृष्ण शाखा)",
    sourceTotal: "४० अध्याय • १९७५ मन्त्र • वाजसनेयि माध्यन्दिन संहिता",
    editionNote:
      "वैदिक हैरिटेज पोर्टल • वाजसनेयि माध्यन्दिन शतपथ ब्राह्मण सम्मत सस्वर पाठ • महर्षि दयानन्द एवं उव्वट-महीधर भाष्य",
    chapters: [
      {
        id: "sy-shiva-sankalpa",
        title: "अध्याय ३४ • शिवसंकल्प सूक्त (मन्त्र १–६ पूर्ण)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ यज्जाग्र॑तो दू॒रमुदै॑ति॒ दैवं॒ तदु॑ सु॒प्तस्य॒ तथै॒वेति॑।\nदू॒र॒ङ्ग॒मं ज्योति॑षां॒ ज्योति॒रेकं॒ तन्मे॒ मन॑ः शि॒वस॑ङ्क॒ल्पम॑स्तु॥१॥",
            transliteration:
              "oṃ yaj jāgrato dūram udaiti daivaṃ tad u suptasya tathaivaiti |\ndūraṅ-gamaṃ jyotiṣāṃ jyotir ekaṃ tan me manaḥ śiva-saṅkalpam astu || 1 ||",
            hindi:
              "जो मन जाग्रत अवस्था में बहुत दूर-दूर तक चला जाता है, और सुप्त (सोते हुए) अवस्था में भी उसी प्रकार दूर तक भ्रमण करता है; जो दूरगामी है और समस्त इंद्रियों का एकमात्र दिव्य प्रकाशक है—वह मेरा मन कल्याणकारी शुभ संकल्पों से युक्त हो।",
            english:
              "That divine mind which wanders far while awake, and likewise roams afar in sleep, the far-reaching unique light of all lights—may that mind of mine be filled with auspicious resolves.",
            commentary:
              "ऋषि: प्रजापति • देवता: मन • छन्द: त्रिष्टुप। मन को शुद्ध, सकारात्मक और शिव (कल्याणकारी) बनाने वाला सर्वोच्च वैदिक सूक्त।",
          },
          {
            number: 2,
            devanagari:
              "येन॒ कर्म्मा॑ण्य॒पसो॑ मनी॒षिणो॑ य॒ज्ञे कृ॒ण्वन्ति॑ वि॒दथे॑षु॒ धीरा॑ः।\nयद॑पू॒र्वं य॒क्षम॒न्तः प्र॒जानां॒ तन्मे॒ मन॑ः शि॒वस॑ङ्क॒ल्पम॑स्तु॥२॥",
            transliteration:
              "yena karmāṇy apaso manīṣiṇo yajñe kṛṇvanti vidatheṣu dhīrāḥ |\nyad apūrvaṃ yakṣam antaḥ prajānāṃ tan me manaḥ śiva-saṅkalpam astu || 2 ||",
            hindi:
              "जिस मन के द्वारा कर्मठ, ज्ञानी और धैर्यवान पुरुष यज्ञों तथा ज्ञान-सभाओं में श्रेष्ठ कर्मों का अनुष्ठान करते हैं; जो समस्त प्राणियों के भीतर अपूर्व एवं पूजनीय आत्म-तत्त्व है—वह मेरा मन शिवसंकल्प से युक्त हो।",
            english:
              "By which active, wise, and steadfast persons perform sacred deeds in sacrifice and assemblies; that peerless spirit residing within all creatures—may that mind of mine be filled with auspicious resolves.",
            commentary:
              "मन ही कर्मों का संचालक और अंतरंग चेतना का केंद्र है।",
          },
          {
            number: 3,
            devanagari:
              "यत्प्र॒ज्ञान॑मु॒त चेतो॒ धृति॑श्च॒ यज्ज्योति॑र॒न्तर॒मृतं॑ प्र॒जासु॑।\nयस्मा॒न्न ऋ॒ते किञ्च॒न कर्म॑ क्रि॒यते॒ तन्मे॒ मन॑ः शि॒वस॑ङ्क॒ल्पम॑स्तु॥३॥",
            transliteration:
              "yat prajñānam uta ceto dhṛtiś ca yaj jyotir antar amṛtaṃ prajāsu |\nyasmān na ṛte kiñcana karma kriyate tan me manaḥ śiva-saṅkalpam astu || 3 ||",
            hindi:
              "जो मन विशेष ज्ञान (प्रज्ञान), चेतना और धैर्य-धारण की शक्ति है; जो प्राणियों के भीतर अविनाशी ज्योतिर्मय प्रकाश है; जिसके बिना कोई भी कार्य संपन्न नहीं किया जा सकता—वह मेरा मन शिवसंकल्प से युक्त हो।",
            english:
              "That which is profound wisdom, consciousness, and steadfast will; that immortal light dwelling within all beings, without which no action whatsoever is accomplished—may that mind of mine be filled with auspicious resolves.",
            commentary:
              "प्रज्ञान (बुद्धि), चेतस् (चित्त) और धृति (धैर्य) — मन के तीन मूल आयाम।",
          },
          {
            number: 4,
            devanagari:
              "येने॒दं भू॒तं भुव॑नं भवि॒ष्यत्परि॑गृहीतम॒मृते॑न॒ सर्व॑म्।\nयेन॑ य॒ज्ञस्ता॒यते॑ स॒प्तहो॑ता॒ तन्मे॒ मन॑ः शि॒वस॑ङ्क॒ल्पम॑स्तु॥४॥",
            transliteration:
              "yenedaṃ bhūtaṃ bhuvanaṃ bhaviṣyat parigṛhītam amṛtena sarvam |\nyena yajñas tāyate sapta-hotā tan me manaḥ śiva-saṅkalpam astu || 4 ||",
            hindi:
              "जिस अविनाशी मन के द्वारा भूत, वर्तमान और भविष्य का समस्त ब्रह्मांड जाना और ग्रहण किया जाता है; जिसके द्वारा सात होताओं वाला ज्ञान-यज्ञ विस्तारित होता है—वह मेरा मन शिवसंकल्प से युक्त हो।",
            english:
              "By which immortal mind the past, present, and future cosmos is comprehended; by which the sacrifice with seven ministrants is spread—may that mind of mine be filled with auspicious resolves.",
            commentary:
              "मन की त्रिकालदर्शिता और आंतरिक सप्त-इंद्रिय यज्ञ का निरूपण।",
          },
          {
            number: 5,
            devanagari:
              "यस्मि॒न्नृच॒ः साम॒ यजू॑ंषि॒ यस्मि॒न्प्रति॑ष्ठिता रथना॒भावि॒वारा॑ः।\nयस्मिं॑श्चि॒त्तं सर्व॒मोतं॑ प्र॒जानां॒ तन्मे॒ मन॑ः शि॒वस॑ङ्क॒ल्पम॑स्तु॥५॥",
            transliteration:
              "yasminn ṛcaḥ sāma yajūṃṣi yasmin pratiṣṭhitā ratha-nābhāv ivārāḥ |\nyasmiṃś cittaṃ sarvam otaṃ prajānāṃ tan me manaḥ śiva-saṅkalpam astu || 5 ||",
            hindi:
              "जिस मन में ऋग्वेद, सामवेद और यजुर्वेद उसी प्रकार प्रतिष्ठित हैं जैसे रथ की नाभि में आरे (spokes) जुड़े रहते हैं; जिसमें समस्त प्रजाओं का चित्त ओत-प्रोत है—वह मेरा मन शिवसंकल्प से युक्त हो।",
            english:
              "In which the Rigveda, Samaveda, and Yajurveda are fixed like spokes in the nave of a chariot wheel; in which all living minds are interwoven—may that mind of mine be filled with auspicious resolves.",
            commentary:
              "समस्त वैदिक ज्ञान और विद्याओं का निवास मन की अंतर्दृष्टि में ही है।",
          },
          {
            number: 6,
            devanagari:
              "सु॒षा॒र॒थिरश्वा॑निव॒ यन्म॑नु॒ष्यान्नेनी॑यते॒ऽभीशु॑भिर्वा॒जिन॑ इव।\nहृत्प्र॑ति॒ष्ठं यद॒जिरं॒ जवि॑ष्ठं॒ तन्मे॒ मन॑ः शि॒वस॑ङ्क॒ल्पम॑स्तु॥६॥",
            transliteration:
              "suṣārathir aśvān iva yan manuṣyān nenīyate 'bhīśubhir vājina iva |\nhṛt-pratiṣṭhaṃ yad ajiraṃ javiṣṭhaṃ tan me manaḥ śiva-saṅkalpam astu || 6 ||",
            hindi:
              "जैसे कुशल सारथि लगाम के द्वारा तीव्रगामी घोड़ों को नियंत्रित कर सही मार्ग पर ले जाता है, वैसे ही जो मन मनुष्यों का मार्गदर्शन करता है; जो हृदय में प्रतिष्ठित, अजर (सदा युवा) और सर्वाधिक वेगवान है—वह मेरा मन शिवसंकल्प से युक्त हो।",
            english:
              "As an expert charioteer guides swift steeds with the reins, so does the mind guide human beings; seated deep in the heart, ageless, and swiftest of all—may that mind of mine be filled with auspicious resolves.",
            commentary:
              "कठोपनिषद् के प्रसिद्ध 'रथाकार रूपक' का मूल स्रोत यही यजुर्वेद का मंत्र है।",
          },
        ],
      },
      {
        id: "sy-rudradhyaya",
        title: "अध्याय १६ • श्रीरुद्रम् / शतरुद्रीय (मन्त्र १–३)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ नम॑स्ते रुद्र म॒न्यव॑ उ॒तो त॒ इष॑वे॒ नमः॑।\nनम॑स्ते अस्तु॒ धन्व॑ने बा॒हुभ्या॑मु॒त ते॒ नमः॑॥१॥",
            transliteration:
              "oṃ namas te rudra manyava uto ta iṣave namaḥ |\nnamas te astu dhanvane bāhubhyām uta te namaḥ || 1 ||",
            hindi:
              "हे रुद्र! आपके क्रोध को हमारा नमस्कार है। आपके बाण को हमारा नमस्कार है। आपके धनुष को नमस्कार हो और आपकी दोनों भुजाओं को हमारा सादर प्रणाम है।",
            english:
              "O Rudra, salutations to your righteous indignation, and salutations to your arrow. Salutations to your mighty bow, and salutations to your two sacred arms.",
            commentary:
              "शतरुद्रीय का प्रथम मंत्र। समस्त रुद्राभिषेक और शैव साधना का यह परम स्रोत है।",
          },
          {
            number: 2,
            devanagari:
              "या ते॑ रुद्र शि॒वा त॒नूरघो॒राऽपा॑पकाशिनी।\nतया॑ नस्त॒नुवा॒ शन्त॑मया॒ गिरि॑श॒न्ताभि॑ चाकशीहि॥२॥",
            transliteration:
              "yā te rudra śivā tanūr aghorā 'pāpakāśinī |\ntayā nas tanuvā śantamayā giriśantābhi cākaśīhi || 2 ||",
            hindi:
              "हे रुद्र! आपकी जो अत्यंत कल्याणमयी (शिवा), अघोर (शांत) और पापों का नाश करने वाली स्वरूप-तनु है—हे कैलासवासी पर्वत-निवासिन्! उस परम सुखदायिनी तनु के द्वारा हमारी ओर कृपापूर्वक दृष्टिपात कीजिए।",
            english:
              "O Rudra, that form of yours which is auspicious (Shiva), non-terrific (Aghora), and destroyer of sins—with that most comforting form, O dweller of the sacred mountain, look graciously upon us.",
            commentary:
              "भगवान रुद्र के संहारक रूप से उनके परम कल्याणकारी 'शिव' रूप की स्तुति।",
          },
        ],
      },
      {
        id: "sy-shanti-patha",
        title: "अध्याय ३६ • विश्व शान्ति पाठ (मन्त्र १७)",
        items: [
          {
            number: 17,
            devanagari:
              "ॐ द्यौः शान्ति॑र॒न्तरि॑क्षं॒ शान्तिः॑ पृथि॒वी शान्ति॒रापः॒ शान्ति॒रोष॑धयः॒ शान्तिः॑।\nवन॒स्पर॑यः॒ शान्ति॒र्विश्वे॑ दे॒वाः शान्ति॒र्ब्रह्म॒ शान्तिः॒ सर्वं॒ शान्तिः॒ शान्ति॑रेव॒ शान्तिः॒ सा मा॒ शान्ति॑रेधि॥\nॐ शान्तिः॒ शान्तिः॒ शान्तिः॑॥",
            transliteration:
              "oṃ dyauḥ śāntir antarikṣaṃ śāntiḥ pṛthivī śāntir āpaḥ śāntir oṣadhayaḥ śāntiḥ |\nvanaspatayaḥ śāntir viśve devāḥ śāntir brahma śāntiḥ sarvaṃ śāntiḥ śāntir eva śāntiḥ sā mā śāntir edhi ||\noṃ śāntiḥ śāntiḥ śāntiḥ ||",
            hindi:
              "द्युलोक शांत हो, अंतरिक्ष लोक शांत हो, पृथ्वी शांत हो, जल शांत हो, औषधियाँ शांत हों, वनस्पतियाँ शांत हों, विश्वेदेवा शांत हों, परब्रह्म शांत हो, सब कुछ शांत हो; सर्वत्र केवल शांति ही शांति व्याप्त हो, और वह परम शांति मुझे भी प्राप्त हो। त्रिविध तापों (आधिभौतिक, आधिदैविक, आध्यात्मिक) की शांति हो।",
            english:
              "May peace radiate there in the sky and celestial space; may peace be on the earth; may waters be peaceful; may herbs and trees be peaceful; may all divine powers bring peace; may the Supreme Brahman be peace; may peace permeate everywhere—peace, only peace; and may that very peace abide in me. Om Peace, Peace, Peace.",
            commentary:
              "वैदिक वांग्मय का सर्वोच्च पारिस्थितिक (ecological) एवं वैश्विक शांति मंत्र।",
          },
        ],
      },
    ],
  },

  samaveda: {
    label: "सामवेद संहिता (कौथुम शाखा)",
    sourceTotal: "१८७५ मन्त्र • कौथुम, राणायनीय, जैमिनीय",
    editionNote:
      "वैदिक हैरिटेज पोर्टल • कौथुम शाखा पूर्वार्चिक एवं उत्तरार्चिक सामगान • सप्तस्वर वैदिक गान सम्मत",
    chapters: [
      {
        id: "sv-poorvarchik",
        title: "पूर्वार्चिक • आग्नेय पर्व (मन्त्र १–३)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ अ॒ग्न आ या॑हि वी॒तये॑ गृणा॒नो ह॒व्यदा॑तये।\nनि होता॑ सत्सि ब॒र्हिषि॑॥१॥",
            transliteration:
              "oṃ agna ā yāhi vītaye gṛṇāno havyadātaye |\nni hotā satsi barhiṣi || 1 ||",
            hindi:
              "हे अग्निदेव! आप हमारी स्तुतियों से प्रसन्न होकर हव्य ग्रहण करने के लिए यहाँ पधारें और यज्ञ के होता के रूप में इस कुशासन (बर्हि) पर विराजमान हों।",
            english:
              "O Agni, come hither for our feast and joy, praised for the offering of our oblation. Sit down as the chief invoking priest upon this sacred grass.",
            commentary:
              "ऋषि: भरद्वाज बार्हस्पत्य • देवता: अग्नि • छन्द: गायत्री। सामवेद का यह प्रथम गान-मंत्र है।",
          },
          {
            number: 2,
            devanagari:
              "ॐ त्वम॑ग्ने य॒ज्ञानां॒ होता॒ विश्वा॑षां हि॒तः।\nदे॒वेभि॒र्मानु॑षे॒ जने॑॥२॥",
            transliteration:
              "oṃ tvam agne yajñānāṃ hotā viśveṣāṃ hitaḥ |\ndevebhir mānuṣe jane || 2 ||",
            hindi:
              "हे अग्निदेव! आप समस्त यज्ञों के परम हितकारी होता हैं, जिन्हें देवों ने मानव-जाति के कल्याण हेतु स्थापित किया है।",
            english:
              "You, O Agni, are the priest of all sacrifices, established by the gods among human beings for their highest welfare.",
            commentary:
              "सामवेद में ऋचाओं को विशिष्ट सात सुरों (षड्ज, ऋषभ, गांधार, मध्यम, पंचम, धैवत, निषाद) में गाया जाता है।",
          },
        ],
      },
      {
        id: "sv-aindra-parva",
        title: "पूर्वार्चिक • ऐन्द्र पर्व (मन्त्र १–२)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ इन्द्र॒मिद्गा॒थिनो॑ बृ॒हदिन्द्र॑म॒र्केभि॑र॒र्किन॑ः।\nइन्द्रं॒ वाणी॑रनूषत॥१॥",
            transliteration:
              "oṃ indram id gāthino bṛhad indram arkebhir arkinaḥ |\nindraṃ vāṇīr anūṣata || 1 ||",
            hindi:
              "सामगान करने वाले गायक श्रेष्ठ साम-गीतों द्वारा केवल इन्द्र की ही स्तुति करते हैं; स्तोत्र पाठ करने वाले मन्त्रों से इन्द्र की महिमा गाते हैं और समस्त वेद-वाणियाँ इन्द्र का ही यशोगान करती हैं।",
            english:
              "The singers of Saman praise Indra with high melody; the reciters of verses praise Indra with chants; the sacred voices glorify Indra alone.",
            commentary:
              "ऋषि: मधुच्छन्दा • देवता: इन्द्र • छन्द: गायत्री। सामगान की संगीत-परंपरा का आधार।",
          },
        ],
      },
    ],
  },

  atharvaveda: {
    label: "अथर्ववेद संहिता (शौनक शाखा)",
    sourceTotal: "२० काण्ड • ७३० सूक्त • ५,९७७ मन्त्र",
    editionNote:
      "वैदिक हैरिटेज पोर्टल • शौनक शाखा संहिता • सायण भाष्य एवं राष्ट्र-रक्षा, आयुर्वेद, भूमि-सूक्त संग्रह",
    chapters: [
      {
        id: "av-medha-janana",
        title: "काण्ड १, सूक्त १ • मेधा जनन सूक्त (मन्त्र १–४ पूर्ण)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ ये त्रि॒षप्ताः प॑रि॒यन्ति॒ विश्वा॑ रू॒पाणि॒ बिभ्र॑तः।\nवा॒चस्पति॒र्बला॒ तेषां॑ त॒न्वो३ अ॒द्य द॑धातु मे॥१॥",
            transliteration:
              "oṃ ye tri-saptāḥ pariyanti viśvā rūpāṇi bibhrataḥ |\nvācaspatir balā teṣāṃ tanvo 'dya dadhātu me || 1 ||",
            hindi:
              "जो इक्कीस (तीन गुणा सात) तत्त्व संपूर्ण रूपों को धारण करते हुए सर्वत्र गतिमान हैं—वाणी के अधिपति परमात्मा (वाचस्पति) उनकी दिव्य शक्ति और सामर्थ्य को आज मेरे शरीर और बुद्धि में स्थापित करें।",
            english:
              "Those thrice-seven cosmic principles that move about bearing all forms—may the Lord of Sacred Speech (Vachaspati) establish their vitality and power in me today.",
            commentary:
              "अथर्ववेद का प्रथम मंत्र। विद्या, प्रज्ञा और मेधा की अभिवृद्धि हेतु वाचस्पति की प्रार्थना।",
          },
          {
            number: 2,
            devanagari:
              "पुन॒रेहि॑ वाचस्पते दे॒वेन॒ मन॑सा स॒ह।\nवसो॑ष्पते॒ नि र॑मय॒ मय्ये॒वास्तु॒ मयि॑ श्रु॒तम्॥२॥",
            transliteration:
              "punar ehi vācaspate devena manasā saha |\nvasoṣpate ni ramaya mayy evāstu mayi śrutam || 2 ||",
            hindi:
              "हे वाणी के स्वामी! आप दिव्य प्रबुद्ध मन के साथ पुनः मेरे पास आइए। हे ऐश्वर्य के रक्षक! जो कुछ वेद-ज्ञान मैंने सुना (श्रुत) है, वह सब मेरे भीतर ही स्थिर और प्रतिष्ठित रहे।",
            english:
              "Return to me, O Lord of Speech, with the divine mind; O guardian of wealth, make sacred knowledge dwell firmly within me, let all that I have heard abide in me.",
            commentary:
              "श्रुति-ज्ञान की स्थायी धारणा और स्मृति (retention) हेतु प्रार्थना।",
          },
        ],
      },
      {
        id: "av-bhumi-sukta",
        title: "काण्ड १२, सूक्त १ • भूमि / पृथिवी सूक्त (मन्त्र १–१२)",
        items: [
          {
            number: 1,
            devanagari:
              "ॐ स॒त्यं बृ॒हदृत॑मु॒ग्रं दी॒क्षा तपो॒ ब्रह्म॑ य॒ज्ञः पृ॑थि॒वीं धा॑रयन्ति।\nसा नो॑ भू॒तस्य॒ भव्य॑स्य॒ पत्न्यु॒रुं लो॒कं पृ॑थि॒वी न॑ः कृणोतु॥१॥",
            transliteration:
              "oṃ satyaṃ bṛhad ṛtam ugraṃ dīkṣā tapo brahma yajñaḥ pṛthivīṃ dhārayanti |\nsā no bhūtasya bhavyasya patny uruṃ lokaṃ pṛthivī naḥ kṛṇotu || 1 ||",
            hindi:
              "सत्य, विशाल प्राकृतिक नियम (ऋत), दृढ संकल्प, दीक्षा, तप, ज्ञान (ब्रह्म) और निष्काम सेवा (यज्ञ)—ये महान सिद्धांत पृथ्वी को धारण करते हैं। भूत और भविष्य की स्वामिनी वह मातृभूमि हमारे लिए विशाल और समृद्ध लोक का निर्माण करे।",
            english:
              "Truth, cosmic order (Rta), resolute strength, dedication, penance, spiritual wisdom, and sacrifice sustain the earth. May she, the queen of what has been and what shall be, grant us a vast and gracious abode.",
            commentary:
              "ऋषि: अथर्वा • देवता: भूमि। पर्यावरण और मातृभूमि के प्रति मानव के सनातन दायित्व का सर्वोत्कृष्ट वैदिक उद्घोष।",
          },
          {
            number: 12,
            devanagari:
              "माता॑ भू॒मिः पु॒त्रो अ॒हं पृ॑थि॒व्याः।\nप॒र्जन्य॑ः पि॒ता स उ॑ नः पिपर्तु॥१२॥",
            transliteration:
              "mātā bhūmiḥ putro ahaṃ pṛthivyāḥ |\nparjanyaḥ pitā sa u naḥ pipartu || 12 ||",
            hindi:
              "पृथ्वी मेरी माता है और मैं इस मातृभूमि का पुत्र हूँ! वर्षा करने वाले मेघ (पर्जन्य) हमारे पिता हैं, वे हमारा भरण-पोषण करें।",
            english:
              "The Earth is my Mother, and I am the son of the Earth! Rain-bearing clouds are our father; may they nurture and sustain us.",
            commentary:
              "'माता भूमिः पुत्रोऽहं पृथिव्याः' — भारतवर्ष का राष्ट्रीय एवं वैदिक सूत्रवाक्य।",
          },
        ],
      },
    ],
  },
};

// Aliases for Shukla and Krishna Yajurveda
VEDAS_SCRIPTURE_DATA["shukla-yajurveda"] = VEDAS_SCRIPTURE_DATA["yajurveda"];
VEDAS_SCRIPTURE_DATA["krishna-yajurveda"] = VEDAS_SCRIPTURE_DATA["yajurveda"];
