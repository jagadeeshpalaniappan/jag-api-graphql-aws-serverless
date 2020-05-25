const { ApolloServer, gql } = require("apollo-server-lambda"); // TODO: we just need 'graphql-playground' here // not apollo
const typeDefs = gql`
  type Query {
    test: String
  }
`;
const resolvers = {};
const server = new ApolloServer({ typeDefs, resolvers });
exports.handler = server.createHandler();
