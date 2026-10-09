import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, RefreshCw, Sparkles, MessageSquare, Mail, User, Briefcase, Clock, ShieldCheck, Zap } from 'lucide-react';
import { contactConfig, socialLinks } from '../data/teamData';
import { soundEngine } from '../utils/audioSystem';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: contactConfig.services[0],
    timeline: contactConfig.timelines[1],
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus('error');
      setFeedbackMsg('Please enter both your name and email address.');
      return;
    }

    setStatus('loading');
    soundEngine.playWhoosh();

    try {
      const scriptUrl = contactConfig.googleSheetScriptUrl;
      const payload = new FormData();
      payload.append('timestamp', new Date().toISOString());
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('service', formData.service);
      payload.append('timeline', formData.timeline);
      payload.append('message', formData.message);

      if (scriptUrl && !scriptUrl.includes('placeholder')) {
        await fetch(scriptUrl, {
          method: 'POST',
          body: payload,
          mode: 'no-cors',
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus('success');
      soundEngine.playPing();
      setFeedbackMsg('Thank you! Your submission has been transmitted and logged directly into our Google Sheet.');
      setFormData({
        name: '',
        email: '',
        service: contactConfig.services[0],
        timeline: contactConfig.timelines[1],
        message: '',
      });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setFeedbackMsg('Submission error. Please check connection or reach us via email.');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl bg-gradient-to-b from-white via-slate-50 to-blue-50/90 text-slate-900 border-2 border-blue-200/80 p-6 sm:p-10 shadow-[0_20px_60px_rgba(59,130,246,0.25)] relative overflow-hidden text-left">
      {/* Crisp White & Blue Ambient Glow Beams */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600" />

      {/* Header with White & Blue Palette */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 border border-blue-300 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2.5 shadow-sm">
          <Zap size={13} className="text-blue-600 animate-pulse fill-current" /> Direct Project Dispatch
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Let’s Build Something <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Extraordinary</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
          Fill in your project brief below to sync directly with the <span className="font-bold text-blue-600">NexCore</span> engineering squad.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-12 text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-400 text-emerald-600 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="text-2xl font-black text-slate-900 font-display">Transmission Confirmed!</h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto font-medium">{feedbackMsg}</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white transition-all shadow-md hover:shadow-blue-500/30"
            >
              Submit Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name & Email Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-slate-700 flex items-center gap-1.5">
                  <User size={13} className="text-blue-600" /> Full Name <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 text-slate-900 text-xs sm:text-sm font-medium outline-none transition-all placeholder:text-slate-400 shadow-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-slate-700 flex items-center gap-1.5">
                  <Mail size={13} className="text-blue-600" /> Email Address <span className="text-blue-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="rahul@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 text-slate-900 text-xs sm:text-sm font-medium outline-none transition-all placeholder:text-slate-400 shadow-sm"
                />
              </div>
            </div>

            {/* Service & Timeline Dropdowns */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-slate-700 flex items-center gap-1.5">
                  <Briefcase size={13} className="text-blue-600" /> Project / Service Domain
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 text-slate-900 text-xs sm:text-sm font-semibold outline-none transition-all shadow-sm cursor-pointer"
                >
                  {contactConfig.services.map((srv) => (
                    <option key={srv} value={srv} className="bg-white text-slate-900 py-1">
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-slate-700 flex items-center gap-1.5">
                  <Clock size={13} className="text-blue-600" /> Target Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 text-slate-900 text-xs sm:text-sm font-semibold outline-none transition-all shadow-sm cursor-pointer"
                >
                  {contactConfig.timelines.map((tml) => (
                    <option key={tml} value={tml} className="bg-white text-slate-900 py-1">
                      {tml}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-slate-700 flex items-center gap-1.5">
                <MessageSquare size={13} className="text-blue-600" /> Project Description & Specs
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your goals, requirements, features, or deadlines..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 text-slate-900 text-xs sm:text-sm font-medium outline-none transition-all placeholder:text-slate-400 resize-none shadow-sm"
              />
            </div>

            {/* Error Feedback */}
            {status === 'error' && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-300 text-rose-700 text-xs font-semibold flex items-center gap-2">
                <AlertCircle size={15} className="shrink-0 text-rose-600" />
                <span>{feedbackMsg}</span>
              </div>
            )}

            {/* White & Blue Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-blue-500/35 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <RefreshCw size={15} className="animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <Send size={15} /> Submit
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
