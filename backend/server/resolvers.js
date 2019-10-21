const tickets = [
  {
    description: "Ticket testing description",
    title: "Ticket test title",
    ticketNumber: "T20190803.1121"
  }
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    tickets: () => tickets
  }
};

module.exports = resolvers;
