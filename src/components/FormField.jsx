export const inputClass =
  "w-full border bg-ivory px-4 py-3.5 text-charcoal outline-none transition-colors focus:border-olive focus:ring-1 focus:ring-olive";

export function Field({ id, label, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[0.92rem] font-semibold text-olive">{label}</label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1.5 text-sm text-charcoal/70">{hint}</p>}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-[#8B2E2E]">{error}</p>}
    </div>
  );
}