const mongoose = require('mongoose'); // chamo o mongoose

// Agora crio Schema, um esquema (ou estrutura) de como meu dado deve vir para ser inserido:
const bookSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    year: Number,
});

module.exports = mongoose.model('book', bookSchema); // exportando o mongoose