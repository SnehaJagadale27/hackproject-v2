import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { teamStrengths } from '../data/teamData';

export default function TeamStrength() {
  const positions = [
    { x: -160, y: -100 },  // top-left
    { x: 160, y: -100 },   // top-right
    { x: -160, y: 100 },   // bottom-left
    { x: 160, y: 100 },    // bottom-right
  ];

  return (
    <SectionWrapper id="team-strength" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[.2em] text-purple-light mb-3">Synergy</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            One Team. <span className="gradient-text">Four Strengths.</span>
          </h2>
        </div>

        {/* Visual — central circle with connected nodes */}
        <div className="relative flex items-center justify-center min-h-[420px] sm:min-h-[450px]">
          {/* Central circle */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-br from-electric via-purple to-cyan flex items-center justify-center shadow-2xl shadow-purple/30"
          >
            <span className="font-display text-lg font-bold text-white">TEAM</span>
          </motion.div>

          {/* Connector lines + member nodes — hidden on small screens, shown with cards below */}
          <div className="hidden sm:block">
            {teamStrengths.map((s, i) => {
              const pos = positions[i];
              const angle = Math.atan2(pos.y, pos.x);
              const dist = Math.sqrt(pos.x ** 2 + pos.y ** 2);

              return (
                <motion.div
                  key={s.member}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 150 }}
                >
                  {/* Connector line */}
                  <div
                    className="absolute top-1/2 left-1/2 h-px origin-left"
                    style={{
                      width: dist + 'px',
                      transform: `rotate(${angle * 180 / Math.PI}deg)`,
                      background: `linear-gradient(90deg, ${s.color}66, ${s.color}22)`,
                    }}
                  />

                  {/* Node */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group"
                    style={{ transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))` }}
                  >
                    <div
                      className="glass rounded-xl px-4 py-3 text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg min-w-[130px]"
                      style={{ borderColor: s.color + '40', boxShadow: `0 0 0 1px ${s.color}20` }}
                    >
                      <div
                        className="w-8 h-8 mx-auto rounded-lg flex items-center justify-center text-sm font-bold text-white mb-1.5"
                        style={{ background: s.color + '30' }}
                      >
                        {s.member.slice(-2)}
                      </div>
                      <p className="text-xs font-semibold text-white">{s.member}</p>
                      <p className="text-[10px] mt-0.5" style={{ color: s.color }}>
                        {s.strength}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile fallback — stacked cards */}
        <div className="grid grid-cols-2 gap-4 sm:hidden mt-8">
          {teamStrengths.map((s, i) => (
            <motion.div
              key={s.member}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-4 text-center"
              style={{ borderColor: s.color + '30' }}
            >
              <div
                className="w-10 h-10 mx-auto rounded-lg flex items-center justify-center text-sm font-bold text-white mb-2"
                style={{ background: s.color + '25' }}
              >
                {s.member.slice(-2)}
              </div>
              <p className="text-xs font-semibold text-white">{s.member}</p>
              <p className="text-[10px] mt-0.5" style={{ color: s.color }}>
                {s.strength}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
