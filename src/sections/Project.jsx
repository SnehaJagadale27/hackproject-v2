import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';
import { project } from '../data/teamData';

export default function Project() {
  return (
    <SectionWrapper id="project" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[.2em] text-cyan-light mb-3">Featured Work</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Best Project / <span className="gradient-text">Achievement</span>
          </h2>
        </div>

        {/* Main project card */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20 relative">
          
          <div className="absolute -inset-4 bg-gradient-to-r from-electric/10 via-purple/10 to-cyan/10 blur-2xl -z-10 rounded-full" />

          {/* Project image */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative group perspective-1000"
          >
            <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 glass p-2">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-[300px] sm:h-[400px] bg-navy-900 border border-white/5 flex items-center justify-center"><span class="text-6xl animate-pulse">🚀</span></div>`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                {/* Scanner effect on hover */}
                <div className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-cyan/20 to-transparent -translate-y-[200%] group-hover:animate-[scanline_2s_ease-in-out_infinite]" />
              </div>
            </div>
            
            {/* Floating tech badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass px-4 py-3 rounded-2xl border-purple/30 shadow-[0_0_20px_rgba(139,92,246,0.3)] hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span className="font-mono text-xs font-bold tracking-widest text-cyan-light">SYSTEM ONLINE</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Project details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">{project.name}</h3>
            <p className="text-white/50 leading-relaxed">{project.description}</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-purple-light mb-1">Problem</h4>
                <p className="text-sm text-white/40">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-cyan-light mb-1">Solution</h4>
                <p className="text-sm text-white/40">{project.solution}</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-electric-light mb-1">Impact</h4>
                <p className="text-sm text-white/40">{project.impact}</p>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-electric/10 text-electric-light border border-electric/20">
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-electric to-purple text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple/30 hover:scale-105 transition-all duration-300"
              >
                <Play size={14} /> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-white/70 text-sm font-semibold hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <FaGithub size={14} /> GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-white/70 text-sm font-semibold hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <ExternalLink size={14} /> View Project
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="text-center py-6">
                <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                <p className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
