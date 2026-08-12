const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security and middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for development/simple custom builds
  crossOriginResourcePolicy: false, // Allow assets to load inside cross-origin iframe previews
  crossOriginEmbedderPolicy: false
}));
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logger
app.use((req, res, next) => {
  console.log(`[REQUEST] ${req.method} ${req.url}`);
  next();
});

// Rate limiter for API routes
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { error: 'Too many requests from this IP, please try again later.' }
});

// Route for Shop page
app.get('/shop', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'shop.html'));
});

// Route for Product page
app.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'product.html'));
});

// Route for Checkout page
app.get('/checkout', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'checkout.html'));
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.get('/api/status', apiLimiter, (req, res) => {
  res.json({
    status: 'online',
    message: '234 District custom build server is running successfully.',
    timestamp: new Date()
  });
});

// Fallback for any unknown API route
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

// Fallback for frontend (Single Page routing or catch-all if required later)
app.use((req, res) => {
  // If the path request has an extension (e.g. .png, .ico, .css) or is an API path, return 404
  if (req.path.includes('.') || req.path.startsWith('/api')) {
    return res.status(404).send('Not Found');
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong on the server!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌐 Local URL: http://localhost:${PORT}`);
  console.log(`🔧 Mode: ${process.env.NODE_ENV || 'development'}`);
  console.log(`==================================================`);
});
