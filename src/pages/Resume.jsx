import React from "react";
import { motion } from "framer-motion";
import { Clock } from 'lucide-react';

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 Tushar J. Bharambe
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: "#ccc" }}>
              3rd Year B.Tech — CSE(DS) | KCE's Jalgaon
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Jalgaon, Maharastra
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ tusharbharambe2005@gmail.com | 📞 +91 9096096305
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 360,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              3rd-year B.Tech CSE (Data Science) student skilled in Python, Django, React, and n8n. Experienced through an internship at Rupeeflo, working on real-world applications and API integrations. Seeking opportunities in software development and full stack projects.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.Tech CSE (Data Science) </strong>
              KCE's collage of engineering (DBATU) — Jalgaon, Maharashtra 2024–2026 <br />
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Diploma — KCE Societies Polytechnic (MSBTE) </strong>
              Jalgaon, Maharashtra 2024 <br />
              <span style={{ color: "#aaa" }}>Percentage: 75%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Board — Ekalavya Madhyamic Vidyalay — Jamner, Jalgaon, Maharashtra </strong>
              (SSC Board, 2021)
              <br />
              <span style={{ color: "#aaa" }}>Percentage: 78%</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>1️⃣ Disaster prediction</li>
            <li>2️⃣ YatraStay</li>
            <li>3️⃣ Text to wave</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Python",
              "C",
              "C++",
              "Java",
              "React",
              "MySQL",
              "MongoDB",
              "Git",
              "N8N",
              "Django",
              "Problem Solving",
              "Teamwork",
              "TeamLead",
              "Adaptability",
              "Creativity",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/tusharbharambe2005" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/tushar-b-696777238/" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Coming Soon Message - Replacing iframe */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "2px dashed rgba(0,180,255,0.3)",
            background: "rgba(0,180,255,0.05)",
            padding: "100px 20px",
            textAlign: "center",
            height: "650px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            animate={{ 
              rotate: 360,
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              display: "inline-block",
              marginBottom: 20,
            }}
          >
            <Clock size={70} color="#00b4ff" opacity={0.7} />
          </motion.div>
          
          <motion.h3
            animate={{ 
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              fontSize: 28,
              color: "#00b4ff",
              marginBottom: 15,
              fontWeight: 600,
            }}
          >
            📄 Resume Coming Soon
          </motion.h3>
          
          <p style={{ 
            color: "#999", 
            fontSize: 16,
            maxWidth: 500,
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            The PDF version of my resume will be available here shortly. Stay tuned for updates!
          </p>
        </motion.div>

        {/* Coming Soon Button - Replacing Download */}
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <motion.div
            animate={{ 
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(0,180,255,0.1)",
              border: "1px dashed rgba(0,180,255,0.3)",
              color: "#00b4ff",
              padding: "10px 22px",
              borderRadius: 8,
              fontWeight: 500,
              letterSpacing: 0.3,
              cursor: "not-allowed",
            }}
          >
            <Clock size={18} />
            Download Available Soon
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}