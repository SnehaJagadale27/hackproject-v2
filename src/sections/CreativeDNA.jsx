import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { creativeDNA } from '../data/teamData';

function ProgressBar({ label, value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-white/70">{label}</span>
        <span className="font-mono text-purple-light text-xs">{value}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: value + '%' } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-electric via-purple to-cyan"
        />
      </div>
    </div>
  );
}

export default function CreativeDNA() {
  return (
    <SectionWrapper id="creative-dna" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[.2em] text-purple-light mb-3">Our Personality</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Beyond the <span className="gradient-text">Code</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Traits + paragraph */}
          <div>
            {/* Trait icons */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-8">
              {creativeDNA.traits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center group"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl glass flex items-center justify-center text-2xl mb-2 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                    {trait.icon}
                  </div>
                  <p className="text-[10px] text-white/40 font-medium">{trait.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Creative paragraph */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl p-6"
            >
              <p className="text-white/50 leading-relaxed italic">
                "{creativeDNA.paragraph}"
              </p>
            </motion.div>
          </div>

          {/* Right: Progress bars */}
          <div className="space-y-5">
            <h3 className="font-display text-lg font-bold text-white mb-4">Team Personality Map</h3>
            {creativeDNA.stats.map((stat) => (
              <ProgressBar key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
