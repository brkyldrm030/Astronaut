import Section from "./Section";
import Planet from "../assets/Planet.png";
import astronaut from "../assets/Astronaut.png";

export default function Hero() {
  return (
    <Section id="hero" className="pt-36 pb-24">
      {/* Hintergrund-Planet */}
      <img
        src={Planet}
        alt="Planet"
        aria-hidden
        className="pointer-events-none select-none absolute left-1/2 top-0 -translate-x-1/2 
                      w-[56rem] max-w-none opacity-70"
      />

      <div className="relative text-center">
        <h1 className="text-4xl text-white md:text-6xl font-extrabold tracking-tight">
          AYSULIX.{" "}
          <span className="block font-light text-brand-200">WEBSITE</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-white/70">
          Innovative Webseiten • Effizientes Marketing • Nachhaltige Netzwerke.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#features"
            className="inline-flex text-white items-center rounded-full border border-brand-400/50 px-5 py-2
                        hover:bg-brand-500/20"
          >
            Erfahre mehr →
          </a>
          <a
            href="#cta"
            className="inline-flex items-center rounded-full bg-brand-500/90 px-5 py-2
                                    hover:bg-brand-500 hover:text-white"
          >
            Jetzt starten
          </a>
        </div>

        {/* “Glas”-Kugel mit Astronaut */}
        <div className="mx-auto mt-14 h-72 w-72 flex items-center justify-center">
          <img
            src={astronaut}
            alt="Astronaut"
            className="h-76 object-contain drop-shadow-2xl"
          />
        </div>

        <p className="mt-8 tracking-[0.4em] text-sm text-white/60">
          DIGITALE WELT
        </p>
      </div>
    </Section>
  );
}
