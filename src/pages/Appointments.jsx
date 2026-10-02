import AppointmentForm from "../components/AppointmentForm";
import { site, whatsappLink } from "../data/site";

const ways = [
  { title: "At the atelier", text: "Be received at our atelier in Abuja, with the fabrics, finishes and collection to hand." },
  { title: "At your home or office", text: "A client advisor comes to you, with swatches and the tools for measuring and fitting." },
  { title: "By video", text: "For clients abroad or short on time: a guided consultation and measurement wherever you are." },
];

export default function Appointments() {
  return (
    <>
      <section className="section-y bg-olive text-ivory">
        <div className="wrap">
          <h1 className="heading-1 max-w-3xl text-gold">Be received by the house</h1>
          <p className="lead mt-6 max-w-2xl">Every relationship with KAFÉERA begins in person, with time set aside for you alone.</p>
        </div>
      </section>

      <section className="section-y">
        <div className="wrap grid gap-10 md:grid-cols-3">
          {ways.map((w) => (
            <div key={w.title} className="border-t border-bronze pt-6">
              <h2 className="font-serif text-[1.75rem] font-semibold text-olive">{w.title}</h2>
              <p className="mt-2.5">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="heading-2 text-olive">Request an appointment</h2>
            <p className="mt-5 max-w-sm">Tell us when and where suits you. The house will confirm a time personally.</p>
            <dl className="mt-10 grid gap-5 text-[0.97rem]">
              <div>
                <dt className="font-semibold text-olive">The atelier</dt>
                <dd>[ATELIER ADDRESS], Abuja</dd>
              </div>
              <div>
                <dt className="font-semibold text-olive">Hours</dt>
                <dd>[OPENING HOURS], by appointment</dd>
              </div>
              <div>
                <dt className="font-semibold text-olive">Speak to the house</dt>
                <dd>
                  <a href={site.phoneHref} className="text-link border-bronze text-olive">{site.phone}</a>
                  <br />
                  <a href={whatsappLink()} target="_blank" rel="noopener" className="text-link mt-2 inline-block border-bronze text-olive">WhatsApp</a>
                  <br />
                  <a href={`mailto:${site.email}`} className="text-link mt-2 inline-block border-bronze text-olive">{site.email}</a>
                </dd>
              </div>
            </dl>
          </div>
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}