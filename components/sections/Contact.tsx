import { site } from "@/content/site";
import SectionHeader from "../ui/SectionHeader";
import RevealOnScroll from "../ui/RevealOnScroll";

const LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/sachin-kurup", handle: "linkedin.com/in/sachin-kurup" },
  { label: "GitHub", href: "https://github.com/sachinkurup", handle: "github.com/sachinkurup" },
  { label: "Resume", href: "/resume/Sachin-Kurup-CV.pdf", handle: "Sachin-Kurup-CV.pdf" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
    >
      <SectionHeader number="08" label="Contact" kicker="Direct lines" />

      <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-14">
        <div className="col-span-12 lg:col-span-8">
          <RevealOnScroll>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
              Write to me
            </p>
            <a
              href={`mailto:${site.email}`}
              className="accent-underline mt-4 block font-serif text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.05] text-paper text-balance"
            >
              {site.email}
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="mt-10 max-w-prose font-serif text-xl italic leading-snug text-paper text-balance sm:text-2xl">
              {site.availability}
            </p>
          </RevealOnScroll>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <RevealOnScroll delay={0.15}>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
              Elsewhere
            </p>
            <ul className="mt-4 flex flex-col">
              {LINKS.map((l) => (
                <li
                  key={l.label}
                  className="border-b border-ink-hairline first:border-t"
                >
                  <a
                    href={l.href}
                    target={l.href.startsWith("/") ? undefined : "_blank"}
                    rel={l.href.startsWith("/") ? undefined : "noopener noreferrer"}
                    download={l.label === "Resume" ? "" : undefined}
                    className="group flex items-center justify-between gap-4 py-4 transition-colors"
                  >
                    <span className="font-serif text-xl text-paper transition-colors group-hover:text-accent">
                      {l.label}
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[11px] text-paper-dim">
                      <span className="hidden sm:inline">{l.handle}</span>
                      <span
                        aria-hidden
                        className="inline-block transition-transform duration-500 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </div>

      <footer className="mt-24 flex items-center justify-between gap-3 border-t border-ink-hairline pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
        <span>© {new Date().getFullYear()} Sachin Kurup</span>
        <a href="#hero" className="text-paper-muted hover:text-paper">
          ↑ Back to top
        </a>
      </footer>
    </section>
  );
}
