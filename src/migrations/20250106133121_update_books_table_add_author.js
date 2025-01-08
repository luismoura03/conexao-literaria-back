/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("books", (table) => {
    table.integer("author_id").unsigned().notNullable();

    table
      .foreign("author_id")
      .references("id")
      .inTable("authors")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("books", (table) => {
    table.dropForeign("author_id");

    table.dropColumn("author_id");
  });
};
