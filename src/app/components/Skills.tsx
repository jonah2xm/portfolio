"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiTailwindcss,
  SiGraphql,
  SiFastapi,
  SiOpenai,
  SiLangchain,
  SiGit,
  SiLinux,
} from "react-icons/si";
import { FiDatabase, FiCloud } from "react-icons/fi";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact />, level: 95, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 92, color: "#ffffff" },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        level: 90,
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: 88,
        color: "#06B6D4",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, level: 90, color: "#339933" },
      { name: "Python", icon: <SiPython />, level: 92, color: "#3776AB" },
      { name: "FastAPI", icon: <SiFastapi />, level: 85, color: "#009688" },
      { name: "GraphQL", icon: <SiGraphql />, level: 80, color: "#E10098" },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "OpenAI APIs", icon: <SiOpenai />, level: 95, color: "#412991" },
      { name: "LangChain", icon: <SiLangchain />, level: 85, color: "#1C3C3C" },
      { name: "Vector DBs", icon: <FiDatabase />, level: 82, color: "#3b82f6" },
      {
        name: "LLM Fine-tuning",
        icon: <SiOpenai />,
        level: 75,
        color: "#412991",
      },
    ],
  },
  {
    title: "DevOps & Data",
    skills: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        level: 88,
        color: "#336791",
      },
      { name: "MongoDB", icon: <SiMongodb />, level: 85, color: "#47A248" },
      { name: "Docker", icon: <SiDocker />, level: 87, color: "#2496ED" },
      { name: "AWS", icon: <FiCloud />, level: 80, color: "#FF9900" },
    ],
  },
];

const techCloud = [
  { name: "React", icon: <SiReact size={28} />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs size={28} />, color: "#aaaaaa" },
  { name: "TypeScript", icon: <SiTypescript size={28} />, color: "#3178C6" },
  { name: "Python", icon: <SiPython size={28} />, color: "#3776AB" },
  { name: "Node.js", icon: <SiNodedotjs size={28} />, color: "#339933" },
  { name: "PostgreSQL", icon: <SiPostgresql size={28} />, color: "#336791" },
  { name: "MongoDB", icon: <SiMongodb size={28} />, color: "#47A248" },
  { name: "Docker", icon: <SiDocker size={28} />, color: "#2496ED" },
  { name: "OpenAI", icon: <SiOpenai size={28} />, color: "#aaaaaa" },
  { name: "AWS", icon: <FiCloud size={28} />, color: "#FF9900" },
  { name: "Git", icon: <SiGit size={28} />, color: "#F05032" },
  { name: "Linux", icon: <SiLinux size={28} />, color: "#FCC624" },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="section-padding"
      style={{ position: "relative" }}
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
              Tech Stack
            </span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              Tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          {/* Tech Cloud */}
          <motion.div variants={itemVariants}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.75rem",
              }}
            >
              {techCloud.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className="glass-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: "0.75rem 1.1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    cursor: "default",
                  }}
                >
                  <span
                    style={{
                      color: tech.color,
                      fontSize: "1.1rem",
                      display: "flex",
                    }}
                  >
                    {tech.icon}
                  </span>
                  <span
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                    }}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
