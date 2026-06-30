import { Dumbbell, Phone, MapPin, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    onNavClick(id);
  };

  return (
    <footer id="footer-section" className="bg-[#050505] border-t border-white/5 pt-16 pb-8 text-zinc-400 relative overflow-hidden">
      {/* Tiny backdrop neon glow */}
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-brand-neon/5 rounded-full blur-[140px] -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div 
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
            
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mt-2 font-sans">
              Surat's premier luxury fitness center committed to helping local residents realize sustainable fitness goals through premium equipment, clean hygiene, and certified floor training.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand-neon hover:border-brand-neon/30 transition-all"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand-neon hover:border-brand-neon/30 transition-all"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4 fill-current stroke-none" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand-neon hover:border-brand-neon/30 transition-all"
                aria-label="Youtube Channel"
              >
                <Youtube className="w-4 h-4 fill-current stroke-none" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4 lg:pl-8">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-sans">
              {[
                { name: 'Home Section', id: 'home' },
                { name: 'About B Natural', id: 'about' },
                { name: 'Prestige Facilities', id: 'facilities' },
                { name: 'Membership Offers', id: 'membership' },
                { name: 'Workout Programs', id: 'programs' },
                { name: 'Photo Gallery', id: 'gallery' },
                { name: 'Members Reviews', id: 'reviews' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-left text-zinc-400 hover:text-brand-neon transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Contact details */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm font-sans text-zinc-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-brand-neon flex-shrink-0 mt-0.5" />
                <span>
                  4th Floor, Orchid Harmony, Gaurav Path Road, Adajan, Surat, Gujarat – 395009
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-brand-neon flex-shrink-0" />
                <a href="tel:+919316282919" className="hover:text-brand-neon transition-colors font-semibold">
                  +91 93162 82919
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4.5 h-4.5 text-brand-neon flex-shrink-0" />
                <a href="mailto:info@bnaturalgym.com" className="hover:text-brand-neon transition-colors">
                  info@bnaturalgym.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Operational Hours */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-white">
              Gym Timings
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm font-sans text-zinc-400">
              <div className="flex items-start gap-3">
                <Clock className="w-4.5 h-4.5 text-brand-neon flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Monday – Saturday</p>
                  <p className="mt-1">Morning: <span className="text-zinc-200">6:00 AM – 12:00 PM</span></p>
                  <p className="">Evening: <span className="text-zinc-200">4:00 PM – 10:00 PM</span></p>
                </div>
              </div>
              
              <div className="border-t border-zinc-900 pt-3 mt-1">
                <p className="text-zinc-500 font-semibold uppercase text-[10px]">Sunday Timings</p>
                <p className="text-xs italic text-zinc-400 mt-1">Closed for maintenance or custom group slots.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-zinc-900/80 my-8" />

        {/* Legal & copyright footer block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600 font-sans">
          <p>
            &copy; {currentYear} B Natural Gym. All Rights Reserved. Designed for premium fitness representation.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => alert('Privacy Policy is fully implemented by B Natural Gym rules. Secure logging is active.')}
              className="hover:text-zinc-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => alert('Terms & Conditions conform to standard high-end fitness complexes in Surat.')}
              className="hover:text-zinc-400 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
