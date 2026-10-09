import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, Sparkles, Code2, Award, Zap, Maximize2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import TiltCard from '../components/TiltCard';
import MemberModal from '../components/MemberModal';
import { members } from '../data/teamData';
import { soundEngine } from '../utils/audioSystem';

const slugMap = { 1: 'abhay', 2: 'avinash', 3: 'sneha', 4: 'sandhya' };

function MemberCard({ member, index, onSelectModal }) {
  const slug = slugMap[member.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="h-full"
    >
      <TiltCard
        glowColor="rgba(139, 92, 246, 0.35)"
        className="h-full group relative glass rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-purple-500/50 transition-all duration-500 flex flex-col justify-between"
      >
        <div
          onClick={() => {
            soundEngine.playWhoosh();
            onSelectModal(member);
          }}
          className="relative p-6 flex flex-col flex-1"
        >
          {/* Member ID Tag & Modal Quick Trigger */}
          <div className="flex items-center justify-between mb-4">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest bg-white/5 border border-white/10 text-cyan-300">
              MEMBER #{String(member.id).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-white/5 text-white/40 group-hover:text-cyan-300 transition-colors" title="Quick Preview">
                <Maximize2 size={12} />
              </span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            </div>
          </div>

          {/* Photo with Glowing Ring */}
          <div className="w-32 h-32 mx-auto mb-5 rounded-2xl overflow-hidden ring-2 ring-purple-500/40 group-hover:ring-cyan-400 transition-all duration-500 shadow-2xl group-hover:scale-105 bg-navy-900">
            <img
              src={member.photo}
              alt={member.name}
              style={{ objectPosition: member.photoPosition || 'center center' }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-electric via-purple to-cyan flex items-center justify-center text-2xl font-bold text-white font-display">${member.name.charAt(0)}</div>`;
              }}
            />
          </div>

          {/* Name & Role */}
          <h3 className="font-display text-lg font-bold text-white text-center mb-1 group-hover:text-cyan-300 transition-colors">
            {member.name}
          </h3>
          <p className="text-xs font-mono text-purple-300 text-center mb-3 min-h-[32px] flex items-center justify-center">
            {member.role}
          </p>

          {/* Bio */}
          <p className="text-xs text-white/50 text-center mb-4 leading-relaxed line-clamp-3">
            "{member.bio}"
          </p>

          {/* Technical Skills */}
          <div className="mb-4">
            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2 text-center font-mono">Core Stack</p>
            <div className="flex flex-wrap justify-center gap-1.5">
              {member.technicalSkills.slice(0, 5).map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Personality Traits */}
          <div className="mb-5">
            <div className="flex flex-wrap justify-center gap-1.5">
              {member.personality.slice(0, 3).map((trait) => (
                <span
                  key={trait}
                  className="px-2 py-0.5 rounded-full text-[10px] bg-purple-500/10 text-purple-300 border border-purple-500/20"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center items-center gap-3 mb-4 mt-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={15} />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={15} />
              </a>
            )}
            {member.portfolio && (
              <a
                href={member.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-colors"
                aria-label="Portfolio"
              >
                <Globe size={15} />
              </a>
            )}
          </div>

          {/* View Individual Portfolio Button */}
          <div onClick={(e) => e.stopPropagation()}>
            <Link
              to={`/team/${slug}`}
              className="group/btn flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-400 hover:from-cyan-500/20 hover:to-purple-500/20 text-white text-xs font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              View Full Portfolio
              <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform duration-300 text-cyan-300" />
            </Link>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <SectionWrapper id="team" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles size={13} /> The NexCore Engineering Collective
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Meet the <span className="gradient-text">NexCore</span> Team
          </h2>
          <p className="text-white/60 max-w-lg mx-auto text-sm sm:text-base">
            Four specialized minds united by a passion for solving hard problems. Click any card for the interactive modal or explore standalone portfolio pages.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <MemberCard
              key={member.id}
              member={member}
              index={i}
              onSelectModal={(m) => setSelectedMember(m)}
            />
          ))}
        </div>
      </div>

      {/* Member Profile Modal */}
      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </SectionWrapper>
  );
}
