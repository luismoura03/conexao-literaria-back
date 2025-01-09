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
    author: async (parent, args, { db }) => {
      const author = await db("authors").where("id", parent.authorId).first();
      console.log(author);
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
