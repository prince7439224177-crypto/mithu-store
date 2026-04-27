import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-2xl font-serif font-bold tracking-tight text-white">
              MITHU<span className="text-amber-600">.</span>
            </span>
            <p className="text-sm leading-relaxed max-w-xs text-slate-500">
              Your destination for premium quality products. We believe in craftsmanship, durability, and timeless design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest text-sm uppercase">Shop By Style</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Oversized Tees</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Classic Fits</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Graphic Collection</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Premium Basics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest text-sm uppercase">Customer Care</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Return & Exchange</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Size Guide</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold mb-6 tracking-widest text-sm uppercase">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-amber-600" />
                <span>Serampore Mahesh, Post: 712202</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-amber-600" />
                <span>+91 7439224177</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-amber-600" />
                <span>princedas730@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 border-t border-slate-900 mb-16">
          <div className="max-w-md">
            <h4 className="text-white font-bold mb-4 tracking-widest text-sm uppercase">Join Our Newsletter</h4>
            <p className="text-sm text-slate-500 mb-6">
              Subscribe to receive updates, access to exclusive deals, and more. Stay ahead with the latest in urban fashion.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/50 focus:border-amber-600 flex-grow text-sm transition-all shadow-inner"
                required
              />
              <button 
                type="submit" 
                className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-xl transition-all text-sm font-bold shadow-lg shadow-amber-900/40 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex items-center justify-start lg:justify-end">
            <div className="flex gap-4 items-center">
              <span className="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-bold">Secure Payment</span>
              <div className="h-px w-12 bg-slate-800"></div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase">
          <p>&copy; 2026 Mithu Store. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
