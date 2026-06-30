import { useState } from 'react';
import { Shield, Sparkles, Wind, Eye, CheckCircle2, Waves, Compass, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import { FacilityItem } from '../types';

export default function Facilities() {
  const [activeTab, setActiveTab] = useState<'All' | 'Equipment' | 'Amenity'>('All');

  const facilitiesList: FacilityItem[] = [
    {
      id: 'fac1',
      name: 'Modern Machines',
      category: 'Equipment',
      iconName: 'Sparkles',
      description: 'Advanced custom weight stacks, biomechanically aligned cable systems, and guided press machines.',
    },
    {
      id: 'fac2',
      name: 'Free Weights',
      category: 'Equipment',
      iconName: 'Trophy',
      description: 'Premium weightlifting platforms, high-tensile strength barbells, and durable iron plates.',
    },
    {
      id: 'fac3',
      name: 'Cardio Machines',
      category: 'Equipment',
      iconName: 'Compass',
      description: 'High-end rowing machines, spin bicycles, and air dynamos to build raw stamina and burn fat.',
    },
    {
      id: 'fac4',
      name: 'Cross Trainer',
      category: 'Equipment',
      iconName: 'Eye',
      description: 'Smooth elliptical cross trainers designed for joint-friendly high-intensity low-impact calorie burn.',
    },
    {
      id: 'fac5',
      name: 'Treadmills',
      category: 'Equipment',
      iconName: 'Wind',
      description: 'Commercial-grade motorized running decks with shock absorption and custom feedback metrics.',
    },
    {
      id: 'fac6',
      name: 'Dumbbells',
      category: 'Equipment',
      iconName: 'Trophy',
      description: 'Extensive dumbbells ranging from 2kg up to 50kg, securely aligned on pristine twin racks.',
    },
    {
      id: 'fac7',
      name: 'Squat Rack',
      category: 'Equipment',
      iconName: 'Shield',
      description: 'Sturdy steel power racks, safety spotters, and solid chalk stations for heavy back or front squats.',
    },
    {
      id: 'fac8',
      name: 'Stretching Area',
      category: 'Amenity',
      iconName: 'CheckCircle2',
      description: 'Spacious floor mats, foam rollers, massage sticks, and stretch bands to optimize recovery.',
    },
    {
      id: 'fac9',
      name: 'Locker Facility',
      category: 'Amenity',
      iconName: 'Shield',
      description: 'High security private key lockers to safely store your bags, keys, wallets, and accessories.',
    },
    {
      id: 'fac10',
      name: 'Drinking Water',
      category: 'Amenity',
      iconName: 'Waves',
      description: 'RO purified, hygienic cold water dispenser always stocked to keep you hydrated.',
    },
    {
      id: 'fac11',
      name: 'Air Conditioned Gym',
      category: 'Amenity',
      iconName: 'Wind',
      description: 'Fully centralized, heavy-duty cooling climate control to maintain comfortable fresh air flow.',
    },
    {
      id: 'fac12',
      name: 'Changing Area',
      category: 'Amenity',
      iconName: 'CheckCircle2',
      description: 'Sleek, private changing cabins and fresh hand wash basin to refresh post workout.',
    },
  ];

  const filteredFacilities = activeTab === 'All'
    ? facilitiesList
    : facilitiesList.filter(fac => fac.category === activeTab);

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-brand-neon' };
    switch (iconName) {
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Trophy': return <Trophy {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'Eye': return <Eye {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'Waves': return <Waves {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      default: return <Trophy {...props} />;
    }
  };

  return (
    <section id="facilities" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-brand-neon tracking-widest uppercase mb-3 block">
            PREMIUM AMENITIES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            OUR PRESTIGE FACILITIES
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Experience premium, air-conditioned workout floors outfitted with high-end machinery, hygienic locker systems, and customized zones.
          </p>

          {/* Tab Filters */}
          <div className="flex justify-center items-center mt-10 gap-2 p-1 bg-zinc-950 border border-zinc-900 rounded-xl max-w-md mx-auto">
            {(['All', 'Equipment', 'Amenity'] as const).map((tab) => (
              <button
                key={tab}
                id={`fac-tab-${tab.toLowerCase()}`}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-brand-neon text-black font-extrabold shadow-md shadow-brand-neon/10'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab === 'All' ? 'View All' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFacilities.map((fac, idx) => (
            <motion.div
              layout
              key={fac.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="glass-panel p-6 rounded-2xl flex flex-col border border-zinc-900/60 hover:border-brand-neon/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-brand-neon/10 group-hover:border-brand-neon/20 transition-all">
                  {renderIcon(fac.iconName)}
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm text-white tracking-wide uppercase">
                    {fac.name}
                  </h3>
                  <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-widest block mt-0.5">
                    {fac.category}
                  </span>
                </div>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans mt-1">
                {fac.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature Banner */}
        <div className="mt-16 glass-panel-neon rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-neon/10 border border-brand-neon flex-shrink-0 flex items-center justify-center text-brand-neon">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-base text-white uppercase tracking-wider">
                Hygienic & Clean Workout Space Guarantee
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-xl font-sans">
                At B Natural Gym, hygiene is our priority. We wipe, sanitize, and deep clean all machines twice daily to maintain a pristine, safe, and safe workout environment.
              </p>
            </div>
          </div>
          <a
            href="tel:+919316282919"
            className="w-full lg:w-auto text-center py-3.5 px-6 rounded-xl bg-brand-neon hover:bg-brand-neon-light text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-brand-neon/20 flex-shrink-0"
          >
            Schedule a Visit
          </a>
        </div>

      </div>
    </section>
  );
}
