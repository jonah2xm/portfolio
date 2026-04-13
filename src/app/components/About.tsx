"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCode, FiBriefcase, FiCpu, FiUsers } from "react-icons/fi";

const stats = [
  { icon: <FiBriefcase size={22} />, value: "2+", label: "Years Experience" },
  { icon: <FiCode size={22} />, value: "7+", label: "Projects Delivered" },
  { icon: <FiCpu size={22} />, value: "5+", label: "AI Integrations" },
  { icon: <FiUsers size={22} />, value: "10+", label: "Happy Clients" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="about"
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
            style={{ marginBottom: "3.5rem", textAlign: "center" }}
          >
            <span className="badge" style={{ marginBottom: "1rem" }}>
              About Me
            </span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              The Developer{" "}
              <span className="gradient-text">Behind the Code</span>
            </h2>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              Passionate about building intelligent, user-first digital
              experiences
            </p>
          </motion.div>

          {/* Two-column layout */}
          <motion.div
            variants={containerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* Text */}
            <motion.div variants={itemVariants}>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--accent)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Who I Am
              </div>
              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.9,
                  marginBottom: "1.25rem",
                  fontSize: "1.05rem",
                }}
              >
                I&apos;m a full-stack developer and AI integration specialist with a
                deep passion for building technology that{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  actually solves problems
                </strong>
                . With 2+ years of experience, I&apos;ve shipped everything from SaaS
                platforms and e-commerce systems to AI-powered document
                processors and LLM-driven chat applications.
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.9,
                  marginBottom: "2rem",
                  fontSize: "1.05rem",
                }}
              >
                My sweet spot is the{" "}
                <strong style={{ color: "var(--accent)" }}>
                  intersection of modern web engineering and AI
                </strong>{" "}
                — designing architectures that are not only scalable and
                maintainable, but genuinely intelligent.
              </p>

              {/* Highlights */}
              {[
                "🎓 Computer Science & Machine Learning background",
                "🏗️  Expert in microservices & cloud-native architectures",
                "🤖 Built RAG pipelines, AI agents & LLM-powered APIs",
                "🌍  Remote-first, async-fluent, collaboration-driven",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.6rem",
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="glass-card"
                  style={{ padding: "1.75rem 1.5rem", textAlign: "center" }}
                  whileHover={{ y: -4 }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "var(--accent-glow)",
                      border: "1px solid var(--border-blue)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1rem",
                      color: "var(--accent)",
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.25rem",
                    }}
                    className="gradient-text"
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
