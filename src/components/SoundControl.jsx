import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Volume1, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEngine } from '../utils/audioSystem';

export default function SoundControl() {
  const [isMuted, setIsMuted] = useState(soundEngine.isMuted);
  const [volume, setVolume] = useState(soundEngine.volume);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const unsub = soundEngine.subscribe((state) => {
      setIsMuted(state.isMuted);
      setVolume(state.volume);
    });
    return unsub;
  }, []);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    soundEngine.setMuted(nextMuted);
    if (!nextMuted) {
      soundEngine.playClick();
    }
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    soundEngine.setVolume(newVol);
    if (isMuted) {
      soundEngine.setMuted(false);
    }
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
      onMouseEnter={() => setShowSlider(true)}
      onMouseLeave={() => setShowSlider(false)}
    >
      <AnimatePresence>
        {showSlider && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-navy-950/90 border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-20 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              aria-label="Volume Slider"
            />
            <span className="font-mono text-[10px] text-cyan-300 min-w-[28px]">
              {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleSound}
        className={`relative p-3 rounded-2xl border backdrop-blur-xl transition-all duration-300 shadow-xl flex items-center justify-center group ${
          !isMuted
            ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300 shadow-cyan-500/20'
            : 'bg-navy-950/80 border-white/10 text-white/50 hover:text-white hover:border-white/20'
        }`}
        aria-label={isMuted ? 'Enable Sound' : 'Mute Sound'}
      >
        {/* Animated equalizer bars when unmuted */}
        {!isMuted ? (
          <div className="flex items-center gap-1.5">
            <Volume2 size={16} className="text-cyan-400" />
            <div className="flex items-end gap-0.5 h-3.5">
              <span className="w-0.5 h-2 bg-cyan-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" />
              <span className="w-0.5 h-3.5 bg-purple-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite_0.2s]" />
              <span className="w-0.5 h-1.5 bg-cyan-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s]" />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-1.5">
            <VolumeX size={16} />
            <span className="hidden group-hover:inline text-[10px] font-mono font-semibold">Enable Audio</span>
          </div>
        )}
      </button>
    </div>
  );
}
