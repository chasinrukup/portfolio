import SmoothScroll from "@/components/motion/SmoothScroll";
import CursorGlow from "@/components/ui/CursorGlow";
import SideIndex from "@/components/nav/SideIndex";
import SectionFocus from "@/components/ui/SectionFocus";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ResearchCurrents from "@/components/sections/ResearchCurrents";
import SelectedWork from "@/components/sections/SelectedWork";
import Publications from "@/components/sections/Publications";
import Journey from "@/components/sections/Journey";
import Toolkit from "@/components/sections/Toolkit";
import Now from "@/components/sections/Now";
import Contact from "@/components/sections/Contact";
import Interlude from "@/components/sections/Interlude";
import TopicIndex from "@/components/sections/TopicIndex";

const RESEARCH_TOPICS = [
  "Multi-agent systems",
  "Retrieval-augmented generation",
  "Multilingual NLP",
  "Decision-aware agents",
  "AI planning · PDDL",
  "Cyber-physical security",
  "Quantum search",
  "Reinforcement learning",
  "Live in rural India",
  "Built in production",
];

const MANIFESTO =
  "I think about agents that remember, retrievers that find, languages that aren't English, and systems that survive Monday morning.";

export default function Home() {
  return (
    <main className="relative grain">
      <SmoothScroll />
      <CursorGlow />
      <SideIndex />

      <Hero />

      <SectionFocus>
        <TopicIndex manifesto={MANIFESTO} topics={RESEARCH_TOPICS} />
      </SectionFocus>

      <SectionFocus><About /></SectionFocus>
      <SectionFocus><ResearchCurrents /></SectionFocus>
      <SectionFocus><SelectedWork /></SectionFocus>

      <SectionFocus>
        <Interlude
          number="∞"
          kicker="Aside"
          text="Most agents look impressive in a demo because the demo is the test set. The work I care about is what happens on Monday morning, when the same system has to answer a question nobody anticipated, in a language nobody benchmarked, on a decision that contradicts the one it remembered."
        />
      </SectionFocus>

      <SectionFocus><Publications /></SectionFocus>
      <SectionFocus><Journey /></SectionFocus>
      <SectionFocus><Toolkit /></SectionFocus>
      <SectionFocus><Now /></SectionFocus>
      <SectionFocus><Contact /></SectionFocus>
    </main>
  );
}
