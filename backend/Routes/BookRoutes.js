const express = require('express');
const router = express.Router();
const bookController = require('../controllers/Book.controller');
const { validateBook, validateInput } = require('../Middleware/validateInput');

router.get('/books', bookController.getBooks);

router.get('/books/:id', bookController.getBookById);

router.post('/books', validateBook, validateInput, bookController.addBook);

router.put('/books/:id', validateBook, validateInput, bookController.updateBook);

router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
