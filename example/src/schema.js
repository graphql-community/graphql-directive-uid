import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema.graphql';
import resolvers from './resolvers';
import graphqlDirectiveUid from './directive';

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    uniqueID: graphqlDirectiveUid,
  },
});
