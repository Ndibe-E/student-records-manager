// routes/studentRoutes.js
import express from 'express';
import { createStudent, getStudents, getStudentById, updateStudent, deleteStudent } from '../controller/studentController.js';
import { validateStudent, validationResultMiddleware} from '../middleware/validate.js';
import { authenticateAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a new student (admin only)
router.post('/create', authenticateAdmin, validateStudent,validationResultMiddleware, createStudent);

// Get all students
router.get('/students', getStudents);

// Get a student by ID
router.get('/students/:studentId', getStudentById);

// Update student details (admin only)
router.put('/students/:studentId', authenticateAdmin, validateStudent,validationResultMiddleware, updateStudent);

// Delete a student (admin only)
router.delete('/students/:studentId', authenticateAdmin, deleteStudent);

export default router;