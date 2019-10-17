const { find, filter } = require("lodash");

const resolvers = {
  Query: {
    author(parent, args, context, info) {
      return find(authors, { id: args.id });
    }
  },
  Author: {
    books(author) {
      return filter(books, { author: author.name });
    }
  }
};

module.export = resolvers;
