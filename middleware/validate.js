// middlewares/studentValidator.js
import { body, validationResult } from 'express-validator';

export const validateStudent = [
  body('fullName').notEmpty().withMessage('Full name is required.'),
  body('regNumber').notEmpty().withMessage('Student registration number is required.'),
  body('department').notEmpty().withMessage('Department is required.'),
  body('email').isEmail().withMessage('Invalid email address.'),
  body('level')
  .isInt().withMessage('Level must be a number.')
  .custom((value) => {
    // Check if the level is one of the allowed values
    // Assuming levels are 100, 200, 300, 400, and 500
    const allowedLevels = [100, 200, 300, 400, 500];

    if (!allowedLevels.includes(Number(value))) {
      
      throw new Error('Level must be one of: 100, 200, 300, 400, or 500.');
    }
    return true;
  }),
 ] 
 
  export const validationResultMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        message: 'Validation failed',
        errors: errors.array(),
        //fullError: errors.message 
        
      });
    }
    next();
  }
;