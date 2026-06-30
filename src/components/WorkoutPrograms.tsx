import { ArrowUpRight, Flame, Clock, Dumbbell } from 'lucide-react';
import { motion } from 'motion/react';
import { WorkoutProgramItem } from '../types';

interface WorkoutProgramsProps {
  onProgramClick: (programTitle: string) => void;
}

export default function WorkoutPrograms({ onProgramClick }: WorkoutProgramsProps) {
  const programsList: WorkoutProgramItem[] = [
    {
      id: 'p_loss',
      title: 'Weight Loss',
      description: 'Science-backed metabolic routines designed to drop body fat percentages while preserving lean muscle mass.',
      duration: '8 Weeks',
      level: 'Beginner',
      imagePlaceholder: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'p_gain',
      title: 'Muscle Gain',
      description: 'High-hypertrophy split routines focusing on volume progression, structural alignment, and muscle fiber density.',
      duration: '12 Weeks',
      level: 'All Levels',
      imagePlaceholder: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'p_strength',
      title: 'Strength Training',
      description: 'Compound lifts, heavy loading patterns, and customized neural adaptations to elevate power output safely.',
      duration: '10 Weeks',
      level: 'Advanced',
      imagePlaceholder: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'p_cardio',
      title: 'Cardio Fitness',
      description: 'Targeted aerobic zones, heavy-duty conditioning laps, and oxygen intake development parameters.',
      duration: '6 Weeks',
      level: 'Beginner',
      imagePlaceholder: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'p_burn',
      title: 'Fat Burn',
      description: 'Intense metabolic resistance training and continuous energy output setups to trigger post-exercise burn.',
      duration: '8 Weeks',
      level: 'Intermediate',
      imagePlaceholder: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'p_functional',
      title: 'Functional Training',
      description: 'Multi-planar conditioning, active mobility drills, core stabilizers, and athletic readiness workouts.',
      duration: '6 Weeks',
      level: 'All Levels',
      imagePlaceholder: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'p_beginner',
      title: 'Beginner Program',
      description: 'Safe introductory workouts focusing on basic movement patterns, coordination, and physical adaptation.',
      duration: '4 Weeks',
      level: 'Beginner',
      imagePlaceholder: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'p_advanced',
      title: 'Advanced Program',
      description: 'Extreme physical loading schedules, periodized supersets, and absolute elite athletic capacity development.',
      duration: '12 Weeks',
      level: 'Advanced',
      imagePlaceholder: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&q=80&w=600',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Intermediate': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'Advanced': return 'bg-red-500/10 text-red-400 border-red-500/20';
      default: return 'bg-brand-neon/10 text-brand-neon border-brand-neon/20';
    }
  };

  return (
    <section id="programs" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Accent blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-neon/5 rounded-full blur-3xl -ml-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-brand-neon tracking-widest uppercase mb-3 block">
            GOAL-ORIENTED ROUTINES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            WORKOUT PROGRAMS
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Choose from a set of structured, proven training curriculums. From beginner templates to advanced athletic protocols, achieve your exact physical milestone.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programsList.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white/5 backdrop-blur-xl group rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-brand-neon/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Cover Image with Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                  <img
                    src={program.imagePlaceholder}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${getLevelColor(program.level)}`}>
                      {program.level}
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-zinc-300 text-[10px] font-semibold tracking-wider">
                      <Clock className="w-3 h-3 text-brand-neon" />
                      {program.duration}
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6">
                  <h3 className="font-display font-black text-lg text-white uppercase tracking-wide group-hover:text-brand-neon transition-colors mb-2">
                    {program.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                    {program.description}
                  </p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="px-6 pb-6 pt-2">
                <button
                  id={`program-btn-${program.id}`}
                  onClick={() => onProgramClick(program.title)}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-neon/30 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Dumbbell className="w-3.5 h-3.5 text-brand-neon" />
                  <span>Enquire Program</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
