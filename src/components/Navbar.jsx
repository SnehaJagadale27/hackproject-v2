import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/teamData';
import PlasmaLogo from './PlasmaLogo';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Team', href: '#team' },
  { label: 'Projects', href: '#project' },
  { label: 'Command Deck', href: '#interactive-hub' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Creative DNA', href: '#creative-dna' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onReplayIntro }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection('#' + sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-purple/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#home" onClick={() => handleClick('#home')} className="flex items-center gap-2.5 group">
            <PlasmaLogo size="sm" showText={true} interactive={true} />
            <div className="hidden sm:flex flex-col leading-none ml-1">
              <span className="font-display font-bold text-white text-sm tracking-wide">{siteConfig.teamName}</span>
              <span className="text-[9px] text-white/30 uppercase tracking-[.2em] font-mono">Team Portfolio</span>
            </div>
          </a>


          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href
                    ? 'text-white bg-white/10'
                    : 'text-white/50 hover:text-white/90 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Replay Intro + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="hidden lg:flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all"
                title="Replay Cinematic Intro"
              >
                ⚡ Intro
              </button>
            )}
            <a
              href="#project"
              onClick={(e) => { e.preventDefault(); handleClick('#project'); }}
              className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-electric to-purple text-white hover:shadow-lg hover:shadow-purple/25 transition-all duration-300 hover:scale-105"
            >
              View Work <ArrowRight size={14} />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-950/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href
                      ? 'text-white bg-white/10'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="#project"
                onClick={(e) => { e.preventDefault(); handleClick('#project'); }}
                className="flex items-center justify-center gap-1 mt-3 px-4 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-electric to-purple text-white"
              >
                View Our Work <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
