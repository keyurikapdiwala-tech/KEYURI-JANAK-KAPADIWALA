import { useState, useEffect } from 'react';
import { Check, Edit3, Save, RotateCcw, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { MembershipPlan } from '../types';

interface MembershipProps {
  onJoinClick: (planName: string) => void;
}

export default function Membership({ onJoinClick }: MembershipProps) {
  const DEFAULT_PLANS: MembershipPlan[] = [
    {
      id: 'plan_basic',
      name: 'Basic Plan',
      price: '₹1,500',
      period: 'Month',
      popular: false,
      features: [
        'Gym Floor Access',
        'Professional Guidance',
        'Basic Workout Plan',
        'Standard Locker Access',
        '1 Free Consultation',
        'Flexible Timings Support',
      ],
    },
    {
      id: 'plan_std',
      name: 'Standard Plan',
      price: '₹4,000',
      period: 'Quarterly',
      popular: true,
      features: [
        'Gym Floor Access',
        'Professional Guidance',
        'Customized Workout Plan',
        'Dedicated Locker Access',
        '3 Free Consultations',
        'Personal Trainer Guidance (1 Session)',
        'Diet Outline Chart Support',
      ],
    },
    {
      id: 'plan_prem',
      name: 'Premium Plan',
      price: '₹12,000',
      period: 'Annual',
      popular: false,
      features: [
        'Full 12-Month Gym Access',
        'Unlimited Professional Guidance',
        'Premium Multi-Phase Workout Plan',
        'VIP Locker Access',
        'Unlimited Free Consultations',
        'Personal Trainer Priority Booking',
        'Premium Custom Diet & Nutrition Plan',
        'Complimentary Body Composition Analysis',
      ],
    },
  ];

  const [plans, setPlans] = useState<MembershipPlan[]>(() => {
    const saved = localStorage.getItem('bnatural_membership_plans');
    return saved ? JSON.parse(saved) : DEFAULT_PLANS;
  });

  const [isAdminMode, setIsAdminMode] = useState(false);
  const [editablePlans, setEditablePlans] = useState<MembershipPlan[]>([]);

  useEffect(() => {
    if (isAdminMode) {
      setEditablePlans(JSON.parse(JSON.stringify(plans)));
    }
  }, [isAdminMode, plans]);

  const handlePriceChange = (id: string, newPrice: string) => {
    setEditablePlans(prev =>
      prev.map(p => (p.id === id ? { ...p, price: newPrice } : p))
    );
  };

  const handlePeriodChange = (id: string, newPeriod: string) => {
    setEditablePlans(prev =>
      prev.map(p => (p.id === id ? { ...p, period: newPeriod } : p))
    );
  };

  const handleNameChange = (id: string, newName: string) => {
    setEditablePlans(prev =>
      prev.map(p => (p.id === id ? { ...p, name: newName } : p))
    );
  };

  const handleSave = () => {
    setPlans(editablePlans);
    localStorage.setItem('bnatural_membership_plans', JSON.stringify(editablePlans));
    setIsAdminMode(false);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset plans to factory default prices?')) {
      setPlans(DEFAULT_PLANS);
      localStorage.setItem('bnatural_membership_plans', JSON.stringify(DEFAULT_PLANS));
      setIsAdminMode(false);
    }
  };

  return (
    <section id="membership" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <span className="text-xs font-bold text-brand-neon tracking-widest uppercase mb-3 block">
            AFFORDABLE MEMBERSHIP PLANS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            MEMBERSHIP OFFERS
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Choose a plan that fits your pace. No hidden enrollment fees. Owner can adjust prices anytime using the toggle control below.
          </p>

          {/* Admin Edit Controls Panel */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
            {!isAdminMode ? (
              <button
                id="admin-edit-toggle"
                onClick={() => setIsAdminMode(true)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 py-2.5 px-4 rounded-xl transition-all cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5 text-brand-neon" />
                <span>Change Prices (Owner Admin Mode)</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-brand-neon/30">
                <span className="text-xs text-brand-neon font-extrabold tracking-wide uppercase px-2">
                  Owner Edit Mode Active:
                </span>
                <button
                  id="admin-save-btn"
                  onClick={handleSave}
                  className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-brand-neon hover:bg-brand-neon-light text-black py-1.5 px-3 rounded-lg transition-all cursor-pointer"
                >
                  <Save className="w-3 h-3" />
                  Save
                </button>
                <button
                  id="admin-cancel-btn"
                  onClick={() => setIsAdminMode(false)}
                  className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white py-1.5 px-2 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  id="admin-reset-btn"
                  onClick={handleReset}
                  className="text-zinc-500 hover:text-red-400 p-1.5 rounded transition-colors cursor-pointer"
                  title="Reset to defaults"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {(isAdminMode ? editablePlans : plans).map((plan) => (
            <motion.div
              key={plan.id}
              id={`plan-card-${plan.id}`}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                plan.popular
                  ? 'bg-white/5 border-2 border-brand-neon shadow-2xl shadow-brand-neon/5'
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="text-brand-neon font-black text-2xl opacity-20 italic">
                  {plan.popular ? 'PRO' : 'FIT'}
                </span>
              </div>

              {/* Card Header */}
              <div>
                {isAdminMode ? (
                  <div className="mb-4">
                    <label className="text-[10px] text-zinc-500 block mb-1 font-bold uppercase">Plan Name</label>
                    <input
                      type="text"
                      value={plan.name}
                      onChange={(e) => handleNameChange(plan.id, e.target.value)}
                      className="bg-black border border-zinc-800 rounded px-2 py-1 text-sm text-white w-full focus:border-brand-neon focus:outline-none"
                    />
                  </div>
                ) : (
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-wider mb-2 pr-12">
                    {plan.name}
                  </h3>
                )}

                {/* Price Display / Input */}
                <div className="flex items-baseline gap-1 mt-4 mb-6">
                  {isAdminMode ? (
                    <div className="flex gap-2 items-center w-full">
                      <div className="flex-1">
                        <label className="text-[10px] text-zinc-500 block mb-1 font-bold uppercase">Price</label>
                        <input
                          type="text"
                          value={plan.price}
                          onChange={(e) => handlePriceChange(plan.id, e.target.value)}
                          className="bg-black border border-zinc-800 rounded px-2 py-1 text-base text-brand-neon w-full font-bold focus:border-brand-neon focus:outline-none"
                        />
                      </div>
                      <div className="w-24">
                        <label className="text-[10px] text-zinc-500 block mb-1 font-bold uppercase">Period</label>
                        <input
                          type="text"
                          value={plan.period}
                          onChange={(e) => handlePeriodChange(plan.id, e.target.value)}
                          className="bg-black border border-zinc-800 rounded px-2 py-1 text-xs text-zinc-300 w-full focus:border-brand-neon focus:outline-none"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="text-4xl font-display font-black text-brand-neon text-glow">{plan.price}</span>
                      <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">/ {plan.period}</span>
                    </>
                  )}
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-5" />

                {/* Features List */}
                <ul className="flex flex-col gap-3.5 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-brand-neon flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                id={`btn-join-${plan.id}`}
                onClick={() => onJoinClick(plan.name)}
                disabled={isAdminMode}
                className={`w-full py-3 bg-white/10 border border-white/10 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand-neon hover:text-black transition-all ${
                  plan.popular
                    ? '!bg-brand-neon !text-black !border-brand-neon hover:!bg-brand-neon-light'
                    : ''
                } ${isAdminMode ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Join Today
              </button>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Seal */}
        <div className="mt-16 text-center max-w-md mx-auto">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-zinc-400 text-xs font-medium">
            <ShieldCheck className="w-4 h-4 text-brand-neon" />
            <span>Secure Registration. Cancel/Pause Anytime.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
