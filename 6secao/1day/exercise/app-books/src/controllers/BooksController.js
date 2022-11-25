// Exercício bônus fazer a partir da questão 4
const BooksService = require('../services/BooksService');

const erro = 'Algo deu errado';

const getAll = async (req, res) => {
  const { author } = req.query;
  try {
    let books;
    if (author) books = await BooksService.getByAuthor(author);
    else books = await BooksService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: `${erro}: ${error.message}` });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BooksService.getById(id);
    if (!book) res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: `${erro}: ${error.message}` });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await BooksService.createBook(title, author, pageQuantity);
    return res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: `${erro}: ${error.message}` });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const updatedBook = await BooksService
      .updateBook(id, { title, author, pageQuantity });
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    return res.status(201).json({ message: 'Book updated!'})
  } catch (error) {
    res.status(500).json({ message: `${erro}: ${error.message}` });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await BooksService.deleteBook(id);
    return res.status(200).json({ message: 'Book deleted!'})
  } catch (error) {
    return res.status(500).json({ message: `${erro}: ${error.message}` });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};
