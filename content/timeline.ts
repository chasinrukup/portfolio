export type Milestone = {
  id: string;
  year: string;
  title: string;
  context: string;
  kind: "education" | "service" | "research" | "publication" | "deployment" | "milestone";
  photo?: {
    src: string;
    alt: string;
    caption: string;
    objectPosition?: string;
  };
};

export const milestones: Milestone[] = [
  {
    id: "head-prefect",
    year: "2018 – 2020",
    title: "Head Prefect · Amrita Vidyalayam, Kollam",
    context: "Led the student body, organised school-wide events, mentored juniors.",
    kind: "milestone",
  },
  {
    id: "saf",
    year: "2020 – 2022",
    title: "Singapore Armed Forces · National Service",
    context:
      "Two years of mandatory service. Learnt to lead under pressure and to keep going when things got hard.",
    kind: "service",
    photo: {
      src: "/photos/saf-field.jpg",
      alt: "Section in the field during overseas exercise",
      caption: "Field exercise · 2022",
      objectPosition: "50% 60%",
    },
  },
  {
    id: "amrita-admission",
    year: "2022",
    title: "B.Tech. CSE · Amrita Vishwa Vidyapeetham",
    context:
      "Full scholarship under the Government of India Study in India Program. Moved to Kerala.",
    kind: "education",
  },
  {
    id: "ingarss",
    year: "2024",
    title: "First IEEE publication · InGARSS 2024",
    context:
      "Hyperspectral analysis for magnesium estimation in soil. Co-authored, presented at IEEE India Geoscience and Remote Sensing Symposium in Goa.",
    kind: "publication",
  },
  {
    id: "cardiology",
    year: "Jan 2025",
    title: "Research Intern · Computational Cardiology",
    context:
      "Health and AI Lab, Amrita University. Transformer-based classification of Chagas disease from ECG signals for low-resource clinical settings.",
    kind: "research",
  },
  {
    id: "csu",
    year: "Jun 2025",
    title: "Summer Research Intern · Colorado State University",
    context:
      "AI planning over fused attack graphs and fault trees for cyber-physical-systems security. Resulted in a patent-pending tool for critical-infrastructure operators.",
    kind: "research",
  },
  {
    id: "digital-twin",
    year: "Aug 2025",
    title: "Digital Twin Mushroom Cultivation · Patents Filed",
    context:
      "Live-in-Labs fieldwork turned into a deployable digital-twin system for rural cultivators. Three patent applications filed: digital twin framework, biological-state-aware environmental control, and computer-vision phenotyping.",
    kind: "milestone",
    photo: {
      src: "/photos/lil-meeting.jpg",
      alt: "Field interview with smallholder cultivators, rural Odisha",
      caption: "Live-in-Labs · Odisha",
      objectPosition: "50% 50%",
    },
  },
  {
    id: "seedling",
    year: "Jan – Jun 2026",
    title: "Software Engineering Intern · SeedlingLabs",
    context:
      "Built a multi-agent memory layer, a decision-adherence component, and MCP servers with CRUD guardrails for an internal production system. Co-developed an agentic educational platform deployed across partner institutions.",
    kind: "deployment",
  },
  {
    id: "acl-2026",
    year: "2026",
    title: "ACL 2026 MeLLMs Workshop · Presented",
    context:
      "First-author paper on retrieval failure modes in multilingual RAG (21 languages, 5 LLMs), accepted and presented at the Workshop on Multilingual Large Language Models at ACL 2026. A second paper, Scope Matters, was accepted and presented at CLEF 2026.",
    kind: "publication",
  },
  {
    id: "prevalence",
    year: "Jul 2026 – Present",
    title: "Research Intern · Prevalence Health (Embrace Ventures)",
    context:
      "California, USA. Building agentic workflows that turn clinical study protocols into reliable, repeatable clinic operations, working with the organisation's clinical and research leadership.",
    kind: "research",
  },
  {
    id: "graduation",
    year: "Aug 2026",
    title: "B.Tech. Computer Science & Engineering · Amrita",
    context: "Graduated with a CGPA of 8.65 / 10.0.",
    kind: "education",
  },
  {
    id: "quantum-ec",
    year: "Oct 2026 – Present",
    title: "Quantum Project Engineer · Amrita CCSN",
    context:
      "MeitY-funded Quantum Error Correction Appliance for superconducting quantum computers on the Rudra Server. Building an AI pipeline for noise estimation, adaptive decoding, and correction optimisation.",
    kind: "research",
  },
  {
    id: "phd-2027",
    year: "2027 →",
    title: "Doctoral study · Applying",
    context:
      "Applying for PhD programmes starting 2027, focused on reliable, safe, human-aware LLM agents.",
    kind: "milestone",
  },
];
