import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TestimonialItem } from '../types';

export default function Testimonials() {
  const testimonialsList: TestimonialItem[] = [
    {
      id: 'rev1',
      name: 'Keyur Patel',
      role: 'Adajan, Surat',
      rating: 5,
      comment: 'Excellent atmosphere and great trainers. The equipment is absolutely premium and highly biomechanically aligned. Best gym in Adajan without a doubt.',
      date: '2 weeks ago',
    },
    {
      id: 'rev2',
      name: 'Neha Desai',
      role: 'Pal, Surat',
      rating: 5,
      comment: 'Very clean and motivating environment. The staff are polite, helpful, and provide proper postural checks during heavy lifts. It makes training fun!',
      date: '1 month ago',
    },
    {
      id: 'rev3',
      name: 'Hardik Shah',
      role: 'Gaurav Path, Surat',
      rating: 5,
      comment: 'B Natural Gym has totally transformed my lifting technique. Affordable fees, fully air-conditioned, and positive people around. Highly recommended!',
      date: '3 weeks ago',
    },
    {
      id: 'rev4',
      name: 'Riddhi Gajiwala',
      role: 'Vesu, Surat',
      rating: 5,
      comment: 'I joined the Weight Loss Program and the personal guidance here is premium. Everything is clean and sanitized twice a day. Absolutely perfect.',
      date: '2 months ago',
    },
    {
      id: 'rev5',
      name: 'Priyesh Mehta',
      role: 'Adajan, Surat',
      rating: 5,
      comment: 'The free weights setup is amazing. Plenty of dumbbells up to 50kg, multiple barbell platforms, and excellent ventilation. Best gym in Surat.',
      date: '1 month ago',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  // Auto scroll testimonials
  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-brand-neon tracking-widest uppercase mb-3 block">
            TESTIMONIALS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            500+ HAPPY MEMBERS
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Read authentic feedback from local residents who trust B Natural Gym for their daily strength, conditioning, and weight-loss journeys.
          </p>
        </div>

        {/* Carousel Slider Panel */}
        <div className="max-w-3xl mx-auto relative px-4 sm:px-12">
          
          {/* Big Quote Accent Icon */}
          <div className="absolute -top-12 -left-2 text-brand-neon/10 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1.5]" />
          </div>

          <div className="relative min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-panel-neon p-8 sm:p-10 rounded-3xl relative text-center flex flex-col items-center border border-brand-neon/10"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 text-yellow-400 mb-6">
                  {[...Array(testimonialsList[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current stroke-none" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-white text-base sm:text-lg italic leading-relaxed font-sans mb-8">
                  "{testimonialsList[activeIndex].comment}"
                </p>

                {/* Reviewer Meta */}
                <div>
                  <h4 className="font-display font-black text-sm uppercase tracking-wider text-white">
                    {testimonialsList[activeIndex].name}
                  </h4>
                  <p className="text-zinc-500 text-xs font-semibold uppercase mt-1">
                    {testimonialsList[activeIndex].role} &bull; <span className="text-brand-neon">{testimonialsList[activeIndex].date}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Control Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              id="rev-prev-btn"
              onClick={handlePrev}
              className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white rounded-full transition-all cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slider Dots indicators */}
            <div className="flex items-center gap-2">
              {testimonialsList.map((_, idx) => (
                <button
                  key={idx}
                  id={`rev-dot-${idx}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx ? 'w-6 bg-brand-neon' : 'w-2 bg-zinc-800 hover:bg-zinc-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              id="rev-next-btn"
              onClick={handleNext}
              className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white rounded-full transition-all cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Google Map / Review Badge */}
        <div className="mt-16 text-center max-w-sm mx-auto p-4 bg-zinc-900/50 border border-zinc-900 rounded-2xl flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-brand-neon/10 text-brand-neon rounded-full flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Leave a Review on Google</p>
            <p className="text-[10px] text-zinc-400 font-sans mt-0.5">Help us reach our next 1,000 rating milestone!</p>
          </div>
        </div>

      </div>
    </section>
  );
}
