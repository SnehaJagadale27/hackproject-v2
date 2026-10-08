import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { workflowSteps } from '../data/teamData';

export default function Workflow() {
  return (
    <SectionWrapper id="workflow" className="py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[.2em] text-electric-light mb-3">Our Process</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Team <span className="gradient-text">Workflow</span>
          </h2>
        </div>

        {/* Workflow steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-purple/40 via-cyan/30 to-purple/40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-4 rounded-2xl glass flex flex-col items-center justify-center group-hover:bg-white/10 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple/15 transition-all duration-300">
                  <span className="text-2xl mb-0.5">{step.icon}</span>
                  <span className="text-[10px] font-mono text-white/25">{String(i + 1).padStart(2, '0')}</span>
                </div>

                {/* Arrow between steps — mobile */}
                {i < workflowSteps.length - 1 && (
                  <div className="sm:hidden flex justify-center my-2 text-white/15 text-lg">↓</div>
                )}

                <div className="text-center">
                  <h3 className="font-display text-sm font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-xs text-white/35 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
