const { books } = require("../../../lib");

module.exports = {
  book(_, { id }) {
    const getBook = books.find((book) => book.id === id);
    if (!getBook) {
      throw new Error("Book not found");
    }
    return getBook;
  },
};
