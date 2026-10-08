import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import Team from './sections/Team';
import Project from './sections/Project';
import Achievements from './sections/Achievements';
import WhyUs from './sections/WhyUs';
import CreativeDNA from './sections/CreativeDNA';
import Workflow from './sections/Workflow';
import TeamStrength from './sections/TeamStrength';
import HackathonMindset from './sections/HackathonMindset';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="bg-navy-950 min-h-screen text-white font-sans selection:bg-purple-light/30 selection:text-white cursor-auto md:cursor-none">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Team />
        <Project />
        <Achievements />
        <WhyUs />
        <CreativeDNA />
        <Workflow />
        <TeamStrength />
        <HackathonMindset />
        <FinalCTA />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
