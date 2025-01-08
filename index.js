const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { createSchema } = require("./schema/createSchema");
const knex = require("knex");
const knexfile = require("./knexfile");

const startServer = async () => {
  const schema = await createSchema();
  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
    context: async () => {
      return {
        db: knex(knexfile),
      };
    },
  });

  console.log(`🚀Server started on port ${url}`);
};

startServer();
