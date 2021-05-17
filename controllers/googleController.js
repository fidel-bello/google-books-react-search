
const axios = require('axios');
const db = require('../models');


module.exports = {

    findAll: async (req, res) => {
        try {
            console.log("Welcome to google books");

            const { query: params } = req;
            const results = await axios.get(
                'https://www.googleapis.com/books/v1/volumes',
                { params }
            );

            const apiBooks = await results.data.items.filter(
                (result) =>
                    result.volumeInfo.title &&
                    result.volumeInfo.infoLink &&
                    result.volumeInfo.authors &&
                    result.volumeInfo.description &&
                    result.volumeInfo.imageLinks &&
                    result.volumeInfo.imageLinks.thumbnail
            );
            
            const dbBooks = await db.Book.find();

            const books = await apiBooks.filter((apiBook) =>
                dbBooks.every(
                    (dbBook) => dbBook.googleId.toString() !== apiBook.id
                )
            );
            return res.json(books);

        } catch (error) {
            return res.status(422).json(error);
        }
    },
};