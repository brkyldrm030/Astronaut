import Section from "./Section";
import GlowDotCard from "./GlowCard";

const items = [
  {
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
];

export default function Grid() {
  return (
    <Section id="features" className="border-t border-white/10">
      <div className="grid gap-10 md:grid-cols-3">
        {items.map((it) => (
          <GlowDotCard key={it.title}>
            <div className="mb-6 h-10 w-10 rounded-md bg-white/10 border hover:bg-brand-500/20 border-brand-500" />
            <h3 className="text-brand-200 tracking-wider">{it.title}</h3>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              {it.desc}
            </p>
          </GlowDotCard>
        ))}
      </div>
    </Section>
  );
}
