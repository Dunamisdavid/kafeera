import { useState } from "react";
import { Field, inputClass } from "./FormField";
import { site, whatsappLink } from "../data/site";

const types = [
  "Bespoke consultation",
  "Fitting",
  "Personal styling session",
  "Private viewing of a collection",
  "Corporate wardrobe consultation",
];
const places = ["At the atelier in Abuja", "At my home or office in Abuja", "By video call"];
const times = ["Morning", "Afternoon", "Evening"];
const empty = { name: "", phone: "", email: "", type: "", place: "", date: "", time: "", notes: "" };
const today = new Date().toISOString().split("T")[0];

export default function AppointmentForm() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const message = () =>
    [
      "Hello KAFÉERA, I would like to book a private appointment.",
      "",
      `Name: ${form.name}`,
      `Phone / WhatsApp: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Appointment: ${form.type}`,
      `Where: ${form.place}`,
      form.date ? `Preferred date: ${form.date}` : null,
      form.time ? `Preferred time: ${form.time}` : null,
      form.notes ? `Notes: ${form.notes}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please add your name.";
    if (!form.phone.trim()) next.phone = "Please add a phone or WhatsApp number so we can confirm.";
    if (!form.type) next.type = "Please choose the kind of appointment.";
    if (!form.place) next.place = "Please choose where you would like to meet.";
    setErrors(next);

    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(`appt-${first}`)?.focus();
      return;
    }
    window.open(whatsappLink(message()), "_blank", "noopener");
    setSent(true);
  };

  const fieldProps = (name) => ({
    id: `appt-${name}`,
    name,
    value: form[name],
    onChange: update,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `appt-${name}-error` : undefined,
    className: `${inputClass} ${errors[name] ? "border-[#8B2E2E]" : "border-olive/30"}`,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="appt-name" label="Full name" error={errors.name}>
          <input autoComplete="name" {...fieldProps("name")} />
        </Field>
        <Field id="appt-phone" label="Phone or WhatsApp" error={errors.phone}>
          <input type="tel" autoComplete="tel" {...fieldProps("phone")} />
        </Field>
        <Field id="appt-email" label="Email (optional)">
          <input type="email" autoComplete="email" {...fieldProps("email")} />
        </Field>
        <Field id="appt-type" label="Kind of appointment" error={errors.type}>
          <select {...fieldProps("type")}>
            <option value="">Choose one</option>
            {types.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field id="appt-place" label="Where would you like to meet?" error={errors.place}>
          <select {...fieldProps("place")}>
            <option value="">Choose one</option>
            {places.map((p) => <option key={p}>{p}</option>)}
          </select>
        </Field>
        <Field id="appt-date" label="Preferred date (optional)">
          <input type="date" min={today} {...fieldProps("date")} />
        </Field>
        <Field id="appt-time" label="Preferred time (optional)">
          <select {...fieldProps("time")}>
            <option value="">Any time</option>
            {times.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
      </div>

      <Field id="appt-notes" label="Anything we should prepare? (optional)">
        <textarea rows={4} {...fieldProps("notes")} className={`${fieldProps("notes").className} resize-y`} />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-olive">Request on WhatsApp</button>
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent("Private appointment request")}&body=${encodeURIComponent(message())}`}
          className="text-link self-start border-bronze text-olive sm:self-center"
        >
          Prefer email?
        </a>
      </div>

      <p role="status" className="min-h-6 text-[0.95rem] text-olive">
        {sent && "Your request is ready in WhatsApp. Press send there and the house will confirm your appointment."}
      </p>
    </form>
  );
}