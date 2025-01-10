module.exports = {
  authors: async (_, __, { db }) => {
    return await db("authors").select(["id", "name"]);
  },
};
