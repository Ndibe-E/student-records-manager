// middlewares/studentValidator.js
import { body, validationResult } from 'express-validator';

export const validateStudent = [
  body('fullName').notEmpty().withMessage('Full name is required.'),
  body('regNumber').notEmpty().withMessage('Student registration number is required.'),
  body('department').notEmpty().withMessage('Department is required.'),
  body('email').isEmail().withMessage('Invalid email address.'),
  body('level').isInt({ min: 100, max: 500 }).withMessage('Level must be between 100 and 500.'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        message: 'Validation failed',
        errors: errors.array(),
        fullError: errors.message 
        
      });
    }
    next();
  }
];