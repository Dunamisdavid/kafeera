import { Link } from "react-router-dom";
import EnquiryForm from "../components/EnquiryForm";

const pathways = [
  { type: "wholesale", title: "Wholesale", text: "For boutiques, concept stores and retailers who wish to carry the house, in Nigeria and abroad." },
  { type: "corporate", title: "Corporate & institutional", text: "Executive wardrobes, ceremonial dress and coordinated supply for organisations, institutions and events." },
  { type: "occasion", title: "Weddings & ceremonies", text: "Coordinated looks for the couple, the family and the entourage, each piece made to measure." },
  { type: "sourcing", title: "International sourcing & partnerships", text: "Material sourcing, manufacturing and brand collaborations with mills, ateliers and houses across borders." },
];

const process = [
  { numeral: "I", title: "Brief", text: "We learn about your organisation, your people and the occasion." },
  { numeral: "II", title: "Proposal & samples", text: "We propose styles, fabrics and timelines, with samples for approval." },
  { numeral: "III", title: "Production", text: "Every piece is made to the same standard as a private commission." },
  { numeral: "IV", title: "Delivery & aftercare", text: "Delivered labelled and ready, with alterations and reorders handled for you." },
];

export default function Partnerships() {
  return (
    <>
      <section className="section-y bg-olive text-ivory">
        <div className="wrap">
          <h1 className="heading-1 max-w-3xl text-gold">Partnerships with the house</h1>
          <p className="lead mt-6 max-w-2xl">
            For organisations, retailers and occasions that call for many pieces, made to the standard of one.
          </p>
          <a href="#enquiry" className="btn btn-gold mt-10">Make an enquiry</a>
        </div>
      </section>

      <section className="section-y">
        <div className="wrap grid gap-x-12 gap-y-4 md:grid-cols-2">
          {pathways.map((p) => (
            <div key={p.type} className="border-t border-bronze py-8">
              <h2 className="font-serif text-[clamp(1.7rem,3vw,2.2rem)] font-semibold leading-tight text-olive">{p.title}</h2>
              <p className="mt-3 max-w-md">{p.text}</p>
              <Link to={`/partnerships?type=${p.type}#enquiry`} className="text-link mt-5 inline-block border-bronze text-olive">
                Enquire about {p.title.toLowerCase()}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-olive-deep text-ivory">
        <div className="wrap">
          <h2 className="heading-2 text-gold">How we work with organisations</h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((s) => (
              <li key={s.title} className="border-t border-gold/50 pt-5">
                <span className="font-display text-xl text-gold">{s.numeral}</span>
                <h3 className="mt-2 font-serif text-[1.6rem] font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-[0.97rem] text-ivory/80">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="enquiry" className="section-y">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="heading-2 text-olive">Make an enquiry</h2>
            <p className="mt-5 max-w-sm">
              Tell us about your organisation and what you need. The house replies to every enquiry personally.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}