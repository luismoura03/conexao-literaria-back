//const { authors } = require("../lib");
const { book, books } = require("./books/query");
const {
  createBook,
  deleteBook,
  updateBook,
} = require("./books/mutation/index");
const db = require("../src/db");

const resolvers = {
  Query: {
    books,
    book,
  },

  Book: {
    author: async (parent, args, context) => {
      const author = await db("authors").where("id", parent.author_id).first();
      return author;
    },
  },

  Mutation: {
    createBook,
    deleteBook,
    updateBook,
  },
};
module.exports = { resolvers };
