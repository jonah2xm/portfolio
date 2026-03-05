"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBriefcase, FiBook } from "react-icons/fi";

const experiences = [
  {
    type: "work",
    role: "Senior Full-Stack & AI Engineer",
    company: "TechNova AI",
    period: "2023 – Present",
    description:
      "Lead engineer on a team of 8, architecting and shipping an AI-driven SaaS platform used by 10,000+ users. Built RAG-powered document intelligence, real-time collaboration features, and a multi-tenant backend serving 500k+ API requests/day.",
    highlights: [
      "RAG Pipeline",
      "Real-time Collab",
      "Multi-tenant SaaS",
      "Next.js 14",
      "FastAPI",
    ],
  },
  {
    type: "work",
    role: "Full-Stack Developer",
    company: "StartupHQ",
    period: "2021 – 2023",
    description:
      "Built and maintained 3 production web platforms from the ground up. Integrated GPT-3/4 APIs for content generation, implemented microservices architecture on AWS, and reduced page load times by 60% through aggressive optimization.",
    highlights: ["React", "Node.js", "AWS", "Microservices", "GPT API"],
  },
  {
    type: "work",
    role: "Frontend Developer",
    company: "DigitalCraft Agency",
    period: "2020 – 2021",
    description:
      "Developed responsive web apps for 12+ clients across e-commerce, fintech, and healthcare. Introduced TypeScript across the frontend codebase and mentored 2 junior developers.",
    highlights: ["TypeScript", "React", "UI/UX", "Performance", "Mentoring"],
  },
  {
    type: "education",
    role: "B.Sc. Computer Science & AI",
    company: "University of Technology",
    period: "2016 – 2020",
    description:
      'Specialized in Machine Learning and Software Engineering. Thesis on "Attention Mechanisms in Transformer Models for Code Generation". Graduated with Honours.',
    highlights: ["Machine Learning", "NLP", "Algorithms", "Deep Learning"],
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
            <span className="badge" style={{ marginBottom: "1rem" }}>
              Career
            </span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              My professional journey building real products and teams
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
