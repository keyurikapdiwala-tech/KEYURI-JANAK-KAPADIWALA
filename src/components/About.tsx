import { Target, CheckCircle2, Award, Users, Heart, Zap, ShieldAlert, Sparkles, Clock, Flame, Smile, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { WhyChooseItem } from '../types';

export default function About() {
  const whyChooseList: WhyChooseItem[] = [
    {
      id: 'wc1',
      title: 'Premium Gym Equipment',
      description: 'World-class biomechanical machines, sturdy squat racks, and premium free weight collections.',
      iconName: 'Award',
    },
    {
      id: 'wc2',
      title: 'Experienced Trainers',
      description: 'Certified friendly instructors specializing in posture alignment, heavy lifts, and personal goals.',
      iconName: 'Users',
    },
    {
      id: 'wc3',
      title: 'Friendly Environment',
      description: 'Warm, positive, supportive workout atmosphere that makes everyone feel welcomed and motivated.',
      iconName: 'Smile',
    },
    {
      id: 'wc4',
      title: 'Strength Training',
      description: 'Dedicated zones for deadlifting, functional carries, power racks, and compound heavy movements.',
      iconName: 'Zap',
    },
    {
      id: 'wc5',
      title: 'Weight Loss Programs',
      description: 'Science-backed metabolic cardio routines, calorie expenditure trackers, and nutritional plans.',
      iconName: 'Flame',
    },
    {
      id: 'wc6',
      title: 'Muscle Building',
      description: 'Hypertrophy programs, high-intensity intervals, and progression templates to pack on solid muscle.',
      iconName: 'Sparkles',
    },
    {
      id: 'wc7',
      title: 'Cardio Zone',
      description: 'Top-tier commercial treadmills, cross-trainers, air bikes, and spin cycles with custom heart rate tracking.',
      iconName: 'Heart',
    },
    {
      id: 'wc8',
      title: 'Functional Training',
      description: 'Kettlebells, battle ropes, plyo boxes, and suspension accessories for dynamic full-body conditioning.',
      iconName: 'Target',
    },
    {
      id: 'wc9',
      title: 'Clean & Hygienic Facility',
      description: 'Meticulous sanitization schedules for all machines, locker rooms, washrooms, and floors.',
      iconName: 'Shield',
    },
    {
      id: 'wc10',
      title: 'Affordable Membership',
      description: 'High-value fitness premium experience with highly competitive pricing plans that fit your budget.',
      iconName: 'CheckCircle2',
    },
    {
      id: 'wc11',
      title: 'Flexible Timings',
      description: 'Dual sessions morning (6:00 AM – 12:00 PM) and evening (4:00 PM – 10:00 PM) to fit busy working schedules.',
      iconName: 'Clock',
    },
    {
      id: 'wc12',
      title: 'Personal Guidance',
      description: 'One-on-one postural evaluation, technique fine-tuning, and personal progress logs.',
      iconName: 'Users',
    },
  ];

  // Map icon names to components
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-brand-neon' };
    switch (iconName) {
      case 'Award': return <Award {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Smile': return <Smile {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Heart': return <Heart {...props} />;
      case 'Target': return <Target {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'Clock': return <Clock {...props} />;
      default: return <Award {...props} />;
    }
  };

  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-neon/5 rounded-full blur-3xl -ml-40 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-neon/5 rounded-full blur-3xl -mr-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Welcome Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-brand-neon tracking-widest uppercase mb-3 block">
              WELCOME TO B NATURAL
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight mb-6 leading-tight">
              SURAT'S ULTIMATE <br />
              <span className="text-stroke-neon">FITNESS SANCTUARY</span>
            </h2>
            <p className="text-zinc-300 text-base leading-relaxed mb-6">
              Welcome to B Natural Gym, one of Surat's most trusted fitness centers dedicated to helping people achieve their fitness goals. Whether you are beginning your fitness journey or are an experienced athlete, we provide a motivating environment, modern equipment, and expert guidance to help you become stronger every day.
            </p>
            
            {/* Mission Box */}
            <div className="glass-panel-neon p-6 rounded-2xl flex items-start gap-4 mb-6">
              <div className="p-3 bg-brand-neon/10 rounded-xl text-brand-neon flex-shrink-0 mt-0.5">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-sm uppercase tracking-wide text-white">Our Mission</h4>
                <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                  Helping people build healthier, stronger, and more confident lives through high-standard natural fitness, structured training, and friendly community encouragement.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-brand-neon/10 rounded-3xl blur-2xl transform translate-x-4 translate-y-4 -z-10" />
            <div className="relative border border-zinc-800 rounded-3xl overflow-hidden aspect-[4/3] bg-zinc-900 group">
              <img
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000"
                alt="Gym Training Session B Natural"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="bg-black/80 backdrop-blur-md border border-zinc-800 px-5 py-3 rounded-2xl">
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">ESTABLISHED DESTINATION</p>
                  <p className="text-lg font-display font-black text-white">ADAJAN, SURAT</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-brand-neon tracking-widest uppercase mb-3 block">
            CORE BENEFITS
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight">
            WHY CHOOSE B NATURAL GYM?
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            We deliver premium fitness standards and dedicated motivation so you can consistently hit your target milestones.
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {whyChooseList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-panel hover:border-brand-neon/30 p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 group-hover:bg-brand-neon/10 group-hover:border-brand-neon/20 transition-all">
                {renderIcon(item.iconName)}
              </div>
              <h4 className="font-display font-bold text-base text-white tracking-wide mb-2">
                {item.title}
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
