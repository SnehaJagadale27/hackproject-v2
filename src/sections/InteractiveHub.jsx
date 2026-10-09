import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap, Activity, Code, Layers, Sparkles, Orbit } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import CyberTerminal from '../components/CyberTerminal';
import TiltCard from '../components/TiltCard';

export default function InteractiveHub() {
  const [activeStackTab, setActiveStackTab] = useState('All');

  const stackCategories = ['All', 'AI/ML', 'Full-Stack', 'Cloud & IoT', 'Tools'];

  const techArsenal = [
    { name: 'Python', cat: 'AI/ML', level: 'Advanced', desc: 'PyTorch, OpenCV, Data Science pipelines', icon: '🐍', glow: 'from-blue-500 to-yellow-400' },
    { name: 'React.js 19', cat: 'Full-Stack', level: 'Mastery', desc: 'Framer Motion, Tailwind, SPA architectures', icon: '⚛️', glow: 'from-cyan-400 to-blue-500' },
    { name: 'LangChain & GenAI', cat: 'AI/ML', level: 'Proficient', desc: 'RAG pipelines, Vector databases, LLM agents', icon: '🧠', glow: 'from-purple-500 to-pink-500' },
    { name: 'Firebase & Firestore', cat: 'Full-Stack', level: 'Production', desc: 'Real-time sync, Auth, Cloud functions', icon: '🔥', glow: 'from-amber-400 to-orange-500' },
    { name: 'Node.js & Express', cat: 'Full-Stack', level: 'Advanced', desc: 'REST APIs, WebSockets, microservices', icon: '⚡', glow: 'from-emerald-400 to-teal-500' },
    { name: 'AWS & Cloud', cat: 'Cloud & IoT', level: 'Proficient', desc: 'S3, Lambda, EC2, IoT Core infrastructure', icon: '☁️', glow: 'from-orange-400 to-amber-500' },
    { name: 'C++ & Algorithms', cat: 'Tools', level: 'Advanced', desc: 'High-perf computing, DSA, Embedded ESP32', icon: '⚙️', glow: 'from-indigo-500 to-blue-600' },
    { name: 'Docker & Git', cat: 'Tools', level: 'Mastery', desc: 'CI/CD, containerization, collaboration', icon: '🐳', glow: 'from-blue-400 to-cyan-500' },
  ];

  const filteredArsenal = activeStackTab === 'All'
    ? techArsenal
    : techArsenal.filter(t => t.cat === activeStackTab);

  return (
    <SectionWrapper id="interactive-hub" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Dynamic background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Activity size={13} className="text-cyan-400 animate-pulse" /> Live Interactive Lab & Command Deck
          </motion.div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Cybernetic <span className="gradient-text">Command Center</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Interact with our simulated dev environment, execute CLI tasks, and inspect our real-time engineering arsenal.
          </p>
        </div>

        {/* 2-Column Deck: Left Terminal, Right Tech Matrix */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Cyber Terminal (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 font-bold">
                <Terminal size={14} /> NexCore Interactive CLI
              </span>
              <span className="text-[11px] font-mono text-white/40">Try: `run test` or `stats`</span>
            </div>
            
            <TiltCard glowColor="rgba(6, 182, 212, 0.3)">
              <CyberTerminal />
            </TiltCard>

            {/* Live System Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 rounded-xl bg-navy-900/60 border border-white/5 flex flex-col">
                <span className="text-white/40 text-[10px] uppercase">Latency</span>
                <span className="text-emerald-400 font-bold text-sm">~18ms</span>
              </div>
              <div className="p-3 rounded-xl bg-navy-900/60 border border-white/5 flex flex-col">
                <span className="text-white/40 text-[10px] uppercase">Status</span>
                <span className="text-cyan-400 font-bold text-sm">Online</span>
              </div>
              <div className="p-3 rounded-xl bg-navy-900/60 border border-white/5 flex flex-col">
                <span className="text-white/40 text-[10px] uppercase">Architecture</span>
                <span className="text-purple-400 font-bold text-sm">Hydra Mesh</span>
              </div>
              <div className="p-3 rounded-xl bg-navy-900/60 border border-white/5 flex flex-col">
                <span className="text-white/40 text-[10px] uppercase">Engine</span>
                <span className="text-pink-400 font-bold text-sm">Vite + React 19</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack Matrix (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 flex items-center gap-2 font-bold">
                <Cpu size={14} /> Core Tech Arsenal
              </span>
              
              {/* Stack Category Filters */}
              <div className="flex gap-1 overflow-x-auto py-1">
                {stackCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveStackTab(cat)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                      activeStackTab === cat
                        ? 'bg-purple-500/30 text-purple-200 border border-purple-400/50'
                        : 'text-white/40 hover:text-white/80'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2.5">
              {filteredArsenal.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="group relative p-3 rounded-xl bg-navy-900/60 border border-white/10 hover:border-cyan-500/40 hover:bg-navy-800/60 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl p-1.5 rounded-lg bg-white/5 border border-white/10">{tech.icon}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {tech.name}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-white/5 text-purple-300 border border-purple-500/20">
                              {tech.level}
                            </span>
                          </div>
                          <p className="text-[11px] text-white/50">{tech.desc}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-white/30 uppercase">{tech.cat}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
