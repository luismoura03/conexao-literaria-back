const { books } = require("../../../lib");

module.exports = {
  book(_, { id }) {
    return books.find((book) => book.id === id);
  },
};
