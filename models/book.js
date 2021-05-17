const mongoose = require('mongoose');

const bookShema = new Shema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        default: ""
    },
    authors: {
        type: [String],
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    googleID: {
        type: String,
        required: true
    },
});

const Book = mongoose.model('Book', bookShema);

module.exports = Book;