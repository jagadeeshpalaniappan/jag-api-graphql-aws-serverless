const arc = require("@architect/functions");
const { ApolloServer, gql } = require("apollo-server-lambda");
const { typeDefs, resolvers } = require("@architect/shared/graphql");

const cors = {
  origin: "*",
  credentials: true,
};

const server = new ApolloServer({ typeDefs, resolvers, cors });
const handler = server.createHandler();

exports.handler = function (event, context, callback) {
  const body = arc.http.helpers.bodyParser(event);
  event.body = JSON.stringify(body); // Body is now parsed, re-encode to JSON for Apollo
  handler(event, context, callback);
};
