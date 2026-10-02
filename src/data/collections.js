// To add a collection, add an entry here. It appears on /collections and gets its own page.
export const collections = [
  {
    slug: "sovereign",
    name: "The Sovereign Collection",
    season: "2026",
    summary: "Jalabiya, Senator and Agbada in ivory, deep olive and charcoal, finished by hand with gold-thread detailing.",
    description:
      "The house's signature collection. Traditional silhouettes drafted with international precision, cut in 100% organic cotton with fine viscose linings, and finished by hand. Every look can be made to measure.",
    cover: "/images/collection-jalabiya.jpg",
    coverAlt: "Ivory Jalabiya with gold-thread embroidery",
    tone: "#0F3826",
    looks: [
      { title: "Ivory Jalabiya", pieces: "Jalabiya and cap in ivory organic cotton, gold-thread embroidery at the neckline and placket", image: "/images/product-ivory-jalabiya.jpg", tone: "#E4DCC8" },
      { title: "Olive Agbada", pieces: "Three-piece Agbada in deep olive, hand-placed gold embroidery at the collar", image: "/images/collection-agbada.jpg", tone: "#24523C" },
      { title: "The monogram cufflink", pieces: "Gold-tone cufflinks engraved with the K monogram", image: "/images/detail-cufflink.jpg", tone: "#3A3428" },
      { title: "The finish", pieces: "Hand-stitched buttonholes and gold-tone buttons on every garment", image: "/images/detail-buttonhole.jpg", tone: "#1A4A34" },
    ],
  },
  {
    slug: "ceremonial",
    name: "The Ceremonial Collection",
    season: "Occasion",
    summary: "Agbada and ceremonial dress for weddings, investitures and the days that will be remembered.",
    description:
      "Grand silhouettes for grand occasions. Coordinated looks for the celebrant, the family and the entourage, each piece made to measure.",
    cover: "/images/cover-ceremonial.jpg",
    coverAlt: "Ceremonial Agbada in a palace setting",
    tone: "#3A3428",
    looks: [],
  },
  {
    slug: "executive",
    name: "The Executive Collection",
    season: "Corporate",
    summary: "Senator and tailored suiting for leaders, boards and the professionals who set the tone in every room.",
    description:
      "Quiet authority for the working week. Senators and suiting cut for long days and important rooms, with in-office fittings for executive clients.",
    cover: "/images/cover-executive.jpg",
    coverAlt: "Executive Senator in a boardroom",
    tone: "#262624",
    looks: [],
  },
];

export const getCollection = (slug) => collections.find((c) => c.slug === slug);