export const about = {
  pullQuote:
    "Most RAG benchmarks are English-centric. That isn't a research gap. It's a deployment gap.",
  paragraphs: [
    "I'm interested in autonomous language-based systems: how LLM agents reason and decide in complex environments, use external tools safely, resist adversarial manipulation, and judge when to act alone versus defer to human oversight. I've worked on this from both sides: building multi-agent systems with guardrailed tool access and decision-adherence checks, and studying failures empirically in my first-author paper When Retrieval Hurts (MeLLMs @ ACL 2026).",
    "The trajectory is unusual. Singaporean by passport, two years of mandatory military service, then a full-scholarship CS programme in Kerala. Months of Live-in-Labs fieldwork in rural North India — ongoing, not a single trip — keep shaping which problems I take seriously: soil testing for smallholder farmers, mushroom cultivation as a climate-stable livelihood, Chagas screening in clinics that don't have a cardiologist.",
    "I've done research at Amrita's Health and AI Lab, worked with Colorado State on cyber-physical systems security (patent pending), and shipped multi-agent decision-intelligence software at SeedlingLabs. Right now I'm building agentic clinical-protocol workflows at Prevalence Health in California and an AI error-correction pipeline for superconducting quantum computers at Amrita's Center for Cybersecurity Systems and Networks.",
    "I'm pursuing doctoral study, starting 2027, to make agent reasoning reliable enough to support discovery in complex scientific and technical domains. The questions I want to formalise (drift between recorded and acted-on decisions, safe tool use, when an agent should defer) are ones I've already been studying in code that has to keep working on Monday morning.",
  ],
} as const;
