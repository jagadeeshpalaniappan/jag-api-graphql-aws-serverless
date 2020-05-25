let { gql } = require("apollo-server-lambda");

// user:
const userTypeDefs = require("./user/typeDefs");
const userResolvers = require("./user/resolvers");

// post:
const postTypeDefs = require("./post/typeDefs");
const postResolvers = require("./post/resolvers");

const baseTypeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation {
    _: Int
  }
`;
const typeDefs = [baseTypeDefs, userTypeDefs, postTypeDefs];

const resolvers = {
  Query: {
    hello: () => "Hello Jag!",
    ...userResolvers.Query,
    ...postResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...postResolvers.Mutation,
  },
};

module.exports = { typeDefs, resolvers };
