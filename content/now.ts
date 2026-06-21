export type NowItem = {
  id: string;
  label: string;
  title: string;
  detail: string;
};

export const nowItems: NowItem[] = [
  {
    id: "decision-intel",
    label: "Building · SeedlingLabs",
    title: "Decision Adherence Engine v2",
    detail:
      "Extending the multi-agent memory layer so it spans longer decision horizons and surfaces conflicting commitments across teams before they compound.",
  },
  {
    id: "multilingual-rag",
    label: "Researching · ACL 2026",
    title: "Multilingual RAG failure modes",
    detail:
      "Following up the MeLLMs paper with a deeper look at script-fidelity and knowledge-conflict regressions in low-resource languages.",
  },
  {
    id: "phd-apps",
    label: "Reading · PhD prep",
    title: "Agent memory & decision-aware reasoning",
    detail:
      "Catching up on current literature in agent memory, semantic alignment, and robust reasoning across languages and domains. Preparing 2026–27 doctoral applications.",
  },
];
