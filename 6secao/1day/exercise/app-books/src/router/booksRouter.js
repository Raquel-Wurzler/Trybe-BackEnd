const express = require('express');
const BooksController = require('../controllers/BooksController');

const routerBooks = express.Router();

routerBooks.get('/', BooksController.getAll);
routerBooks.get('/:id', BooksController.getById);
routerBooks.post('/', BooksController.createBook);
routerBooks.put('/:id', BooksController.updateBook);
routerBooks.delete('/:id', BooksController.deleteBook);

module.exports = routerBooks;
