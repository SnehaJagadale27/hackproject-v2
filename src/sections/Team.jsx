import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Globe } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import { members } from '../data/teamData';

function MemberCard({ member, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative glass rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Dynamic Glow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-electric/30 to-purple/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"
        style={{ transform: "translateZ(-50px)" }}
      />

      <div className="relative p-6">
        {/* Member number */}
        <span className="absolute top-4 right-4 text-xs font-mono text-white/15 font-bold">
          {String(member.id).padStart(2, '0')}
        </span>

        {/* Photo */}
        <div className="w-32 h-32 mx-auto mb-5 rounded-2xl overflow-hidden ring-2 ring-white/15 group-hover:ring-purple/60 transition-all duration-500 shadow-2xl scale-100 group-hover:scale-105 bg-navy-900" style={{ transform: "translateZ(30px)" }}>
          <img
            src={member.photo}
            alt={member.name}
            style={{ objectPosition: member.photoPosition || 'center center' }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-electric/30 to-purple/30 flex items-center justify-center text-2xl font-bold text-white/60">${member.name.charAt(0)}</div>`;
            }}
          />
        </div>

        {/* Name & Role */}
        <h3 className="font-display text-lg font-bold text-white text-center mb-1">{member.name}</h3>
        <p className="text-sm text-purple-light text-center mb-3">{member.role}</p>

        {/* Bio */}
        <p className="text-xs text-white/40 text-center mb-4 leading-relaxed">"{member.bio}"</p>

        {/* Technical Skills */}
        <div className="mb-3">
          <p className="text-[10px] uppercase tracking-widest text-white/25 mb-2 text-center">Skills</p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {member.technicalSkills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-electric/10 text-electric-light border border-electric/20 group-hover:bg-electric/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Personality */}
        <div className="mb-4">
          <div className="flex flex-wrap justify-center gap-1.5">
            {member.personality.map((trait) => (
              <span
                key={trait}
                className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple/10 text-purple-light border border-purple/20"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="GitHub">
              <FaGithub size={16} />
            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={16} />
            </a>
          )}
          {member.portfolio && (
            <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Portfolio">
              <Globe size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <SectionWrapper id="team" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[.2em] text-purple-light mb-3">Our People</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto">
            Different skills. One strong team.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <MemberCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
