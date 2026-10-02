import ImageSlot from "../components/ImageSlot";
import BespokeForm from "../components/BespokeForm";
import { whatsappLink } from "../data/site";

const steps = [
  { numeral: "I", title: "Consultation", text: "We meet at the atelier, at your home or office, or by video. We talk about the occasion, the way you dress, and how you wish to be seen." },
  { numeral: "II", title: "Measurement", text: "Over thirty measurements are taken and your personal pattern is drafted. It stays on file, so every future piece begins where this one ended." },
  { numeral: "III", title: "Fittings", text: "Your garment is fitted at least twice and refined until it sits exactly as it should, never before." },
  { numeral: "IV", title: "Delivery", text: "Your finished piece is pressed, boxed in house packaging and delivered to your home or office, wherever you are." },
];

const garments = [
  { name: "Jalabiya", text: "Flowing and composed, with hand-finished embroidery at the neckline and placket." },
  { name: "Senator", text: "Clean lines and a precise cut for the boardroom, the mosque, the church and the celebration." },
  { name: "Agbada", text: "Ceremonial grandeur in three pieces, with embroidery placed by hand." },
  { name: "Tailored suiting", text: "International tailoring drafted from your own pattern." },
];

export default function Bespoke() {
  return (
    <>
      <section className="grid bg-olive text-ivory md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-24 sm:px-12 lg:px-24">
          <h1 className="heading-1 text-gold">Made for one person, once.</h1>
          <p className="lead mt-6 max-w-lg">
            A KAFÉERA commission begins with a conversation and ends with a garment that could belong to no one else.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#request" className="btn btn-gold">Request a commission</a>
            <a href="#abroad" className="btn btn-outline-gold">Measuring from abroad</a>
          </div>
        </div>
        <ImageSlot tone="#1F4433" src="/images/commission-still-life.jpg" alt="Tailor's tape across olive wool" className="min-h-[420px] md:min-h-[680px]" />
      </section>

      <section className="section-y">
        <div className="wrap">
          <h2 className="heading-2 text-olive">How a commission unfolds</h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.title} className="border-t border-bronze pt-5">
                <span className="font-display text-xl text-bronze-deep">{s.numeral}</span>
                <h3 className="mt-2 font-serif text-[1.65rem] font-semibold text-olive">{s.title}</h3>
                <p className="mt-2.5 text-[0.97rem]">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-olive-deep text-ivory">
        <div className="wrap grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <h2 className="heading-2 text-gold">What we make to measure</h2>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {garments.map((g) => (
              <div key={g.name} className="border-t border-gold/30 py-6">
                <h3 className="font-serif text-[1.55rem] font-semibold text-gold-pale">{g.name}</h3>
                <p className="mt-2 text-[0.97rem] text-ivory/80">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="abroad" className="section-y bg-cream">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="heading-2 text-olive">Measuring from abroad</h2>
            <p className="lead mt-5 max-w-md">Distance is no obstacle to a KAFÉERA commission.</p>
          </div>
          <div className="grid gap-6">
            <div className="border-t border-bronze pt-5">
              <h3 className="font-serif text-[1.45rem] font-semibold text-olive">A guided video fitting</h3>
              <p className="mt-2 text-[0.97rem]">A client advisor takes your measurements with you over a video call, step by step.</p>
            </div>
            <div className="border-t border-bronze pt-5">
              <h3 className="font-serif text-[1.45rem] font-semibold text-olive">Send us a garment that fits well</h3>
              <p className="mt-2 text-[0.97rem]">We can draft your pattern from a piece you already love wearing, and return it with your order.</p>
            </div>
            <div className="border-t border-bronze pt-5">
              <h3 className="font-serif text-[1.45rem] font-semibold text-olive">Fittings when you visit</h3>
              <p className="mt-2 text-[0.97rem]">If you are passing through Abuja, we arrange your fitting around your stay.</p>
            </div>
            <a href={whatsappLink("Hello KAFÉERA, I am abroad and would like to arrange a video fitting.")} target="_blank" rel="noopener" className="text-link mt-2 self-start border-bronze text-olive">
              Arrange a video fitting
            </a>
          </div>
        </div>
      </section>

      <section id="request" className="section-y">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="heading-2 text-olive">Request a commission</h2>
            <p className="mt-5 max-w-sm">
              Tell us a little about what you have in mind. A client advisor will reply personally to arrange your consultation.
            </p>
          </div>
          <BespokeForm />
        </div>
      </section>
    </>
  );
}