import { motion } from 'framer-motion';

export default function PlasmaLogo({
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  showText = true,
  className = '',
  interactive = true,
  animated = false, // When true: full plasma burst animation (Cinematic Intro); When false: clean static logo (Navbar/Footer)
}) {
  const sizeMap = {
    sm: { container: 'w-10 h-10', burst: 'w-24 h-24 -inset-7', hex: 'w-8 h-8', fontSize: '18', sparkCount: 4 },
    md: { container: 'w-16 h-16', burst: 'w-44 h-44 -inset-14', hex: 'w-14 h-14', fontSize: '26', sparkCount: 6 },
    lg: { container: 'w-24 h-24', burst: 'w-64 h-64 -inset-20', hex: 'w-20 h-20', fontSize: '28', sparkCount: 8 },
    xl: { container: 'w-32 h-32', burst: 'w-88 h-88 -inset-28', hex: 'w-28 h-28', fontSize: '32', sparkCount: 12 },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  // Continuous color cycling filter animation for opening intro
  const filterKeyframes = [
    'hue-rotate(0deg) brightness(1.2) saturate(1.4)',
    'hue-rotate(60deg) brightness(1.35) saturate(1.5)',
    'hue-rotate(120deg) brightness(1.4) saturate(1.6)',
    'hue-rotate(190deg) brightness(1.3) saturate(1.4)',
    'hue-rotate(270deg) brightness(1.25) saturate(1.5)',
    'hue-rotate(360deg) brightness(1.2) saturate(1.4)',
  ];

  return (
    <div className={`relative flex items-center justify-center select-none ${currentSize.container} ${className}`}>
      {/* Heavy Plasma Burst Rays & Sparks ONLY during First Open Intro (when animated=true) */}
      {animated && (
        <>
          {/* 1. Primary Rotating Plasma Energy Core (Image Asset) */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.15, 0.98, 1.15, 1],
              filter: filterKeyframes,
            }}
            transition={{
              rotate: { duration: 14, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              filter: { duration: 10, repeat: Infinity, ease: 'linear' },
            }}
            className={`absolute ${currentSize.burst} pointer-events-none mix-blend-screen z-0 flex items-center justify-center`}
          >
            <img
              src="/assets/plasma-burst.png"
              alt="Plasma Energy Flare"
              className="w-full h-full object-contain opacity-95 filter drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]"
            />
          </motion.div>

          {/* 2. Secondary Counter-Rotating High-Energy Ray Burst */}
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1.1, 0.92, 1.12, 1.1],
              opacity: [0.5, 0.85, 0.45, 0.85, 0.5],
              filter: [
                'hue-rotate(180deg) brightness(1.4) saturate(1.6)',
                'hue-rotate(240deg) brightness(1.5) saturate(1.7)',
                'hue-rotate(300deg) brightness(1.3) saturate(1.5)',
                'hue-rotate(420deg) brightness(1.45) saturate(1.6)',
                'hue-rotate(540deg) brightness(1.4) saturate(1.6)',
              ],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
              filter: { duration: 10, repeat: Infinity, ease: 'linear' },
            }}
            className={`absolute ${currentSize.burst} pointer-events-none mix-blend-screen z-0 flex items-center justify-center scale-95`}
          >
            <img
              src="/assets/plasma-burst.png"
              alt="Secondary Plasma Filaments"
              className="w-full h-full object-contain opacity-80"
            />
          </motion.div>

          {/* 3. Orbiting Energy Plasma Sparks */}
          {Array.from({ length: currentSize.sparkCount }).map((_, i) => {
            const angle = (i / currentSize.sparkCount) * 360;
            const duration = 3.5 + (i % 3) * 1.2;
            return (
              <motion.div
                key={`spark-${i}`}
                animate={{
                  rotate: [angle, angle + 360],
                  scale: [0.6, 1.3, 0.6],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  rotate: { duration, repeat: Infinity, ease: 'linear' },
                  scale: { duration: duration / 2, repeat: Infinity, ease: 'easeInOut' },
                  opacity: { duration: duration / 2, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1),0_0_24px_rgba(6,182,212,0.9)]"
                  style={{
                    transform: `translateX(${size === 'xl' ? '54px' : size === 'lg' ? '40px' : size === 'md' ? '28px' : '18px'})`,
                  }}
                />
              </motion.div>
            );
          })}

          {/* 4. Concentric High-Voltage Shockwave Rings */}
          <motion.div
            animate={{
              scale: [0.75, 1.6, 0.75],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full border border-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.6)] blur-[0.5px] -z-10"
          />
          <motion.div
            animate={{
              scale: [0.85, 1.85, 0.85],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 0.7 }}
            className="absolute inset-0 rounded-full border border-purple-400 shadow-[0_0_18px_rgba(168,85,247,0.5)] blur-[0.5px] -z-10"
          />
        </>
      )}

      {/* Clean 3D Hexagon Emblem (Always visible, crisp and sleek) */}
      <motion.div
        whileHover={interactive ? { scale: 1.12, rotate: 6 } : {}}
        transition={{ type: 'spring', stiffness: 320, damping: 14 }}
        className={`relative ${currentSize.hex} z-10 drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="plasmaCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#38bdf8" />
              <stop offset="60%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <filter id="coreGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="glow" />
              <feComposite in="SourceGraphic" in2="glow" operator="over" />
            </filter>
          </defs>

          {/* Hexagon Outer Neon Shield */}
          <polygon
            points="50,4 92,26.5 92,73.5 50,96 8,73.5 8,26.5"
            fill="url(#plasmaCoreGrad)"
            filter="url(#coreGlow)"
            opacity="0.95"
          />

          {/* Hexagon Inner Dark Matrix Core */}
          <polygon
            points="50,12 84,30.5 84,69.5 50,88 16,69.5 16,30.5"
            fill="#020617"
            opacity="0.92"
          />

          {/* Inner Accent Hexagon Wireframe */}
          <polygon
            points="50,18 78,34 78,66 50,82 22,66 22,34"
            fill="none"
            stroke="url(#plasmaCoreGrad)"
            strokeWidth="1.2"
            strokeDasharray="4 2"
            opacity="0.6"
          />

          {/* Team Initials */}
          {showText && (
            <text
              x="50"
              y="63"
              textAnchor="middle"
              fontFamily="Arial Black, system-ui, sans-serif"
              fontSize={currentSize.fontSize}
              fontWeight="900"
              fill="white"
              letterSpacing="-0.5"
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
            >
              NC
            </text>
          )}
        </svg>
      </motion.div>
    </div>
  );
}
