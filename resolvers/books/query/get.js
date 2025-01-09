module.exports = {
  book: async (_, { id }, { db }) => {
    const book = await db("books")
      .where({ id })
      .select("id", "title", "author_id as authorId")
      .first();
    if (!book) {
      throw new Error(`Book not found: ID ${id}`);
    }
    console.log(book);
    return book;
  },
};
