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
    title: "Digital Twin Mushroom Cultivation · Patent Pending",
    context:
      "Live-in-Labs fieldwork turned into a deployable digital-twin system for rural cultivators. Filed a patent application.",
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
    year: "Jan 2026",
    title: "Software Engineering Intern · SeedlingLabs",
    context:
      "Designed and shipped the Decision Intelligence Agent. It's now the company's primary institutional memory, used daily by leadership and teams.",
    kind: "deployment",
  },
  {
    id: "acl-2026",
    year: "2026",
    title: "ACL 2026 MeLLMs Workshop · Accepted",
    context:
      "First-author paper on retrieval failure modes in multilingual RAG, accepted at the Workshop on Multilingual Large Language Models at ACL 2026.",
    kind: "publication",
  },
  {
    id: "graduation",
    year: "Jun 2026",
    title: "B.Tech. Computer Science · Expected",
    context:
      "Targeting PhD / MS programs in agentic AI and multi-agent architectures for the 2026–27 application cycle.",
    kind: "milestone",
  },
];
