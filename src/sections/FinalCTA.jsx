import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import { siteConfig, socialLinks } from '../data/teamData';
import { soundEngine } from '../utils/audioSystem';

const socials = [
  { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
  { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: FaInstagram, href: socialLinks.instagram, label: 'Instagram' },
];

export default function FinalCTA() {
  const scrollTo = (id) => {
    soundEngine.playClick();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const teamNameLetters = siteConfig.teamName.split("");

  return (
    <SectionWrapper id="signature" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background glow and subtle cyber grid */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-purple-600/15 via-cyan-500/10 to-blue-600/15 blur-[140px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-6">
            <Sparkles size={13} className="animate-spin" /> The Final Signature
          </div>

          {/* 3D Team Name Signature */}
          <div className="perspective-1000 mb-6">
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              {teamNameLetters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ rotateY: -90, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6, type: 'spring' }}
                  className="font-display text-5xl sm:text-7xl md:text-8xl font-black bg-gradient-to-b from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(6,182,212,0.4)] inline-block select-none"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Mandatory Iconic Closing Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h3 className="font-mono text-sm sm:text-base md:text-lg font-bold tracking-[.25em] text-cyan-300 uppercase mb-3">
              "WE DON'T JUST BUILD PROJECTS. WE BUILD POSSIBILITIES."
            </h3>
            <p className="text-sm sm:text-base text-white/50 max-w-xl mx-auto leading-relaxed">
              Four specialized engineering minds ready to take on the most ambitious challenges. Let's create the next breakthrough together.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <button
              onClick={() => scrollTo('#team')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
            >
              Explore Our Squad
            </button>
            <button
              onClick={() => scrollTo('#project')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass text-white/90 font-bold text-sm hover:text-white hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300"
            >
              Explore Projects <ArrowRight size={14} />
            </button>
          </div>

          {/* Social Icons Strip */}
          <div className="flex items-center justify-center gap-4 pt-6 border-t border-white/5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-md"
                aria-label={s.label}
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
