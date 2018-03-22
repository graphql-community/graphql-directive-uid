import { graphql } from 'graphql';
import schema from '../src/schema';

const query = `
  query persons {
    persons {
      __typename
      uid
      personId
      name
    }
  }
`;

it('received object shape', async () => {
  const response = await graphql(schema, query);

  expect(response.data.persons[0]).toMatchObject({
    uid: expect.any(String),
    personId: expect.any(Number),
    name: expect.any(String),
    __typename: expect.any(String),
  });
});
