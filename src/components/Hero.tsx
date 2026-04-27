import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1600"
          alt="Hero t-shirt background"
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-amber-500 uppercase border border-amber-500/30 rounded-full bg-amber-500/10">
            Premium Boyswear 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Elegance in <br />
            Every <span className="italic text-slate-300">Stitch.</span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 font-sans leading-relaxed">
            Discover our collection of premium t-shirts crafted for style, comfort, and durability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-amber-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 group transition-all duration-300 hover:bg-amber-500"
            >
              Shop T-Shirts
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ opacity: 0.8 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg border border-white/20 flex items-center justify-center transition-all duration-300"
            >
              Our Story
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
