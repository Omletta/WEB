const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
const dishRoutes = require('./routes/dishRoutes');
app.use('/api/dishes', dishRoutes);
app.use('/api', authRoutes);


// Start the server
const PORT = process.env.PORT || 7777;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
