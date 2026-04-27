/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { Product } from './types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Midnight Urban Tee',
    description: 'Premium heavy cotton oversized fit. Features a minimalist aesthetic perfect for modern street style.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800',
    category: 'Oversized'
  },
  {
    id: '2',
    name: 'Vintage Desert Sand',
    description: 'Soft-wash vintage finish with a tailored athletic fit. Sustainable fabric that feels like a second skin.',
    price: 699,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800',
    category: 'Classic'
  },
  {
    id: '3',
    name: 'Azure Graphic Essential',
    description: 'Limited edition high-density print on luxury combed cotton. Breathable and designed for everyday comfort.',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800',
    category: 'Graphic'
  },
  {
    id: '4',
    name: 'Stealth Black Performance',
    description: 'Moisture-wicking tech fabric with a sleek matte finish. Ideal for active lifestyles and gym sessions.',
    price: 949,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800',
    category: 'Active'
  },
  {
    id: '5',
    name: 'Nordic Grey Pocket Tee',
    description: 'Clean lines and a functional chest pocket. A versatile staple for layering or wearing solo.',
    price: 799,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800',
    category: 'Classic'
  },
  {
    id: '6',
    name: 'Crimson Tide Relaxed',
    description: 'Drop-shoulder silhouette in a bold deep red. Crafted from 100% organic cotton for ultimate softness.',
    price: 1249,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800',
    category: 'Oversized'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-xs font-bold tracking-[0.3em] uppercase text-amber-500 mb-4 block"
                >
                  New Arrivals
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-serif font-bold text-white"
                >
                  Premium T-Shirts for the <br />
                  <span className="italic font-normal text-slate-400">Urban Youth.</span>
                </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex gap-4"
              >
                <div className="flex space-x-1 border border-slate-800 rounded-full p-1 bg-slate-900/50">
                  {['All', 'Oversized', 'Classic', 'Graphic'].map((cat) => (
                    <button 
                      key={cat} 
                      className={`px-4 py-2 text-[10px] font-bold tracking-widest uppercase rounded-full transition-all duration-200 ${cat === 'All' ? 'bg-slate-800 text-white shadow-sm border border-slate-700' : 'text-slate-500 hover:text-white'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-slate-800 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-slate-800 transition-all duration-300 shadow-xl"
              >
                View Full Collection
              </motion.button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-500 mb-4 block">Our Story</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-8">
                  Crafting Quality <br /> 
                  Beyond <span className="italic font-normal text-slate-400">Limits.</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Mithu Store began with a simple idea: that high-end design and quality should be accessible. We curate products that aren't just beautiful, but built to last.
                </p>
                <div className="grid grid-cols-3 gap-8 border-t border-slate-800 pt-8 mt-12">
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-white">30k+</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Happy Clients</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-white">100+</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Unique Items</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-white">24/7</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Expert Support</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square"
              >
                <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-slate-800 rounded-3xl -rotate-6 border border-slate-700" />
                <img 
                  src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800" 
                  alt="Craftsmanship" 
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

