export type Project = {
  id: string;
  number: string;
  title: string;
  org: string;
  role: string;
  period: string;
  status: "Production" | "Patent Pending" | "Published" | "Research" | "Completed";
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "decision-intelligence",
    number: "01",
    title: "Decision Intelligence Agent",
    org: "SeedlingLabs",
    role: "Software Engineering Intern",
    period: "Jan 2026 – Present",
    status: "Production",
    problem:
      "Organisations decide things, then quietly stop doing them. Nobody tracks the gap between what was agreed and what's actually happening on the ground.",
    approach:
      "A multi-agent memory layer that wires our internal apps into one organisational knowledge graph, with a Decision Adherence Engine that cites and audits every strategic and operational decision the company makes.",
    outcome:
      "The Drift Detection module compares live actions to recorded decisions at 99% accuracy in production. It's now the company's primary institutional memory, used daily by leadership and teams.",
    stack: ["Multi-Agent Architecture", "MCP Servers", "Knowledge Graph", "RAG", "PostgreSQL"],
  },
  {
    id: "multi-agent-rag",
    number: "02",
    title: "Multi-Agent Retrieval-Augmented QA Framework",
    org: "Independent research",
    role: "Lead",
    period: "Jul 2025 – Present",
    status: "Research",
    problem:
      "Single-model RAG can't grade its own homework. The same model picks the evidence and decides if the answer is good, so the failures are silent.",
    approach:
      "Separate the retrieval, reasoning, and evaluation roles into different agents. Add an autonomous judge and an RL loop so the system actually improves from its own mistakes instead of repeating them.",
    outcome:
      "Currently under review at CLEF 2026. The judge-as-separate-agent design isolates failure modes that single-model RAG systematically hides.",
    stack: ["Python", "LangChain", "FAISS", "LlamaIndex", "Hugging Face", "RL"],
  },
  {
    id: "multilingual-rag",
    number: "03",
    title: "Multi-Agentic Multilingual RAG Analysis",
    org: "ACL 2026 · MeLLMs Workshop",
    role: "First author",
    period: "Jan 2026 – Present",
    status: "Published",
    problem:
      "Most RAG benchmarks are English-only. So when the same system gets shipped in Hindi or Swahili, the regressions go unmeasured.",
    approach:
      "A custom metrics suite scoring six things at once: semantic alignment, factual grounding, cross-lingual robustness, hallucination rate, latency, retrieval precision. Run across multilingual datasets that English benchmarks ignore.",
    outcome:
      "Accepted to the Workshop on Multilingual Large Language Models at ACL 2026. Surfaces script-fidelity and knowledge-conflict failures that English benchmarks systematically miss.",
    stack: ["PyTorch", "Hugging Face", "FAISS", "LangChain", "ONNX Runtime"],
  },
  {
    id: "resiliency-graphs",
    number: "04",
    title: "Resiliency Graphs for Cyber-Physical Systems",
    org: "Colorado State University",
    role: "Summer Research Intern · Patent Pending",
    period: "Jun 2025 – Present",
    status: "Patent Pending",
    problem:
      "Critical-infrastructure operators need to know how vulnerabilities chain together, not just where individual issues sit. Manual review doesn't scale to systems with hundreds of components.",
    approach:
      "Fuse Attack Connection Graphs with Fault Trees, compile the result into PDDL, and let an AI planner reason about how risks propagate. With a human-in-the-loop UI for security teams who want to override the planner.",
    outcome:
      "Patent pending. Gives security teams a structured way to prioritise risks across system layers, instead of reading CVE lists.",
    stack: ["Python", "NetworkX", "PDDL", "AI Planning", "Graph Theory"],
  },
  {
    id: "digital-twin",
    number: "05",
    title: "Digital Twin · Mushroom Cultivation",
    org: "Amrita Live-in-Labs",
    role: "Lead · Patent Pending",
    period: "Aug 2025 – Present",
    status: "Patent Pending",
    problem:
      "Mushroom farming in rural India is weather-bound and expert-dependent. Even where the climate fits, the income isn't stable enough for people to commit.",
    approach:
      "A digital twin that mirrors the cultivation environment from live IoT sensors (temperature, humidity, soil moisture), automates irrigation and air control, and watches growth through a camera, with cloud sync so a remote agronomist can intervene.",
    outcome:
      "Patent pending. Designed so the operator doesn't need to be an expert. The long-term goal is year-round cultivation across villages, turning a seasonal crop into a stable livelihood.",
    stack: ["Python", "ESP32", "DHT22", "OpenCV", "AWS", "MQTT"],
  },
  {
    id: "physionet",
    number: "06",
    title: "PhysioNet Challenge 2025 · Chagas Detection",
    org: "Health & AI Lab, Amrita",
    role: "Research Intern",
    period: "Jan 2025 – Aug 2025",
    status: "Completed",
    problem:
      "Chagas disease is badly underdiagnosed because the places with the highest disease burden don't have cardiologists trained to read the ECGs. AI screening only matters if it actually deploys there.",
    approach:
      "Trained and compared seven architectures (1D-CNN, ResNet, LSTM, R-LSTM, LSTM-Transformer, 1D-CNN-Transformer, encoder-decoder) on Chagas classification from ECG signals.",
    outcome:
      "The hybrid LSTM-Transformer won on accuracy while staying small enough to deploy on the kind of hardware these clinics actually have.",
    stack: ["Python", "TensorFlow", "WFDB", "SciPy", "Transformer", "LSTM"],
  },
  {
    id: "hyperspectral",
    number: "07",
    title: "Hyperspectral Magnesium Estimation in Soil",
    org: "IEEE InGARSS 2024",
    role: "Co-author",
    period: "Jan 2024 – Aug 2024",
    status: "Published",
    problem:
      "Conventional soil testing is slow, invasive, and far too expensive for the smallholder farmers who'd benefit most from precision agriculture.",
    approach:
      "ML models that estimate soil magnesium from hyperspectral imaging, so the assessment can happen in the field without destroying the sample.",
    outcome:
      "Published at IEEE India Geoscience and Remote Sensing Symposium (InGARSS) 2024, Goa. DOI: 10.1109/InGARSS61818.2024.10984012.",
    stack: ["Python", "Hyperspectral Imaging", "Remote Sensing", "Spectral Analysis"],
    links: [
      {
        label: "DOI · 10.1109/InGARSS61818.2024.10984012",
        href: "https://doi.org/10.1109/InGARSS61818.2024.10984012",
      },
    ],
  },
  {
    id: "quantum-wordle",
    number: "08",
    title: "Quantum Wordle Solver",
    org: "Coursework · Quantum Computing",
    role: "Lead",
    period: "Oct 2025 – Dec 2025",
    status: "Completed",
    problem:
      "Quantum search advantage gets talked about abstractly. I wanted something concrete: pick a constrained combinatorial puzzle, build a classical baseline, and actually measure the speedup.",
    approach:
      "Grover's algorithm in Qiskit, with a diagonal phase oracle and diffuser circuits encoding Wordle feedback constraints into quantum states.",
    outcome:
      "Verified the quadratic O(√N) speedup against brute-force search on the AER simulator. A small but honest reference point for what quantum search actually buys you.",
    stack: ["Python", "Qiskit", "Quantum Circuits", "Grover's Algorithm"],
  },
  {
    id: "datacenter-scheduler",
    number: "09",
    title: "AI-Driven Distributed Data-Center Scheduler",
    org: "Independent research",
    role: "Lead",
    period: "Apr 2025 – Jun 2025",
    status: "Completed",
    problem:
      "Energy providers want to lean harder on renewables, but real-time price swings and weather variability make scheduling fragile if you also have SLAs to honour.",
    approach:
      "Built a distributed simulation of multiple data centres with real-time electricity prices and renewable variability, then trained an RL scheduler to minimise cost without violating SLAs or latency budgets.",
    outcome:
      "Beat heuristic baselines on grid flexibility while still hitting the service guarantees.",
    stack: ["Python", "PyTorch", "Docker", "Reinforcement Learning"],
  },
  {
    id: "xss-detection",
    number: "10",
    title: "XSS Website Vulnerability Detection",
    org: "Coursework",
    role: "Lead",
    period: "Dec 2024",
    status: "Completed",
    problem:
      "Manual XSS detection doesn't scale to the volume of sites that need auditing. An automated first pass is the only way to make this kind of screening realistic.",
    approach:
      "Binary classification with Logistic Regression, Random Forests, and SVM, tuned across the labelled dataset.",
    outcome:
      "94% accuracy on held-out test data. Demonstrates that ML-based screening is viable as a first-pass triage tool for security teams.",
    stack: ["Python", "Scikit-learn", "Random Forests", "SVM"],
  },
];
