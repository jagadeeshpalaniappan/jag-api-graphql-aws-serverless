const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    body: String
  }

  input CreatePostInput {
    title: String!
    body: String!
  }

  input UpdatePostInput {
    title: String
    body: String
  }

  extend type Query {
    posts: [Post]
    post(id: ID!): Post
  }
  extend type Mutation {
    createPost(input: CreatePostInput!): Post
    updatePost(id: ID!, input: UpdatePostInput!): Post
    deletePost(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
