import { Link } from "react-router-dom";
import ImageSlot from "../components/ImageSlot";
import { collections } from "../data/collections";

export default function Collections() {
  return (
    <>
      <section className="section-y bg-olive text-ivory">
        <div className="wrap">
          <h1 className="heading-1 text-gold">Collections</h1>
          <p className="lead mt-6 max-w-2xl">
            Each collection is a point of view from the house. Every look within it can be made to measure.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="wrap grid gap-24 md:gap-32">
          {collections.map((c, i) => (
            <article key={c.slug} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <ImageSlot
                src={c.cover}
                alt={c.coverAlt}
                tone={c.tone}
                label={`[${c.name}: cover photograph]`}
                className={`min-h-[480px] md:min-h-[640px] ${i % 2 ? "md:order-2" : ""}`}
              />
              <div className="max-w-lg">
                <p className="font-serif text-xl italic text-bronze-deep">{c.season}</p>
                <h2 className="heading-2 mt-2 text-olive">{c.name}</h2>
                <p className="lead mt-5">{c.summary}</p>
                <Link to={`/collections/${c.slug}`} className="btn btn-olive mt-8">View the collection</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}