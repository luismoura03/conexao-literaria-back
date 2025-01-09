module.exports = {
  updateBook: async (_, { id, title, authorId }, { db }) => {
    const foundAuthor = await db("authors").where({ id: authorId }).first();
    if (!foundAuthor) {
      throw new Error("Author not found");
    }

    const foundBook = await db("books").where({ id }).first();
    if (!foundBook) {
      throw new Error("Book not found");
    }
    const [updatedBook] = await db("books").where({ id }).update(
      {
        title,
        author_id: authorId,
      },
      ["id", "title", "author_id as authorId"]
    );
    return updatedBook;
  },
};
