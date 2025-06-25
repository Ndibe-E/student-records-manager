
import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js'
import adminRoutes from './routes/admin.js';
import studentRoutes from './routes/studentRoutes.js';
//import sequelize from './config/databases.js';

dotenv.config();

const app = express();
app.use(express.json());


app.use('/api', routes);
app.use('/api/admin', adminRoutes);
app.use('/api/students', studentRoutes);

app.get('/api/test', (req, res) => {
  res.send('API is working!');
});


// Handle invalid routes (404)
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

//sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  
  });
//});

