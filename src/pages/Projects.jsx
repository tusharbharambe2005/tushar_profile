// import React from 'react'
// import { motion } from 'framer-motion'
// import { Github, ExternalLink, Clock } from 'lucide-react'

// const PROJECTS = [
//   {
//     title: '🩺 Mammogram Malignancy Detector',
//     desc: 'Hybrid CNN + YOLOv8 ensemble for full-image breast cancer detection with ROI preprocessing and sliding-window inference.',
//     ss: '/mamo.png',
//     tech: ['TensorFlow', 'Keras', 'OpenCV', 'YOLOv8'],
//     live: '#',
//     code: 'https://github.com/kunjdesai/mammo-detector'
//   },
//   {
//     title: '🧠 Mental Health Analyzer',
//     desc: 'NLP-based system that analyzes user text to detect signs of anxiety, stress, and depression using sentiment analysis and transformer models.',
//     ss: '/mentalhealth.jpg',
//     tech: ['Python', 'Transformers', 'NLTK', 'scikit-learn'],
//     live: 'https://mental-health-analyzer.streamlit.app/',
//     code: 'https://github.com/tusharbharambe2005/Mental-Health-Analyzer'
//   },
//   {
//     title: '🤖 Indian Sign Language Interpreter',
//     desc: 'Real-time gesture recognition and translation using Mediapipe + TensorFlow, enabling live sign-to-text interpretation.',
//     ss: '/ISL.png',
//     tech: ['Mediapipe', 'TensorFlow', 'React', 'Flask'],
//     live: '#',
//     code: 'https://github.com/kunjdesai/ISL-Interpreter'
//   },
//   {
//     title: '💼 Portfolio Website',
//     desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
//     ss: '/portfolio.jpg',
//     tech: ['React', 'Framer Motion', 'Tailwind CSS'],
//     live: '#',
//     code: 'https://github.com/tusharbharambe2005/Kunj-Portfolio'
//   },
//   {
//     title: '💬 DocuChat – Gemini AI Chatbot',
//     desc: 'An intelligent document interaction app powered by Gemini API that understands and answers queries from uploaded PDFs.',
//     ss: '/Docuchat.png',
//     tech: ['Gemini API', 'LangChain', 'Python', 'Streamlit'],
//     live: 'https://docuchat-chatbot.streamlit.app/',
//     code: 'https://github.com/tusharbharambe2005/Docuchat-Chatbot'
//   },
//   {
//     title: '📊 ProfileX – Data Profiler',
//     desc: 'Smart data profiling and preprocessing web app for CSV datasets — feature summary, missing value handling, and visualization.',
//     ss: '/ProfileX.png',
//     tech: ['Streamlit', 'Pandas', 'Plotly'],
//     live: 'https://profilex.streamlit.app/',
//     code: 'https://github.com/kunjdesai/ProfileX'
//   },
//   {
//     title: '🧬 Breast Cancer Prediction',
//     desc: 'ML pipeline using SVC, Random Forest, and XGBoost with SMOTE for imbalanced dataset handling and model optimization.',
//     ss: '/breastpred.jpg',
//     tech: ['scikit-learn', 'XGBoost', 'Pandas'],
//     live: '#',
//     code: 'https://github.com/kunjdesai/BreastCancerPrediction'
//   },
//   {
//     title: '🚀 Coming Soon',
//     desc: 'Exciting new project in development. Stay tuned for something innovative and cutting-edge!',
//     comingSoon: true,
//     tech: ['AI', 'Machine Learning', 'Web Dev'],
//     live: '#',
//     code: '#'
//   }
// ]

// export default function Projects() {
//   return (
//     <motion.section
//       className="container"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       id="projects"
//     >
//       <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
//         <motion.h2
//           className="text-4xl font-semibold text-cyan-400 mb-2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.1 }}
//         >
//           🚀 Projects
//         </motion.h2>
//         <p className="text-gray-400 mb-10">
//           A collection of my major works — blending research, AI innovation, and modern UI design.
//         </p>

//         <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
//           {PROJECTS.map((p, idx) => (
//             <motion.div
//               key={idx}
//               className="project-card"
//               initial={{ opacity: 0, y: 20, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.4, delay: idx * 0.15 }}
//               whileHover={{ scale: p.comingSoon ? 1.02 : 1.03 }}
//               viewport={{ once: true }}
//               style={{
//                 background: p.comingSoon 
//                   ? 'linear-gradient(145deg, rgba(20,20,20,0.6), rgba(10,10,10,0.6))'
//                   : 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
//                 border: p.comingSoon 
//                   ? '1px dashed rgba(0,255,255,0.2)'
//                   : '1px solid rgba(0,255,255,0.1)',
//                 borderRadius: 16,
//                 padding: 16,
//                 overflow: 'hidden',
//                 boxShadow: '0 0 20px rgba(0,255,255,0.08)',
//                 position: 'relative'
//               }}
//             >
//               {p.comingSoon ? (
//                 <motion.div 
//                   className="ss"
//                   animate={{ 
//                     opacity: [0.3, 0.5, 0.3],
//                   }}
//                   transition={{ 
//                     duration: 3, 
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }}
//                   style={{ 
//                     borderRadius: 12, 
//                     overflow: 'hidden',
//                     height: '200px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     background: 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(8,145,178,0.1))',
//                     border: '2px dashed rgba(0,255,255,0.2)'
//                   }}
//                 >
//                   <motion.div
//                     animate={{ 
//                       rotate: 360,
//                     }}
//                     transition={{ 
//                       duration: 20, 
//                       repeat: Infinity,
//                       ease: "linear"
//                     }}
//                   >
//                     <Clock size={48} color="#06b6d4" opacity={0.5} />
//                   </motion.div>
//                 </motion.div>
//               ) : (
//                 <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
//                   <img
//                     src={p.ss}
//                     alt={p.title}
//                     style={{
//                       width: '100%',
//                       height: '200px',
//                       objectFit: 'cover',
//                       borderRadius: 12
//                     }}
//                   />
//                 </motion.div>
//               )}

//               <div style={{ marginTop: 12 }}>
//                 <h3 style={{ 
//                   fontSize: 18, 
//                   color: p.comingSoon ? '#888' : '#0ea5e9', 
//                   marginBottom: 6 
//                 }}>
//                   {p.title}
//                 </h3>
//                 <p style={{ 
//                   fontSize: 14, 
//                   color: p.comingSoon ? '#777' : '#bbb', 
//                   marginBottom: 8, 
//                   lineHeight: 1.6,
//                   fontStyle: p.comingSoon ? 'italic' : 'normal'
//                 }}>
//                   {p.desc}
//                 </p>

//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
//                   {p.tech.map((t) => (
//                     <span
//                       key={t}
//                       style={{
//                         background: 'rgba(0,255,255,0.05)',
//                         border: '1px solid rgba(0,255,255,0.1)',
//                         padding: '3px 8px',
//                         borderRadius: 6,
//                         fontSize: 12,
//                         color: p.comingSoon ? '#666' : '#aaf'
//                       }}
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 {!p.comingSoon ? (
//                   <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
//                     <motion.a
//                       href={p.code}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="btn"
//                       whileHover={{ scale: 1.08 }}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 5,
//                         background: 'rgba(255,255,255,0.05)',
//                         color: '#0ea5e9',
//                         padding: '6px 12px',
//                         borderRadius: 8,
//                         fontSize: 13,
//                         border: '1px solid rgba(0,255,255,0.1)',
//                         textDecoration: 'none'
//                       }}
//                     >
//                       <Github size={14} /> Code
//                     </motion.a>
//                     <motion.a
//                       href={p.live}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="btn"
//                       whileHover={{ scale: 1.08 }}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 5,
//                         background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
//                         color: '#fff',
//                         padding: '6px 12px',
//                         borderRadius: 8,
//                         fontSize: 13,
//                         textDecoration: 'none'
//                       }}
//                     >
//                       <ExternalLink size={14} /> Live
//                     </motion.a>
//                   </div>
//                 ) : (
//                   <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
//                     <motion.div
//                       animate={{ 
//                         opacity: [0.4, 0.7, 0.4],
//                       }}
//                       transition={{ 
//                         duration: 2, 
//                         repeat: Infinity,
//                         ease: "easeInOut"
//                       }}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 6,
//                         color: '#06b6d4',
//                         fontSize: 13,
//                         fontWeight: 500
//                       }}
//                     >
//                       <Clock size={14} />
//                       <span>In Development</span>
//                     </motion.div>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   )
// }
import React from 'react'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation, and modern UI design.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(145deg, rgba(20,20,20,0.6), rgba(10,10,10,0.6))',
              border: '1px dashed rgba(0,255,255,0.2)',
              borderRadius: 16,
              padding: 16,
              overflow: 'hidden',
              boxShadow: '0 0 20px rgba(0,255,255,0.08)',
              position: 'relative'
            }}
          >
            <motion.div 
              className="ss"
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ 
                borderRadius: 12, 
                overflow: 'hidden',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(8,145,178,0.1))',
                border: '2px dashed rgba(0,255,255,0.2)'
              }}
            >
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Clock size={48} color="#06b6d4" opacity={0.5} />
              </motion.div>
            </motion.div>

            <div style={{ marginTop: 12 }}>
              <h3 style={{ 
                fontSize: 18, 
                color: '#888', 
                marginBottom: 6 
              }}>
                🚀 Coming Soon
              </h3>
              <p style={{ 
                fontSize: 14, 
                color: '#777', 
                marginBottom: 8, 
                lineHeight: 1.6,
                fontStyle: 'italic'
              }}>
                Exciting new project in development. Stay tuned for something innovative and cutting-edge!
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                {['AI', 'Machine Learning', 'Web Dev'].map((t) => (
                  <span
                    key={t}
                    style={{
                      background: 'rgba(0,255,255,0.05)',
                      border: '1px solid rgba(0,255,255,0.1)',
                      padding: '3px 8px',
                      borderRadius: 6,
                      fontSize: 12,
                      color: '#666'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                <motion.div
                  animate={{ 
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    color: '#06b6d4',
                    fontSize: 13,
                    fontWeight: 500
                  }}
                >
                  <Clock size={14} />
                  <span>In Development</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}