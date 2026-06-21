import Image from "next/image";
import { about } from "@/content/about";
import SectionHeader from "../ui/SectionHeader";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-28 sm:px-10 sm:py-36 lg:px-20"
      aria-labelledby="about-heading"
    >
      <SectionHeader number="01" label="Position" kicker="About" />

      <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-14">
        {/* Prose */}
        <div className="col-span-12 lg:col-span-7">
          <div className="flex flex-col gap-7">
            {about.paragraphs.map((p, i) => (
              <RevealOnScroll key={i} delay={i * 0.06}>
                <p className="max-w-prose text-pretty text-lg leading-[1.6] text-paper">
                  {p}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Portrait + pull-quote stack */}
        <div className="col-span-12 lg:col-span-5 lg:col-start-8">
          <RevealOnScroll delay={0.12}>
            <figure className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-elevated">
                <Image
                  src="/photos/portrait-about.jpg"
                  alt="Sachin Kurup, working at a laptop"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  quality={88}
                  className="object-cover object-[55%_30%] duotone"
                  style={{ mixBlendMode: "luminosity" }}
                />
                {/* terracotta wash */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(229,101,79,0.18) 0%, rgba(10,10,11,0.1) 50%, rgba(10,10,11,0.45) 100%)",
                    mixBlendMode: "multiply",
                  }}
                />
                {/* dot overlay */}
                <div className="halftone-dots-overlay" style={{ opacity: 0.5 }} />
                {/* edge hairlines */}
                <div className="pointer-events-none absolute inset-0 border border-ink-hairline" />
              </div>
              <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
                <span>Plate I · Self-portrait</span>
                <span>2026.03</span>
              </figcaption>
            </figure>
          </RevealOnScroll>

          <RevealOnScroll delay={0.22} className="mt-12">
            <figure className="relative border-l border-accent/50 pl-6 sm:pl-8">
              <div
                aria-hidden
                className="font-serif text-6xl leading-none text-accent/60"
              >
                &ldquo;
              </div>
              <blockquote className="mt-1 font-serif text-2xl italic leading-[1.3] text-paper text-balance sm:text-[26px]">
                {about.pullQuote}
              </blockquote>
              <figcaption className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
                From "When Retrieval Hurts" · ACL 2026 MeLLMs
              </figcaption>
            </figure>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
