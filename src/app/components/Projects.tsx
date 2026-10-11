"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink, FiLock } from "react-icons/fi";

type Project = {
  title: string;
  summary: string;
  metric?: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
  note?: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Notaura",
    summary:
      "AI PDF reader SaaS: chat with your documents, highlight and take notes. Built in a 2-person team with Stripe subscriptions, per-user quotas and an admin dashboard.",
    metric: "1,000+ subscribers",
    tags: ["Next.js 15", "Express", "MongoDB", "Stripe", "OpenAI", "Mistral", "Bull"],
    live: "https://notaura.app/",
    gradient: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
  },
  {
    title: "CoachSupport",
    summary:
      "Dutch AI assistant for professional coaches: RAG chat over coaching methodologies and books, Google/Facebook sign-in, 14-day trial and Stripe plans.",
    tags: ["Next.js 15", "Express 5", "MongoDB", "Pinecone", "OpenAI", "Stripe"],
    live: "https://www.coachsupport.online/",
    gradient: "linear-gradient(135deg, #312e81, #4f46e5)",
  },
  {
    title: "Restaurant POS & Online Ordering",
    summary:
      "Point of sale for a fast-food restaurant in Oran: POS, real-time API, QR menu and thermal-printer agent in one repo, with local/remote sync so it keeps running offline.",
    metric: "14 staff screens",
    tags: ["React 19", "Vite", "Express", "MongoDB", "socket.io", "Docker"],
    image: "/projects/restaurant-pos.png",
    note: "Runs on-site, no public demo",
    gradient: "linear-gradient(135deg, #0369a1, #0ea5e9)",
  },
  {
    title: "NaftTime",
    summary:
      "HR attendance system that replaced Naftal's legacy “Naft Presence” software: a sync worker reads ZKTeco time clocks over TCP and builds the monthly attendance sheets.",
    metric: "Deployed at 7 Naftal sites",
    tags: ["Next.js 14", "NextAuth", "Express", "Prisma", "PostgreSQL", "Zod", "Docker"],
    note: "Internal Naftal system, no public demo",
    gradient: "linear-gradient(135deg, #0f766e, #14b8a6)",
  },
  {
    title: "Naftal Staff Connect",
    summary:
      "Staff management for Naftal gas stations: staff records, station assignments, leave and absences, document generation with tracked transmittal slips and real-time notifications.",
    tags: ["Next.js", "Express", "MongoDB", "socket.io", "node-cron"],
    note: "Internal Naftal system, no public demo",
    gradient: "linear-gradient(135deg, #0c4a6e, #0284c7)",
  },
];

const otherProjects = [
  {
    title: "Medixa",
    summary: "Turns PDFs into MCQs, summaries and audio podcasts with a RAG pipeline.",
    live: "https://medixa-tau.vercel.app/",
  },
  {
    title: "EasyShop",
    summary: "E-commerce storefront with inventory and order management dashboard.",
    live: "https://easyshop-nu.vercel.app/",
  },
  {
    title: "Supermely",
    summary: "AI relationship-counseling chat with WhatsApp and Telegram integration.",
    live: "https://supermely.com/",
  },
];

const linkStyle = {
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
};

const liveLinkStyle = {
  ...linkStyle,
  color: "white",
  border: "none",
  background: "linear-gradient(135deg, var(--blue-600), var(--blue-500))",
};

function CodeLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={linkStyle}
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
  );
}

function LiveLink({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={liveLinkStyle}>
      <FiExternalLink size={14} /> Live
    </a>
  );
}

export default function Projects() {
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
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              Production apps used by real customers and staff
            </p>
          </motion.div>

          {/* Project Grid */}
          <motion.div
            variants={containerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))",
              gap: "1.5rem",
            }}
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
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

                {project.image && (
                  <a
                    href={project.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      borderBottom: "1px solid var(--border)",
                      background: "var(--bg-secondary)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </a>
                )}

                <div
                  style={{
                    padding: "1.75rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1.3,
                      marginBottom: "0.6rem",
                    }}
                  >
                    {project.title}
                  </h3>

                  {project.metric && (
                    <div
                      className="gradient-text"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1rem",
                        fontWeight: 700,
                        marginBottom: "0.6rem",
                      }}
                    >
                      {project.metric}
                    </div>
                  )}

                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      marginBottom: "1.25rem",
                      flex: 1,
                    }}
                  >
                    {project.summary}
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
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    {project.live && <LiveLink href={project.live} />}
                    {project.github && <CodeLink href={project.github} />}
                    {project.note && (
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          color: "var(--text-muted)",
                          fontSize: "0.8rem",
                        }}
                      >
                        <FiLock size={12} /> {project.note}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Other projects */}
          <motion.div variants={itemVariants} style={{ marginTop: "3rem" }}>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Other projects
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
                gap: "1rem",
              }}
            >
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="glass-card"
                  style={{
                    padding: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {project.title}
                    </div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                      {project.summary}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto" }}>
                    <LiveLink href={project.live} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
