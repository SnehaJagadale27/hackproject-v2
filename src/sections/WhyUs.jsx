import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { whyUsCards } from '../data/teamData';

export default function WhyUs() {
  return (
    <SectionWrapper id="why-us" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[.2em] text-cyan-light mb-3">Our Edge</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why <span className="gradient-text">This Team?</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {whyUsCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass rounded-2xl p-6 glass-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Central statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-12 relative"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 rounded-full bg-purple/5 blur-3xl" />
          </div>
          <p className="relative font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            <span className="gradient-text">Technology builds it.</span>
            <br />
            <span className="text-white/70">Creativity makes it matter.</span>
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
