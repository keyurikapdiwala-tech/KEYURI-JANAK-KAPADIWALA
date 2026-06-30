import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Facilities', id: 'facilities' },
    { name: 'Membership', id: 'membership' },
    { name: 'Programs', id: 'programs' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-zinc-900 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              id="logo-container" 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleLinkClick('home')}
            >
              <div className="w-10 h-10 bg-brand-neon flex items-center justify-center rounded-lg transition-transform group-hover:scale-110">
                <span className="text-black font-black text-xl font-display">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg tracking-tighter uppercase leading-none text-white">
                  B NATURAL<span className="text-brand-neon"> GYM</span>
                </span>
                <span className="text-[10px] font-medium text-white/40 uppercase tracking-[0.2em] mt-0.5 font-sans">
                  બ નેચરલ જિમ
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-xs font-semibold uppercase tracking-widest transition-colors relative py-1 cursor-pointer ${
                    activeSection === link.id
                      ? 'text-brand-neon'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-neon rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="tel:+919316282919"
                id="navbar-call-btn"
                className="flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors py-2 px-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur"
              >
                <Phone className="w-3.5 h-3.5 text-brand-neon" />
                <span>+91 93162 82919</span>
              </a>
              <button
                id="navbar-join-btn"
                onClick={() => handleLinkClick('membership')}
                className="px-6 py-2.5 bg-white text-black text-xs font-bold rounded-full hover:bg-brand-neon hover:scale-105 transition-all uppercase tracking-widest cursor-pointer"
              >
                JOIN NOW
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="tel:+919316282919"
                id="mobile-call-icon"
                className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-brand-neon hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-900 p-6 flex flex-col gap-4 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-base font-semibold uppercase tracking-wider py-2.5 border-b border-zinc-900 transition-colors ${
                    activeSection === link.id ? 'text-brand-neon pl-2 border-l-2 border-brand-neon' : 'text-zinc-400'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <a
                href="tel:+919316282919"
                id="mobile-drawer-call-btn"
                className="flex items-center justify-center gap-2 text-sm font-bold text-white bg-zinc-900 border border-zinc-800 py-3 rounded-xl hover:bg-zinc-800 transition-all"
              >
                <Phone className="w-4 h-4 text-brand-neon" />
                <span>Call +91 93162 82919</span>
              </a>
              <button
                id="mobile-drawer-join-btn"
                onClick={() => handleLinkClick('membership')}
                className="bg-brand-neon text-black text-sm font-extrabold uppercase tracking-wider py-3 rounded-xl text-center hover:bg-brand-neon-light transition-all glow-btn cursor-pointer"
              >
                Join B Natural Today
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
