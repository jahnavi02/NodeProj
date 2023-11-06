const Book = require('../models/Book');

exports.createBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;

    if (!title) {
        return res.status(400).json({ message: 'Please provide the title' });
    }
  
    if (!author) {
        return res.status(400).json({ message: 'Please provide the author' });
    }
    const book = new Book({ title, author, summary });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    if (error.name === 'CastError'){
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    if (error.name === 'CastError'){
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted' });
  } catch (error) {
    if (error.name === 'CastError'){
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(500).json({ message: error.message });
  }
};
