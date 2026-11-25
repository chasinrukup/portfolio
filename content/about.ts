export const about = {
  pullQuote:
    "Most RAG benchmarks are English-centric. That isn't a research gap. It's a deployment gap.",
  paragraphs: [
    "I'm a Senior Research Fellow at Amrita's Center for Cybersecurity Systems and Networks, building an AI pipeline that keeps error correction on superconducting quantum computers optimised as device noise shifts. The thread through my work is systems that stay reliable when conditions change: retrieval that stops helping, agents that drift from their own decisions, noise that moves under a decoder.",
    "I came to this through language agents: how LLM agents reason and decide in complex environments, use tools safely, and judge when to act alone versus defer to a human. My first-author paper, When Retrieval Hurts (MeLLMs @ ACL 2026), measured where multilingual RAG breaks, across 21 languages and 5 models: models underuse the evidence they retrieve, and script fidelity drives hallucination.",
    "I test those questions where failure is costly. At SeedlingLabs I built a multi-agent memory layer across 7 internal applications, a decision-adherence component that flags when agent actions diverge from prior decisions, and MCP servers with CRUD guardrails. Prevalence Health is the same problem in clinics: agentic workflows run across 1,000 study protocols. Earlier research at Amrita's Health and AI Lab (ECG-based Chagas screening) and Colorado State (cyber-physical security) taught me to ask what a system does when its inputs are poor.",
    "I'm applying for doctoral study starting 2027, to make agent reasoning reliable enough to support discovery in complex scientific and technical domains. Quantum error correction, where a decoder has to adapt to noise it can't fully observe, is that question in a different setting.",
  ],
} as const;
