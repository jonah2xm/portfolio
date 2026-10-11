"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBriefcase, FiBook } from "react-icons/fi";

const experiences = [
  {
    type: "work",
    role: "Full-Stack Developer & Co-founder",
    company: "Sintek.io",
    period: "Aug 2024 – Present",
    description:
      "Two-person dev studio delivering paid web and AI products for international clients, from first spec through staging to production launch. Projects include Notaura (1,000+ subscribers), CoachSupport and a restaurant POS.",
    highlights: ["Next.js", "Express", "MongoDB", "Stripe", "RAG", "socket.io"],
  },
  {
    type: "work",
    role: "Software Development Engineer",
    company: "Naftal SPA (Sonatrach group)",
    period: "Aug 2023 – Present",
    description:
      "Build internal systems used across 7 Naftal sites: NaftTime (HR attendance, replacing the legacy Naft Presence software) and Naftal Staff Connect, plus REST APIs and dashboards for operational reporting.",
    highlights: ["Next.js", "Express", "Prisma", "PostgreSQL", "MongoDB", "Docker"],
  },
  {
    type: "work",
    role: "Software Development Engineer",
    company: "SARL Ghaouti Pro Distribution",
    period: "Mar 2023 – Aug 2023",
    description:
      "Built REST APIs and ERP modules for sales and distribution; extended database schemas for multi-user access.",
    highlights: ["REST APIs", "ERP", "SQL"],
  },
  {
    type: "education",
    role: "MSc in Artificial Intelligence",
    company: "University of Science and Technology of Oran (USTO)",
    period: "2020 – 2022",
    description:
      "Machine learning, deep learning, computer vision, NLP. Thesis: forest fire detection from satellite imagery. Graduated with Honours.",
    highlights: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP"],
  },
  {
    type: "education",
    role: "BSc in Computer Science",
    company: "University Centre of Naama",
    period: "2017 – 2020",
    description: "Bachelor's degree in Computer Science.",
    highlights: [],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="section-padding"
      style={{ background: "var(--bg-secondary)", position: "relative" }}
    >
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div style={{ marginBottom: "3.5rem", textAlign: "center" }}>

            <h2 className="section-title" style={{ textAlign: "center" }}>
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              My professional journey building real products
            </p>
          </div>

          {/* Timeline */}
          <div
            style={{
              position: "relative",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: "28px",
                top: 0,
                bottom: 0,
                width: "2px",
                background:
                  "linear-gradient(to bottom, var(--blue-500), var(--blue-900))",
                opacity: 0.4,
              }}
            />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{
                  display: "flex",
                  gap: "1.75rem",
                  marginBottom: "2rem",
                  position: "relative",
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "50%",
                    background:
                      exp.type === "work"
                        ? "linear-gradient(135deg, var(--blue-600), var(--blue-500))"
                        : "var(--accent-glow)",
                    border:
                      exp.type === "education"
                        ? "2px solid var(--accent)"
                        : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: exp.type === "work" ? "white" : "var(--accent)",
                    flexShrink: 0,
                    boxShadow: "0 4px 16px var(--shadow-blue)",
                    zIndex: 1,
                  }}
                >
                  {exp.type === "work" ? (
                    <FiBriefcase size={22} />
                  ) : (
                    <FiBook size={22} />
                  )}
                </div>

                {/* Content */}
                <div
                  className="glass-card"
                  style={{ flex: 1, padding: "1.5rem" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div
                        style={{
                          color: "var(--accent)",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                        }}
                      >
                        {exp.company}
                      </div>
                    </div>
                    <span
                      style={{
                        background: "var(--accent-glow)",
                        border: "1px solid var(--border-blue)",
                        color: "var(--accent)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        padding: "0.25rem 0.75rem",
                        borderRadius: "50px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      marginBottom: "1rem",
                    }}
                  >
                    {exp.description}
                  </p>

                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}
                  >
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        style={{
                          background: "var(--bg-secondary)",
                          border: "1px solid var(--border)",
                          color: "var(--text-secondary)",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          padding: "0.2rem 0.6rem",
                          borderRadius: "4px",
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
