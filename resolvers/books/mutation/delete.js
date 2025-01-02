const { books } = require("../../../lib");
const { authors } = require("../../../lib");

module.exports = {
  deleteBook: (_, { id }) => {
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      throw new Error("Book not found");
    }
    const [deletedBook] = books.splice(bookIndex, 1);
    return deletedBook;
  },
};
