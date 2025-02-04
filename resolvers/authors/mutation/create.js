module.exports = {
  createAuthor: async (_, { name }, { db }) => {
    const [author] = await db("authors")
      .insert({
        name,
      })
      .returning("*");
    return author;
  },
};
