const { NonEmptyStringResolver } = require("graphql-scalars");
const { book, books } = require("./books/query");
const {
  createBook,
  deleteBook,
  updateBook,
} = require("./books/mutation/index");
const {
  createAuthor,
  deleteAuthor,
  updateAuthor,
} = require("./authors/mutation/index");
const { authors, author } = require("./authors/query");

const resolvers = {
  NonEmptyString: NonEmptyStringResolver,

  Query: {
    books,
    book,
    authors,
    author,
  },

  Book: {
    author: async (parent, __, { db }) => {
      const author = await db("authors").where("id", parent.authorId).first();
      return author;
    },
  },

  Mutation: {
    createBook,
    deleteBook,
    updateBook,
    createAuthor,
    deleteAuthor,
    updateAuthor,
  },
};
module.exports = { resolvers };
