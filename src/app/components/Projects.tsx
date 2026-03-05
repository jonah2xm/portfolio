"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";

const projects = [
  {
    title: "AI Document Intelligence Platform",
    description:
      "A production-ready SaaS platform that processes, indexes, and queries PDF/DOCX documents using GPT-4 and RAG architecture. Features smart chunking, vector similarity search, and a chat interface for document Q&A.",
    tags: ["Next.js", "FastAPI", "OpenAI", "Pinecone", "PostgreSQL", "Docker"],
    category: "AI",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    gradient: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
  },
  {
    title: "E-Commerce Full-Stack Platform",
    description:
      "A high-performance e-commerce solution with real-time inventory, Stripe payment integration, admin dashboard, and AI-powered product recommendations.",
    tags: ["Next.js", "Node.js", "MongoDB", "Redis", "Stripe", "TypeScript"],
    category: "Web",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    gradient: "linear-gradient(135deg, #1e40af, #7c3aed)",
  },
  {
    title: "Real-Time Collaboration Tool",
    description:
      "Notion-like collaborative workspace with real-time editing powered by CRDTs, WebSocket presence indicators, AI writing assistant, and version history.",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis", "LangChain"],
    category: "Web",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    gradient: "linear-gradient(135deg, #0369a1, #0ea5e9)",
  },
  {
    title: "Multi-Agent AI Research Assistant",
    description:
      "An agentic AI system that orchestrates multiple LLM agents to autonomously research topics, synthesize information, and generate structured reports with citations.",
    tags: ["Python", "LangChain", "OpenAI", "FastAPI", "Celery", "PostgreSQL"],
    category: "AI",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    gradient: "linear-gradient(135deg, #312e81, #4f46e5)",
  },
  {
    title: "DevOps Monitoring Dashboard",
    description:
      "A Kubernetes-native observability platform with real-time metrics, log aggregation, alerting, and AI-powered anomaly detection.",
    tags: ["React", "Python", "Kubernetes", "Prometheus", "Grafana", "OpenAI"],
    category: "DevOps",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    gradient: "linear-gradient(135deg, #0c4a6e, #0284c7)",
  },
  {
    title: "Voice-to-Code IDE Plugin",
    description:
      "A VS Code extension enabling voice-driven coding with Whisper transcription, GPT-4 code generation, and context-aware code suggestions.",
    tags: ["TypeScript", "VS Code API", "OpenAI Whisper", "GPT-4", "Python"],
    category: "AI",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    gradient: "linear-gradient(135deg, #1e3a8a, #2563eb)",
  },
];

const categories = ["All", "Web", "AI", "DevOps"];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

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
      id="projects"
      className="section-padding"
      style={{ background: "var(--bg-secondary)", position: "relative" }}
    >
      <div className="container-custom" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            style={{ marginBottom: "3rem", textAlign: "center" }}
          >
            <span className="badge" style={{ marginBottom: "1rem" }}>
              Portfolio
            </span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              Real-world applications built with modern tech stacks and AI
              integration
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              justifyContent: "center",
              marginBottom: "2.5rem",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "0.5rem 1.5rem",
                  borderRadius: "50px",
                  border: "1px solid",
                  borderColor:
                    filter === cat ? "var(--accent)" : "var(--border)",
                  background:
                    filter === cat
                      ? "linear-gradient(135deg, var(--blue-600), var(--blue-500))"
                      : "transparent",
                  color: filter === cat ? "white" : "var(--text-muted)",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  transition: "all 0.2s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <motion.div
            layout
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass-card"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Card top bar */}
                <div style={{ height: "5px", background: project.gradient }} />

                <div
                  style={{
                    padding: "1.75rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Title row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        lineHeight: 1.3,
                        marginRight: "0.5rem",
                      }}
                    >
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.2rem",
                          background: "rgba(234, 179, 8, 0.1)",
                          border: "1px solid rgba(234, 179, 8, 0.3)",
                          color: "#ca8a04",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          padding: "0.2rem 0.6rem",
                          borderRadius: "50px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <FiStar size={10} /> Featured
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      marginBottom: "1.25rem",
                      flex: 1,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: "var(--accent-glow)",
                          border: "1px solid var(--border-blue)",
                          color: "var(--accent)",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          padding: "0.2rem 0.6rem",
                          borderRadius: "4px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        padding: "0.4rem 0.85rem",
                        borderRadius: "8px",
                        border: "1px solid var(--border)",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "var(--accent)";
                        el.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "var(--border)";
                        el.style.color = "var(--text-secondary)";
                      }}
                    >
                      <FiGithub size={14} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        color: "white",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        padding: "0.4rem 0.85rem",
                        borderRadius: "8px",
                        background:
                          "linear-gradient(135deg, var(--blue-600), var(--blue-500))",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <FiExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
