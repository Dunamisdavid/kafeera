import { useId } from "react";

export default function KeyPattern({ width = 240, color = "var(--color-bronze)", className = "" }) {
  const id = "key" + useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <svg width={width} height="14" viewBox={`0 0 ${width} 14`} aria-hidden="true" className={className}>
      <defs>
        <pattern id={id} width="20" height="14" patternUnits="userSpaceOnUse">
          <path d="M0 12.5 H20 M4 12.5 V1.5 H16 V9 H8 V5.5 H12" fill="none" stroke={color} strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width={width} height="14" fill={`url(#${id})`} />
    </svg>
  );
}