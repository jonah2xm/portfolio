"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "AI Work", href: "#ai" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    onResize(); // set initial value
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.3s ease",
          background: scrolled || mobileOpen ? "var(--navbar-bg)" : "transparent",
          backdropFilter: scrolled || mobileOpen ? "blur(20px)" : "none",
          borderBottom:
            scrolled || mobileOpen
              ? "1px solid var(--border)"
              : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "70px",
          }}
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.4rem",
              fontWeight: 700,
              textDecoration: "none",
              color: "var(--text-primary)",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              zIndex: 1001,
            }}
          >
            <span style={{ color: "var(--accent)" }}>&lt;</span>
            YO
            <span style={{ color: "var(--accent)" }}>/&gt;</span>
          </motion.a>

          {/* Desktop Links */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    padding: "0.5rem 0.9rem",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "var(--accent)";
                    (e.target as HTMLElement).style.background = "var(--accent-glow)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "var(--text-secondary)";
                    (e.target as HTMLElement).style.background = "transparent";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}

          {/* Right controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Theme toggle */}
            {mounted && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "0.5rem",
                  cursor: "pointer",
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  transition: "all 0.2s ease",
                }}
                whileHover={{ scale: 1.05, borderColor: "var(--accent)" }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            )}

            {/* Mobile menu toggle */}
            {isMobile && (
              <motion.button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile menu"
                whileTap={{ scale: 0.92 }}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "0.5rem",
                  cursor: "pointer",
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={mobileOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            )}
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{
                overflow: "hidden",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  padding: "0.75rem 1rem 1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    style={{
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      fontSize: "1rem",
                      fontWeight: 500,
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "var(--accent)";
                      el.style.background = "var(--accent-glow)";
                      el.style.paddingLeft = "1.25rem";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "var(--text-secondary)";
                      el.style.background = "transparent";
                      el.style.paddingLeft = "1rem";
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        fontSize: "0.75rem",
                        fontFamily: "monospace",
                        opacity: 0.6,
                        minWidth: "1.5rem",
                      }}
                    >
                      0{i + 1}.
                    </span>
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Backdrop overlay for mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(2px)",
              top: "70px",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}