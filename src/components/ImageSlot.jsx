import { useState } from "react";

export default function ImageSlot({ src, alt = "", label, tone = "#1F4433", light = false, className = "", labelClassName = "items-center", children }) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;
  // Only add "relative" when the caller hasn't positioned the slot itself
  const position = /\babsolute\b/.test(className) ? "" : "relative";

  return (
    <div className={`${position} overflow-hidden ${className}`} style={{ backgroundColor: tone }}>
      {showImage ? (
        <img src={src} alt={alt} onError={() => setFailed(true)} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        label && (
          <p className={`absolute inset-0 flex justify-center p-8 text-center font-serif text-lg italic ${light ? "text-charcoal/55" : "text-ivory/55"} ${labelClassName}`}>
            {label}
          </p>
        )
      )}
      {children}
    </div>
  );
}