const db = require('../models');

module.exports = {
	findAll: async (req, res) => {
		try {
			const books = await db.Book.find(req.query);
			return res.json(books);
		} catch (error) {
			return res.status(422).json(error);
		}
	},

	findById: async (req, res) => {
		try {
			const books = await db.Book.findById(req.params.id);
			return res.json(books);
		} catch (error) {
			return res.status(422).json(error);
		}
	},

	create: async (req, res) => {
		try {
			const book = await db.Book.create(req.body);
			return res.json(book);
		} catch (error) {
			return res.status(422).json(error);
		}
	},

	update: async (req, res) => {
		try {
			const book = await db.Book.findOneAndUpdate(
				{ id: req.params.id },
				req.body
			);
			return res.json(book);
		} catch (error) {
			return res.status(422).json(error);
		}
	},

	remove: async (req, res) => {
		try {
			const book = await db.Book.findById(req.params.id);
			const deletedBook = await book.remove();
			return res.json(deletedBook);
		} catch (error) {
			return res.status(422).json(error);
		}
	},
};
