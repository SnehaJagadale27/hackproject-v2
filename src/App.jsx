import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CinematicIntro from './components/CinematicIntro';
import SoundControl from './components/SoundControl';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import ParticleCanvas from './components/ParticleCanvas';
import Hero from './sections/Hero';
import Team from './sections/Team';
import Project from './sections/Project';
import InteractiveHub from './sections/InteractiveHub';
import Achievements from './sections/Achievements';
import WhyUs from './sections/WhyUs';
import CreativeDNA from './sections/CreativeDNA';
import Workflow from './sections/Workflow';
import TeamStrength from './sections/TeamStrength';
import HackathonMindset from './sections/HackathonMindset';
import ContactSection from './sections/ContactSection';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

// Individual portfolio pages
import AbhayPortfolio from './pages/AbhayPortfolio';
import AvinashPortfolio from './pages/AvinashPortfolio';
import SnehaPortfolio from './pages/SnehaPortfolio';
import SandhyaPortfolio from './pages/SandhyaPortfolio';

function MainSite() {
  const [introDone, setIntroDone] = useState(false);

  const handleIntroComplete = () => {
    setIntroDone(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="bg-navy-950 min-h-screen text-white font-sans selection:bg-purple-light/30 selection:text-white cursor-auto md:cursor-none relative overflow-x-hidden">
      {/* Cinematic Opening Intro */}
      <AnimatePresence mode="wait">
        {!introDone && (
          <CinematicIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Persistent Ambient Particles & Audio Control */}
      <ParticleCanvas />
      <SoundControl />
      <CustomCursor />
      
      <Navbar onReplayIntro={() => setIntroDone(false)} />
      
      <main className="relative z-10">
        <Hero />
        <Team />
        <Project />
        <InteractiveHub />
        <Achievements />
        <WhyUs />
        <CreativeDNA />
        <Workflow />
        <TeamStrength />
        <HackathonMindset />
        <ContactSection />
        <FinalCTA />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/team/abhay" element={<AbhayPortfolio />} />
        <Route path="/team/avinash" element={<AvinashPortfolio />} />
        <Route path="/team/sneha" element={<SnehaPortfolio />} />
        <Route path="/team/sandhya" element={<SandhyaPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
