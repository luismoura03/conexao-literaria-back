const db = require("../../../src/db/index");

module.exports = {
  book: async (_, { id }) => {
    const book = await db("books as b")
      .join("authors as a", "b.author_id", "a.id")
      .where("b.id", id)
      .select("b.id", "b.title", "b.author_id", "a.name as author_name")
      .first();
    return book;
  },
};
