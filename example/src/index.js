import debug from 'debug';
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './schema';

const log = debug('graphql-directive-uid');
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () => {
  log(`Server started at: http://${HOST}:${PORT}/graphiql`);
});
