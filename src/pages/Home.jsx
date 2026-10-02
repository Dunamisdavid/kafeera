import { Link } from "react-router-dom";
import Crest from "../components/Crest";
import ImageSlot from "../components/ImageSlot";
import KeyPattern from "../components/KeyPattern";
import { divisions, shopIsOpen } from "../data/departments";
import { products, formatPrice } from "../data/products";
import { whatsappLink } from "../data/site";
import { useRef } from "react";
import useAutoScroll from "../hooks/useAutoScroll";

const outline = { color: "transparent", WebkitTextStroke: "max(1.5px, 0.009em) var(--color-gold)" };
const wingShade = { background: "linear-gradient(180deg, rgba(10,38,25,0) 55%, rgba(10,38,25,0.8) 100%)" };
const steps = [["I", "Consultation"], ["II", "Measurement"], ["III", "Fittings"], ["IV", "Delivery"]];
const trade = [
  { type: "wholesale", title: "Wholesale", text: "For boutiques, concept stores and retailers carrying the house.", cta: "Wholesale enquiry" },
  { type: "corporate", title: "Corporate & institutional", text: "Executive wardrobes, ceremonial wear and coordinated supply.", cta: "Corporate enquiry" },
  { type: "occasion", title: "Weddings & ceremonies", text: "Coordinated looks for the couple, the family and the entourage.", cta: "Plan an occasion" },
];

export default function Home() {
    const wingsRef = useRef(null);
    useAutoScroll(wingsRef);
    return (
        <>
            {/* Hero */}
            <section className="relative flex min-h-[640px] flex-col justify-end overflow-hidden text-ivory md:min-h-[860px]">
                <ImageSlot
                    className="absolute inset-0"
                    tone="#1F4433"
                    src="/images/hero-campaign.jpg"
                    alt="KAFÉERA clients in olive, charcoal and ivory"
                    labelClassName="items-start pt-[22vh]"
                    label="[Campaign photograph: three clients in olive, ivory and charcoal, against a deep olive set]"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,38,25,0) 40%, rgba(10,38,25,0.9) 100%)" }} />

                <div className="absolute inset-x-0 top-8">
                    <div className="wrap flex justify-between text-[0.95rem] text-ivory/85">
                        <span>The Sovereign Collection</span>
                        <span>2026</span>
                    </div>
                </div>

                <div className="wrap relative pb-12">
                    <h1 aria-label="KAFÉERA" className="hero-rise whitespace-nowrap font-display text-[clamp(3.6rem,15.5vw,14.5rem)] font-medium leading-[0.9] tracking-[0.02em] text-gold">
                        KAF<span style={outline}>É</span>E<span style={outline}>R</span>A
                    </h1>
                    <div className="mt-8 flex flex-wrap items-end justify-between gap-8 border-t border-gold/45 pt-7">
                        <div>
                            <p className="text-sm font-semibold tracking-[0.24em] text-gold-pale">MY CORPORATE HOUSE</p>
                            <p className="lead mt-2.5 max-w-lg">A global luxury house rooted in heritage, craftsmanship and contemporary expression.</p>
                        </div>
                        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                            <Link to="/collections" className="btn btn-gold">Discover the collection</Link>
                            <Link to="/appointments" className="btn btn-outline-ivory">Book a private consultation</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* The house */}
            <section className="section-y px-6 text-center">
                <div className="mx-auto flex max-w-3xl flex-col items-center">
                    <Crest className="w-28 md:w-37" alt="KAFÉERA sovereign eagle shield crest" />
                    <h2 className="heading-2 mt-9 text-olive">A house of distinction</h2>
                    <KeyPattern className="mt-7" />
                    <p className="lead mt-8">
                        KAFÉERA means "My Corporate House". We were founded not as a tailor, but as a house of many departments, each answerable to the same standard of craft.
                    </p>
                    <p className="mt-5 max-w-xl">
                        From bespoke couture to leather, footwear and lifestyle, we join African heritage with contemporary international design for leaders, distinguished professionals and the modern elite.
                    </p>
                    <Link to="/house" className="text-link mt-8 border-bronze text-olive">The story of the house</Link>
                </div>
            </section>

            {/* The wings of the house */}
            <section className="section-y overflow-hidden bg-olive text-ivory">
                <div className="wrap">
                    <div className="flex flex-wrap items-end justify-between gap-8">
                        <div>
                            <h2 className="heading-2 text-gold">The wings of the house</h2>
                            <p className="mt-3.5 max-w-lg text-ivory/80">Five divisions, one standard. Enter the house through the wing that brings you here.</p>
                        </div>
                        <Link to="/departments" className="text-link border-gold text-gold">All departments</Link>
                    </div>

                    <div
                        ref={wingsRef}
                        className="no-scrollbar -mr-6 mt-14 flex snap-x gap-5 overflow-x-auto pr-6 md:mr-0 md:grid md:grid-cols-5 md:overflow-visible md:pr-0"
                    >
                        {divisions.map((div) => (
                            <Link key={div.id} to={div.id === "trade" ? "/partnerships" : "/departments"} className="group w-52 shrink-0 snap-start text-ivory no-underline md:w-auto">
                                <ImageSlot src={div.image} tone={div.tone} className="aspect-[3/4.4] rounded-t-full border border-gold/40 transition-colors group-hover:border-gold">
                                    <span className="absolute inset-0" style={wingShade} />
                                    <span className="absolute inset-x-5 bottom-5 font-display text-lg leading-tight">{div.name}</span>
                                </ImageSlot>
                                <p className="mt-3.5 text-[0.9rem] leading-relaxed text-ivory/72">{div.summary}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured collection: the Jalabiya leads */}
            <section className="section-y">
                <div className="wrap grid gap-6 md:grid-cols-2">
                    <ImageSlot
                        tone="#0F3826"
                        src="/images/collection-jalabiya.jpg"
                        alt="Ivory Jalabiya with gold-thread embroidery"
                        className="min-h-[520px] md:row-span-2 md:min-h-[760px]"
                        labelClassName="items-end"
                        label="[Full-length portrait: ivory Jalabiya, gold-thread embroidery]"
                    />
                    <div className="flex flex-col justify-center py-6 md:px-2">
                        <h2 className="heading-2 text-olive">The Sovereign Collection</h2>
                        <p className="lead mt-5 max-w-md">Jalabiya, Senator and Agbada in ivory, deep olive and charcoal, finished by hand with gold-thread detailing.</p>
                        <Link to="/collections" className="btn btn-olive mt-8 self-start">Explore the collection</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <ImageSlot tone="#24523C" src="/images/collection-agbada.jpg" alt="Olive Agbada with gold-thread collar" className="min-h-72 md:min-h-90" labelClassName="items-end text-base" label="[Olive Agbada, gold-thread collar]" />
                        <ImageSlot tone="#3A3428" src="/images/detail-cufflink.jpg" alt="K monogram cufflink" className="min-h-72 md:min-h-90" labelClassName="items-end text-base" label="[Detail: K monogram cufflink]" />
                    </div>
                </div>
            </section>

            {/* Shop: appears once ready-to-wear is open */}
            {shopIsOpen && (
                <section className="section-y bg-cream">
                    <div className="wrap">
                        <div className="flex flex-wrap items-end justify-between gap-8">
                            <h2 className="heading-3 text-olive">Ready to wear, made to measure</h2>
                            <Link to="/shop" className="text-link border-bronze text-olive">Visit the shop</Link>
                        </div>
                        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-6">
                            {products.map((p) => (
                                <Link key={p.slug} to={`/product/${p.slug}`} className="group text-charcoal no-underline">
                                    <ImageSlot src={p.image} alt={p.name} tone={p.tone} className="aspect-[3/4]" />
                                    <p className="mt-4 font-serif text-[1.45rem] font-semibold leading-tight text-olive group-hover:underline group-hover:decoration-bronze group-hover:underline-offset-4">{p.name}</p>
                                    <p className="mt-1 text-[0.95rem]">{formatPrice(p.price)}</p>
                                    <p className="text-sm text-bronze-deep">{p.note}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Commission */}
            <section className="grid bg-olive-deep text-ivory md:grid-cols-2">
                <ImageSlot
                    tone="#1F4433"
                    src="/images/commission-still-life.jpg"
                    alt="Tailor's tape across olive wool"
                    className="min-h-[420px] md:min-h-[640px]"
                    label="[Still life: tailor's tape across olive wool, gold chalk marks]"
                />
                <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-24 lg:py-26">
                    <h2 className="heading-2 text-gold">Commission a piece</h2>
                    <p className="mt-5 max-w-md text-ivory/85">
                        Every bespoke commission begins with a conversation, not a form. Your pattern is drafted for you alone and kept on file for every piece that follows.
                    </p>
                    <ol className="mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-7">
                        {steps.map(([numeral, step]) => (
                            <li key={step} className="border-t border-gold/50 pt-3.5">
                                <span className="font-display text-gold">{numeral}</span>
                                <p className="mt-1.5 font-serif text-[1.4rem] font-semibold">{step}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="mt-11 flex flex-col gap-3 sm:flex-row">
                        <Link to="/bespoke" className="btn btn-gold">Begin a commission</Link>
                        <Link to="/bespoke#abroad" className="btn btn-outline-gold">Measuring from abroad</Link>
                    </div>
                </div>
            </section>

            {/* Trade */}
            <section className="section-y">
                <div className="wrap">
                    <h2 className="heading-3 text-olive">For organisations and occasions</h2>
                    <div className="mt-12 grid gap-10 md:grid-cols-3">
                        {trade.map((t) => (
                            <div key={t.title} className="border-t border-bronze pt-6">
                                <h3 className="font-serif text-[1.65rem] font-semibold text-olive">{t.title}</h3>
                                <p className="mt-2.5 mb-4.5 text-[0.97rem]">{t.text}</p>
                               <Link to={`/partnerships?type=${t.type}#enquiry`} className="text-link border-bronze text-olive">{t.cta}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Appointment */}
            <section className="section-y bg-cream px-6 text-center">
                <div className="mx-auto max-w-2xl">
                    <h2 className="heading-2 text-olive">Be received by the house</h2>
                    <p className="mt-5">At our atelier in Abuja, at your home or office, or by video wherever you are in the world.</p>
                    <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                        <Link to="/appointments" className="btn btn-olive">Book a private appointment</Link>
                        <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-outline-olive">Message us on WhatsApp</a>
                    </div>
                </div>
            </section>
        </>
    );
}