import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { members } from '../data/teamData';

const member = members.find(m => m.id === 1);

const skillColors = [
  'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-300',
  'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300',
  'from-cyan-500/20 to-teal-500/20 border-cyan-500/30 text-cyan-300',
  'from-emerald-500/20 to-green-500/20 border-emerald-500/30 text-emerald-300',
];

function SkillBar({ label, level, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="mb-3"
    >
      <div className="flex justify-between text-xs mb-1 text-white/60">
        <span>{label}</span>
        <span className="font-mono text-white/30">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.9, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </motion.div>
  );
}

export default function AbhayPortfolio() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-navy-950 text-white font-sans">
      {/* Back Button */}
      <div className="fixed top-5 left-5 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 hover:border-purple/40 text-white/60 hover:text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background orbs */}
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.15, 1], rotate: [0, -90, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
          {/* Member number badge */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/30 text-xs font-mono text-blue-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            NexCore · Member 01
          </motion.div>

          {/* Photo */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, type: 'spring' }}
            className="w-40 h-40 mx-auto mb-8 rounded-3xl overflow-hidden ring-4 ring-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
            <img src={member.photo} alt={member.name} style={{ objectPosition: member.photoPosition }}
              className="w-full h-full object-cover" onError={(e) => { e.target.style.display='none'; e.target.parentElement.innerHTML=`<div class="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-4xl font-bold">A</div>`; }} />
          </motion.div>

          {/* Name */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl sm:text-6xl font-black mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {member.name}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
            className="text-lg text-white/60 mb-6 font-medium">{member.role}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-white/40 max-w-xl mx-auto leading-relaxed mb-8">"{member.bio}"</motion.p>

          {/* Social Links */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-4">
            {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 hover:border-blue-500/50 text-white/60 hover:text-white text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <FaGithub size={16}/> GitHub</a>}
            {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 hover:border-purple-500/50 text-white/60 hover:text-white text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              <FaLinkedin size={16}/> LinkedIn</a>}
            {member.portfolio && <a href={member.portfolio} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105">
              <Globe size={16}/> Portfolio</a>}
          </motion.div>
        </div>
      </section>

      {/* Skills & Traits Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-8 border border-white/5">
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-6 font-mono">Technical Skills</p>
            <SkillBar label="Python / Machine Learning" level={88} color="from-blue-500 to-cyan-400" delay={0.1} />
            <SkillBar label="JavaScript / HTML / CSS" level={82} color="from-purple-500 to-pink-400" delay={0.2} />
            <SkillBar label="Java / C / C++" level={78} color="from-cyan-500 to-teal-400" delay={0.3} />
            <SkillBar label="Data Analysis / Power BI" level={75} color="from-emerald-500 to-green-400" delay={0.4} />
            <SkillBar label="Node.js / APIs / Firebase" level={70} color="from-orange-500 to-amber-400" delay={0.5} />
            <div className="mt-6 flex flex-wrap gap-2">
              {member.technicalSkills.map((skill, i) => (
                <span key={skill} className={`px-3 py-1 rounded-full text-xs font-medium border bg-gradient-to-r ${skillColors[i % skillColors.length]}`}>{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills & Personality */}
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="glass rounded-3xl p-8 border border-white/5">
              <p className="text-xs uppercase tracking-widest text-purple-400 mb-5 font-mono">Soft Skills</p>
              <div className="flex flex-wrap gap-2">
                {member.softSkills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-xl text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">{skill}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
              className="glass rounded-3xl p-8 border border-white/5">
              <p className="text-xs uppercase tracking-widest text-cyan-400 mb-5 font-mono">Personality</p>
              <div className="flex flex-wrap gap-2">
                {member.personality.map(trait => (
                  <span key={trait} className="px-3 py-1.5 rounded-xl text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{trait}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Team CTA */}
      <section className="py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-white/30 text-sm mb-4">Explore other team members</p>
          <Link to="/#team" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300">
            <ArrowLeft size={16} /> Back to NexCore Team
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
