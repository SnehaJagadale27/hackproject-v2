import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, Sparkles, Code2, Layers, Cpu, Database, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';
import TiltCard from '../components/TiltCard';
import { project, allProjects } from '../data/teamData';

export default function Project() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI & ML', 'Full-Stack', 'IoT & Cloud'];

  const filteredProjects =
    activeCategory === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper id="project" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Sparkles size={13} className="animate-spin" /> Flagship Deployments & Innovations
          </motion.div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Engineered For <span className="gradient-text">Real-World Impact</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            From enterprise cloud systems to deep learning research and IoT telemetry, explore our multi-disciplinary project portfolio.
          </p>
        </div>

        {/* ─── FEATURED SPOTLIGHT: Fullstack Digital Library System ─── */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> Star Flagship Project
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center bg-navy-900/60 rounded-3xl border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl -z-10" />

            {/* Left: 3D Project Showcase Mockup */}
            <div className="lg:col-span-6">
              <TiltCard glowColor="rgba(6, 182, 212, 0.4)">
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 glass p-2 group">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-navy-950">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 flex flex-col items-center justify-center p-6 text-center"><span class="text-6xl mb-3 animate-bounce">📚</span><span class="font-bold text-white text-lg">${project.name}</span><span class="text-xs text-cyan-400 font-mono mt-1">Live Firestore DB • React.js</span></div>`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-navy-900/80 backdrop-blur-md border border-white/10 text-xs font-mono text-cyan-300">
                      ★ Featured 2026
                    </div>
                  </div>

                  {/* Realtime Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-white/5">
                    {project.metrics?.map((m, i) => (
                      <div key={i} className="text-center p-2 rounded-lg bg-white/5">
                        <div className="text-xs sm:text-sm font-bold text-cyan-300 font-mono">{m.value}</div>
                        <div className="text-[10px] text-white/40 uppercase">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Right: Rich Details */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">{project.tagline}</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">{project.name}</h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed mt-2">
                  {project.description}
                </p>
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-rose-500/20">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-rose-400 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> Challenge
                  </h4>
                  <p className="text-xs text-white/50 leading-normal">{project.problem}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-emerald-500/20">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Solution
                  </h4>
                  <p className="text-xs text-white/50 leading-normal">{project.solution}</p>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">Key Capabilities</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features?.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                      <CheckCircle2 size={13} className="text-cyan-400 flex-shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
                >
                  <Play size={14} className="fill-current" /> Launch Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-white/80 hover:text-white hover:bg-white/10 text-sm font-semibold border border-white/10 transition-all duration-300"
                >
                  <FaGithub size={15} /> Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── ALL INNOVATIONS GRID WITH INTERACTIVE FILTER TABS ─── */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold font-display text-white">NexCore Innovation Vault</h3>
              <p className="text-xs sm:text-sm text-white/50">Filter through our multi-domain engineering projects</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-navy-900/80 border border-white/10 backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <TiltCard
                    glowColor="rgba(6, 182, 212, 0.25)"
                    className={`h-full rounded-2xl border border-white/10 bg-navy-900/50 hover:bg-navy-800/60 transition-all p-5 flex flex-col justify-between group ${p.borderGlow}`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold bg-white/5 border border-white/10 text-cyan-300">
                          {p.badge}
                        </span>
                        <span className="text-[11px] font-mono text-white/40">{p.category}</span>
                      </div>

                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-xs text-purple-400 font-mono mb-2">{p.subtitle}</p>
                      <p className="text-xs text-white/60 line-clamp-3 leading-relaxed mb-4">
                        {p.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1 mb-4">
                        {p.highlights?.map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-white/70">
                            <span className="w-1 h-1 rounded-full bg-cyan-400" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {p.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-white/60 border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Footer Link Actions */}
                      <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-white/40">{p.stats}</span>
                        <div className="flex items-center gap-2">
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Repository"
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all"
                          >
                            <FaGithub size={13} />
                          </a>
                          <a
                            href={p.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/25 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 text-xs font-semibold transition-all"
                          >
                            View <ArrowUpRight size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ─── LIVE PROJECT STATS ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {project.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="text-center py-6 border-white/10 hover:border-cyan-500/30 transition-all">
                <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                <p className="text-xs text-white/40 uppercase tracking-wider font-mono">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
