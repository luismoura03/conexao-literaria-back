module.exports = {
  books: async (_, __, { db }) => {
    const books = await db("books").select(
      "id",
      "title",
      "author_id as authorId"
    );
    return books;
  },
};
