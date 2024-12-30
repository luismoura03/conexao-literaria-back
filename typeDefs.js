const typeDefs = `
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
  }
  
   type Query {
    books: [Book]
    book(id: Int): Book
  }

`;

module.exports = { typeDefs };
