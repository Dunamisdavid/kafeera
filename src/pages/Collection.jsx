import { Link, useParams } from "react-router-dom";
import ImageSlot from "../components/ImageSlot";
import NotFound from "./NotFound";
import { getCollection } from "../data/collections";
import { whatsappLink } from "../data/site";

export default function Collection() {
  const { slug } = useParams();
  const c = getCollection(slug);
  if (!c) return <NotFound />;

  return (
    <>
      <section className="grid bg-olive text-ivory md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-24 sm:px-12 lg:px-24">
          <p className="text-ivory/75">
            <Link to="/collections" className="hover:text-gold">Collections</Link> / {c.season}
          </p>
          <h1 className="heading-1 mt-5 text-gold">{c.name}</h1>
          <p className="lead mt-6 max-w-lg">{c.description}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/bespoke#request" className="btn btn-gold">Commission a look</Link>
            <a href={whatsappLink(`Hello KAFÉERA, I would like to know more about ${c.name}.`)} target="_blank" rel="noopener" className="btn btn-outline-gold">
              Ask the house
            </a>
          </div>
        </div>
        <ImageSlot src={c.cover} alt={c.coverAlt} tone={c.tone} label={`[${c.name}: cover photograph]`} className="min-h-[460px] md:min-h-[700px]" />
      </section>

      <section className="section-y">
        <div className="wrap">
          <h2 className="heading-2 text-olive">The looks</h2>
          {c.looks.length > 0 ? (
            <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {c.looks.map((look) => (
                <figure key={look.title}>
                  <ImageSlot src={look.image} alt={look.title} tone={look.tone} label={`[${look.title}]`} className="aspect-[3/4]" />
                  <figcaption className="mt-4">
                    <h3 className="font-serif text-[1.5rem] font-semibold leading-tight text-olive">{look.title}</h3>
                    <p className="mt-1.5 text-[0.95rem] text-charcoal/80">{look.pieces}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <p className="lead mt-6 max-w-xl">
              The looks of this collection are being photographed. Ask the house to see them in person or by video.
            </p>
          )}
        </div>
      </section>

      <section className="section-y bg-cream text-center">
        <div className="wrap max-w-2xl">
          <h2 className="heading-3 text-olive">Every look, made for you</h2>
          <p className="mt-5">Any piece in this collection can be cut from your personal pattern, in the colour of your choosing.</p>
          <Link to="/bespoke#request" className="btn btn-olive mt-9">Request a commission</Link>
        </div>
      </section>
    </>
  );
}