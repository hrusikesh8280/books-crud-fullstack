const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    publicationYear: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: false,
        trim: true
    },
    price: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: false,
        trim: true
    }
}, {
    timestamps: true
});

const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;
