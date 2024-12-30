const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { typeDefs, resolvers } = require("./schema");

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀Server started on port ${url}`);
})();
