require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const http = require('http');
const { Server } = require('socket.io');

// Initialize Express
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

// Import routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// Create HTTP server and attach Socket.io
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// Make io accessible in other modules (e.g., controllers)
app.set('io', io);

// Socket.io events
io.on('connection', (socket) => {
  console.log('User connected', socket.id);

  socket.on('chatMessage', (msg) => {
    io.emit('chatMessage', msg); // تبث الرسالة لجميع المستخدمين
  });

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
