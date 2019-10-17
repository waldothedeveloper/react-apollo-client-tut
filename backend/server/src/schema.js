const { gql } = require("apollo-server");

//! FOR TICKETS DETAILS

// ticket #
// Title
// Queue
// Resources
// Description
// Priority
// Status
// Create Date
// Age
//! Service Desk Contact ?????????
// Last Activity By
// Last Activity Time

// ! FOR GENERAL PAGINATION SHOW TICKETS

// Ticket #
// Title
// Company/Center
// Status
// Severity
// Created By

const typeDefs = gql`
  # Your schema will go here

  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  # type Query {
  #   ticket: Ticket!
  # }

  # type Ticket {
  # ticketNumber: String!
  # title: String!
  # queueID: Int!
  # firstResponseAssignedResource: Int!
  # description: String!
  # priority: Int!
  # status: Int!
  # createDate: DateTime!
  # age: Int!
  # lastActivityResourceID: Int!
  # lastActivityDate: DateTime!
  # }
`;

module.exports = typeDefs;
