module.exports = {
  deleteBook: async (_, { id }, { db }) => {
    const [bookDelete] = await db("books")
      .where({ id })
      .returning("id", "title", "author_id as authorId");
    if (!bookDelete) {
      throw new Error("Book not found");
    }

    return {
      ...bookDelete,
      authorId: bookDelete.author_id,
    };
  },
};
