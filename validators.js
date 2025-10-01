const { body } = require('express-validator');

exports.registerValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];

exports.productValidation = [
  body('name').notEmpty().withMessage('Product name is required'),
  body('price').isNumeric().withMessage('Price must be a number')
];
