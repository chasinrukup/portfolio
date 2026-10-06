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
    id: "quantum-error-correction",
    number: "01",
    title: "AI Pipeline for Quantum Error Correction",
    org: "Amrita CCSN · MeitY-funded",
    role: "Quantum Project Engineer",
    period: "Oct 2026 – Present",
    status: "Research",
    problem:
      "Error correction on superconducting qubits is hard to keep optimised as device noise shifts over time.",
    approach:
      "Building an AI pipeline for the Quantum Error Correction Appliance on the Rudra Server. It takes syndrome data from the readout and extraction stages and runs noise estimation, syndrome processing, an adaptive decoder, error prediction, and correction optimisation, passing decisions back to the control electronics.",
    outcome: "In progress. Funded by MeitY (Ministry of Electronics and Information Technology).",
    stack: ["Python", "Quantum Error Correction", "Adaptive Decoding", "Superconducting Qubits"],
  },
  {
    id: "clinical-protocol-agents",
    number: "02",
    title: "Agentic Clinical-Protocol Workflows",
    org: "Prevalence Health (Embrace Ventures)",
    role: "Research Intern",
    period: "Jul 2026 – Present",
    status: "Research",
    problem:
      "Clinics running structured studies often lack the infrastructure to operationalise protocols consistently at scale.",
    approach:
      "Building agentic workflows and systems that translate clinical study protocols into reliable, repeatable clinic operations, working directly with the organisation's clinical and research leadership.",
    outcome:
      "In progress. Aimed at reducing protocol-deviation errors and freeing clinical staff time for patient care.",
    stack: ["LLM Agents", "Workflow Automation", "Human Oversight"],
  },
  {
    id: "agentic-education",
    number: "03",
    title: "Agentic Educational Platform",
    org: "SeedlingLabs",
    role: "Co-developer",
    period: "Jan 2026 – Jun 2026",
    status: "Production",
    problem:
      "Manual grading, question-paper creation, and lesson planning consume significant instructor time at scale.",
    approach:
      "Co-developed agentic pipelines for automated answer-script evaluation, question-paper generation, and personalised lesson planning (system design, prompting, and backend integration).",
    outcome:
      "Deployed across partner institutions, reducing manual workload for instructors and administrators.",
    stack: ["LLM Agents", "Prompt Engineering", "Backend Integration"],
  },
  {
    id: "decision-intelligence",
    number: "04",
    title: "Decision Intelligence Agent",
    org: "SeedlingLabs",
    role: "Software Engineering Intern",
    period: "Jan 2026 – Jun 2026",
    status: "Production",
    problem:
      "Organisations decide things, then quietly stop doing them. Nobody tracks the gap between what was agreed and what's actually happening on the ground.",
    approach:
      "A multi-agent memory layer that integrates internal applications into a shared organisational knowledge graph, so agents reason over consistent context. A decision-adherence component links operational actions to prior decisions and flags divergences. MCP servers with CRUD guardrails handle validation and access control across agent services.",
    outcome:
      "Shipped as an internal production system. Gives whoever owns agent oversight a concrete trust and accountability signal, and gives downstream teams an auditable communication backbone.",
    stack: ["Multi-Agent Architecture", "MCP Servers", "Knowledge Graph", "RAG", "PostgreSQL"],
  },
  {
    id: "multi-agent-rag",
    number: "05",
    title: "Multi-Agent Retrieval-Augmented QA Framework",
    org: "Independent research",
    role: "Lead",
    period: "Jul 2025 – Dec 2025",
    status: "Completed",
    problem:
      "Single-model RAG can't grade its own homework. The same model picks the evidence and decides if the answer is good, so the failures are silent.",
    approach:
      "Separate the retrieval, reasoning, and evaluation roles into different agents. Add an autonomous judge and an RL loop so the system actually improves from its own mistakes instead of repeating them.",
    outcome:
      "The judge-as-separate-agent design isolates failure modes that single-model RAG systematically hides, which is useful for teams building agentic QA systems where answers cannot be checked by hand at scale.",
    stack: ["LangChain", "LlamaIndex", "Hugging Face", "FAISS", "RL"],
  },
  {
    id: "multilingual-rag",
    number: "06",
    title: "When Retrieval Hurts: Multilingual RAG Analysis",
    org: "ACL 2026 · MeLLMs Workshop",
    role: "First author",
    period: "Jan 2026 – Apr 2026",
    status: "Published",
    problem:
      "Most RAG benchmarks are English-only. So when the same system gets shipped in Hindi or Swahili, the regressions go unmeasured.",
    approach:
      "An empirical study of RAG across 21 typologically diverse languages and 5 LLMs, comparing RAG against a non-RAG baseline across five prompting strategies and multiple retrieval configurations. Introduces lightweight inference-time metrics that detect failure modes directly.",
    outcome:
      "Accepted and presented at the Workshop on Multilingual Large Language Models at ACL 2026. High retrieval quality does not guarantee gains: models consistently underutilise retrieved evidence, and script fidelity is a key driver of hallucination in non-Latin-script languages.",
    stack: ["PyTorch", "Hugging Face", "FAISS", "LangChain", "ONNX Runtime"],
  },
  {
    id: "resiliency-graphs",
    number: "07",
    title: "Cyber-Physical Systems Security Platform",
    org: "Colorado State University",
    role: "Summer Research Intern · Patent Pending",
    period: "Jun 2025 – Jun 2026",
    status: "Patent Pending",
    problem:
      "Critical-infrastructure operators need to know how vulnerabilities chain together, not just where individual issues sit. Manual review doesn't scale to systems with hundreds of components.",
    approach:
      "Fuse Attack Connection Graphs with Fault Trees, compile the result into PDDL, and let an AI planner reason about how risks propagate, with a human-in-the-loop process for CVE-based exploits. Separately, a network orchestration controller manages the full VM lifecycle (topology, networking, live access) for reproducible attack-defense scenarios. Worked with Prof. Indrajit Ray.",
    outcome:
      "Patent pending. Gives security teams a structured way to prioritise risks across system layers, and gives researchers a reproducible, on-demand platform instead of hand-built test environments.",
    stack: ["Python", "Flask", "VBoxManage", "paramiko", "NetworkX", "PDDL"],
  },
  {
    id: "digital-twin",
    number: "08",
    title: "Digital Twin · Mushroom Cultivation",
    org: "Amrita Live-in-Labs",
    role: "Lead · Three Patents Filed",
    period: "Aug 2025 – Present",
    status: "Patent Pending",
    problem:
      "Mushroom farming in rural India is weather-bound and expert-dependent. Even where the climate fits, the income isn't stable enough for people to commit.",
    approach:
      "A digital twin that mirrors the cultivation environment from live IoT sensors (temperature, humidity, soil moisture), automates irrigation and air control, and watches growth through a camera, with cloud sync so a remote agronomist can intervene.",
    outcome:
      "Three patent applications filed (digital twin framework, biological-state-aware environmental control, computer-vision phenotyping) and a published ICSRF 2025 paper. Designed so the operator doesn't need to be an expert. The long-term goal is year-round cultivation across villages, turning a seasonal crop into a stable livelihood.",
    stack: ["Python", "ESP32", "DHT22", "OpenCV", "AWS", "MQTT"],
  },
  {
    id: "physionet",
    number: "09",
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
    number: "10",
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
    number: "11",
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
    number: "12",
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
    number: "13",
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
