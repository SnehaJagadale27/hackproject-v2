import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { mindsetPoints } from '../data/teamData';

export default function HackathonMindset() {
  return (
    <SectionWrapper id="mindset" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bold heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We Don't Just Participate.
            <br />
            <span className="gradient-text">We Build, Experiment & Impact.</span>
          </h2>
        </motion.div>

        {/* 3 points */}
        <div className="grid md:grid-cols-3 gap-6">
          {mindsetPoints.map((point, i) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group glass rounded-2xl p-6 text-center glass-hover transition-all duration-300 hover:-translate-y-1"
            >
              <span className="font-display text-4xl font-bold gradient-text opacity-50 group-hover:opacity-100 transition-opacity">
                {point.number}
              </span>
              <h3 className="font-display text-xl font-bold text-white mt-2 mb-2">{point.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
