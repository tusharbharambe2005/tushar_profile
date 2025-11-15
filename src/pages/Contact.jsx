import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Mail } from "lucide-react";

import githubLogo from "../../public/github.png";
import linkedinLogo from "../../public/linkedin.png";
import gmailLogo from "../../public/gmail.png";
import whatsappLogo from "../../public/whatsapp.png";
import instagramLogo from "../../public/insta.png";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const quickLinks = [
    { img: githubLogo, title: "GitHub", link: "https://github.com/tusharbharambe2005" },
    {
      img: linkedinLogo,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/tushar-b-696777238/",
    },
    { img: gmailLogo, title: "Email", link: "mailto:tusharbharambe2005@gmail.com" },
    { img: whatsappLogo, title: "WhatsApp", link: "https://wa.me/+919096096305" },
    { img: instagramLogo, title: "Instagram", link: "https://www.instagram.com/tushar_bharambe_369/" },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "radial-gradient(circle at 25% 25%, rgba(0,255,200,0.08), transparent 80%)",
        color: "#fff",
        padding: "2rem 1.5rem 4rem",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "2.6rem",
          margin: "1.5rem 0 0.5rem 0",
          background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Let's Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          fontSize: "1.1rem",
          color: "rgba(255,255,255,0.8)",
          maxWidth: "700px",
          marginBottom: "2rem",
          lineHeight: 1.6,
        }}
      >
        Whether it's a new project, a collaboration, or just to say hi — I'd love to hear from you!
      </motion.p>

      {/* 🌟 Quick Links */}
      <motion.div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "2.2rem",
        }}
      >
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid var(--accent)",
                background: "rgba(255,255,255,0.05)",
                padding: "8px",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* 💌 Contact Form - Blurred with Coming Soon Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        {/* Blurred Form */}
        <div
          style={{
            filter: "blur(5px)",
            pointerEvents: "none",
            opacity: 0.4,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              width: "100%",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
              disabled
            />
            <input
              type="text"
              name="contact"
              placeholder="Your Email or Phone"
              value={form.contact}
              onChange={handleChange}
              style={inputStyle}
              disabled
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              style={inputStyle}
              disabled
            />
            <textarea
              name="message"
              placeholder="Your Message..."
              value={form.message}
              onChange={handleChange}
              rows="5"
              style={{ ...inputStyle, resize: "none" }}
              disabled
            />
            <button
              type="button"
              style={{
                padding: "12px",
                background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontWeight: "600",
                cursor: "not-allowed",
              }}
              disabled
            >
              🚀 Send Message
            </button>
          </div>
        </div>

        {/* Coming Soon Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            position: "absolute",
            top: "-1%",
            left: "10%",
            transform: "none",
            background: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(10px)",
            border: "2px dashed rgba(0, 255, 255, 0.3)",
            borderRadius: "16px",
            padding: "17px 30px",
            textAlign: "center",
            width: "84%",
            maxWidth: "401px",
            boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)",
            opacity: 1,
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              display: "inline-block",
              marginBottom: "15px",
            }}
          >
            <Mail size={50} color="#00d4ff" opacity={0.8} />
          </motion.div>

          <motion.h3
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              fontSize: "1.8rem",
              color: "#00d4ff",
              marginBottom: "12px",
              fontWeight: 600,
            }}
          >
            📧 Email Functionality Coming Soon
          </motion.h3>

          <p
            style={{
              color: "#aaa",
              fontSize: "0.95rem",
              lineHeight: 1.6,
              marginBottom: "20px",
            }}
          >
            Direct email sending is currently being set up. Meanwhile, feel free to reach out via the social links above!
          </p>

          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0, 212, 255, 0.1)",
              border: "1px dashed rgba(0, 212, 255, 0.3)",
              color: "#00d4ff",
              padding: "8px 18px",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            <Clock size={16} />
            Feature Under Development
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  outline: "none",
};