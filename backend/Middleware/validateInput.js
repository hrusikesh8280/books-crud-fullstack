// validateInput.js
const { validationResult, check } = require('express-validator');

const validateBook = [
    check('title')
        .trim()
        .isLength({ min: 1 })
        .withMessage('Title is required'),
    check('author')
        .trim()
        .isLength({ min: 1 })
        .withMessage('Author is required'),
    check('publicationYear')
        .optional()
        .isNumeric()
        .withMessage('Publication year must be a number'),
    check('genre')
        .optional()
        .trim(),
    check('price')
        .optional()
        .isNumeric()
        .withMessage('Price must be a number'),
    check('description')
        .optional()
        .trim(),
];

const validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateBook,
    validateInput
};
