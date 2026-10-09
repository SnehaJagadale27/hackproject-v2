import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, Sparkles, MapPin, PhoneCall, Shield, Globe } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import ContactForm from '../components/ContactForm';
import { socialLinks } from '../data/teamData';
import { soundEngine } from '../utils/audioSystem';

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Dynamic Background Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Mail size={13} className="text-cyan-400" /> Get In Touch
          </motion.div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Connect With <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">NexCore</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project concept, research partnership, or hackathon inquiry? Fill out our brief below to connect with our team.
          </p>
        </div>

        {/* 2-Column Layout: Left Info Cards, Right Contact Form */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Info Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="p-6 rounded-3xl bg-navy-900/60 border border-white/10 backdrop-blur-xl space-y-4">
              <h4 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <Sparkles size={16} className="text-blue-400" /> Quick Channels
              </h4>
              <p className="text-xs text-white/50 leading-relaxed">
                We are actively collaborating on high-impact full-stack applications, deep learning solutions, and hackathon challenges.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={socialLinks.email}
                  onClick={() => soundEngine.playClick()}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-blue-500/15 border border-white/5 hover:border-blue-400/40 transition-all text-white/80 hover:text-white group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 uppercase block">Direct Email</span>
                    <span className="text-xs font-semibold text-white">Nexcoreinfo@gmail.com</span>
                  </div>
                </a>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-cyan-500/15 border border-white/5 hover:border-cyan-400/40 transition-all text-white/80 hover:text-white group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                    <Globe size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 uppercase block">Code Vault</span>
                    <span className="text-xs font-semibold text-white">GitHub Repositories</span>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-950/60 to-navy-900 border border-blue-500/20 text-xs text-blue-200">
                  <div className="flex items-center gap-1.5 font-bold mb-1 text-cyan-300">
                    <Shield size={14} /> Direct Routing
                  </div>
                  <p className="text-[11px] text-white/60 leading-normal">
                    Inquiries are instantly delivered directly to the NexCore team leads.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: White & Blue Form (8 cols) */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
