const path = require("path");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { loadFiles } = require("@graphql-tools/load-files");

/**
 * It takes all the .graphql files in the schema directory and merges them into one big string
 * @returns An array of strings
 */
const buildTypeDefs = async () => {
  const dir = path.join(__dirname, "../graphql/schema");
  const typesArray = await loadFiles(dir, {
    extensions: ["graphql"],
  });

  return mergeTypeDefs(typesArray, { all: true });
};

module.exports = { buildTypeDefs };
