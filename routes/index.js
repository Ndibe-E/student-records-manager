import express from 'express';
import adminRoutes from './admin.js';
import studentRoutes from './studentRoutes.js';
import dotenv from 'dotenv';

dotenv.config(); // Optional: load env variables


const router = express.Router();

// Public routes
router.use('/admin', adminRoutes);

// Protected routes (auth middleware is applied inside studentRoutes)
router.use('/students', studentRoutes);


export default router;