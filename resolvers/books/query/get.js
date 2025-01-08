const db = require("../../../src/db/index");

module.exports = {
  book: async (_, { id }) => {
    const book = await db("books").where({ id }).first();
    if (!book) {
      throw new Error(`Book not found: ID ${id}`);
    }
    return book;
  },
};
