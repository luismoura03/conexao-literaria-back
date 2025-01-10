module.exports = {
  deleteAuthor: async (_, { id }, { db }) => {
    const [authorDelete] = await db("authors")
      .where({ id })
      .returning(["id", "name"])
      .del();
    if (!authorDelete) {
      throw new Error("Author not found");
    }

    return authorDelete;
  },
};
