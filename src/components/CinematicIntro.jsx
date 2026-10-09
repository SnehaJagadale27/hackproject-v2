import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Volume2, VolumeX, FastForward } from 'lucide-react';
import PlasmaLogo from './PlasmaLogo';
import { siteConfig } from '../data/teamData';
import { soundEngine } from '../utils/audioSystem';

export default function CinematicIntro({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0: Text, 1: Logo, 2: 3D Team Name & Burst, 3: Tagline & Transition
  const [isScreenShaking, setIsScreenShaking] = useState(false);

  const introText = "FOUR MINDS. ONE VISION. INFINITE POSSIBILITIES.";
  const teamNameLetters = siteConfig.teamName.split("");

  useEffect(() => {
    // Stage 0: Text reveal starts immediately
    const t1 = setTimeout(() => {
      setPhase(1); // Reveal Logo
      soundEngine.playWhoosh();
    }, 2200);

    const t2 = setTimeout(() => {
      setPhase(2); // 3D Team Name Flip & Stinger
      setIsScreenShaking(true);
      soundEngine.playIntroStinger();
      soundEngine.playPing();
      setTimeout(() => setIsScreenShaking(false), 600);
    }, 3800);

    const t3 = setTimeout(() => {
      setPhase(3); // Tagline & Ready
    }, 5200);

    const t4 = setTimeout(() => {
      onComplete?.();
    }, 7200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    soundEngine.playClick();
    onComplete?.();
  };

  const handleEnableAudio = () => {
    soundEngine.setMuted(false);
    soundEngine.playIntroStinger();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center overflow-hidden select-none ${
        isScreenShaking ? 'animate-[shake_0.4s_ease-in-out]' : ''
      }`}
    >
      {/* Animated Futuristic Neon Light-Trails / Warp Speed Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
          scale: phase >= 2 ? [1, 1.25, 1.1] : [1, 1.08, 1],
          opacity: phase >= 1 ? 0.65 : 0.25,
          filter: phase === 2 ? ['brightness(1)', 'brightness(1.8)', 'brightness(1.2)'] : 'brightness(1)'
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <img
          src="/assets/cyber-trails.png"
          alt="Cybernetic Light Trails"
          className="w-full h-full object-cover mix-blend-screen opacity-90 scale-110"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black pointer-events-none" />
      </motion.div>

      {/* Background Cybernetic Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none z-0" />

      {/* Ambient Neon Nebula Orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-600/30 via-purple-600/30 to-blue-600/30 blur-[120px] pointer-events-none z-0"
      />

      {/* Top Controls: Audio toggle & Skip Intro */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
        <button
          onClick={handleEnableAudio}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass border border-white/10 text-xs text-white/60 hover:text-white hover:border-cyan-400/40 transition-all"
        >
          {soundEngine.isMuted ? <VolumeX size={13} /> : <Volume2 size={13} className="text-cyan-400" />}
          <span className="font-mono text-[11px]">{soundEngine.isMuted ? 'Sound Off' : 'Sound On'}</span>
        </button>

        <button
          onClick={handleSkip}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <span>Skip Intro</span>
          <FastForward size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Main Cinematic Stage */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* PHASE 0: Letter-by-Letter Opening Motto */}
        <AnimatePresence>
          {phase === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-x-3 gap-y-1 font-mono text-xs sm:text-sm md:text-base tracking-[.35em] text-cyan-300 font-semibold"
            >
              {introText.split(" ").map((word, wIdx) => (
                <span key={wIdx} className="inline-block whitespace-nowrap">
                  {word.split("").map((char, cIdx) => (
                    <motion.span
                      key={cIdx}
                      initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
                      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      transition={{
                        delay: wIdx * 0.15 + cIdx * 0.03,
                        duration: 0.35,
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* PHASE 1 & 2: Explosive Multi-Color Plasma Logo Reveal */}
        {phase >= 1 && (
          <motion.div
            initial={{ scale: 0, rotateY: 180, opacity: 0 }}
            animate={{ scale: 1, rotateY: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 190, damping: 16, duration: 0.9 }}
            className="relative mb-8"
          >
            <PlasmaLogo size="xl" showText={true} interactive={false} animated={true} />
          </motion.div>
        )}

        {/* PHASE 2: 3D Team Name Flip with Metallic Shine */}
        {phase >= 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="perspective-1000 mb-4"
          >
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight flex items-center justify-center">
              {teamNameLetters.map((letter, idx) => (
                <motion.span
                  key={idx}
                  initial={{ rotateX: -180, opacity: 0, y: 50 }}
                  animate={{ rotateX: 0, opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 16,
                    delay: idx * 0.08,
                  }}
                  className="inline-block bg-gradient-to-b from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(6,182,212,0.4)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        )}

        {/* PHASE 3: Tagline & Enter Button */}
        {phase >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-xl font-medium tracking-wide">
              {siteConfig.tagline}
            </p>

            <div>
              <button
                onClick={handleSkip}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-sm tracking-wider uppercase hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300"
              >
                <span>Enter Experience</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom Progress Bar Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 7.2, ease: "linear" }}
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-electric"
        />
      </div>
    </motion.div>
  );
}
