// routes/studentRoutes.js
import express from 'express';
import { createStudent, getStudents, getStudentById, updateStudent, deleteStudent } from '../controller/studentController.js';
import { validateStudent } from '../middleware/validate.js';
import { authenticateAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a new student (admin only)
router.post('/create', authenticateAdmin, validateStudent, createStudent);

// Get all students
router.get('/students', getStudents);

// Get a student by ID
router.get('/:studentId', getStudentById);

// Update student details (admin only)
router.put('/:studentId', authenticateAdmin, validateStudent, updateStudent);

// Delete a student (admin only)
router.delete('/:studentId', authenticateAdmin, deleteStudent);

export default router;