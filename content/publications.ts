export type PubStatus = "Accepted" | "Published" | "Under Review" | "In Preparation";

export type Publication = {
  id: string;
  status: PubStatus;
  authors: string;
  title: string;
  venue: string;
  year: number;
  doi?: string;
  href?: string;
  note?: string;
};

export const publications: Publication[] = [
  {
    id: "mellms-acl-2026",
    status: "Accepted",
    authors: "S. Kurup et al.",
    title:
      "When Retrieval Hurts: Evidence Utilization, Script Fidelity, and Knowledge Conflicts in Multilingual RAG",
    venue: "Workshop on Multilingual Large Language Models (MeLLMs) @ ACL 2026",
    year: 2026,
  },
  {
    id: "ingarss-2024",
    status: "Published",
    authors: "P. Rohit, A. Singh, V. Mageshen, K. Sivasabari, S. Kurup",
    title: "Hyperspectral Analysis for Magnesium Estimation in Soil",
    venue:
      "2024 IEEE India Geoscience and Remote Sensing Symposium (InGARSS), Goa, India, pp. 1–4",
    year: 2024,
    doi: "10.1109/InGARSS61818.2024.10984012",
    href: "https://doi.org/10.1109/InGARSS61818.2024.10984012",
  },
  {
    id: "icsrf-2025",
    status: "Published",
    authors: "S. Kurup et al.",
    title: "Digital Twin Framework for Precision Mushroom Cultivation Using IoT Sensors",
    venue: "Proc. International Conference on Sustainable & Resilient Futures (ICSRF)",
    year: 2025,
    note: "Accepted for publication",
  },
  {
    id: "clef-2026",
    status: "Under Review",
    authors: "S. Kurup et al.",
    title:
      "Multi-Agentic Retrieval-Augmented Generation: A Comparative Framework for Question Answering Systems",
    venue: "CLEF 2026",
    year: 2026,
  },
  {
    id: "icdmit-2026",
    status: "In Preparation",
    authors: "S. Kurup et al.",
    title: "Advanced Control Systems for Digital Twin-Based Mushroom Cultivation: Part II",
    venue: "International Conference on Digital Management and Information Technology",
    year: 2026,
  },
  {
    id: "multilingual-rag-eval",
    status: "In Preparation",
    authors: "S. Kurup et al.",
    title:
      "Multilingual RAG Performance Analysis: Evaluation Metrics for Cross-Lingual Robustness in Low-Resource Languages",
    venue: "Manuscript in preparation",
    year: 2026,
  },
];
