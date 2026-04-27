import express from 'express';
import { createServer as createViteServer } from 'vite';
import Stripe from 'stripe';
import Razorpay from 'razorpay';
import path from 'path';
import cors from 'cors';
import crypto from 'crypto';
import 'dotenv/config';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Lazy initialize Stripe
let stripe: Stripe | null = null;
const getStripe = () => {
  if (!stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      console.warn('STRIPE_SECRET_KEY is not set. Checkout will not work.');
      return null;
    }
    stripe = new Stripe(key);
  }
  return stripe;
};

// API: Create Stripe Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { name, price, image } = req.body;
    const clientStripe = getStripe();

    if (!clientStripe) {
      return res.status(500).json({ error: 'Payment system not configured.' });
    }

    const session = await clientStripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: name,
              images: [image],
            },
            unit_amount: price * 100, // Stripe expects amounts in paise
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.APP_URL || 'http://localhost:3000'}/?success=true`,
      cancel_url: `${process.env.APP_URL || 'http://localhost:3000'}/?canceled=true`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Lazy initialize Razorpay
let razorpay: Razorpay | null = null;
const getRazorpay = () => {
  if (!razorpay) {
    const keyId = process.env.RAZORPAY_KEY_ID || process.env.VITE_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    
    if (!keyId || !keySecret) {
      console.warn('RAZORPAY_KEY_ID (or VITE_RAZORPAY_KEY_ID) or RAZORPAY_KEY_SECRET is not set.');
      return null;
    }
    
    try {
      razorpay = new Razorpay({
        key_id: keyId.trim(),
        key_secret: keySecret.trim(),
      });
    } catch (err) {
      console.error('Error initializing Razorpay:', err);
      return null;
    }
  }
  return razorpay;
};

// API: Create Razorpay Order
app.post('/api/razorpay/order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt } = req.body;
    const instance = getRazorpay();

    if (!instance) {
      return res.status(500).json({ error: 'Razorpay is not configured.' });
    }

    const options = {
      amount: amount * 100, // amount in the smallest currency unit
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
    };

    const order = await instance.orders.create(options);
    res.json(order);
  } catch (error: any) {
    console.error('Razorpay Order Error:', error);
    const message = error.error?.description || error.message || 'Failed to create order';
    res.status(500).json({ error: message, details: error });
  }
});

// API: Verify Razorpay Payment (Optional but recommended)
app.post('/api/razorpay/verify', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const secret = process.env.RAZORPAY_KEY_SECRET;

  if (!secret) return res.status(500).json({ error: 'Secret not set' });

  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
  const generated_signature = hmac.digest('hex');

  if (generated_signature === razorpay_signature) {
    res.json({ status: 'ok' });
  } else {
    res.status(400).json({ status: 'failure' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Mithu Store server running on http://localhost:${PORT}`);
  });
}

startServer();
