import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { site, whatsappLink } from "../data/site";

export const enquiryTypes = [
  { id: "wholesale", label: "Wholesale" },
  { id: "corporate", label: "Corporate or institutional" },
  { id: "occasion", label: "Wedding or ceremony" },
  { id: "sourcing", label: "International sourcing or partnership" },
  { id: "other", label: "Something else" },
];

const empty = { organisation: "", name: "", email: "", phone: "", country: "", type: "", quantity: "", timeline: "", budget: "", details: "" };

const inputClass =
  "w-full border bg-ivory px-4 py-3.5 text-charcoal outline-none transition-colors focus:border-olive focus:ring-1 focus:ring-olive";

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[0.92rem] font-semibold text-olive">{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-[#8B2E2E]">{error}</p>}
    </div>
  );
}

export default function EnquiryForm() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // Preselect the enquiry type when arriving from a link such as ?type=wholesale
  useEffect(() => {
    const type = searchParams.get("type");
    if (enquiryTypes.some((t) => t.id === type)) {
      setForm((f) => ({ ...f, type }));
    }
  }, [searchParams]);

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const typeLabel = enquiryTypes.find((t) => t.id === form.type)?.label || "";

  const message = () =>
    [
      "Hello KAFÉERA, we would like to make a business enquiry.",
      "",
      `Organisation: ${form.organisation}`,
      `Contact: ${form.name}`,
      form.email ? `Email: ${form.email}` : null,
      form.phone ? `Phone: ${form.phone}` : null,
      form.country ? `Country: ${form.country}` : null,
      `Enquiry: ${typeLabel}`,
      form.quantity ? `Estimated quantity: ${form.quantity}` : null,
      form.timeline ? `Timeline: ${form.timeline}` : null,
      form.budget ? `Budget: ${form.budget}` : null,
      "",
      form.details,
    ]
      .filter((line) => line !== null)
      .join("\n");

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.organisation.trim()) next.organisation = "Please add your organisation's name.";
    if (!form.name.trim()) next.name = "Please add a contact name.";
    if (!form.email.trim() && !form.phone.trim()) next.email = "Please add an email or phone number so we can reply.";
    if (!form.type) next.type = "Please choose the type of enquiry.";
    if (!form.details.trim()) next.details = "Please tell us a little about what you need.";
    setErrors(next);

    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(`enquiry-${first}`)?.focus();
      return;
    }
    window.open(whatsappLink(message()), "_blank", "noopener");
    setSent(true);
  };

  const fieldProps = (name) => ({
    id: `enquiry-${name}`,
    name,
    value: form[name],
    onChange: update,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `enquiry-${name}-error` : undefined,
    className: `${inputClass} ${errors[name] ? "border-[#8B2E2E]" : "border-olive/30"}`,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="enquiry-organisation" label="Organisation" error={errors.organisation}>
          <input autoComplete="organization" {...fieldProps("organisation")} />
        </Field>
        <Field id="enquiry-name" label="Contact person" error={errors.name}>
          <input autoComplete="name" {...fieldProps("name")} />
        </Field>
        <Field id="enquiry-email" label="Email" error={errors.email}>
          <input type="email" autoComplete="email" {...fieldProps("email")} />
        </Field>
        <Field id="enquiry-phone" label="Phone or WhatsApp">
          <input type="tel" autoComplete="tel" {...fieldProps("phone")} />
        </Field>
        <Field id="enquiry-country" label="Country (optional)">
          <input autoComplete="country-name" {...fieldProps("country")} />
        </Field>
        <Field id="enquiry-type" label="Type of enquiry" error={errors.type}>
          <select {...fieldProps("type")}>
            <option value="">Choose one</option>
            {enquiryTypes.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
        </Field>
        <Field id="enquiry-quantity" label="Estimated quantity (optional)">
          <input placeholder="e.g. 40 pieces" {...fieldProps("quantity")} />
        </Field>
        <Field id="enquiry-timeline" label="Timeline (optional)">
          <input placeholder="e.g. Needed by March 2027" {...fieldProps("timeline")} />
        </Field>
      </div>

      <Field id="enquiry-budget" label="Budget (optional)">
        <input placeholder="An indicative range helps us propose the right options" {...fieldProps("budget")} />
      </Field>

      <Field id="enquiry-details" label="Tell us about your needs" error={errors.details}>
        <textarea rows={6} {...fieldProps("details")} className={`${fieldProps("details").className} resize-y`} />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-olive">Send enquiry on WhatsApp</button>
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent(`Business enquiry: ${typeLabel || "KAFÉERA"}`)}&body=${encodeURIComponent(message())}`}
          className="text-link self-start border-bronze text-olive sm:self-center"
        >
          Send by email instead
        </a>
      </div>

      <p role="status" className="min-h-6 text-[0.95rem] text-olive">
        {sent && "Your enquiry is ready in WhatsApp. Press send there and the house will reply within two working days."}
      </p>
    </form>
  );
}