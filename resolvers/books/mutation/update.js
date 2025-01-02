const { books } = require("../../../lib");
const { authors } = require("../../../lib");

module.exports = {
  updateBook: (_, { id, title, authorId }) => {
    const bookIndex = books.findIndex((book) => book.id === book.id);
    if (bookIndex === -1) {
      throw new Error("Book not found");
    }
    console.log(bookIndex);
    const [updatedBook] = books.splice(bookIndex, 1, {
      ...books[bookIndex],
      title,
      authorId,
    });
    return updatedBook;
  },
};
