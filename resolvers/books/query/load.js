const db = require("../../../src/db");

module.exports = {
  books: async () => {
    return await db("books");
  },
};
