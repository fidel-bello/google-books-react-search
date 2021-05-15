const mongoose = require('mongoose');
const Shema = mongoose.Schema;
const bookSchema = new Schema ({
    _id: { type: String },
    title: { type: String },
    authors: { type: Array },
    description: { type: String },
    image: { type: String },
    link: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;