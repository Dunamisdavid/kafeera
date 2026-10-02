import { Link, NavLink, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { carePages } from "../data/care";
import { careLinks } from "../data/departments";
import { whatsappLink } from "../data/site";

export default function Care() {
  const { slug } = useParams();
  const page = carePages[slug];
  if (!page) return <NotFound />;

  return (
    <>
      <section className="section-y bg-olive text-ivory">
        <div className="wrap">
          <p className="text-ivory/75">Client care</p>
          <h1 className="heading-1 mt-4 text-gold">{page.title}</h1>
          <p className="lead mt-6 max-w-2xl">{page.intro}</p>
        </div>
      </section>

      <section className="section-y">
        <div className="wrap grid gap-12 lg:grid-cols-[14rem_1fr]">
          <nav aria-label="Client care" className="lg:sticky lg:top-28 lg:self-start">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:flex-col">
              {careLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) => `no-underline ${isActive ? "font-semibold text-olive" : "text-charcoal/75 hover:text-olive"}`}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-3xl">
            {page.faqs ? (
              <div className="border-t border-bronze/40">
                {page.faqs.map((f) => (
                  <details key={f.q} className="group border-b border-bronze/40">
                    <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 font-serif text-[1.4rem] font-semibold text-olive [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span aria-hidden="true" className="font-sans text-2xl font-light transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="pb-6 text-[0.98rem]">{f.a}</p>
                  </details>
                ))}
              </div>
            ) : (
              page.sections.map((s) => (
                <div key={s.heading} className="border-t border-bronze/40 py-7 first:border-t-0 first:pt-0">
                  <h2 className="font-serif text-[1.6rem] font-semibold text-olive">{s.heading}</h2>
                  <p className="mt-2.5">{s.body}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="section-y bg-cream text-center">
        <div className="wrap max-w-2xl">
          <h2 className="heading-3 text-olive">Still have a question?</h2>
          <p className="mt-5">A client advisor will gladly help.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-olive">Message us on WhatsApp</a>
            <Link to="/appointments" className="btn btn-outline-olive">Book an appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}