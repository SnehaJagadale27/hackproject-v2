import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Sparkles, Cpu, Zap, Rocket, Users, ArrowRight } from 'lucide-react';
import { siteConfig, members } from '../data/teamData';
import { soundEngine } from '../utils/audioSystem';

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 45 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ["0%", "-120%"],
            x: [0, (i % 2 === 0 ? 30 : -30)],
            opacity: [0, 0.8, 0],
            scale: [0.4, 1.2, 0.4]
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
          className={`absolute rounded-full pointer-events-none ${
            i % 3 === 0 
              ? 'bg-cyan shadow-[0_0_15px_rgba(6,182,212,0.8)]' 
              : i % 3 === 1 
              ? 'bg-purple shadow-[0_0_15px_rgba(139,92,246,0.8)]' 
              : 'bg-electric shadow-[0_0_15px_rgba(59,130,246,0.8)]'
          }`}
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            left: Math.random() * 100 + '%',
            bottom: '-10%',
          }}
        />
      ))}
    </div>
  );
}

function FloatingTechCards({ mouseX, mouseY }) {
  const x1 = useTransform(mouseX, [0, 1200], [-35, 35]);
  const y1 = useTransform(mouseY, [0, 900], [-35, 35]);

  const x2 = useTransform(mouseX, [0, 1200], [45, -45]);
  const y2 = useTransform(mouseY, [0, 900], [35, -35]);

  const x3 = useTransform(mouseX, [0, 1200], [-55, 55]);
  const y3 = useTransform(mouseY, [0, 900], [45, -45]);

  const x4 = useTransform(mouseX, [0, 1200], [60, -60]);
  const y4 = useTransform(mouseY, [0, 900], [-40, 40]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block z-0">
      {/* Top Left Card */}
      <motion.div
        style={{ x: x1, y: y1 }}
        animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] left-[6%] glass px-4 py-3 rounded-2xl border-cyan/30 shadow-[0_0_25px_rgba(6,182,212,0.15)] flex items-center gap-3 backdrop-blur-xl"
      >
        <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/40 flex items-center justify-center text-cyan-light shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <Code size={20} />
        </div>
        <div>
          <p className="text-xs font-bold text-white font-display">Clean Architecture</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
            <span className="text-[10px] text-cyan-light font-mono">100% Tested</span>
          </div>
        </div>
      </motion.div>

      {/* Top Right Card */}
      <motion.div
        style={{ x: x2, y: y2 }}
        animate={{ y: [0, 15, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[22%] right-[6%] glass px-4 py-3 rounded-2xl border-purple/30 shadow-[0_0_30px_rgba(139,92,246,0.15)] flex items-center gap-3 backdrop-blur-xl"
      >
        <div className="w-10 h-10 rounded-xl bg-purple/10 border border-purple/40 flex items-center justify-center text-purple-light shadow-[0_0_15px_rgba(139,92,246,0.3)]">
          <Cpu size={20} />
        </div>
        <div>
          <p className="text-xs font-bold text-white font-display">AI & Algorithms</p>
          <span className="text-[10px] text-purple-light font-mono">Smart Automation</span>
        </div>
      </motion.div>

      {/* Bottom Left Card */}
      <motion.div
        style={{ x: x3, y: y3 }}
        animate={{ y: [0, -18, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[24%] left-[8%] glass px-4 py-3 rounded-2xl border-electric/30 shadow-[0_0_25px_rgba(59,130,246,0.15)] flex items-center gap-3 backdrop-blur-xl"
      >
        <div className="w-10 h-10 rounded-xl bg-electric/10 border border-electric/40 flex items-center justify-center text-electric-light shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          <Sparkles size={20} />
        </div>
        <div>
          <p className="text-xs font-bold text-white font-display">Pixel Perfect UI</p>
          <span className="text-[10px] text-electric-light font-mono">Glassmorphism & 3D</span>
        </div>
      </motion.div>

      {/* Bottom Right Card */}
      <motion.div
        style={{ x: x4, y: y4 }}
        animate={{ y: [0, 16, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[28%] right-[8%] glass px-4 py-3 rounded-2xl border-cyan/30 shadow-[0_0_25px_rgba(6,182,212,0.15)] flex items-center gap-3 backdrop-blur-xl"
      >
        <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/40 flex items-center justify-center text-cyan-light shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <Rocket size={20} />
        </div>
        <div>
          <p className="text-xs font-bold text-white font-display">Rapid Prototype</p>
          <span className="text-[10px] text-cyan-light font-mono">Production Ready</span>
        </div>
      </motion.div>
    </div>
  );
}

// ——————————————————————————————————————————————————————————
//  ONE-BY-ONE TEAM MEMBER SHOWCASE ANIMATION
// ——————————————————————————————————————————————————————————
function AnimatedTeamMemberShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % members.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const currentMember = members[currentIndex];
  const scrollToTeam = () => document.querySelector('#team')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="max-w-xl mx-auto mb-8">
      {/* Container Card */}
      <div className="glass rounded-3xl p-3 sm:p-4 border border-white/10 shadow-[0_0_35px_rgba(139,92,246,0.15)] backdrop-blur-2xl relative overflow-hidden">
        {/* Subtle background glow beam */}
        <div className="absolute inset-0 bg-gradient-to-r from-electric/10 via-purple/10 to-cyan/10 blur-xl pointer-events-none" />

        {/* Top Header Row */}
        <div className="flex items-center justify-between px-2 mb-2 text-[11px] font-mono tracking-wider uppercase text-white/40">
          <div className="flex items-center gap-1.5 text-cyan-light font-semibold">
            <Users size={14} className="text-cyan animate-pulse" />
            <span>Team Members</span>
          </div>
          <div className="flex gap-1.5">
            {members.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Show member ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-6 bg-gradient-to-r from-cyan to-purple shadow-[0_0_10px_rgba(6,182,212,0.8)]'
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Animated Member Details */}
        <div className="relative h-20 sm:h-22 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMember.id}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full flex items-center justify-between gap-3 px-2 cursor-pointer group"
              onClick={scrollToTeam}
            >
              {/* Left: Member Avatar / Initial */}
              <div className="flex items-center gap-3.5">
                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden ring-2 ring-purple/40 group-hover:ring-cyan transition-all shadow-lg bg-navy-900 flex items-center justify-center shrink-0">
                    <img
                      src={currentMember.photo}
                      alt={currentMember.name}
                      style={{ objectPosition: currentMember.photoPosition || 'center center' }}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-electric via-purple to-cyan flex items-center justify-center text-lg sm:text-xl font-bold text-white font-display">${currentMember.name.charAt(0)}</div>`;
                      }}
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-navy-950 border border-white/20 text-[10px] font-mono font-bold text-purple-light flex items-center justify-center shadow-md">
                    0{currentMember.id}
                  </span>
                </div>

                {/* Center: Name & Role */}
                <div className="text-left">
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-white group-hover:text-cyan-light transition-colors flex items-center gap-2">
                    {currentMember.name}
                    <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-purple/20 text-purple-light border border-purple/30">
                      Member #{currentMember.id}
                    </span>
                  </h3>
                  <p className="text-xs text-white/60 font-medium">{currentMember.role}</p>
                </div>
              </div>

              {/* Right: Technical Skills Pills */}
              <div className="hidden sm:flex flex-wrap gap-1 max-w-[170px] justify-end">
                {currentMember.technicalSkills.slice(0, 2).map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-cyan/10 text-cyan-light border border-cyan/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function MagneticButton({ children, className, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 14, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * 0.35);
    y.set((e.clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={className}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

const AnimatedMainText = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <h1 className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block whitespace-nowrap overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "140%", rotateX: -90, opacity: 0 }}
            animate={{ y: "0%", rotateX: 0, opacity: 1 }}
            transition={{
              type: "spring",
              damping: 16,
              stiffness: 90,
              delay: 0.15 + index * 0.1,
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </h1>
  );
};

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  const containerRef = useRef(null);

  const rawMouseX = useMotionValue(600);
  const rawMouseY = useMotionValue(400);

  const springConfig = { stiffness: 100, damping: 20 };
  const mouseX = useSpring(rawMouseX, springConfig);
  const mouseY = useSpring(rawMouseY, springConfig);

  const handleGlobalMouseMove = (e) => {
    rawMouseX.set(e.clientX);
    rawMouseY.set(e.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } } };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Interactive Cursor Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-60 z-0"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(850px circle at ${x}px ${y}px, rgba(139,92,246,0.18), rgba(6,182,212,0.08), transparent 80%)`
          )
        }}
      />

      {/* Animated Hero Ambient Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="hero-orb top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="hero-orb-2 bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 pointer-events-none" 
      />
      {/* Animated Hero Ambient Cyber Trails Background Image */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <img
          src="/assets/cyber-trails.png"
          alt="Cybernetic Trails Backdrop"
          className="w-full h-full object-cover mix-blend-screen opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/80" />
      </motion.div>

      {/* Dynamic Background Particles & 3D Floating Tech Badges */}
      <Particles />
      <FloatingTechCards mouseX={mouseX} mouseY={mouseY} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16 perspective-1000">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass border-cyan/40 text-xs sm:text-sm font-semibold text-cyan-light mb-6 shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:scale-105 transition-transform cursor-default"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-80"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan"></span>
          </span>
          {siteConfig.badge}
        </motion.div>

        {/* Main Title Area */}
        <motion.div variants={container} initial="hidden" animate="show" className="mb-6">
          <motion.p variants={item} className="font-display text-xs sm:text-sm md:text-base tracking-[.3em] font-bold uppercase text-white/50 mb-4 drop-shadow-md">
            We Build <span className="text-purple-light mx-2 text-lg align-middle">•</span> We Create <span className="text-cyan-light mx-2 text-lg align-middle">•</span> We Solve
          </motion.p>
          
          {/* 3D Team Name Character Flip Stage */}
          <div className="perspective-1000 my-2">
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              {siteConfig.teamName.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ rotateX: -180, opacity: 0, y: 40 }}
                  animate={{ rotateX: 0, opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 15,
                    delay: 0.2 + i * 0.09,
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotateY: 25,
                    color: '#22d3ee',
                    textShadow: '0 0 30px rgba(6,182,212,0.9)',
                  }}
                  className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black inline-block bg-gradient-to-b from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_12px_35px_rgba(6,182,212,0.4)] cursor-pointer select-none"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.65, duration: 0.9, ease: "easeOut" }}
            className="font-display text-2xl sm:text-3xl md:text-5xl font-black leading-tight tracking-tight mt-1"
          >
            <span className="gradient-text pb-2 inline-block drop-shadow-[0_0_35px_rgba(139,92,246,0.3)]">Behind the Ideas</span>
          </motion.h2>
        </motion.div>

        {/* Animated One-by-One Team Member Showcase */}
        <AnimatedTeamMemberShowcase />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl font-medium text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed shadow-black drop-shadow-lg"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* Team & Hackathon Pill Tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-white/50 mb-12"
        >
          <span className="px-5 py-2 rounded-full glass border-white/10 hover:border-purple/40 hover:text-white transition-all uppercase tracking-wider shadow-md hover:shadow-purple/20 hover:-translate-y-0.5">
            ⚡ {siteConfig.teamName}
          </span>
          <span className="px-5 py-2 rounded-full glass border-white/10 hover:border-cyan/40 hover:text-white transition-all uppercase tracking-wider shadow-md hover:shadow-cyan/20 hover:-translate-y-0.5">
            🏆 {siteConfig.hackathonName}
          </span>
        </motion.div>

        {/* Magnetic Interactive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 220, damping: 18 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <MagneticButton
            onClick={() => {
              soundEngine.playClick();
              scrollTo('#team');
            }}
            className="btn-glow relative px-9 py-4 rounded-full bg-navy-900 border border-purple/60 text-white font-bold tracking-wide text-sm transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_50px_rgba(139,92,246,0.7)] z-10 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-electric via-purple to-cyan opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              Meet Our Team <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </MagneticButton>
          
          <MagneticButton
            onClick={() => {
              soundEngine.playClick();
              scrollTo('#project');
            }}
            className="px-9 py-4 rounded-full glass border-white/20 text-white font-bold tracking-wide text-sm hover:text-white hover:bg-white/10 hover:border-cyan/40 transition-all duration-300 z-10 shadow-lg hover:shadow-cyan/20"
          >
            Explore Our Work
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-white/50 text-xs font-semibold tracking-widest uppercase cursor-pointer z-20 hover:text-white transition-colors group"
        onClick={() => scrollTo('#team')}
      >
        <span className="group-hover:tracking-[.2em] transition-all">Discover</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <ChevronDown size={22} className="text-cyan-light drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
