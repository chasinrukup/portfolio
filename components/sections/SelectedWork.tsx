import { projects, type Project } from "@/content/projects";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";

function periodStart(p: Project): number {
  const match = p.period.match(/([A-Z][a-z]{2})\s+(\d{4})/);
  if (!match) return 0;
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const m = months.indexOf(match[1]);
  const y = parseInt(match[2], 10);
  return y * 12 + m;
}

function periodEnd(p: Project): number {
  if (/present/i.test(p.period)) return Infinity;
  const matches = [...p.period.matchAll(/([A-Z][a-z]{2})\s+(\d{4})/g)];
  const last = matches[matches.length - 1];
  return last ? periodStart({ ...p, period: last[0] }) : 0;
}

// Most recent first: by start date, then ongoing / latest-ending first.
const sortedProjects = [...projects]
  .sort((a, b) => periodStart(b) - periodStart(a) || periodEnd(b) - periodEnd(a))
  .map((p, i) => ({ ...p, number: String(i + 1).padStart(2, "0") }));

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="relative px-6 py-20 sm:px-10 sm:py-24 lg:px-20"
    >
      <SectionHeader
        number="03"
        label="Selected Work"
        kicker="Expand for case studies"
      />

      <div className="mt-12">
        {sortedProjects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
        <div aria-hidden className="h-px w-full bg-ink-hairline" />
      </div>
    </section>
  );
}
