module.exports = {
  deleteBook: async (_, { id }, { db }) => {
    const [bookDelete] = await db("books")
      .where({ id })
      .returning(["id", "title", "author_id as authorId", "author_id"])
      .del();
    if (!bookDelete) {
      throw new Error("Book not found");
    }

    return {
      ...bookDelete,
      authorId: bookDelete.author_id,
    };
  },
  catch(err) {
    console.error("Error deleting book", err);
    throw new Error("Erro ao deletar livro:");
  },
};
