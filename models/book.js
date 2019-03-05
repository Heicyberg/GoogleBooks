const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
   googleId: String,
   title: String,
   subtitle: String,
   link: String,
   authors: Array,
   description: String,
   image: String 
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
