// src/components/Section.jsx
export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="container mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}
