const { books } = require("../../../lib");
const { authors } = require("../../../lib");

module.exports = {
  createBook: (_, args) => {
    const { title, authorId } = args;

    const foundAuthor = authors.find((author) => author.id === authorId);
    if (!foundAuthor) {
      throw new Error("Author not found");
    }

    const newBook = {
      id: books.length + 1,
      title: title,
      authorId: authorId,
    };

    books.push(newBook);

    return {
      ...newBook,
      foundAuthor,
    };
  },
};
