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
  ]);

  await knex("books").insert([
    { id: 1, title: "Lords of Rings", author_id: 1 },
    { id: 2, title: "Harry Potter", author_id: 2 },
  ]);
};
