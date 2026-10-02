import { useState } from "react";
import { site, whatsappLink } from "../data/site";

const garments = ["Jalabiya", "Senator", "Agbada", "Tailored suit", "Womenswear", "Accessories", "Something else"];
const consultations = [
  "At the atelier in Abuja",
  "At my home or office",
  "By video call",
  "I am abroad and will measure remotely",
];
const empty = { name: "", phone: "", email: "", location: "", garment: "", occasion: "", needBy: "", consultation: "", notes: "" };

const inputClass =
  "w-full border bg-ivory px-4 py-3.5 text-charcoal outline-none transition-colors focus:border-olive focus:ring-1 focus:ring-olive";

function Field({ id, label, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[0.92rem] font-semibold text-olive">{label}</label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1.5 text-sm text-charcoal/70">{hint}</p>}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-[#8B2E2E]">{error}</p>}
    </div>
  );
}

export default function BespokeForm() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const message = () =>
    [
      "Hello KAFÉERA, I would like to request a bespoke commission.",
      "",
      `Name: ${form.name}`,
      `Phone / WhatsApp: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      form.location ? `Location: ${form.location}` : null,
      `Garment: ${form.garment}`,
      form.occasion ? `Occasion: ${form.occasion}` : null,
      form.needBy ? `Needed by: ${form.needBy}` : null,
      form.consultation ? `Consultation: ${form.consultation}` : null,
      form.notes ? `Notes: ${form.notes}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please add your name.";
    if (!form.phone.trim()) next.phone = "Please add a phone or WhatsApp number so we can reach you.";
    if (!form.garment) next.garment = "Please choose what you would like made.";
    setErrors(next);

    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(`bespoke-${first}`)?.focus();
      return;
    }
    window.open(whatsappLink(message()), "_blank", "noopener");
    setSent(true);
  };

  const errorProps = (name) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `bespoke-${name}-error` : undefined,
    className: `${inputClass} ${errors[name] ? "border-[#8B2E2E]" : "border-olive/30"}`,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="bespoke-name" label="Full name" error={errors.name}>
          <input id="bespoke-name" name="name" autoComplete="name" value={form.name} onChange={update} {...errorProps("name")} />
        </Field>
        <Field id="bespoke-phone" label="Phone or WhatsApp" error={errors.phone}>
          <input id="bespoke-phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update} {...errorProps("phone")} />
        </Field>
        <Field id="bespoke-email" label="Email (optional)">
          <input id="bespoke-email" name="email" type="email" autoComplete="email" value={form.email} onChange={update} className={`${inputClass} border-olive/30`} />
        </Field>
        <Field id="bespoke-location" label="City and country (optional)">
          <input id="bespoke-location" name="location" placeholder="e.g. Abuja, Nigeria" value={form.location} onChange={update} className={`${inputClass} border-olive/30`} />
        </Field>
        <Field id="bespoke-garment" label="What would you like made?" error={errors.garment}>
          <select id="bespoke-garment" name="garment" value={form.garment} onChange={update} {...errorProps("garment")}>
            <option value="">Choose one</option>
            {garments.map((g) => <option key={g}>{g}</option>)}
          </select>
        </Field>
        <Field id="bespoke-consultation" label="Where would you like your consultation?">
          <select id="bespoke-consultation" name="consultation" value={form.consultation} onChange={update} className={`${inputClass} border-olive/30`}>
            <option value="">Choose one</option>
            {consultations.map((c) => <option key={c}>{c}</option>)}
          </select>
        </Field>
        <Field id="bespoke-occasion" label="Occasion (optional)">
          <input id="bespoke-occasion" name="occasion" placeholder="e.g. Wedding, Eid, investiture" value={form.occasion} onChange={update} className={`${inputClass} border-olive/30`} />
        </Field>
        <Field id="bespoke-needBy" label="Needed by (optional)">
          <input id="bespoke-needBy" name="needBy" type="date" value={form.needBy} onChange={update} className={`${inputClass} border-olive/30`} />
        </Field>
      </div>

      <Field id="bespoke-notes" label="Anything else we should know? (optional)" hint="Colours, styles you admire, fabrics. You can send reference photos in the WhatsApp chat.">
        <textarea id="bespoke-notes" name="notes" rows={5} value={form.notes} onChange={update} aria-describedby="bespoke-notes-hint" className={`${inputClass} border-olive/30 resize-y`} />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-olive">Send request on WhatsApp</button>
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent("Bespoke commission request")}&body=${encodeURIComponent(message())}`}
          className="text-link self-start border-bronze text-olive sm:self-center"
        >
          Prefer email?
        </a>
      </div>

      <p role="status" className="min-h-6 text-[0.95rem] text-olive">
        {sent && "Your request is ready in WhatsApp. Press send there and a client advisor will reply to arrange your consultation."}
      </p>
    </form>
  );
}