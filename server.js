// server.js (or app.js if renamed)
import express from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/userroute.js';
import authRoutes from './routes/authroute.js';
import passport from 'passport';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import swaggerDocument from './swagger.json' assert { type: 'json' };

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Initialize middleware
app.use(express.json());
app.use(passport.initialize());
import './config/passport.js';  // Ensure this file exists and path is correct

// Define routes
app.use('/api/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Define the port to run the server
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
