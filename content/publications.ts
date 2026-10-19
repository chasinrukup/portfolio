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
    status: "Published",
    authors:
      "V. M. Mohan*, S. Jayakumar*, G. S. Menon*, S. Kurup*, G. Veena, V. Kanjirangat",
    title:
      "When Retrieval Hurts: Evidence Utilization, Script Fidelity, and Knowledge Conflicts in Multilingual RAG",
    venue:
      "Proc. 1st Workshop on Multilinguality in the Era of Large Language Models (MeLLM 2026), pp. 92–107, San Diego, United States. ACL",
    year: 2026,
    doi: "10.18653/v1/2026.mellm-1.9",
    href: "https://doi.org/10.18653/v1/2026.mellm-1.9",
    note: "Equal contribution",
  },
  {
    id: "clef-2026",
    status: "Published",
    authors:
      "S. Kurup*, G. S. Menon*, S. Jayakumar*, V. M. Mohan*, G. Veena, V. Kanjirangat",
    title:
      "Scope Matters: A Hallucination-Aware Evaluation of Retrieval Strategies for Multilingual RAG",
    venue:
      "Experimental IR Meets Multilinguality, Multimodality, and Interaction (CLEF 2026), LNCS, pp. 103–117. Springer",
    year: 2026,
    doi: "10.1007/978-3-032-39150-6_8",
    href: "https://doi.org/10.1007/978-3-032-39150-6_8",
    note: "Equal contribution",
  },
  {
    id: "icsrf-2025",
    status: "Published",
    authors:
      "Lakshmi K, A. H, V. S. T. Sunku, C. V. S. S. Anish, S. Kurup, Dhivvya J P, R. Mohan",
    title:
      "Climate based Smart Mushroom Farming Systems for Sustainable Futures: A case study to empower tribal women from Odisha village",
    venue:
      "Proc. International Conference on Sustainable & Resilient Futures (ICSRF 2025), Amritapuri, India, Nov 2025",
    year: 2025,
    doi: "10.2139/ssrn.6256318",
    href: "https://doi.org/10.2139/ssrn.6256318",
  },
  {
    id: "ingarss-2024",
    status: "Published",
    authors: "P. Rohit, A. Singh, V. Mageshen, K. Sivasabari, S. Kurup",
    title: "Hyperspectral Analysis for Magnesium Estimation in Soil",
    venue: "IEEE InGARSS 2024, pp. 1–4",
    year: 2024,
    doi: "10.1109/InGARSS61818.2024.10984012",
    href: "https://doi.org/10.1109/InGARSS61818.2024.10984012",
  },
  {
    id: "icdmit-2026",
    status: "In Preparation",
    authors: "S. Kurup, Lakshmi K., R. Mohan",
    title: "Advanced Control Systems for Digital Twin-Based Mushroom Cultivation: Part II",
    venue: "In preparation",
    year: 2026,
  },
];
