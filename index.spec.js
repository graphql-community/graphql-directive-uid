import directive from './index';

it('getDirectiveDeclaration should be defined', () => {
  expect(directive.getDirectiveDeclaration()).toMatchSnapshot();
});
