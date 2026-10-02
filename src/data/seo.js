import { getDepartment } from "./departments";
import { getCollection } from "./collections";
import { carePages } from "./care";

const fallback = {
  title: "KAFÉERA | My Corporate House",
  description: "KAFÉERA is a global luxury house rooted in heritage, craftsmanship and contemporary expression: bespoke Jalabiya, Senator and Agbada, made in Abuja for the world.",
};

const pages = {
  "/": fallback,
  "/house": { title: "The House", description: "The story, crest and values of KAFÉERA, My Corporate House." },
  "/departments": { title: "Departments", description: "The departments of KAFÉERA: couture and bespoke, fashion, leather and accessories, lifestyle and trade." },
  "/collections": { title: "Collections", description: "Collections from KAFÉERA, every look made to measure." },
  "/bespoke": { title: "Bespoke", description: "Commission a bespoke Jalabiya, Senator, Agbada or suit from KAFÉERA, in Abuja or from abroad." },
  "/partnerships": { title: "Partnerships", description: "Wholesale, corporate, institutional and wedding commissions with KAFÉERA." },
  "/appointments": { title: "Private Appointments", description: "Book a private appointment with KAFÉERA at the atelier in Abuja, at your home or office, or by video." },
};

export function getMeta(pathname) {
  let meta = pages[pathname];
  const [, section, slug] = pathname.split("/");

  if (!meta && section === "departments") {
    const d = getDepartment(slug);
    if (d) meta = { title: d.name, description: d.summary };
  }
  if (!meta && section === "collections") {
    const c = getCollection(slug);
    if (c) meta = { title: c.name, description: c.summary };
  }
  if (!meta && section === "care") {
    const p = carePages[slug];
    if (p) meta = { title: p.title, description: p.intro };
  }

  meta = meta || fallback;
  return {
    title: meta === fallback ? fallback.title : `${meta.title} | KAFÉERA`,
    description: meta.description,
  };
}