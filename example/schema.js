const { makeExecutableSchema } = require('graphql-tools');
const graphqlDirectiveUid = require('../index');
const fakeData = require('./fakeData');

const typeDefs = `
  type Person @uid(from: ["personId", "name"]){
    personId: Int
    name: String
  }

  type Query {
    persons: [Person]
  }
`;

const resolvers = {
  Query: {
    persons: () => fakeData,
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    uid: graphqlDirectiveUid,
  },
});
