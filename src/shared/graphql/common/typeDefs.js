const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  input PaginationOptions {
    limit: Int
    cursor: String
  }

  type PageMetadata {
    totalCount: Int
    cursor: String
  }
`;

module.exports = typeDefs;
