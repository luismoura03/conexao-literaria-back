module.exports = {
  updateAuthor: async (_, { id, name }, { db }) => {
    const foundAuthor = await db("authors").where({ id }).first();
    if (!foundAuthor) {
      throw new Error("Author not found");
    }
    const [updatedAuthor] = await db("authors").where({ id }).update(
      {
        name,
      },
      ["id", "name"]
    );
    return updatedAuthor;
  },
};
