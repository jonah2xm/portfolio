"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiOpenai, SiLangchain } from "react-icons/si";
import {
  FiZap,
  FiDatabase,
  FiMessageSquare,
  FiCpu,
  FiSearch,
  FiShield,
} from "react-icons/fi";

const features = [
  {
    icon: <FiMessageSquare size={24} />,
    title: "LLM-Powered Chatbots",
    description:
      "Context-aware conversational AI with memory management, tool use, multi-turn dialogue, and fallback handling using GPT-4, Claude, and Gemini.",
    tags: ["OpenAI", "Claude", "LangChain", "Redis"],
    glow: "rgba(59, 130, 246, 0.2)",
  },
  {
    icon: <FiSearch size={24} />,
    title: "RAG Pipelines",
    description:
      "Retrieval-Augmented Generation systems for document Q&A with smart chunking, embedding, vector search, and re-ranking for maximum accuracy.",
    tags: ["Pinecone", "Weaviate", "LlamaIndex", "Embeddings"],
    glow: "rgba(99, 102, 241, 0.2)",
  },
  {
    icon: <FiCpu size={24} />,
    title: "AI Agents & Orchestration",
    description:
      "Multi-agent systems that plan, reason, and act autonomously. Built ReAct and plan-and-execute agents for research, coding, and data tasks.",
    tags: ["LangGraph", "AutoGen", "Tool Calling", "CrewAI"],
    glow: "rgba(139, 92, 246, 0.2)",
  },
  {
    icon: <FiDatabase size={24} />,
    title: "Vector Databases & Embeddings",
    description:
      "Designed and deployed scalable vector storage solutions for semantic search, recommendation systems, and knowledge bases.",
    tags: ["Pinecone", "Qdrant", "pgvector", "Chroma"],
    glow: "rgba(6, 182, 212, 0.2)",
  },
  {
    icon: <FiZap size={24} />,
    title: "AI-Powered APIs",
    description:
      "Production-grade AI APIs with rate limiting, caching, streaming responses, fallback chains, cost tracking, and observability.",
    tags: ["FastAPI", "LangSmith", "Tracing", "Cost Mgmt"],
    glow: "rgba(234, 179, 8, 0.15)",
  },
  {
    icon: <FiShield size={24} />,
    title: "Fine-tuning & Alignment",
    description:
      "Fine-tuned domain-specific models using LoRA/QLoRA techniques and implemented RLHF-based alignment for specialized enterprise use cases.",
    tags: ["LoRA", "RLHF", "Hugging Face", "Axolotl"],
    glow: "rgba(239, 68, 68, 0.15)",
  },
];

export default function AIShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="ai"
      className="section-padding"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background blobs */}
      <div
        className="blob"
        style={{
          width: "500px",
          height: "500px",
          background: "var(--blue-700)",
          top: "10%",
          right: "-15%",
          animationDelay: "1s",
        }}
      />
      <div
        className="blob"
        style={{
          width: "350px",
          height: "350px",
          background: "var(--blue-900)",
          bottom: "5%",
          left: "-10%",
          animationDelay: "3s",
        }}
      />

      <div
        className="container-custom"
        ref={ref}
        style={{ position: "relative", zIndex: 1 }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            style={{ marginBottom: "3.5rem", textAlign: "center" }}
          >
            <span className="badge" style={{ marginBottom: "1rem" }}>
              <SiOpenai size={12} />
              AI Integration
            </span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Where Web Meets{" "}
              <span className="gradient-text-animated">
                Artificial Intelligence
              </span>
            </h2>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              I don&apos;t just call APIs — I architect intelligent systems that
              learn, reason, and deliver real value
            </p>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            variants={containerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {features.map((feat) => (
              <motion.div
                key={feat.title}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  cursor: "default",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border-blue)";
                  el.style.boxShadow = `0 12px 40px ${feat.glow}`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Glow bg */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "120px",
                    height: "120px",
                    background: feat.glow,
                    borderRadius: "50%",
                    filter: "blur(40px)",
                    transform: "translate(30%, -30%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    background: "var(--accent-glow)",
                    border: "1px solid var(--border-blue)",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {feat.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    marginBottom: "1.1rem",
                  }}
                >
                  {feat.description}
                </p>

                {/* Tags */}
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}
                >
                  {feat.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "var(--accent-glow)",
                        border: "1px solid var(--border-blue)",
                        color: "var(--accent)",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        padding: "0.15rem 0.55rem",
                        borderRadius: "4px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA strip */}
          <motion.div
            variants={itemVariants}
            style={{
              marginTop: "3rem",
              padding: "2rem",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg, var(--blue-900), var(--blue-700))",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.4rem",
                }}
              >
                <SiLangchain style={{ color: "#4ade80" }} />
                <span
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Ready to build your AI-powered product?
                </span>
              </div>
              <p
                style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem" }}
              >
                From prototype to production — let&apos;s build something intelligent
                together.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary"
              style={{
                background: "white",
                color: "var(--blue-700)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              Let&apos;s Talk AI →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
