import { projects } from "@/content/projects";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="relative px-6 py-28 sm:px-10 sm:py-36 lg:px-20"
    >
      <SectionHeader
        number="03"
        label="Selected Work"
        kicker="Ten · expand for case studies"
      />

      <div className="mt-12">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
        <div aria-hidden className="h-px w-full bg-ink-hairline" />
      </div>
    </section>
  );
}
