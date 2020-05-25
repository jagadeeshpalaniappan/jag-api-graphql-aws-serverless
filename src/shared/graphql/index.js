let { gql } = require("apollo-server-lambda");

const userTypeDefs = require("./user/typeDefs");
const userResolvers = require("./user/resolvers");

const baseTypeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation {
    _: Int
  }
`;
const typeDefs = [baseTypeDefs, userTypeDefs];

const resolvers1 = {
  Query: {
    hello: () => "Hello Jag!",
    ...userResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
};

module.exports = {
  typeDefs,
  resolvers: resolvers1,
};
