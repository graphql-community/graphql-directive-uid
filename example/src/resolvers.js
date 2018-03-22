const data = [
  { personId: 1, name: 'Kevin Odling' },
  { personId: 2, name: 'Farah Bennett' },
  { personId: 3, name: 'Arian Guthrie' },
  { personId: 4, name: 'Serena Monroe' },
];

const resolvers = {
  Query: {
    persons: () => data,
  },
};

export default resolvers;
