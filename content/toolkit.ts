export type Skill = { name: string; tier: "core" | "proficient" | "working" };
export type SkillGroup = { id: string; label: string; skills: Skill[] };

export const toolkit: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Python", tier: "core" },
      { name: "TypeScript", tier: "proficient" },
      { name: "C++", tier: "proficient" },
      { name: "C", tier: "proficient" },
      { name: "SQL", tier: "proficient" },
    ],
  },
  {
    id: "ai-ml",
    label: "AI / ML Frameworks",
    skills: [
      { name: "PyTorch", tier: "core" },
      { name: "Hugging Face Transformers", tier: "core" },
      { name: "TensorFlow", tier: "proficient" },
      { name: "Scikit-learn", tier: "core" },
      { name: "LangChain", tier: "core" },
      { name: "LlamaIndex", tier: "proficient" },
    ],
  },
  {
    id: "agentic",
    label: "Agentic & Automation",
    skills: [
      { name: "Multi-Agent Architectures", tier: "core" },
      { name: "MCP Servers", tier: "core" },
      { name: "RAG Systems", tier: "core" },
      { name: "Prompt Engineering", tier: "core" },
      { name: "Reinforcement Learning", tier: "proficient" },
      { name: "LLM Fine-Tuning", tier: "proficient" },
      { name: "Playwright", tier: "proficient" },
    ],
  },
  {
    id: "dl",
    label: "Deep Learning Architectures",
    skills: [
      { name: "1D-CNN", tier: "proficient" },
      { name: "ResNet", tier: "proficient" },
      { name: "LSTM / R-LSTM", tier: "proficient" },
      { name: "Transformer Models", tier: "core" },
      { name: "Encoder-Decoder", tier: "proficient" },
      { name: "Hybrid Architectures", tier: "proficient" },
    ],
  },
  {
    id: "quantum",
    label: "Quantum Computing",
    skills: [
      { name: "Qiskit", tier: "proficient" },
      { name: "Quantum Circuits", tier: "proficient" },
      { name: "Grover's Algorithm", tier: "proficient" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    skills: [
      { name: "Docker", tier: "proficient" },
      { name: "AWS (EC2 · S3 · Lambda)", tier: "proficient" },
      { name: "Google Cloud Platform", tier: "working" },
      { name: "FastAPI", tier: "core" },
      { name: "PostgreSQL", tier: "proficient" },
    ],
  },
  {
    id: "iot",
    label: "IoT & Hardware",
    skills: [
      { name: "MQTT", tier: "proficient" },
      { name: "ESP32", tier: "proficient" },
      { name: "DHT22 / Sensor Integration", tier: "proficient" },
      { name: "Real-Time Data Acquisition", tier: "proficient" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    skills: [
      { name: "Git", tier: "core" },
      { name: "FAISS", tier: "proficient" },
      { name: "Gradio", tier: "proficient" },
      { name: "Streamlit", tier: "proficient" },
      { name: "PDDL", tier: "proficient" },
      { name: "Hyperspectral Imaging", tier: "working" },
    ],
  },
];
