/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("books").del();
  await knex("authors").del();

  await knex("authors").insert([
    { id: 1, name: "J.R.R. Tolkien" },
    { id: 2, name: "J.K. Rowling" },
    { id: 3, name: "George R.R. Martin" },
    { id: 4, name: "Stephen King" },
    { id: 5, name: "Agatha Christie" },
    { id: 6, name: "Isaac Asimov" },
    { id: 7, name: "Arthur C. Clarke" },
    { id: 8, name: "Mark Twain" },
    { id: 9, name: "Jane Austen" },
    { id: 10, name: "Ernest Hemingway" },
    { id: 11, name: "F. Scott Fitzgerald" },
    { id: 12, name: "Charles Dickens" },
    { id: 13, name: "Leo Tolstoy" },
    { id: 14, name: "Gabriel García Márquez" },
    { id: 15, name: "Franz Kafka" },
    { id: 16, name: "Haruki Murakami" },
    { id: 17, name: "J.D. Salinger" },
    { id: 18, name: "Virginia Woolf" },
    { id: 19, name: "William Faulkner" },
    { id: 20, name: "H.G. Wells" },
  ]);

  await knex("books").insert([
    { id: 1, title: "The Fellowship of the Ring", author_id: 1 },
    { id: 2, title: "The Two Towers", author_id: 1 },
    { id: 3, title: "The Return of the King", author_id: 1 },
    { id: 4, title: "Harry Potter and the Sorcerer's Stone", author_id: 2 },
    { id: 5, title: "Harry Potter and the Chamber of Secrets", author_id: 2 },
    { id: 6, title: "A Game of Thrones", author_id: 3 },
    { id: 7, title: "A Clash of Kings", author_id: 3 },
    { id: 8, title: "The Shining", author_id: 4 },
    { id: 9, title: "It", author_id: 4 },
    { id: 10, title: "Murder on the Orient Express", author_id: 5 },
    { id: 11, title: "Foundation", author_id: 6 },
    { id: 12, title: "I, Robot", author_id: 6 },
    { id: 13, title: "2001: A Space Odyssey", author_id: 7 },
    { id: 14, title: "The Adventures of Tom Sawyer", author_id: 8 },
    { id: 15, title: "Pride and Prejudice", author_id: 9 },
    { id: 16, title: "The Old Man and the Sea", author_id: 10 },
    { id: 17, title: "The Great Gatsby", author_id: 11 },
    { id: 18, title: "Great Expectations", author_id: 12 },
    { id: 19, title: "War and Peace", author_id: 13 },
    { id: 20, title: "One Hundred Years of Solitude", author_id: 14 },
  ]);
};
