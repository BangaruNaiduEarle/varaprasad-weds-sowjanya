import type { InvitationData } from "./invitation.types";

/**
 * Single source of truth — synced from the printed Telugu wedding invitation card.
 * All scenes should derive content from INVITATION_DATA (not hardcode names, dates, or venue).
 */
export const INVITATION_DATA = {
  auspiciousGreeting: {
    telugu: "శ్రీరస్తు! శుభమస్తు! అవిఘ్నమస్తు!",
    english: "Srirastu! Shubhamastu! Avighnamastu!",
  },

  groom: {
    title: "Chi.",
    titleTelugu: "చి||",
    name: "Varaprasad",
    nameTelugu: "దుర్గా వెంకట వరప్రసాద్",
    qualification: "C.A.",
    hometown:
    "Nallajerla village, Nallajerla mandal, East Godavari district",
  hometownTelugu:
    "నల్లజేర్ల గ్రామం, నల్లజేర్ల మండలం, తూర్పు గోదావరి జిల్లా",
  },

  bride: {
    title: "Chi.La.Sow.",
    titleTelugu: "చి||ల||సౌ||",
    name: "Sowjanya",
    nameTelugu: "సౌజన్య",
    qualification: "M.C.A.",
    hometown:
      "Gowripatnam village, Devarapalli mandal, East Godavari district",
    hometownTelugu:
      "గౌరిపట్నం గ్రామం, దేవరపల్లి మండలం, తూర్పు గోదావరి జిల్లా",
  },

  family: {
    name: "Papa vari",
    nameTelugu: "పాపా వారి",
  },

  parents: {
    groom: {
      father: "Sri Papa Trimurthulu",
      mother: "Smt. Gowri Venkata Padmavathi",
      fatherTelugu: "శ్రీ పాపా త్రిమూర్తులు",
      motherTelugu: "శ్రీమతి గౌరి వెంకట పద్మావతి",
    },
    bride: {
      father: "Sri Jakka Satyanarayana",
      mother: "Smt. Sujatha",
      fatherTelugu: "శ్రీ జక్కా సత్యనారాయణ",
      motherTelugu: "శ్రీమతి సుజాత",
    },
    brideGrandparents: {
      grandfather: "Sri Jakka Venkataratnam",
      grandmother: "Smt. Bhagyalakshmi",
      grandfatherTelugu: "శ్రీ జక్కా వెంకటరత్నం",
      grandmotherTelugu: "శ్రీమతి భాగ్యలక్ష్మి",
    },
    elderBlessings: {
      names: "Late Ki.Sha. Papa Gopala Rao & Smt. Subbalakshmi",
      namesTelugu: "కీ.శే. పాపా గోపాలరావు, శ్రీమతి సుబ్బలక్ష్మి",
    },
  },

  muhurtham: {
    title: "Auspicious Muhurtham",
    dateDisplay: "July 2, 2026",
    dateShort: "2-7-2026",
    iso: "2026-07-02T01:51:00+05:30",
    day: "Thursday",
    dayTelugu: "గురువారం",
    time: "1:51 AM",
    timeTelugu: "రాత్రి గం. 1-51 ని.లకు",
    samvatsara: "Parabhava Nama Samvatsaram",
    samvatsaraTelugu: "శ్రీ పరాభవ నామ సంవత్సర",
    tithi: "Nija Jyeshtha Bahula Vidiya",
    tithiTelugu: "నిజజ్యేష్ఠ బహుళ విదియ",
    nakshatram: "Shravana Nakshatram",
    nakshatramTelugu: "శ్రవణ నక్షత్రం",
    lagnam: "Mesha Lagnam",
    lagnamTelugu: "మేష లగ్నం",
    venue: "K.R. Convention & Residency Kalyana Mandapam, Kovvur",
    blessingIntro: "Seeking your blessings and presence",
    quote:
      "With the divine blessings of our elders and ancestors, we invite you to grace this sacred union with your presence and auspicious wishes.",
  },

  venue: {
    name: "K.R. Convention & Residency Kalyana Mandapam",
    nameTelugu: "కె.ఆర్. కన్వెన్షన్ & రెసిడెన్సీ కళ్యాణ మండపం",
    address: "Opposite Bharat Petrol Bunk, Kovvur",
    addressTelugu: "భారత్ పెట్రోల్ బంక్ ఎదురుగా, కొవ్వూరు",
    city: "Kovvur",
    district: "East Godavari",
    state: "Andhra Pradesh",
    mapsUrl:
      "https://maps.google.com/?q=K.R.+Convention+%26+Residency+Kalyana+Mandapam+Kovvur",
    mapsQuery: "K.R. Convention Residency Kalyana Mandapam Kovvur",
  },

  ceremonies: {
    kalyanam: {
      id: "kalyanam",
      title: "Kalyanam",
      titleTelugu: "కళ్యాణం",
      subtitle: "Sacred union under auspicious muhurtham",
      date: "July 2, 2026",
      day: "Thursday",
      time: "1:51 AM",
      timeTelugu: "రాత్రి గం. 1-51 ని.లకు",
      venue: "K.R. Convention & Residency Kalyana Mandapam, Kovvur",
      illustration: "sacred-fire",
    },
    reception: {
      id: "reception",
      title: "Vindu",
      titleTelugu: "విందు",
      subtitle: "Reception & dinner with family and loved ones",
      date: "July 2, 2026",
      day: "Thursday",
      time: "From 7:00 PM",
      timeTelugu: "రాత్రి 7 గంటల నుండి",
      venue: "At the wedding venue",
      illustration: "family-gathering",
      image: "/images/illustrations/family-gathering.png",
    },
  },

  hero: {
    subtitle: "With divine blessings, we joyfully invite you",
    exploreTargetId: "couple",
    ctaLabel: "Open Our Invitation",
  },

  blessings: {
    opening: "Srirastu! Shubhamastu! Avighnamastu!",
    invitation:
      "With the divine blessings of our elders, we humbly request the honour of your presence as we begin this sacred journey together.",
    coupleQuote:
      "By destiny's design, with our families' blessings and the grace of the divine, we come together in the sacred bond of marriage.",
    wishesSection:
      "Heartfelt blessings and beautiful words from our beloved family and friends.",
    locationFooter:
      "We eagerly await the joy of celebrating this beautiful day with you and your family.",
    closing: "Mangalam Mahat",
    closingTelugu: "మంగళం మహత్",
  },

  sections: {
    celebrations: {
      subtitle: "Two sacred moments woven into one grand celebration.",
    },
    location: {
      subtitle: "Follow the path that leads to our celebration at Kovvur.",
    },
    couple: {
      label: "Meet The Couple",
      title: "Two Hearts, One Promise",
      unionQuote: "United in love, guided by tradition, blessed by family",
    },
  },

  footer: {
    blessings:
      "With hearts full of gratitude, we eagerly await your presence and blessings as we begin this beautiful journey together.",
    emotionalNote:
      "Your love and blessings mean the world to us. We cannot wait to share this sacred celebration with you.",
    copyright: "Crafted with ❤️ and countless dreams",
  },

  contact: [
    {
      id: "phone",
      label: "Call Us",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      id: "email",
      label: "Email",
      value: "hello@wedding.com",
      href: "mailto:hello@wedding.com",
    },
  ],

  illustrations: {
    mandala: "/images/illustrations/mandala.jpg",
    groomPortrait: "family-meeting",
    bridePortrait: "family-gathering",
    sacredCeremony: "sacred-fire",
    reception: "family-gathering",
  },

  design: {
    invitationPink: "#D4849A",
  },
} as const satisfies InvitationData;

/** Display name helpers */
export function groomDisplayName(includeTitle = false): string {
  const { title, name } = INVITATION_DATA.groom;
  return includeTitle ? `${title} ${name}` : name;
}

export function brideDisplayName(includeTitle = false): string {
  const { title, name } = INVITATION_DATA.bride;
  return includeTitle ? `${title} ${name}` : name;
}

export function venueFullAddress(): string {
  const { address, city, district, state } = INVITATION_DATA.venue;
  return `${address}, ${city}, ${district}, ${state}`;
}
