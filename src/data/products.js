// price: a number in naira, or null to show "Price on request"
// tone: placeholder colour shown until a photo is added (set image: "/images/..." when ready)
export const products = [
  { slug: "ivory-jalabiya", name: "Ivory Jalabiya", price: null, note: "Made to measure available", tone: "#E4DCC8", image: "/images/product-ivory-jalabiya.jpg" },
  { slug: "sovereign-senator", name: "The Sovereign Senator", price: null, note: "Made to measure available", tone: "#0F3826" },
  { slug: "charcoal-agbada", name: "Charcoal Agbada", price: null, note: "Made to measure available", tone: "#262624" },
  { slug: "monogram-leather-folio", name: "Monogram Leather Folio", price: null, note: "Personal embossing available", tone: "#5A4128" },
];

export const formatPrice = (price) =>
  price ? `₦${price.toLocaleString("en-NG")}` : "Price on request";