import { Link } from "react-router-dom";
import { divisions, byDivision } from "../data/departments";

export default function Departments() {
  return (
    <>
      <section className="section-y bg-olive text-ivory">
        <div className="wrap">
          <h1 className="heading-1 text-gold">The departments of the house</h1>
          <p className="lead mt-6 max-w-xl">
            KAFÉERA is built as a house of many departments, each held to the same standard of craft and service.
          </p>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="wrap">
          {divisions.map((div) => (
            <div
              key={div.id}
              id={div.id}
              className="grid gap-4 border-t border-bronze/35 py-12 first:border-t-0 first:pt-0 md:grid-cols-[1fr_2.6fr] md:gap-12"
            >
              <h2 className="font-serif text-[clamp(1.7rem,3vw,2.25rem)] font-medium leading-tight text-olive">{div.name}</h2>
              <ul>
                {byDivision(div.id).map((d) => (
                  <li key={d.slug}>
                    <Link
                      to={`/departments/${d.slug}`}
                      className="group grid gap-1.5 border-b border-charcoal/12 py-6 no-underline md:grid-cols-[1fr_1.4fr_auto] md:items-baseline md:gap-6"
                    >
                      <span className="font-serif text-[1.45rem] font-semibold text-olive decoration-bronze underline-offset-[6px] group-hover:underline">
                        {d.name}
                      </span>
                      <span className="text-[0.97rem] text-charcoal/80">{d.summary}</span>
                      {d.status === "forthcoming" && (
                        <span className="whitespace-nowrap text-[0.82rem] font-semibold text-bronze-deep">Opening soon</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}