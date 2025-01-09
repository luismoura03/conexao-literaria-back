// const db = require("../../../src/db");

module.exports = {
  createBook: async (_, { title, authorId }, { db }) => {
    const foundAuthor = await db("authors").where({ id: authorId }).first();
    if (!foundAuthor) {
      throw new Error("Author not found");
    }

    return db("books")
      .insert({
        title,
        author_id: authorId,
      })
      .returning("*")
      .then(([{ id, title }]) => {
        return {
          id,
          title,
          authorId,
        };
      });
  },
};
