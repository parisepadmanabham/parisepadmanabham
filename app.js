const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('Failed to connect to MongoDB', err));
  
  const protectedRoutes = require('./routes/protected');
  app.use('/api/protected', protectedRoutes);
  