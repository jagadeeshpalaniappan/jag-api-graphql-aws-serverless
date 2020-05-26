const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    posts: [Post]
    todos: [Todo]
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  input UpdateUserInput {
    name: String!
    email: String!
  }

  extend type Query {
    users: [User]
    user(id: ID!): User
  }
  extend type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User
    deleteUser(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
