"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
  FiTwitter,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "younesoubelaid2000@gmail.com",
    href: "mailto:younesoubelaid2000@gmail.com",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Oran ,Algeria (Remote)",
  },
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    value: "https://github.com/jonah2xm",
    href: "https://github.com/jonah2xm",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/younes-oubelaid-809408220/",
    href: "https://www.linkedin.com/in/younes-oubelaid-809408220/",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    padding: "0.85rem 1rem",
    color: "var(--text-primary)",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "'Inter', sans-serif",
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Blobs */}
      <div
        className="blob"
        style={{
          width: "400px",
          height: "400px",
          background: "var(--blue-600)",
          bottom: "-10%",
          right: "-10%",
          animationDelay: "0s",
        }}
      />
      <div
        className="blob"
        style={{
          width: "300px",
          height: "300px",
          background: "var(--blue-800)",
          top: "10%",
          left: "-5%",
          animationDelay: "2s",
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
              Contact
            </span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Let's <span className="gradient-text">Work Together</span>
            </h2>
            <p
              className="section-subtitle"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              Have a project in mind? I'm available for freelance, consulting,
              and full-time opportunities.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {/* Left — Info */}
            <motion.div variants={containerVariants}>
              <motion.div
                variants={itemVariants}
                style={{
                  padding: "2rem",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, var(--blue-900), var(--blue-700))",
                  marginBottom: "1.25rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "white",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  Open to new opportunities
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  Whether you need a full-stack platform, an AI-powered feature,
                  or a strategic technical consult — I'm here for it. Let's
                  build something great.
                </p>
              </motion.div>

              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="glass-card"
                  style={{
                    padding: "1rem 1.25rem",
                    marginBottom: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      color: "var(--accent)",
                      display: "flex",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "0.1rem",
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          color: "var(--text-primary)",
                          fontSize: "0.9rem",
                          textDecoration: "none",
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        style={{
                          color: "var(--text-primary)",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Socials */}
              <motion.div
                variants={itemVariants}
                style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}
              ></motion.div>
            </motion.div>

            {/* Right — Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-card" style={{ padding: "2rem" }}>
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: "center", padding: "2rem" }}
                  >
                    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                      🎉
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: "var(--text-primary)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Message Sent!
                    </h3>
                    <p style={{ color: "var(--text-muted)" }}>
                      Thanks for reaching out! I'll get back to you within 24
                      hours.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1rem",
                      }}
                    >
                      <div>
                        <label
                          style={{
                            display: "block",
                            color: "var(--text-muted)",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            marginBottom: "0.4rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="contact-name"
                          required
                          placeholder="Your name"
                          value={form.name}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) =>
                            (e.target.style.borderColor = "var(--accent)")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = "var(--border)")
                          }
                        />
                      </div>
                      <div>
                        <label
                          style={{
                            display: "block",
                            color: "var(--text-muted)",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            marginBottom: "0.4rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="contact-email"
                          required
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) =>
                            (e.target.style.borderColor = "var(--accent)")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = "var(--border)")
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          color: "var(--text-muted)",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          marginBottom: "0.4rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="contact-subject"
                        required
                        placeholder="Project inquiry, consulting..."
                        value={form.subject}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "var(--accent)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "var(--border)")
                        }
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          color: "var(--text-muted)",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          marginBottom: "0.4rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="contact-message"
                        required
                        rows={5}
                        placeholder="Tell me about your project..."
                        value={form.message}
                        onChange={handleChange}
                        style={{
                          ...inputStyle,
                          resize: "vertical",
                          minHeight: "120px",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "var(--accent)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "var(--border)")
                        }
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="btn-primary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        justifyContent: "center",
                        opacity: loading ? 0.7 : 1,
                        cursor: loading ? "not-allowed" : "pointer",
                      }}
                    >
                      {loading ? (
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              ease: "linear",
                            }}
                            style={{ display: "inline-block" }}
                          >
                            ⟳
                          </motion.span>
                          Sending...
                        </span>
                      ) : (
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <FiSend size={16} /> Send Message
                        </span>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
