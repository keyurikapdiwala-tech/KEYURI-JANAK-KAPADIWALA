import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Trophy, Star, Users, Flame } from 'lucide-react';

export default function StatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const [membersCount, setMembersCount] = useState(0);
  const [sessionsCount, setSessionsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Fast count up animations
    const duration = 2000; // ms
    const steps = 50;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      
      setMembersCount(Math.min(Math.round((500 / steps) * step), 500));
      setSessionsCount(Math.min(Math.round((1000 / steps) * step), 1000));
      setSatisfactionCount(Math.min(Math.round((100 / steps) * step), 100));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      id="stats-section"
      className="py-16 bg-[#050505] border-y border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-center">
          
          {/* Members Counter */}
          <div className="text-center flex flex-col items-center">
            <div className="p-3 bg-white/5 border border-white/10 rounded-2xl mb-4 text-brand-neon">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight text-glow">
              {membersCount}+
            </span>
            <span className="text-xs text-white/40 font-bold uppercase tracking-widest mt-2 block font-sans">
              Happy Members
            </span>
          </div>

          {/* Rating */}
          <div className="text-center flex flex-col items-center">
            <div className="p-3 bg-white/5 border border-white/10 rounded-2xl mb-4 text-brand-neon">
              <Star className="w-5 h-5 fill-brand-neon" />
            </div>
            <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight text-glow">
              4.9★
            </span>
            <span className="text-xs text-white/40 font-bold uppercase tracking-widest mt-2 block font-sans">
              Google Rating
            </span>
          </div>

          {/* Training Sessions */}
          <div className="text-center flex flex-col items-center">
            <div className="p-3 bg-white/5 border border-white/10 rounded-2xl mb-4 text-brand-neon">
              <Trophy className="w-5 h-5" />
            </div>
            <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight text-glow">
              {sessionsCount}+
            </span>
            <span className="text-xs text-white/40 font-bold uppercase tracking-widest mt-2 block font-sans">
              Training Sessions
            </span>
          </div>

          {/* Customer Satisfaction */}
          <div className="text-center flex flex-col items-center">
            <div className="p-3 bg-white/5 border border-white/10 rounded-2xl mb-4 text-brand-neon">
              <Flame className="w-5 h-5" />
            </div>
            <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight text-glow">
              {satisfactionCount}%
            </span>
            <span className="text-xs text-white/40 font-bold uppercase tracking-widest mt-2 block font-sans">
              Satisfaction Rate
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
