module.exports = {
  author: async (_, { id }, { db }) => {
    const author = await db("authors")
      .where({ id })
      .select("id", "name")
      .first();
    if (!author) {
      throw new Error(`Author not found: ID ${id}`);
    }
    return author;
  },
};
