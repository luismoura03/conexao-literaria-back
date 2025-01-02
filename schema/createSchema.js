const { makeExecutableSchema } = require("@graphql-tools/schema");
const { buildTypeDefs } = require("./typeDefs");
const { resolvers } = require("../resolvers/index");

const createSchema = async () => {
  const typeDefs = await buildTypeDefs();
  return makeExecutableSchema({
    typeDefs,
    resolvers,
  });
};

module.exports = { createSchema };
