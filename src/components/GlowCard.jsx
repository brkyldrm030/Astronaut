// src/components/GlowDotCard.jsx
export default function GlowCard({ children, className = "" }) {
  // nur den Rand sichtbar machen (Innenfläche maskieren)
  const ringMask = {
    padding: "5px", // Randbreite
    background:
      // ein sehr schmaler heller Keil (= Lichtpunkt)
      "conic-gradient(from 0deg, rgba(56,189,248,0.95) 0 3deg, transparent 3deg 360deg)",
    mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  };

  return (
    <div className={`relative rounded-xl ${className}`}>
      {/* Lichtpunkt, der rotiert */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]
                   animate-[spin_5s_linear_infinite] blur-[2px]"
        style={ringMask}
      />
      {/* Inhalt */}
      <div className="relative rounded-[inherit] bg-white/5 p-8 ring-1 ring-white/10">
        {children}
      </div>
    </div>
  );
}
