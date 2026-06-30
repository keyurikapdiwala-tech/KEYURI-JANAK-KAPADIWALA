import { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

export default function FAQ() {
  const faqList: FAQItem[] = [
    {
      id: 'faq1',
      question: 'What are the gym timings?',
      answer: 'B Natural Gym operates Monday to Saturday. Morning slot is 6:00 AM – 12:00 PM, and Evening slot is 4:00 PM – 10:00 PM. We are closed on Sundays to allow deep cleaning, maintenance, and trainer training.',
    },
    {
      id: 'faq2',
      question: 'Do you offer personal training?',
      answer: 'Yes! We have certified, highly experienced personal trainers who will design customized nutrition, weight-loss, or strength plans, correct your form, and motivate you. Personal training packages can be enquired at the reception desk.',
    },
    {
      id: 'faq3',
      question: 'Can absolute beginners join?',
      answer: 'Absolutely! More than 50% of our happy members started as complete beginners. Our friendly trainers are always on the floor to teach you proper machine usage, suggest lightweight workouts, and make sure you feel fully supported.',
    },
    {
      id: 'faq4',
      question: 'Is parking available at the facility?',
      answer: 'Yes, secure free vehicle parking is fully available inside and around the Orchid Harmony building complex for all B Natural Gym members.',
    },
    {
      id: 'faq5',
      question: 'How can I contact the gym?',
      answer: 'You can call us directly on +91 93162 82919, drop a message on WhatsApp, or visit us directly on the 4th Floor of Orchid Harmony, Gaurav Path Road, Adajan, Surat, Gujarat.',
    },
  ];

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-neon/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-brand-neon tracking-widest uppercase mb-3 block">
            HAVE QUESTIONS?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Find quick answers regarding our schedules, equipment guidance, coaching systems, and membership details.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqList.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'border-brand-neon/30 bg-zinc-900/80' : 'border-zinc-900'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-white tracking-wide pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 text-brand-neon bg-brand-neon/10 border-brand-neon/20' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 sm:px-8 pb-6 border-t border-zinc-900/60 pt-4">
                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-6 bg-zinc-900/40 rounded-2xl border border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
          <div className="text-left">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Still have questions?</h4>
            <p className="text-[10px] text-zinc-500 font-sans mt-0.5">Feel free to ask the owner directly over call or WhatsApp.</p>
          </div>
          <a
            href="tel:+919316282919"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-brand-neon hover:text-brand-neon-light transition-colors"
          >
            <span>Ask us anything</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
