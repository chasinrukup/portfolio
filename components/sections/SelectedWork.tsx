import { projects, type Project } from "@/content/projects";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";

const STATUS_TIER: Record<Project["status"], number> = {
  Published: 0,
  "Patent Pending": 1,
  Production: 2,
  Research: 3,
  Completed: 4,
};

function periodStart(p: Project): number {
  const match = p.period.match(/([A-Z][a-z]{2})\s+(\d{4})/);
  if (!match) return 0;
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const m = months.indexOf(match[1]);
  const y = parseInt(match[2], 10);
  return y * 12 + m;
}

const sortedProjects = [...projects].sort((a, b) => {
  const tier = STATUS_TIER[a.status] - STATUS_TIER[b.status];
  if (tier !== 0) return tier;
  return periodStart(b) - periodStart(a);
});

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
