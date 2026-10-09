import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { members } from '../data/teamData';

const member = members.find(m => m.id === 4);

const skillColors = [
  'from-emerald-500/20 to-green-500/20 border-emerald-500/30 text-emerald-300',
  'from-teal-500/20 to-cyan-500/20 border-teal-500/30 text-teal-300',
  'from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-300',
  'from-blue-500/20 to-teal-500/20 border-blue-500/30 text-blue-300',
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

export default function SandhyaPortfolio() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-navy-950 text-white font-sans">
      <div className="fixed top-5 left-5 z-50">
        <Link to="/" className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 hover:border-emerald-500/40 text-white/60 hover:text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group">
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.15, 1], rotate: [0, -90, 0] }} transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            NexCore · Member 04
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, type: 'spring' }}
            className="w-40 h-40 mx-auto mb-8 rounded-3xl overflow-hidden ring-4 ring-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.3)]">
            <img src={member.photo} alt={member.name} style={{ objectPosition: member.photoPosition }}
              className="w-full h-full object-cover" onError={(e) => { e.target.style.display='none'; e.target.parentElement.innerHTML=`<div class="w-full h-full bg-gradient-to-br from-emerald-500/30 to-teal-500/30 flex items-center justify-center text-4xl font-bold">S</div>`; }} />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl sm:text-6xl font-black mb-3 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            {member.name}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="text-lg text-white/60 mb-6 font-medium">{member.role}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-white/40 max-w-xl mx-auto leading-relaxed mb-8">"{member.bio}"</motion.p>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-4 flex-wrap">
            {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 hover:border-emerald-500/50 text-white/60 hover:text-white text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <FaGithub size={16}/> GitHub</a>}
            {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 hover:border-emerald-500/50 text-white/60 hover:text-white text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <FaLinkedin size={16}/> LinkedIn</a>}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-8 border border-white/5">
            <p className="text-xs uppercase tracking-widest text-emerald-400 mb-6 font-mono">Technical Skills</p>
            <SkillBar label="Python / AI & ML" level={88} color="from-emerald-500 to-teal-400" delay={0.1} />
            <SkillBar label="C++ / Java" level={82} color="from-teal-500 to-cyan-400" delay={0.2} />
            <SkillBar label="Machine Learning" level={85} color="from-green-500 to-emerald-400" delay={0.3} />
            <SkillBar label="Web Development" level={75} color="from-blue-500 to-teal-400" delay={0.4} />
            <SkillBar label="Software Development" level={80} color="from-cyan-500 to-blue-400" delay={0.5} />
            <div className="mt-6 flex flex-wrap gap-2">
              {member.technicalSkills.map((skill, i) => (
                <span key={skill} className={`px-3 py-1 rounded-full text-xs font-medium border bg-gradient-to-r ${skillColors[i % skillColors.length]}`}>{skill}</span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="glass rounded-3xl p-8 border border-white/5">
              <p className="text-xs uppercase tracking-widest text-teal-400 mb-5 font-mono">Soft Skills</p>
              <div className="flex flex-wrap gap-2">
                {member.softSkills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-xl text-xs font-medium bg-teal-500/10 text-teal-300 border border-teal-500/20">{skill}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
              className="glass rounded-3xl p-8 border border-white/5">
              <p className="text-xs uppercase tracking-widest text-green-400 mb-5 font-mono">Personality</p>
              <div className="flex flex-wrap gap-2">
                {member.personality.map(trait => (
                  <span key={trait} className="px-3 py-1.5 rounded-xl text-xs font-medium bg-green-500/10 text-green-300 border border-green-500/20">{trait}</span>
                ))}
              </div>
            </motion.div>
            {member.experience && (
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.25 }}
                className="glass rounded-3xl p-8 border border-white/5">
                <p className="text-xs uppercase tracking-widest text-emerald-400 mb-5 font-mono">Experience</p>
                <ul className="space-y-2">
                  {member.experience.map(e => (
                    <li key={e} className="flex items-start gap-2 text-xs text-white/50">
                      <span className="text-emerald-400 mt-0.5">✦</span>{e}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-white/30 text-sm mb-4">Explore other team members</p>
          <Link to="/#team" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300">
            <ArrowLeft size={16} /> Back to NexCore Team
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
