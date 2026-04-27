import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-slate-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-900/10 transition-all duration-300 border border-slate-800"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-800">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <span className="px-2 py-1 bg-slate-950/80 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase text-amber-500 rounded-md shadow-sm border border-amber-500/20">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className={i < 4 ? "fill-amber-500 text-amber-500" : "fill-slate-700 text-slate-700"} />
          ))}
          <span className="text-[10px] text-slate-500 ml-1">(4.0)</span>
        </div>
        <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-slate-400 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-300 font-sans">
            ₹{product.price}
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={async () => {
              try {
                // 1. Create order on server
                const response = await fetch('/api/razorpay/order', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    amount: product.price,
                  }),
                });
                
                const order = await response.json();
                
                if (!response.ok || !order.id) {
                  const errorMsg = order.error || 'Failed to initialize order. Please check server logs and Razorpay API keys.';
                  alert(errorMsg);
                  console.error('Razorpay Order Error:', order);
                  return;
                }

                // 2. Open Razorpay Checkout
                const options = {
                  key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
                  amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                  currency: order.currency,
                  name: "Mithu Store",
                  description: `Purchase of ${product.name}`,
                  image: product.image,
                  order_id: order.id,
                  handler: function (response: any) {
                    alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                    // Optionally verify on server
                  },
                  prefill: {
                    name: "Customer Name",
                    email: "customer@example.com",
                    contact: "9999999999"
                  },
                  theme: {
                    color: "#d97706" // amber-600
                  }
                };

                const rzp = new (window as any).Razorpay(options);
                rzp.open();

              } catch (err) {
                console.error(err);
                alert('Payment failed to initialize.');
              }
            }}
            className="p-3 bg-amber-600 text-white rounded-xl hover:bg-amber-500 transition-colors shadow-lg shadow-amber-900/20"
          >
            <ShoppingCart size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
