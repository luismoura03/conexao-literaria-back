const { authors } = require("../lib");
const { book, books } = require("./books/query");
const {
  createBook,
  deleteBook,
  updateBook,
} = require("./books/mutation/index");

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
    updateBook,
  },
};
module.exports = { resolvers };
