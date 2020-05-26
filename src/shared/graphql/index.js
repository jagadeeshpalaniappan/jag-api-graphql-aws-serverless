let { gql } = require("apollo-server-lambda");

// user:
const userTypeDefs = require("./user/typeDefs");
const userResolvers = require("./user/resolvers");

// post:
const postTypeDefs = require("./post/typeDefs");
const postResolvers = require("./post/resolvers");

// post:
const todoTypeDefs = require("./todo/typeDefs");
const todoResolvers = require("./todo/resolvers");

const baseTypeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation {
    _: Int
  }
`;
const typeDefs = [baseTypeDefs, userTypeDefs, postTypeDefs, todoTypeDefs];

const resolvers = {
  Query: {
    hello: () => "Hello Jag!",
    ...userResolvers.Query,
    ...postResolvers.Query,
    ...todoResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...postResolvers.Mutation,
    ...todoResolvers.Mutation,
  },
  User: userResolvers.User,
  Post: postResolvers.Post,
  Todo: todoResolvers.Todo,
};

module.exports = { typeDefs, resolvers };
