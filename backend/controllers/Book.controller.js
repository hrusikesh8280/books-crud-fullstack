const Book = require('../models/Bookmodel');
// all controller function
const bookController = {
    // Get all books
    getBooks: async (req, res) => {
        try {
            const books = await Book.find();
            res.json(books);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    // Get a single book by ID
    getBookById: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            if (!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.json(book);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    // Add a new book
    addBook: async (req, res) => {
        const book = new Book(req.body);
        try {
            const newBook = await book.save();
            res.status(201).json(newBook);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    // Update a book by ID
    updateBook: async (req, res) => {
        try {
            const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.json(book);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    // Delete a book by ID
    deleteBook: async (req, res) => {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            if (!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.json({ message: "Book deleted successfully" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};

module.exports = bookController;
