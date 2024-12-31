const typeDefs = `
  type Book {
    id: Int
    title: String
    author: Author
  }

  type Author {
    id: Int
    name: String
  }
  
   type Query {
    books: [Book]
    book(id: Int): Book
  }

  type Mutation {
    createBook(title: String, authorId: Int): Book
  }  

`;

module.exports = { typeDefs };
