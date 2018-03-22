import { makeExecutableSchema } from 'graphql-tools';
import graphqlDirectiveUid from 'graphql-directive-uid';
import typeDefs from './schema.graphql';
import resolvers from './resolvers';

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    uid: graphqlDirectiveUid,
  },
});
