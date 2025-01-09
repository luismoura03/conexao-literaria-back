module.exports = {
  deleteBook: async (_, { id }, { db }) => {
    const bookDelete = await db("books")
      .where({ id })
      .select("id", "title", "author_id as authorId")
      .first();
    if (!bookDelete) {
      throw new Error("Book not found");
    }
    await db("books").where({ id }).delete();

    return bookDelete;
  },
};
