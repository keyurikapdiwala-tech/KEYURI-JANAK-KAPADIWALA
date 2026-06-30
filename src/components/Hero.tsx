import { ArrowRight, Phone, Award, Shield, Users, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onJoinClick: () => void;
  onTrialClick: () => void;
}

export default function Hero({ onJoinClick, onTrialClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-black"
    >
      {/* Background Image with Dark & Brand Neon Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,197,94,0.08),transparent_50%)] z-10" />
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920"
          alt="B Natural Gym High Performance Fitness Center"
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_8s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-neon/30 bg-brand-neon/10 text-brand-neon text-[10px] font-bold uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse"></span>
              SURAT'S #1 RATED FITNESS DESTINATION
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white tracking-tighter leading-[0.9] uppercase"
            >
              TRANSFORM YOUR <br />
              <span className="text-stroke-neon">BODY</span>. <br />
              TRANSFORM YOUR <span className="text-brand-neon">LIFE</span>.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-lg max-w-lg leading-relaxed font-sans"
            >
              Join Surat's trusted fitness hub in Adajan with elite equipment, pro guidance, and an environment engineered for growth.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2"
            >
              <button
                id="hero-trial-cta"
                onClick={onTrialClick}
                className="px-8 py-4 bg-brand-neon text-black font-black rounded-xl text-lg hover:scale-105 transition-transform uppercase tracking-wider cursor-pointer"
              >
                BOOK FREE TRIAL
              </button>

              <button
                id="hero-join-cta"
                onClick={onJoinClick}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl text-lg hover:bg-white/10 transition-colors uppercase tracking-wider cursor-pointer"
              >
                MEMBERSHIPS
              </button>

              <a
                href="tel:+919316282919"
                id="hero-call-cta"
                className="px-8 py-4 bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] font-bold rounded-xl text-lg hover:bg-[#CCFF00]/20 transition-all text-center uppercase tracking-wider"
              >
                CALL NOW
              </a>
            </motion.div>

            {/* Mini Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-8 sm:gap-10 pt-4 items-center"
            >
              <div>
                <div className="text-3xl font-black text-brand-neon">4.9/5</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-sans">Google Rating</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <div className="text-3xl font-black text-white">500+</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-sans">Active Members</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <div className="text-3xl font-black text-white font-sans">1000+</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-sans">Sessions Done</div>
              </div>
            </motion.div>
          </div>

          {/* Premium Interactive Feature Card Widget */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-panel-neon p-8 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neon/5 rounded-full blur-3xl -mr-16 -mt-16" />
              
              <h3 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-wide border-b border-zinc-900 pb-3 flex items-center gap-2">
                <Award className="text-brand-neon w-5 h-5" />
                Surat's Premium Fit Standard
              </h3>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-brand-neon">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Certified Expert Guidance</h4>
                    <p className="text-zinc-400 text-xs mt-1">Get custom posture corrections, form analysis, and safety-focused routines.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-brand-neon">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Modern Premium Equipment</h4>
                    <p className="text-zinc-400 text-xs mt-1">Train with world-class biomechanically aligned machines and clean barbell decks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-brand-neon">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Inspiring Community</h4>
                    <p className="text-zinc-400 text-xs mt-1">Surround yourself with highly motivated gym members who drive you to push harder.</p>
                  </div>
                </div>
              </div>

              {/* Promo tag */}
              <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest">TIMING TODAY</span>
                  <span className="text-xs text-white font-semibold">6:00 AM – 12:00 PM | 4:00 PM – 10:00 PM</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-brand-neon/10 text-brand-neon text-[10px] font-bold tracking-wider uppercase">
                  Open Mon-Sat
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
