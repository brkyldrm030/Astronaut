// src/components/CTA.jsx
import Section from "./Section";
export default function CTA() {
  return (
    <Section id="cta" className="text-center">
      <h3 className="text-3xl font-bold text-white">AYSULIX.</h3>
      <p className="mt-3 text-white/70">Wir bauen Webseiten, die begeistern.</p>
      <a
        href="#contact"
        className="mt-6 inline-block rounded-full bg-brand-500/90 px-6 py-3 hover:bg-brand-500 hover:text-white"
      >
        Jetzt starten
      </a>
    </Section>
  );
}
