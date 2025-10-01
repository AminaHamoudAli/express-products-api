require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

// Custom middleware: log date and time
app.use((req, res, next) => {
  console.log(`Request received at: ${new Date().toLocaleString()}`);
  next();
});

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully!'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);
