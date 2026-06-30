import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import About from './components/About';
import Facilities from './components/Facilities';
import Membership from './components/Membership';
import WorkoutPrograms from './components/WorkoutPrograms';
import BMICalculator from './components/BMICalculator';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPlan, setSelectedPlan] = useState('');

  // Handle smooth scroll on navigation click
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  // Scrollspy to automatically update active navbar indicator
  useEffect(() => {
    const sections = ['home', 'about', 'facilities', 'membership', 'programs', 'gallery', 'reviews', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinClick = (planName: string) => {
    setSelectedPlan(planName);
    // Smooth scroll to contact is handled inside Contact's useEffect
  };

  const handleTrialClick = () => {
    setSelectedPlan('Free Trial');
  };

  const handleProgramClick = (programTitle: string) => {
    setSelectedPlan(programTitle);
  };

  return (
    <div className="relative min-h-screen text-white bg-[#050505] overflow-x-hidden selection:bg-brand-neon selection:text-black">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Background Glows from Immersive UI theme */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-brand-neon opacity-10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-100px] w-[400px] h-[400px] bg-brand-neon opacity-[0.06] rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-150px] w-[500px] h-[500px] bg-brand-neon opacity-[0.05] rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Sticky Top Header Navigation */}
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        {/* Full screen hero */}
        <Hero 
          onJoinClick={() => handleNavClick('membership')} 
          onTrialClick={handleTrialClick} 
        />

        {/* Dynamic ticker statistic section */}
        <StatsCounter />

        {/* Extensive About & Why Choose sections */}
        <About />

        {/* Gym Facilities section with categorized filters */}
        <Facilities />

        {/* Gym membership plans & interactive localstorage prices admin */}
        <Membership onJoinClick={handleJoinClick} />

        {/* Structured workout goal categories */}
        <WorkoutPrograms onProgramClick={handleProgramClick} />

        {/* Interactive health calculator */}
        <BMICalculator />

        {/* Premium lightbox picture showcase */}
        <Gallery />

        {/* Local user star reviews and feedback slider */}
        <Testimonials />

        {/* Timing, trainers, FAQ accordions */}
        <FAQ />

        {/* Complete details, action triggers and validated form */}
        <Contact selectedPlan={selectedPlan} />
      </main>

      {/* Structured Footer */}
      <Footer onNavClick={handleNavClick} />

      {/* Float to top button */}
      <BackToTop />
    </div>
  );
}
