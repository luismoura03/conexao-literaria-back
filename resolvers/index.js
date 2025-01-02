const { authors, books } = require("../lib");
const { book } = require("./books/query");
const { createBook, deleteBook } = require("./books/mutation/index");

console.log(books, authors);
console.log(book);

const resolvers = {
  Query: {
    books,
    book,
  },

  Book: {
    author: (parent) => {
      return authors.find((author) => author.id === parent.authorId);
    },
  },

  Mutation: {
    createBook,
    deleteBook,
  },
};
module.exports = { resolvers };
