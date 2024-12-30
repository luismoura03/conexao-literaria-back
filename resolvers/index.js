const { authors } = require("../lib");
const { books, book } = require("./books/query");

const resolvers = {
  Query: {
    books,
    book,
  },

  Book: {
    author: (parent) => {
      console.log(parent);
      return authors.find((author) => author.id === parent.authorId);
    },
  },
};

console.log(resolvers);

module.exports = { resolvers };
