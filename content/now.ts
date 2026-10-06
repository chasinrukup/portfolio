export type NowItem = {
  id: string;
  label: string;
  title: string;
  detail: string;
};

export const nowItems: NowItem[] = [
  {
    id: "quantum-ec",
    label: "Building · Amrita CCSN",
    title: "AI pipeline for quantum error correction",
    detail:
      "MeitY-funded work on a Quantum Error Correction Appliance for superconducting qubits: noise estimation, syndrome processing, an adaptive decoder, and correction optimisation fed back to the control electronics.",
  },
  {
    id: "prevalence",
    label: "Building · Prevalence Health",
    title: "Agentic workflows for clinical protocols",
    detail:
      "Agent-driven systems that translate clinical study protocols into repeatable clinic operations, aimed at reducing protocol-deviation errors and freeing clinical staff time for patients.",
  },
  {
    id: "phd-apps",
    label: "Applying · PhD 2027",
    title: "Safe, human-aware LLM agents",
    detail:
      "Preparing doctoral applications for 2027 on agent decision-making, safe tool use, adversarial robustness, and human oversight and deferral.",
  },
];
