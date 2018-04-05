const directive = require('./index');
const { graphql } = require('graphql');
const schema = require('./example/schema');

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

test('getDirectiveDeclaration should be defined', () => {
  expect(directive.getDirectiveDeclaration()).toMatchSnapshot();
});

test('received object shape', async () => {
  const response = await graphql(schema, query);

  expect(response.data.persons[0]).toMatchObject({
    uid: expect.any(String),
    personId: expect.any(Number),
    name: expect.any(String),
    __typename: expect.any(String),
  });
});
