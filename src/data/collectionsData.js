// Comprehensive Curated Collections Data
// 100% Aligned with Veda Library Specification & Document Structure

import sanctumImg from "../assets/images/library/banners/banner-sanctum.png";
import sacredDetailsImg from "../assets/images/library/banners/banner-sacred-details.png";
import fireRitualImg from "../assets/images/library/banners/banner-fire-ritual.png";
import kashiGhatImg from "../assets/images/library/banners/banner-kashi-ghat.png";
import yagyaHeroImg from "../assets/images/library/banners/banner-yagya-hero.png";
import altarImg from "../assets/images/library/banners/banner-altar.png";
import bannerTempleGhat from "../assets/images/library/banners/banner-temple-ghat.jpg";

import cardRigvedaImg from "../assets/images/library/cards/card-rigveda.jpg";
import cardYajurvedaImg from "../assets/images/library/cards/card-yajurveda.jpg";
import cardSamavedaImg from "../assets/images/library/cards/card-samaveda.jpg";
import cardAtharvavedaImg from "../assets/images/library/cards/card-atharvaveda.jpg";
import cardGitaImg from "../assets/images/library/cards/card-gita.jpg";
import cardRamayanaImg from "../assets/images/library/cards/card-ramayana.jpg";
import cardPujaImg from "../assets/images/library/cards/card-puja.jpg";
import cardYagyaFireImg from "../assets/images/library/cards/card-yagya-fire.jpg";
import cardMahabharataImg from "../assets/images/library/cards/card-mahabharata.jpg";
import cardPuranaImg from "../assets/images/library/cards/card-purana.jpg";
import cardSamskaraImg from "../assets/images/library/cards/card-samskara.jpg";
import cardAstrologyImg from "../assets/images/library/cards/card-astrology.jpg";

export const COLLECTIONS_LIST = [
  {
    id: "vedic-collection",
    slug: "vedic-collection",
    alias: ["vedic", "veda"],
    title: "Vedic Collection",
    hindiTitle: "वैदिक ज्ञान संग्रह",
    articlesCount: "124 Articles",
    category: "vedic",
    branch: "Vedic Knowledge (वेद व श्रुति)",
    image: sanctumImg,
    targetCategorySlug: "veda",
    tag: "श्रुति परंपरा",
    desc: "ऋचाओं, संहिताओं, आरण्यकों और ऋषियों के प्रामाणिक संदर्भों का महासंग्रह। चारों वेदों (ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद) का संपूर्ण डिजिटल वर्गीकरण।",
    divisions: [
      "४ वेद संहिताएँ (Rig, Yajur, Sama, Atharva)",
      "ब्राह्मण ग्रंथ (Ritual Explanations)",
      "आरण्यक ग्रंथ (Forest Treatises)",
      "१० प्रमुख उपनिषद (Principal Upanishads)",
      "६ वेदाङ्ग (Auxiliary Disciplines)"
    ],
    items: [
      {
        id: "rigveda-samhita",
        title: "ऋग्वेद संहिता (Shakala Shakha)",
        hindiTitle: "ऋग्वेद संहिता — शाकल शाखा",
        type: "Veda • Samhita",
        reference: "१० मण्डल • १०२८ सूक्त • १०,५५२ ऋचाएँ",
        desc: "अग्नि, इन्द्र, वरुण, सूर्य एवं सवितृ आदि देवों की स्तुति में ऋषियों द्वारा दृष्ट मूल वैदिक मंत्र संग्रह।",
        route: "/library/veda/rigveda",
        badge: "मूल संहिता"
      },
      {
        id: "purusha-sukta-study",
        title: "पुरुष सूक्त (ऋग्वेद १०.९०)",
        hindiTitle: "पुरुष सूक्त — सहस्रशीर्षा पुरुषः",
        type: "Sukta • Rigveda",
        reference: "ऋग्वेद १०.९० • १६ मंत्र",
        desc: "विराट पुरुष के स्वरूप, सृष्टि उत्पत्ति और ब्रह्मांडीय एकात्मता का सर्वोत्तम दार्शनिक सूक्त।",
        route: "/library/veda/rigveda/agnisukta",
        badge: "दार्शनिक सूक्त"
      },
      {
        id: "agni-sukta-first",
        title: "अग्नि सूक्त (ऋग्वेद १.१)",
        hindiTitle: "अग्नि सूक्त — अग्निमीळे पुरोहितं",
        type: "Sukta • Rigveda",
        reference: "ऋग्वेद १.१ • ९ ऋचाएँ",
        desc: "ऋग्वेद का प्रथम सूक्त, ऋषि विश्वामित्र/मधुच्छन्दा द्वारा दृष्ट यज्ञ पुरोहित अग्नि देव की स्तुति।",
        route: "/library/veda/rigveda/agnisukta",
        badge: "प्रथम सूक्त"
      },
      {
        id: "yajurveda-taittiriya",
        title: "यजुर्वेद तैत्तिरीय संहिता",
        hindiTitle: "कृष्ण यजुर्वेद — तैत्तिरीय संहिता",
        type: "Veda • Krishna Yajurveda",
        reference: "७ काण्ड • ४४ प्रपाठक • ६५१ अनुवाक",
        desc: "वैदिक यज्ञ प्रक्रिया, दर्श-पूर्णमास, सोमयाग एवं प्रसिद्ध रुद्राध्याय का शास्त्रीय स्रोत।",
        route: "/library/veda/yajurveda",
        badge: "यज्ञ कर्मकाण्ड"
      },
      {
        id: "samaveda-kauthuma",
        title: "सामवेद संहिता (Kauthuma Shakha)",
        hindiTitle: "सामवेद संहिता — कौथुम शाखा",
        type: "Veda • Samaveda",
        reference: "पूर्वार्चिक एवं उत्तरार्चिक • १८७५ साम",
        desc: "गान-प्रधान वेद, ऋचाओं का दिव्य स्वर-माधुर्य एवं आध्यात्मिक नाद-साधना।",
        route: "/library/veda/samaveda",
        badge: "स्वर गान"
      },
      {
        id: "atharvaveda-shaunaka",
        title: "अथर्ववेद संहिता (Shaunaka Shakha)",
        hindiTitle: "अथर्ववेद संहिता — शौनक शाखा",
        type: "Veda • Atharvaveda",
        reference: "२० काण्ड • ७३० सूक्त • ५,९७७ मंत्र",
        desc: "राष्ट्र सूक्त, पृथ्वी सूक्त, आयुर्वेद, भैषज्य विद्या एवं जीवन रक्षा के विविध मंत्र।",
        route: "/library/veda/atharvaveda",
        badge: "व्यावहारिक ज्ञान"
      }
    ],
    relatedTags: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda", "Hotri", "Adhvaryu", "Samhita", "Sukta"]
  },
  {
    id: "mantra-collection",
    slug: "mantra-collection",
    alias: ["mantra", "mantra-stotra"],
    title: "Mantra Collection",
    hindiTitle: "मंत्र एवं स्तोत्र संग्रह",
    articlesCount: "86 Articles",
    category: "mantra",
    branch: "Mantra & Stotra (मंत्र व साधना)",
    image: sacredDetailsImg,
    targetCategorySlug: "mantra-stotra",
    tag: "स्वर व पदच्छेद",
    desc: "शुद्ध स्वर, पदच्छेद, छंद, ऋषि एवं देवता युक्त कल्याणकारी वैदिक मंत्र, सूक्त, स्तोत्र, कवच एवं सहस्रनामों का प्रामाणिक संग्रह।",
    divisions: [
      "वैदिक महामंत्र (Vedic Core Mantras)",
      "शांति मंत्र (Shanti Mantras)",
      "देवता स्तोत्र (Deity Hymns)",
      "कवच एवं सहस्रनाम (Protective Armour & 1000 Names)",
      "दैनिक संध्या वंदना मंत्र (Daily Ritual Chants)"
    ],
    items: [
      {
        id: "gayatri-mahamantra",
        title: "गायत्री महामंत्र (ऋग्वेद ३.६२.१०)",
        hindiTitle: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं",
        type: "Mantra • Rigveda",
        reference: "ऋषि: विश्वामित्र • देवता: सविता • छंद: निचृद् गायत्री",
        desc: "बुद्धि, प्रज्ञा और अंतश्चेतना को उद्दीप्त करने वाला वेदों का सर्वोत्कृष्ट प्राण-मंत्र।",
        route: "/library/veda/rigveda/agnisukta",
        badge: "महामंत्र"
      },
      {
        id: "mahamrityunjaya-mantra",
        title: "महामृत्युंजय मंत्र (ऋग्वेद ७.५९.१२)",
        hindiTitle: "त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्",
        type: "Mantra • Rigveda",
        reference: "ऋषि: वशिष्ठ • देवता: रुद्र (त्र्यम्बक) • छंद: अनुष्टुप्",
        desc: "अकाल मृत्यु निवारक, व्याधि नाशक और मोक्ष प्रदायक त्र्यम्बक भगवान शिव का संजीवनी मंत्र।",
        route: "/library/puja/shaiva/rudrabhisheka",
        badge: "आरोग्य व मोक्ष"
      },
      {
        id: "shri-sukta",
        title: "श्री सूक्त (ऋग्वेद परिशिष्ट)",
        hindiTitle: "हिरण्यवर्णां हरिणीं सुवर्णरजतस्रजाम्",
        type: "Sukta • Lakshmi Upasana",
        reference: "१५ ऋचाएँ + फलश्रुति • ऋषि: आनन्द, कर्दम",
        desc: "महालक्ष्मी कृपा, दारिद्र्य नाश, आरोग्य एवं ऐश्वर्य प्रदायक परम पावन वैदिक सूक्त।",
        route: "/library/mantra-stotra",
        badge: "लक्ष्मी उपासना"
      },
      {
        id: "shanti-patha",
        title: "वैदिक शांति पाठ (यजुर्वेद ३६.१७)",
        hindiTitle: "द्यौः शान्तिरन्तरिक्षं शान्तिः",
        type: "Mantra • Yajurveda",
        reference: "यजुर्वेद ३६.१७ • वैश्विक शांति प्रार्थना",
        desc: "द्यौलोक, अंतरिक्ष, पृथ्वी, जल, वनस्पति एवं समस्त ब्रह्मांड में शांति का आह्वान।",
        route: "/library/mantra-stotra",
        badge: "शांति प्रार्थना"
      },
      {
        id: "shiva-tandava-stotram",
        title: "शिव ताण्डव स्तोत्रम्",
        hindiTitle: "जटाटवीगलज्जलप्रवाहपावितस्थले",
        type: "Stotra • Shaiva",
        reference: "रचयिता: रावण • पंचचामर छंद",
        desc: "भगवान नटराज शिव के अलौकिक तांडव नृत्य और शक्ति का ओजस्वी स्तुति गान।",
        route: "/library/puja/shaiva/rudrabhisheka",
        badge: "भक्ति स्तोत्र"
      }
    ],
    relatedTags: ["Gayatri", "Mahamrityunjaya", "Shri Sukta", "Shanti Path", "Shiva Tandava", "Devi Kavacha"]
  },
  {
    id: "puja-collection",
    slug: "puja-collection",
    alias: ["puja", "puja-anushthana"],
    title: "Puja Collection",
    hindiTitle: "पूजा व अनुष्ठान संग्रह",
    articlesCount: "72 Articles",
    category: "ritual",
    branch: "Puja & Anushthana (कर्मकाण्ड व उपासना)",
    image: cardPujaImg,
    targetCategorySlug: "puja",
    tag: "षोडशोपचार विधि",
    desc: "शास्त्रोक्त षोडशोपचार पूजन विधि, कलश स्थापन, पंचामृत, संकल्प, नवग्रह पूजन एवं प्रमुख देव अनुष्ठानों का प्रामाणिक चरणबद्ध विवरण।",
    divisions: [
      "षोडशोपचार पूजन पद्धति (16-Step Puja Method)",
      "रुद्राभिषेक एवं महारुद्र विधान (Rudra Abhisheka)",
      "नवग्रह शांति एवं होम (Navagraha Shanti)",
      "कलश स्थापन एवं पञ्चामृत विधि (Kalasha Sthapana)",
      "गणेश, दुर्गा एवं लक्ष्मी विशेष अनुष्ठान (Deity Specific Vidhi)"
    ],
    items: [
      {
        id: "rudrabhisheka-vidhi",
        title: "रुद्राभिषेक संपूर्ण विधि एवं मंत्र",
        hindiTitle: "श्री रुद्राभिषेक — यजुर्वेदीय नमक-चमक विधान",
        type: "Puja • Shaiva Tradition",
        reference: "यजुर्वेद अध्याय १६ व १८ • तैत्तिरीय संहिता",
        desc: "पञ्चामृत, शुद्धोदक, भस्म, बिल्वपत्र एवं एकादश रुद्र जप के साथ महादेव का शास्त्रोक्त अभिषेक।",
        route: "/library/puja/shaiva/rudrabhisheka",
        badge: "सर्वश्रेष्ठ अनुष्ठान"
      },
      {
        id: "shodashopachara-puja",
        title: "षोडशोपचार पूजन पद्धति",
        hindiTitle: "आवाहन से विसर्जन तक १६ वैदिक उपचार",
        type: "Puja • Smarta Vidhi",
        reference: "आचमन, प्राणायाम, पाद्य, अर्घ्य, स्नान, वस्त्र, यज्ञोपवीत, गंध, पुष्प, धूप, दीप, नैवेद्य, ताम्बूल, आरती, प्रदक्षिणा, क्षमा-प्रार्थना",
        desc: "दैनिक एवं नैमित्तिक देव पूजन का सर्वमान्य शास्त्रीय क्रम एवं विधि-विधान।",
        route: "/library/puja",
        badge: "आधारभूत पद्धति"
      },
      {
        id: "navagraha-puja-vidhi",
        title: "नवग्रह पूजन एवं शांति विधान",
        hindiTitle: "सूर्य, चन्द्र, भौम, बुध, गुरु, शुक्र, शनि, राहु, केतु शांति",
        type: "Puja • Jyotisha Vidhi",
        reference: "नवग्रह मंडल स्थापन • समिधा व आहुति",
        desc: "ग्रह दोष निवारण, आयु-आरोग्य वृद्धि एवं ग्रह प्रसन्नता हेतु शास्त्रोक्त पूजन क्रम।",
        route: "/library/puja",
        badge: "ग्रह शांति"
      },
      {
        id: "satyanarayan-puja",
        title: "श्री सत्यनारायण व्रत एवं पूजन विधि",
        hindiTitle: "स्कन्द पुराण रेवाखण्ड अंतर्गत ५ अध्याय",
        type: "Puja • Vaishnava",
        reference: "स्कन्द पुराण • व्रत विधान",
        desc: "पारिवारिक सुख, शांति एवं मनोकामना पूर्ति हेतु पूर्णिमा व विशेष तिथियों पर की जाने वाली पूजा।",
        route: "/library/puja",
        badge: "लोकप्रिय व्रत"
      }
    ],
    relatedTags: ["Rudrabhisheka", "Shodashopachara", "Navagraha", "Kalasha", "Panchamrita", "Aarti"]
  },
  {
    id: "samskara-collection",
    slug: "samskara-collection",
    alias: ["samskara", "yagya-sanskar"],
    title: "Samskara Collection",
    hindiTitle: "षोडश संस्कार परंपरा",
    articlesCount: "45 Articles",
    category: "samskara",
    branch: "Dharma & Jeevan (१६ संस्कार परंपरा)",
    image: cardSamskaraImg,
    targetCategorySlug: "yagya-sanskar",
    tag: "जीवन संस्कार",
    desc: "गर्भाधान से लेकर उपनयन, विवाह एवं अन्त्येष्टि तक मनुष्य जीवन को परिष्कृत करने वाले १६ पवित्र वैदिक संस्कारों का शास्त्रीय एवं वैज्ञानिक विवरण।",
    divisions: [
      "जन्म-पूर्व संस्कार (Garbhadhana, Pumsavana, Simantonnayana)",
      "शैशव संस्कार (Jatakarma, Namakarana, Nishkramana, Annaprashana)",
      "विद्या संस्कार (Chudakarana, Karnavedha, Vidyarambha, Upanayana, Vedarambha)",
      "गृहस्थ व अंतिम संस्कार (Keshanta, Samavartana, Vivaha, Antyeshti)"
    ],
    items: [
      {
        id: "upanayana-samskara",
        title: "उपनयन संस्कार (यज्ञोपवीत व गायत्री दीक्षा)",
        hindiTitle: "द्विजत्व प्राप्ति — ब्रह्मचर्य आश्रम प्रवेश",
        type: "Samskara • Vidhi",
        reference: "गृह्यसूत्र (आश्वलायन, पारस्कर, आपस्तम्ब)",
        desc: "यज्ञोपवीत धारण, मेखला बंधन, गायत्री मंत्र दीक्षा एवं गुरु के सान्निध्य में वेदारंभ विधान।",
        route: "/library/yagya-sanskar",
        badge: "विद्या संस्कार"
      },
      {
        id: "vivaha-samskara",
        title: "वैदिक विवाह संस्कार",
        hindiTitle: "सप्तपदी, पाणिग्रहण एवं लाजा होम",
        type: "Samskara • Grihastha",
        reference: "सप्तपदी मंत्र • ध्रुव दर्शन • अग्नि साक्षी",
        desc: "दो आत्माओं का पवित्र धर्म-बंधन, गृहस्थ आश्रम में प्रवेश और समाज निर्माण का संकल्प।",
        route: "/library/yagya-sanskar",
        badge: "गृहस्थ संस्कार"
      },
      {
        id: "namakarana-samskara",
        title: "नामकरण संस्कार",
        hindiTitle: "१०वें अथवा १२वें दिन शिशु का शास्त्रोक्त नामकरण",
        type: "Samskara • Shaishava",
        reference: "नक्षत्र पद अनुसार नामाक्षर निर्धारण",
        desc: "शिशु के कुल, नक्षत्र, राशि एवं आराध्य देव के आधार पर कल्याणकारी नाम रखने की शास्त्रीय विधि।",
        route: "/library/yagya-sanskar",
        badge: "शैशव संस्कार"
      }
    ],
    relatedTags: ["Upanayana", "Vivaha", "Namakarana", "Annaprashana", "Garbhadhana", "Grihya Sutra"]
  },
  {
    id: "yagya-collection",
    slug: "yagya-collection",
    alias: ["yagya", "havan"],
    title: "Yagya & Havan Collection",
    hindiTitle: "यज्ञ एवं होम परंपरा",
    articlesCount: "58 Articles",
    category: "ritual",
    branch: "Yagya & Karma (यज्ञ विज्ञान)",
    image: cardYagyaFireImg,
    targetCategorySlug: "yagya-sanskar",
    tag: "श्रौत-स्मार्त विधान",
    desc: "दैनिक अग्निहोत्र, दर्श-पूर्णमास, श्रौत-स्मार्त हवन, कुण्ड निर्माण, समिधा चयन एवं आहुति विधान का शास्त्रीय एवं पर्यावरणीय अध्ययन।",
    divisions: [
      "नित्य कर्म: दैनिक अग्निहोत्र (Daily Agnihotra)",
      "स्मार्त होम एवं ग्रह शांति यज्ञ (Smarta Homa)",
      "श्रौत महायज्ञ (Somayaga, Vajapeya, Ashvamedha)",
      "यज्ञ कुण्ड एवं मण्डप निर्माण शास्त्र (Kunda Geometry)",
      "समिधा, हविष्य एवं वनौषधि विज्ञान (Herbal Ingestion)"
    ],
    items: [
      {
        id: "daily-agnihotra",
        title: "दैनिक अग्निहोत्र विधि",
        hindiTitle: "सूर्योदय एवं सूर्यास्त कालीन प्राण ऊर्जा यज्ञ",
        type: "Yagya • Daily Practice",
        reference: "ताम्र पात्र • गोघृत • अक्षत आहुति",
        desc: "वातावरण शुद्धि, मानसिक शांति और आध्यात्मिक तेज हेतु नित्य किए जाने वाले लघु अग्निहोत्र की सरल विधि।",
        route: "/library/yagya-sanskar",
        badge: "नित्य साधना"
      },
      {
        id: "kunda-nirmana-vidhi",
        title: "यज्ञ कुण्ड निर्माण एवं ज्यामिति शास्त्र",
        hindiTitle: "चतुरस्र, योनि, अर्धचन्द्र, त्रिकोण, वृत्त कुण्ड",
        type: "Shastra • Sulba Sutra",
        reference: "शुल्ब सूत्र • कुण्डार्क",
        desc: "यज्ञीय फल एवं देवता अनुसार विभिन्न आकार के कुण्डों की शास्त्रीय माप व निर्माण नियम।",
        route: "/library/yagya-sanskar",
        badge: "वैदिक ज्यामिति"
      },
      {
        id: "mahamrityunjaya-havan",
        title: "महामृत्युंजय शांति हवन",
        hindiTitle: "दूर्वा, घृत, गिलोय एवं पायस द्वारा आहुति",
        type: "Yagya • Remedy",
        reference: "१०,००० अथवा १,००,००० आहुति विधान",
        desc: "अकाल व्याधि निवारण और दीर्घायु हेतु महामृत्युंजय मंत्र से समर्पित आहुतियों का विधान।",
        route: "/library/yagya-sanskar",
        badge: "शांति होम"
      }
    ],
    relatedTags: ["Agnihotra", "Kunda Nirmana", "Havishya", "Samidha", "Somayaga", "Vedic Fire"]
  },
  {
    id: "darshana-collection",
    slug: "darshana-collection",
    alias: ["darshana", "philosophy", "shastra-darshana"],
    title: "Darshana & Shastra Collection",
    hindiTitle: "षड् दर्शन एवं उपनिषद संग्रह",
    articlesCount: "64 Articles",
    category: "philosophy",
    branch: "Shastra & Darshana (भारतीय दर्शन)",
    image: altarImg,
    targetCategorySlug: "veda",
    tag: "प्रस्थानत्रयी",
    desc: "सांख्य, योग, न्याय, वैशेषिक, मीमांसा और वेदान्त—छह आस्तिक दर्शनों के सूत्र, भाष्य, प्रमाण मीमांसा एवं आत्म-ब्रह्म ज्ञान का विशद संग्रह।",
    divisions: [
      "सांख्य दर्शन (Kapila - Prakriti & Purusha)",
      "योग दर्शन (Patanjali - Ashtanga Yoga)",
      "न्याय दर्शन (Gautama - Epistemology & Logic)",
      "वैशेषिक दर्शन (Kanada - Atomic Theory & Categories)",
      "पूर्व मीमांसा (Jaimini - Vedic Hermeneutics)",
      "उत्तर मीमांसा / वेदान्त (Badarayana - Brahmasutras)"
    ],
    items: [
      {
        id: "patanjali-yogasutra",
        title: "पतंजलि योगसूत्र (४ पाद, १९५ सूत्र)",
        hindiTitle: "योगश्चित्तवृत्तिनिरोधः",
        type: "Darshana • Yoga",
        reference: "समाधि पाद, साधन पाद, विभूति पाद, कैवल्य पाद",
        desc: "चित्त की वृत्तियों का निरोध, अष्टांग योग मार्ग एवं कैवल्य प्राप्ति का अमर ग्रंथ।",
        route: "/library/knowledge",
        badge: "अष्टांग योग"
      },
      {
        id: "brahmasutra-intro",
        title: "ब्रह्मसूत्र (वेदान्त दर्शन)",
        hindiTitle: "अथातो ब्रह्मजिज्ञासा",
        type: "Darshana • Vedanta",
        reference: "महर्षि बादरायण व्यास • ४ अध्याय",
        desc: "उपनिषदों के दार्शनिक सत्यों का तार्किक समन्वय और परब्रह्म की व्याख्या।",
        route: "/library/knowledge",
        badge: "प्रस्थानत्रयी"
      },
      {
        id: "sankhya-karika",
        title: "सांख्य कारिका (ईश्वरकृष्ण)",
        hindiTitle: "२५ तत्व: प्रकृति, महत्, अहंकार, तन्मात्रा, पञ्चमहाभूत, पुरुष",
        type: "Darshana • Sankhya",
        reference: "महर्षि कपिल परंपरा",
        desc: "सृष्टि के २५ तत्वों का वैज्ञानिक विश्लेषण और त्रिगुण (सत्व, रज, तम) सिद्धांत।",
        route: "/library/knowledge",
        badge: "तत्व मीमांसा"
      }
    ],
    relatedTags: ["Patanjali", "Brahmasutra", "Advaita", "Kapila", "Pramana", "Moksha", "Atman"]
  },
  {
    id: "itihasa-collection",
    slug: "itihasa-collection",
    alias: ["itihasa", "purana", "itihasa-purana", "grantha"],
    title: "Itihasa & Grantha Collection",
    hindiTitle: "इतिहास, महाकाव्य एवं १८ महापुराण",
    articlesCount: "95 Articles",
    category: "epics",
    branch: "Itihasa & Purana (महाकाव्य व पुराण)",
    image: cardGitaImg,
    targetCategorySlug: "veda",
    tag: "श्रीमद्भगवद्गीता",
    desc: "श्रीमद्भगवद्गीता, वाल्मीकि रामायण, महाभारत, श्रीमद्भागवत एवं १८ महापुराणों के विषय, अध्याय, श्लोक व आख्यानों का प्रामाणिक संदर्भ।",
    divisions: [
      "श्रीमद्भगवद्गीता (18 Adhyayas, 700 Shlokas)",
      "वाल्मीकि रामायण (7 Kandas, 24,000 Shlokas)",
      "महाभारत (18 Parvas, 100,000 Shlokas)",
      "अष्टादश महापुराण (18 Major Puranas)",
      "उपपुराण एवं ऐतिहासिक चरित (Minor Puranas & Charitas)"
    ],
    items: [
      {
        id: "bhagavad-gita-complete",
        title: "श्रीमद्भगवद्गीता (१८ अध्याय, ७०० श्लोक)",
        hindiTitle: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
        type: "Grantha • Prasthanatrayi",
        reference: "महाभारत भीष्मपर्व • भगवान श्रीकृष्ण-अर्जुन संवाद",
        desc: "निष्काम कर्म, सांख्य योग, ज्ञान-कर्म-संन्यास एवं भक्ति योग का कालजयी दिव्य उपदेश।",
        route: "/library/collections/vedic-collection",
        badge: "सर्वश्रेष्ठ गीता"
      },
      {
        id: "valmiki-ramayana-study",
        title: "वाल्मीकि रामायण (७ काण्ड)",
        hindiTitle: "रामो विग्रहवान् धर्मः — मर्यादा पुरुषोत्तम",
        type: "Itihasa • Adi Kavya",
        reference: "आदिकवि वाल्मीकि • २४,००० श्लोक",
        desc: "बालकाण्ड से उत्तरकाण्ड तक भगवान श्रीराम का आदर्श जीवन चरित और धर्म की विजय।",
        route: "/library/collections/vedic-collection",
        badge: "आदिकाव्य"
      },
      {
        id: "shrimad-bhagavata-purana",
        title: "श्रीमद्भागवत महापुराण (१२ स्कन्ध)",
        hindiTitle: "परमहंस संहिता — १८,००० श्लोक",
        type: "Purana • Mahapurana",
        reference: "महर्षि वेदव्यास • शुकदेव-परीक्षित संवाद",
        desc: "भगवान श्रीकृष्ण की बाल लीलाएँ, रासपंचाध्यायी, उद्धव गीता एवं एकादश स्कन्ध तत्वज्ञान।",
        route: "/library/collections/vedic-collection",
        badge: "भक्ति रसामृत"
      }
    ],
    relatedTags: ["Bhagavad Gita", "Valmiki Ramayana", "Mahabharata", "Bhagavata", "Krishna", "Rama"]
  },
  {
    id: "kashi-tradition",
    slug: "kashi-tradition",
    alias: ["kashi", "tirtha"],
    title: "Kashi & Sacred Traditions",
    hindiTitle: "काशी व पावन तीर्थ परंपरा",
    articlesCount: "40 Articles",
    category: "heritage",
    branch: "Devata & Tradition (तीर्थ एवं परंपरा)",
    image: kashiGhatImg,
    targetCategorySlug: "puja",
    tag: "गंगा आरती",
    desc: "अविमुक्त क्षेत्र काशी, दशाश्वमेध गंगा आरती, द्वादश ज्योतिर्लिंग, शक्तिपीठ, चार धाम एवं पवित्र भारतीय तीर्थ परंपरा का शास्त्रीय महात्म्य।",
    divisions: [
      "अविमुक्त क्षेत्र काशी महात्म्य (Kashi Khanda, Skanda Purana)",
      "दशाश्वमेध गंगा आरती परंपरा (Ganga Aarti Heritage)",
      "द्वादश ज्योतिर्लिंग दर्शन (12 Jyotirlingas)",
      "५१ शक्तिपीठ एवं सिद्धपीठ (51 Shakti Peethas)",
      "चार धाम एवं सप्त पुरी तीर्थ यात्रा (Char Dham & Sapta Puri)"
    ],
    items: [
      {
        id: "kashi-vishwanath-mahatmya",
        title: "श्री काशी विश्वनाथ ज्योतिर्लिंग महात्म्य",
        hindiTitle: "स्कन्द पुराण काशी खण्ड अनुसार मोक्षदायिनी नगरी",
        type: "Tirtha • Mahatmya",
        reference: "स्कन्द पुराण • काशी खण्ड १०० अध्याय",
        desc: "भगवान शिव के त्रिशूल पर स्थित अविमुक्त क्षेत्र का रहस्य, पंचक्रोशी यात्रा एवं मणिकर्णिका घाट।",
        route: "/library/puja",
        badge: "मोक्षदायिनी काशी"
      },
      {
        id: "dashashwamedha-ganga-aarti",
        title: "दशाश्वमेध घाट संध्या गंगा आरती",
        hindiTitle: "शास्त्रोक्त दीप प्रज्वलन, शंखनाद एवं मंत्रोच्चार",
        type: "Tradition • Aarti Vidhi",
        reference: "ब्रह्मवैवर्त पुराण • काशी महात्म्य",
        desc: "माँ गंगा के पावन तट पर सहस्रों दीपों द्वारा की जाने वाली विश्वप्रसिद्ध आरती का इतिहास व विधान।",
        route: "/library/puja",
        badge: "नित्य महा आरती"
      },
      {
        id: "dvadasha-jyotirlinga",
        title: "द्वादश ज्योतिर्लिंग स्तोत्र एवं दर्शन",
        hindiTitle: "सौराष्ट्रे सोमनाथं च श्रीशैले मल्लिकार्जुनम्",
        type: "Tirtha • Shaiva",
        reference: "शिव पुराण • कोटिरुद्र संहिता",
        desc: "सोमनाथ, मल्लिकार्जुन, महाकालेश्वर, ओंकारेश्वर से केदारनाथ व विश्वेश्वर तक १२ दिव्य ज्योतिर्लिंग।",
        route: "/library/puja",
        badge: "१२ ज्योतिर्लिंग"
      }
    ],
    relatedTags: ["Kashi Vishwanath", "Ganga Aarti", "Dashashwamedh", "Jyotirlinga", "Shaktipeeth", "Tirtha"]
  },
  {
    id: "jyotisha-collection",
    slug: "jyotisha-collection",
    alias: ["jyotisha", "astrology", "vastu"],
    title: "Jyotisha & Traditional Knowledge",
    hindiTitle: "ज्योतिष, काल गणना एवं वास्तु शास्त्र",
    articlesCount: "52 Articles",
    category: "heritage",
    branch: "Jyotisha & Traditional (पारंपरिक विज्ञान)",
    image: cardAstrologyImg,
    targetCategorySlug: "veda",
    tag: "वेदाङ्ग ज्योतिष",
    desc: "वैदिक काल गणना, पंचांग के ५ अंग (तिथि, वार, नक्षत्र, योग, करण), मुहूर्त शास्त्र, वास्तु चक्र एवं आयुर्वेद दिनचर्या का प्रामाणिक ज्ञान।",
    divisions: [
      "वेदाङ्ग ज्योतिष (Lagadha Vedanga Jyotisha)",
      "पंचांग विज्ञान: तिथि, वार, नक्षत्र, योग, करण (5 Limbs of Time)",
      "शुभ मुहूर्त एवं ग्रह गोचर (Muhurta & Transits)",
      "वास्तु शास्त्र: दिशा, तत्व व पद विन्यास (Vastu Mandala)",
      "आयुर्वेद: त्रिदोष, दिनचर्या व ऋतुचर्या (Ayurveda Science)"
    ],
    items: [
      {
        id: "panchanga-shastra",
        title: "पंचांग विज्ञान: काल के ५ अंग",
        hindiTitle: "तिथि, वार, नक्षत्र, योग, करण का शास्त्रीय रहस्य",
        type: "Jyotisha • Vedanga",
        reference: "सूर्य सिद्धांत • वराहमिहिर बृहत्संहिता",
        desc: "सूर्य और चन्द्रमा की गति पर आधारित वैदिक समय मापन और कर्म अनुष्ठान हेतु शुद्ध समय चयन।",
        route: "/library/knowledge",
        badge: "काल गणना"
      },
      {
        id: "vastu-purusha-mandala",
        title: "वास्तु पुरुष मंडल एवं दिशा विज्ञान",
        hindiTitle: "ईशान, आग्नेय, नैऋत्य, वायव्य ८ दिशाएँ एवं पञ्चमहाभूत",
        type: "Traditional • Vastu Shastra",
        reference: "मयमतम् • समरांगण सूत्रधार",
        desc: "गृह, मंदिर एवं आश्रम निर्माण में ऊर्जा संतुलन, सकारात्मक प्रवाह एवं सुख-समृद्धि के नियम।",
        route: "/library/knowledge",
        badge: "वास्तु विज्ञान"
      },
      {
        id: "ayurveda-dinacharya",
        title: "आयुर्वेद दिनचर्या एवं ऋतुचर्या",
        hindiTitle: "स्वस्थस्य स्वास्थ्य रक्षणम् — वात, पित्त, कफ संतुलन",
        type: "Traditional • Ayurveda",
        reference: "चरक संहिता • अष्टांग हृदयम्",
        desc: "ब्रह्म मुहूर्त जागरण, नस्य, अभ्यंग, ऋतु अनुसार आहार-विहार और दीर्घायु का वैदिक रहस्य।",
        route: "/library/knowledge",
        badge: "आयुर्वेद विज्ञान"
      }
    ],
    relatedTags: ["Jyotisha", "Panchanga", "Vastu Shastra", "Ayurveda", "Muhurta", "Nakshatra"]
  }
];

// Helper to look up a collection by any slug or ID
export function getCollectionById(idOrSlug) {
  if (!idOrSlug) return null;
  const normalized = idOrSlug.toLowerCase().trim();
  return (
    COLLECTIONS_LIST.find(
      (c) =>
        c.id.toLowerCase() === normalized ||
        c.slug.toLowerCase() === normalized ||
        (c.alias && c.alias.includes(normalized))
    ) || null
  );
}
