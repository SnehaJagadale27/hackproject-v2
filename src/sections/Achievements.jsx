import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { achievements } from '../data/teamData';

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[.2em] text-purple-light mb-3">Milestones</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="gradient-text">Highlights</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple/40 via-cyan/30 to-transparent" />

          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative flex items-start gap-6 mb-10 sm:mb-12 ${
                i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-purple to-cyan ring-4 ring-navy-950 z-10 mt-1" />

              {/* Card */}
              <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'}`}>
                <div className="glass rounded-xl p-5 glass-hover transition-all duration-300 hover:-translate-y-1">
                  <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}>
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-xs font-mono text-purple-light">{item.year}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
