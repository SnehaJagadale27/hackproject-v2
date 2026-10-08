import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { siteConfig, socialLinks } from '../data/teamData';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socials = [
  { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
  { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: FaInstagram, href: socialLinks.instagram, label: 'Instagram' },
  { icon: Mail, href: socialLinks.email, label: 'Email' },
];

export default function FinalCTA() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <SectionWrapper id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple/10 via-electric/5 to-cyan/10 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ready to Build Something{' '}
            <span className="gradient-text">Amazing?</span>
          </h2>
          <p className="text-lg text-white/40 mb-10">
            Four people. One idea. Unlimited possibilities.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollTo('#team')}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-electric to-purple text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple/30 hover:scale-105 transition-all duration-300"
            >
              Explore Our Team
            </button>
            <button
              onClick={() => scrollTo('#project')}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass text-white/80 font-semibold text-sm hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              View Our Project <ArrowRight size={14} />
            </button>
            <a
              href={socialLinks.email}
              className="px-7 py-3 rounded-full glass text-white/80 font-semibold text-sm hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
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
