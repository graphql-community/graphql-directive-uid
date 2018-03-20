import { graphql } from 'graphql';
import schema from '../src/schema';

const query = `
  query persons {
    persons {
      uid
      personId
      name
    }
  }
`;

describe('Person query', () => {
  it('Check if query return array', async () => {
    const response = await graphql(schema, query);
    expect(Array.isArray(response.data.persons)).toBeTruthy();
  });

  it('Check array length', async () => {
    const response = await graphql(schema, query);
    expect(response.data.persons).toHaveLength(4);
  });
  it('Check object shape', async () => {
    const response = await graphql(schema, query);

    expect(response.data.persons[0]).toHaveProperty('uid');
    expect(response.data.persons[0]).toHaveProperty('personId');
    expect(response.data.persons[0]).toHaveProperty('name');
  });
});
