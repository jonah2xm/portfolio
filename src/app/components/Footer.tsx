"use client";
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        padding: "2rem 1.5rem",
      }}
    >
      <div
        className="container-custom"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "var(--text-primary)",
          }}
        >
          <span style={{ color: "var(--accent)" }}>&lt;</span>
          YO
          <span style={{ color: "var(--accent)" }}>/&gt;</span>
        </div>

        {/* Copyright */}
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.85rem",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          © {year} Younes Oubelaid. Built with{" "}
          <FiHeart size={13} style={{ color: "#ef4444" }} /> using Next.js &
          Tailwind
        </p>

        {/* Socials */}
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {[
            {
              icon: <FiGithub size={18} />,
              href: "https://github.com/jonah2xm",
              label: "GitHub",
            },
            {
              icon: <FiLinkedin size={18} />,
              href: "https://www.linkedin.com/in/younes-oubelaid-809408220/",
              label: "LinkedIn",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
                display: "flex",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-muted)")
              }
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
