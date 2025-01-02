const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
//const { typeDefs, resolvers } = require("./schema");
const { createSchema } = require("./schema/createSchema");

const startServer = async () => {
  const schema = await createSchema();
  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
  });

  console.log(`🚀Server started on port ${url}`);
};

startServer();
