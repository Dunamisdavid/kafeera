// Add a department here and it appears on the index, gets its own page, and joins the footer.
// status: "open" | "forthcoming"
// pathway: "consultation" (bespoke booking) | "enquiry" (trade contact) | "shop" (ready-to-wear)

export const divisions = [
    { id: "couture", name: "Couture & Bespoke", summary: "Haute couture, personal styling, corporate and executive", tone: "#1A4A34", image: "/images/wing-couture.jpg" },
    { id: "fashion", name: "Fashion", summary: "Menswear, womenswear, African heritage, ready-to-wear", tone: "#24523C", image: "/images/wing-fashion.jpg" },
    { id: "leather", name: "Leather & Accessories", summary: "Footwear, leather goods and bags, accessories", tone: "#3A3428", image: "/images/wing-leather.jpg" },
    { id: "lifestyle", name: "Lifestyle", summary: "Fragrance, home and gifting", tone: "#4A3A26", image: "/images/wing-lifestyle.jpg" },
    { id: "trade", name: "Trade", summary: "Wholesale, institutional supply, international sourcing", tone: "#262624", image: "/images/wing-trade.jpg" },
];

export const departments = [
    {
        slug: "haute-couture-bespoke", division: "couture", status: "open", pathway: "consultation",
        name: "Haute Couture & Bespoke",
        summary: "One-of-one garments drafted from your personal pattern and finished by hand.",
        body: "Every commission begins with a private consultation and a pattern made for you alone. Fittings continue until the garment sits exactly as it should, then your pattern is kept on file for every piece that follows.",
    },
    {
        slug: "personal-styling", division: "couture", status: "open", pathway: "consultation",
        name: "Personal Styling",
        summary: "Wardrobe direction for how you wish to be seen, in every room you enter.",
        body: "A dedicated stylist plans your wardrobe around your calendar, your role and your presence, from state occasions to everyday authority.",
    },
    {
        slug: "corporate-executive", division: "couture", status: "open", pathway: "consultation",
        name: "Corporate & Executive",
        summary: "Executive dressing and coordinated wardrobes for leadership teams.",
        body: "Tailored suiting and heritage wear for leaders, boards and executive teams, with in-office fittings and a single advisor managing the account.",
    },
    {
        slug: "menswear", division: "fashion", status: "open", pathway: "consultation",
        name: "Luxury Menswear",
        summary: "Jalabiya, Senator, Agbada and tailored suiting, cut with international precision.", 
        body: "The foundation of the house. Traditional silhouettes and contemporary tailoring made in organic cotton with fine viscose linings.",
    },
    {
        slug: "womenswear", division: "fashion", status: "forthcoming", pathway: "consultation",
        name: "Luxury Womenswear",
        summary: "Couture and occasion wear for women of distinction.",
        body: "A womenswear atelier joining African heritage with modern international form.",
    },
    {
        slug: "african-heritage", division: "fashion", status: "open", pathway: "consultation",
        name: "African Heritage",
        summary: "Traditional and contemporary African fashion, honoured and reimagined.",
        body: "Heritage garments made with the respect they deserve, and modern pieces that carry that heritage onto the international stage.",
    },
    {
        slug: "ready-to-wear", division: "fashion", status: "forthcoming", pathway: "shop",
        name: "Ready-to-Wear",
        summary: "Seasonal collections made to the standard of the bespoke house.",
        body: "Limited seasonal pieces in house materials, made in small runs.",
    },
    {
        slug: "footwear", division: "leather", status: "forthcoming", pathway: "consultation",
        name: "Footwear",
        summary: "Hand-finished shoes and loafers to complete the house silhouette.",
        body: "Made in fine leathers and finished by hand, with made-to-measure available.",
    },
    {
        slug: "leather-goods", division: "leather", status: "forthcoming", pathway: "consultation",
        name: "Leather Goods & Bags",
        summary: "Bags, folios and small leather goods embossed with the K monogram.",
        body: "Structured leather pieces for travel, business and occasion, made to last a lifetime.",
    },
    {
        slug: "accessories", division: "leather", status: "open", pathway: "consultation",
        name: "Accessories",
        summary: "Caps, belts, cufflinks and finishing pieces in house hardware.",
        body: "The details that complete a KAFÉERA look, with custom monogramming on request.",
    },
    {
        slug: "luxury-lifestyle", division: "lifestyle", status: "forthcoming", pathway: "consultation",
        name: "Luxury Lifestyle",
        summary: "Fragrance, home and gifting, made with the restraint of the house.",
        body: "The house beyond the wardrobe, for clients who want KAFÉERA in every part of life.",
    },
    {
        slug: "wholesale-institutional", division: "trade", status: "open", pathway: "enquiry",
        name: "Wholesale & Institutional Supply",
        summary: "Uniforms, ceremonial wear and coordinated supply for organisations.",
        body: "Supply for corporate bodies, institutions and events, held to the same standard of craft as a private commission.",
    },
    {
        slug: "sourcing-partnerships", division: "trade", status: "open", pathway: "enquiry",
        name: "International Sourcing & Partnerships",
        summary: "Material sourcing, manufacturing and brand partnerships across borders.",
        body: "We work with mills, ateliers and brands internationally on sourcing, production and collaboration.",
    },
];

export const getDepartment = (slug) => departments.find((d) => d.slug === slug);
export const byDivision = (divisionId) => departments.filter((d) => d.division === divisionId);

export const pathwayCta = {
    consultation: { label: "Book a consultation", to: "/appointments" },
    enquiry: { label: "Make an enquiry", to: "/partnerships" },
    shop: { label: "Visit the shop", to: "/shop" },
};

// The shop switches on as soon as any shop-pathway department opens
export const shopIsOpen = departments.some((d) => d.pathway === "shop" && d.status === "open");

export const careLinks = [
    { to: "/care/faq", label: "FAQ" },
    { to: "/care/delivery", label: "Delivery" },
    { to: "/care/returns", label: "Returns" },
    { to: "/care/privacy", label: "Privacy" },
    { to: "/care/terms", label: "Terms" },
];