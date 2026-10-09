import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Globe, Sparkles, Award, Code2, User, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { soundEngine } from '../utils/audioSystem';

const slugMap = { 1: 'abhay', 2: 'avinash', 3: 'sneha', 4: 'sandhya' };

export default function MemberModal({ member, onClose }) {
  const [activeTab, setActiveTab] = useState('skills');

  useEffect(() => {
    soundEngine.playModalOpen();
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!member) return null;
  const slug = slugMap[member.id];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl -z-10"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl rounded-3xl bg-navy-950 border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden text-white my-8"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all z-20"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Top Profile Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 pb-6 border-b border-white/10">
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden ring-4 ring-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.3)] bg-navy-900">
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{ objectPosition: member.photoPosition || 'center center' }}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-electric via-purple to-cyan flex items-center justify-center text-3xl font-bold font-display">${member.name.charAt(0)}</div>`;
                  }}
                />
              </div>
              <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-navy-950 border border-cyan-400 text-[10px] font-mono font-bold text-cyan-300">
                #{String(member.id).padStart(2, '0')}
              </span>
            </div>

            <div className="text-center sm:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-2">
                <Sparkles size={12} /> NexCore Specialist
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-sm font-mono text-cyan-300 mb-3">{member.role}</p>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-xl">"{member.bio}"</p>

              {/* Social Links */}
              <div className="flex items-center justify-center sm:justify-start gap-3 mt-4">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all"
                  >
                    <FaGithub size={16} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all"
                  >
                    <FaLinkedin size={16} />
                  </a>
                )}
                {member.portfolio && (
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all"
                  >
                    <Globe size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-2">
            {[
              { id: 'skills', label: 'Technical Stack', icon: Code2 },
              { id: 'personality', label: 'DNA & Strengths', icon: User },
              { id: 'achievements', label: 'Achievements', icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundEngine.playClick();
                    setActiveTab(tab.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={14} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="min-h-[160px]">
            {activeTab === 'skills' && (
              <div className="space-y-4">
                <p className="text-xs text-white/40 uppercase font-mono tracking-wider">Engineered proficiencies</p>
                <div className="flex flex-wrap gap-2">
                  {member.technicalSkills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-cyan-500/10 text-cyan-200 border border-cyan-500/30"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'personality' && (
              <div className="space-y-4">
                <p className="text-xs text-white/40 uppercase font-mono tracking-wider">Mindset & Collaboration</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {member.personality.map((p) => (
                    <div key={p} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2 text-xs text-purple-200">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="space-y-3">
                <p className="text-xs text-white/40 uppercase font-mono tracking-wider">Milestones & Activities</p>
                {member.achievements ? (
                  <ul className="space-y-2">
                    {member.achievements.map((ach, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-white/70">
                        <Award size={14} className="text-amber-400 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-2 text-xs text-white/70">
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-amber-400 shrink-0" />
                      <span>Hackathon Finalist & Core System Developer (2026)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-cyan-400 shrink-0" />
                      <span>Shipped production-ready fullstack & AI solutions with real-world users</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-white/60 hover:text-white transition-colors"
            >
              Close
            </button>
            <Link
              to={`/team/${slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-xs tracking-wide hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300"
            >
              Open Standalone Portfolio <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
