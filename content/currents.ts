export type Current = {
  id: string;
  number: string;
  title: string;
  shortLine: string;
  openQuestions: string[];
  related: { kind: "project" | "paper"; id: string; label: string }[];
};

export const currents: Current[] = [
  {
    id: "multi-agent",
    number: "01",
    title: "Multi-Agent AI Systems",
    shortLine:
      "How separate agents coordinate, remember, and audit each other without collapsing into one model's blind spots.",
    openQuestions: [
      "How do you formalise drift between an agent's recorded decision and its current action, and detect it without ground truth?",
      "When retrieval, reasoning, and judgement are split across agents, what does failure actually look like?",
    ],
    related: [
      { kind: "project", id: "decision-intelligence", label: "Decision Intelligence Agent" },
      { kind: "project", id: "multi-agent-rag", label: "Multi-Agent QA Framework" },
    ],
  },
  {
    id: "rag",
    number: "02",
    title: "Retrieval-Augmented Generation",
    shortLine:
      "Where the retriever helps, where it hurts, and how to measure the difference honestly across languages.",
    openQuestions: [
      "When does retrieval actively degrade generation, and can a model learn to refuse its own retriever?",
      "What does a benchmark look like that doesn't pretend English performance generalises?",
    ],
    related: [
      { kind: "paper", id: "mellms-acl-2026", label: "When Retrieval Hurts (ACL 2026)" },
      { kind: "project", id: "multilingual-rag", label: "Multilingual RAG Analysis" },
    ],
  },
  {
    id: "llms",
    number: "03",
    title: "Large Language Models",
    shortLine:
      "Behaviour under domain shift, low-resource settings, and adversarial inputs. Not just leaderboard scores.",
    openQuestions: [
      "What does honest evaluation look like for an LLM deployed on a task it was never trained for?",
      "How much of in-context learning is reasoning, and how much is retrieval from pretraining?",
    ],
    related: [
      { kind: "project", id: "multi-agent-rag", label: "Multi-Agent QA Framework" },
    ],
  },
  {
    id: "optimisation",
    number: "04",
    title: "Computational Optimization",
    shortLine:
      "RL and constraint reasoning applied to scheduling problems where being wrong has physical consequences.",
    openQuestions: [
      "Can RL schedulers stay safe under distribution shift in renewable-energy grids?",
      "Where do learned policies actually beat well-tuned heuristics, and where do they only look like they do?",
    ],
    related: [
      { kind: "project", id: "datacenter-scheduler", label: "AI-Driven Data-Center Scheduler" },
    ],
  },
  {
    id: "cps-security",
    number: "05",
    title: "Cyber-Physical Systems Security",
    shortLine:
      "Modelling how attack paths and failure modes combine in systems where a breach has physical consequences.",
    openQuestions: [
      "Can AI planning over fused attack graphs and fault trees scale to real critical-infrastructure topologies?",
      "What does a human-in-the-loop audit interface look like for security teams that don't trust automation?",
    ],
    related: [
      { kind: "project", id: "resiliency-graphs", label: "Resiliency Graphs (CSU)" },
      { kind: "project", id: "xss-detection", label: "XSS Vulnerability Detection" },
    ],
  },
  {
    id: "planning",
    number: "06",
    title: "AI Planning & Graph Theory",
    shortLine:
      "Symbolic planning (PDDL) and graph reasoning as a structured complement to learned policies. Neither alone is enough.",
    openQuestions: [
      "How do you compile messy real-world reliability data (fault trees, CVEs, ops logs) into something a planner can reason over?",
      "Where should learned heuristics guide symbolic search, and where should symbolic constraints discipline learned policies?",
    ],
    related: [
      { kind: "project", id: "resiliency-graphs", label: "Resiliency Graphs (CSU)" },
      { kind: "project", id: "quantum-wordle", label: "Quantum Wordle / Grover's Search" },
    ],
  },
];
