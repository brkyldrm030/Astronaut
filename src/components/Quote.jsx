// src/components/Quote.jsx
import Section from "./Section";

export default function Quote() {
  return (
    <Section id="quote">
      <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] items-center opacity-60">
        <div>
          <h3 className="text-2xl font-semibold max-w-md text-white">
            Lorem Ipsum
          </h3>
          <p className="mt-4 text-white/70 text-sm max-w-md">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#cta"
              className="rounded-md bg-brand-500/90 px-4 py-2 hover:bg-brand-500 hover:text-white"
            >
              Jetzt starten
            </a>
            <a
              href="#contact"
              className="rounded-md border text-white border-white/20 px-4 py-2 hover:bg-brand-500/20"
            >
              Erfahre mehr
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
