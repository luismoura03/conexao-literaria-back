module.exports = {
  client: "pg",
  connection: {
    host: "localhost",
    port: 5431,
    user: "root",
    password: "password",
    database: "postgres-initial",
  },
  migrations: {
    directory: "./src/migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
