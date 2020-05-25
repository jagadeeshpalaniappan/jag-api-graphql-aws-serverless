let { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello Jag!",
  },
};

module.exports = { typeDefs, resolvers };
