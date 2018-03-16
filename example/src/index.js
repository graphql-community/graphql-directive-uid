import debug from 'debug';
import express from 'express';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import typeDefs from './schema.graphql';
import resolvers from './resolvers';

const log = debug('graphql-directive-uid');
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () => {
  log(`\nServer started at: http://${HOST}:${PORT}/graphiql`);
});
