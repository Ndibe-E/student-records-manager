
import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/studentRoutes.js';
import sequelize from './config/databases.js';

dotenv.config();

const app = express();
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api', routes);

// Sync DB
app.use((req, res, next) => {
  res.status(404).json({
    status: false,
    message: 'Route not found',
  });
});

// Global error handler (500)
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    status: false,
    message: 'Internal Server Error',
    error: err.message,
  });
});




const PORT = process.env.PORT || 5000; // Set the port from environment variables or default to 3306

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  
  });
});

