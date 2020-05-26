const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Todo {
    id: ID
    title: String
    completed: Boolean
    user: User
  }

  input CreateTodoInput {
    title: String!
    completed: Boolean
    userId: String!
  }

  input UpdateTodoInput {
    title: String
    completed: Boolean
    userId: String
  }

  extend type Query {
    todos: [Todo]
    todo(id: ID!): Todo
  }
  extend type Mutation {
    createTodo(input: CreateTodoInput!): Todo
    updateTodo(id: ID!, input: UpdateTodoInput!): Todo
    deleteTodo(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
