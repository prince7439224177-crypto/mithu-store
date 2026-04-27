import { motion } from 'motion/react';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center"
          >
            <span className="text-2xl font-serif font-bold tracking-tight text-white">
              MITHU<span className="text-amber-600">.</span>
            </span>
          </motion.div>

          <div className="hidden md:flex space-x-10 text-sm font-medium uppercase tracking-widest text-slate-400">
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="hover:text-amber-500 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-5">
            <button className="p-2 text-slate-400 hover:text-amber-500 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-slate-400 hover:text-amber-500 transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 text-slate-400 hover:text-amber-500 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 h-4 w-4 bg-amber-600 text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                3
              </span>
            </button>
            <button className="md:hidden p-2 text-slate-400 hover:text-amber-500 transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
