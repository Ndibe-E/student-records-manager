import express from 'express';
import { registerAdmin, loginAdmin } from '../controller/adminController.js';
import { validateAdmin } from '../middleware/validate.js';

const router = express.Router();

// Register a new admin
router.post("/register", validateAdmin , registerAdmin);

// Login admin
router.post("/login", validateAdmin, loginAdmin);

export default router;