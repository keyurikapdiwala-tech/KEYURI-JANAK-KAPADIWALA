import { useState } from 'react';
import { Maximize2, X, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryImage } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Equipment' | 'Training' | 'Interior' | 'Group'>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const imagesList: GalleryImage[] = [
    {
      id: 'gal1',
      url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
      caption: 'Pristine Biomechanical Machine Deck',
      category: 'Equipment',
    },
    {
      id: 'gal2',
      url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
      caption: 'Olympic Strength Barbell Platforms',
      category: 'Training',
    },
    {
      id: 'gal3',
      url: 'https://images.unsplash.com/photo-1540496905315-1ae9972c546b?auto=format&fit=crop&q=80&w=800',
      caption: 'Luxury Air Conditioned Interior Workout Floor',
      category: 'Interior',
    },
    {
      id: 'gal4',
      url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
      caption: 'High Intensity Functional Fitness Group Zone',
      category: 'Group',
    },
    {
      id: 'gal5',
      url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800',
      caption: 'Premium Heavy Squat & Power Racks',
      category: 'Equipment',
    },
    {
      id: 'gal6',
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
      caption: 'Top-tier Cardio Lineup & Treadmills',
      category: 'Interior',
    },
    {
      id: 'gal7',
      url: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&q=80&w=800',
      caption: 'Dedicated Personal Guidance Sessions',
      category: 'Training',
    },
    {
      id: 'gal8',
      url: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=800',
      caption: 'Multi-functional Cross Training Workouts',
      category: 'Group',
    },
  ];

  const filteredImages = activeFilter === 'All'
    ? imagesList
    : imagesList.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-brand-neon tracking-widest uppercase mb-3 block">
            VISUAL TOUR
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            OUR GALLERY
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Explore B Natural Gym's luxurious space, heavy power gear, comfortable changing spaces, and active training sessions.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center items-center mt-10 gap-2 p-1 bg-zinc-950 border border-zinc-900 rounded-xl max-w-xl mx-auto">
            {(['All', 'Equipment', 'Training', 'Interior', 'Group'] as const).map((filter) => (
              <button
                key={filter}
                id={`gal-filter-${filter.toLowerCase()}`}
                onClick={() => setActiveFilter(filter)}
                className={`flex-1 min-w-[80px] py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-brand-neon text-black font-extrabold shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {filter === 'All' ? 'All Photos' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer bg-zinc-900 border border-zinc-900 hover:border-brand-neon/30 transition-all duration-300"
                onClick={() => setSelectedImage(img)}
              >
                {/* Photo */}
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Cover Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-10" />
                
                {/* Zoom Trigger Icon */}
                <div className="absolute top-4 right-4 p-2.5 bg-black/80 backdrop-blur-md rounded-xl text-brand-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Details Footer */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <span className="text-[9px] bg-brand-neon text-black font-bold uppercase px-2 py-0.5 rounded tracking-widest mb-1.5 inline-block">
                    {img.category}
                  </span>
                  <p className="text-white font-display font-semibold text-xs truncate">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 bg-zinc-950/40 rounded-3xl border border-zinc-900 border-dashed">
            <ImageIcon className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <p className="text-zinc-500 text-sm font-sans">No photos in this category yet.</p>
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedImage(null)}
            >
              <button
                id="close-lightbox"
                className="absolute top-6 right-6 p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white rounded-full transition-all cursor-pointer"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ type: 'spring', damping: 25 }}
                className="max-w-4xl w-full flex flex-col gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-[4/3] sm:aspect-[16/10] bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.caption}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center justify-between px-2">
                  <div>
                    <span className="text-[10px] bg-brand-neon/10 text-brand-neon font-bold uppercase px-2.5 py-1 rounded-md tracking-widest mb-1 inline-block">
                      {selectedImage.category}
                    </span>
                    <h4 className="text-white font-display font-bold text-sm sm:text-base">
                      {selectedImage.caption}
                    </h4>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">B Natural Gym</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
