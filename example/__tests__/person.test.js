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

describe('Person query', () => {
  it('check if query returns an array', async () => {
    const response = await graphql(schema, query);
    expect(Array.isArray(response.data.persons)).toBeTruthy();
  });

  it('Check array length', async () => {
    const response = await graphql(schema, query);
    expect(response.data.persons).toHaveLength(4);
  });
  it('Check recived object shape', async () => {
    const response = await graphql(schema, query);

    expect(response.data.persons[0]).toMatchObject({
      uid: expect.any(String),
      personId: expect.any(Number),
      name: expect.any(String),
      __typename: expect.any(String),
    });
  });
});
