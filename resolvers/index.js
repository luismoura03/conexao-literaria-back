const { authors, books } = require("../lib");
const { book } = require("./books/query");

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
    createBook: (_, args) => {
      const { title, authorId } = args;

      const newBook = {
        id: books.length + 1,
        title: title,
        authorId: authorId,
      };

      books.push(newBook);

      const author = authors.find((author) => author.id === authorId);
      return {
        ...newBook,
        author,
      };
    },
  },
};

module.exports = { resolvers };
