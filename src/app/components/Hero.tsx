"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { SiOpenai } from "react-icons/si";

const roles = [
  "Full-Stack Developer",
  "AI Integration Specialist",
  "React & Next.js Expert",
  "Python & ML Engineer",
  "API Architect",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < role.length) {
      timeout = setTimeout(
        () => setDisplayed(role.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(role.slice(0, displayed.length - 1)),
        40,
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "6rem 1.5rem 4rem",
      }}
    >
      {/* Blobs */}
      <div
        className="blob"
        style={{
          width: "600px",
          height: "600px",
          background: "var(--blue-600)",
          top: "-10%",
          right: "-15%",
          animationDelay: "0s",
        }}
      />
      <div
        className="blob"
        style={{
          width: "400px",
          height: "400px",
          background: "var(--blue-400)",
          bottom: "-10%",
          left: "-10%",
          animationDelay: "2s",
        }}
      />
      <div
        className="blob"
        style={{
          width: "300px",
          height: "300px",
          background: "var(--blue-800)",
          top: "40%",
          left: "30%",
          animationDelay: "4s",
        }}
      />

      {/* Grid lines bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          zIndex: 1,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              style={{ marginBottom: "1.5rem" }}
            >
              <span className="badge">
                <SiOpenai size={12} />
                Available for work
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                marginBottom: "1rem",
                color: "var(--text-primary)",
              }}
            >
              Hi, I'm{" "}
              <span className="gradient-text-animated">Younes Oubelaid</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              variants={itemVariants}
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginBottom: "1.5rem",
                minHeight: "2.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ color: "var(--accent)" }}>›</span>
              <span>{displayed}</span>
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.4em",
                  background: "var(--accent)",
                  animation: "pulse-glow 1s step-end infinite",
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "1.1rem",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                maxWidth: "600px",
                marginBottom: "2.5rem",
              }}
            >
              I build{" "}
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                scalable web applications
              </span>{" "}
              and integrate{" "}
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                cutting-edge AI solutions
              </span>{" "}
              — from LLM-powered chatbots and RAG pipelines to production-ready
              full-stack platforms.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "3rem",
              }}
            >
              <a href="#projects" className="btn-primary">
                View My Work
                <FiArrowDown size={16} />
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1T8f6FkCQ9RCETgizGV9PUINB3_AWcfSV"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                <FiDownload size={16} />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              style={{ display: "flex", gap: "1rem", alignItems: "center" }}
            >
              <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                Find me on
              </span>
              {[
                {
                  icon: <FiGithub size={20} />,
                  href: "https://github.com/jonah2xm",
                  label: "GitHub",
                },
                {
                  icon: <FiLinkedin size={20} />,
                  href: "https://linkedin.com/in/younes-oubelaid-809408220/",
                  label: "LinkedIn",
                },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    color: "var(--text-secondary)",
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--text-secondary)")
                  }
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{
            position: "absolute",
            bottom: "-3rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--text-muted)",
            fontSize: "0.75rem",
          }}
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <FiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section >
  );
}
