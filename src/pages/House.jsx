import { Link } from "react-router-dom";
import Crest from "../components/Crest";
import ImageSlot from "../components/ImageSlot";
import KeyPattern from "../components/KeyPattern";

const symbols = [
  { name: "The eagle", text: "Sovereignty and vision: the house sees far and carries itself with authority." },
  { name: "The shield", text: "Legacy and protection: what we make is meant to be kept and handed down." },
  { name: "The interlocking rings", text: "Many departments bound as one house, held to one standard." },
  { name: "The crown", text: "Distinction, and the dignity of every client we dress." },
  { name: "The key border", text: "Continuity: heritage that runs unbroken into the present." },
];

const path = ["Word", "Behold", "Transform", "Become", "Express"];
const values = ["Excellence", "Integrity", "Quality", "Service", "Identity", "Creativity", "Individuality", "Expression"];

const materials = [
  { name: "100% organic cotton", text: "Grown without synthetic pesticides. Breathable in heat, soft against the skin, made to last for years." },
  { name: "Fine viscose linings", text: "Smooth, light and cool, so every garment moves with you." },
  { name: "House finishing", text: "Hand-stitched details, gold-tone hardware and the K monogram, placed only where they belong." },
];

export default function House() {
  return (
    <>
      <section className="section-y bg-olive text-ivory">
        <div className="wrap max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.24em] text-gold-pale">MY CORPORATE HOUSE</p>
          <h1 className="heading-1 mt-4 text-gold">More than a tailor. A house.</h1>
          <p className="lead mt-6 max-w-2xl">
            KAFÉERA was conceived as a corporate house: many departments, one standard, and a single conviction that what we wear should carry who we are.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="wrap grid items-center gap-12 md:grid-cols-2">
          <ImageSlot tone="#1A4A34" src="/images/wing-couture.jpg" alt="A tailor at work in the atelier" className="min-h-[460px] md:min-h-[620px]" />
          <div className="max-w-lg">
            <h2 className="heading-2 text-olive">The meaning of the name</h2>
            <p className="lead mt-6">KAFÉERA means "My Corporate House".</p>
            <p className="mt-5">
              It speaks of ownership and belonging: a house our clients can call their own. Where a tailor makes garments, a house holds many crafts under one roof: couture and bespoke, menswear and womenswear, leather, footwear, accessories and lifestyle.
            </p>
            <p className="mt-4">
              We are rooted in African heritage and made for the world, for leaders, distinguished professionals and the modern elite who expect both.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="wrap grid gap-12 md:grid-cols-[1fr_1.5fr] md:items-center">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Crest className="w-40 md:w-52" alt="KAFÉERA sovereign eagle shield crest" />
            <h2 className="heading-2 mt-8 text-olive">The crest</h2>
            <KeyPattern className="mt-6" />
          </div>
          <dl className="grid gap-x-10 sm:grid-cols-2">
            {symbols.map((s) => (
              <div key={s.name} className="border-t border-bronze py-5">
                <dt className="font-serif text-[1.45rem] font-semibold text-olive">{s.name}</dt>
                <dd className="mt-1.5 text-[0.97rem]">{s.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-y bg-olive-deep text-ivory">
        <div className="wrap text-center">
          <h2 className="heading-3 text-gold">The way of the house</h2>
          <p className="mx-auto mt-4 max-w-md text-ivory/80">The quiet order behind everything we make.</p>
          <ol className="mx-auto mt-14 flex max-w-4xl flex-col items-center gap-5 md:flex-row md:justify-between md:gap-0">
            {path.map((word, i) => (
              <li key={word} className="flex flex-col items-center gap-5 md:flex-row md:gap-0">
                <span className="font-display text-[clamp(1.4rem,2.6vw,2rem)] text-gold-pale">{word}</span>
                {i < path.length - 1 && (
                  <span aria-hidden="true" className="h-8 w-px bg-gold/50 md:mx-6 md:h-px md:w-12 lg:w-16" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y">
        <div className="wrap">
          <h2 className="heading-2 text-olive">What we hold to</h2>
          <ul className="mt-12 grid grid-cols-2 gap-x-8 md:grid-cols-4">
            {values.map((v) => (
              <li key={v} className="border-t border-bronze py-5 font-serif text-[1.55rem] font-semibold text-olive">{v}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="wrap grid gap-12 md:grid-cols-[1fr_1.5fr]">
          <div>
            <h2 className="heading-2 text-olive">Opulent, and responsibly made</h2>
            <p className="mt-5 max-w-sm">We choose materials that feel exceptional and last for years.</p>
          </div>
          <div>
            {materials.map((m) => (
              <div key={m.name} className="grid gap-2 border-t border-bronze py-6 last:border-b sm:grid-cols-[12rem_1fr] sm:gap-6">
                <h3 className="font-serif text-[1.45rem] font-semibold leading-tight text-olive">{m.name}</h3>
                <p className="text-[0.97rem]">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-olive text-center text-ivory">
        <div className="wrap max-w-2xl">
          <h2 className="heading-2 text-gold">Enter the house</h2>
          <p className="mt-5 text-ivory/85">Explore the departments, or be received in person.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/departments" className="btn btn-gold">Explore the departments</Link>
            <Link to="/appointments" className="btn btn-outline-gold">Book a private appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}