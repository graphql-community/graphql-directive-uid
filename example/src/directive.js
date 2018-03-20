import { GraphQLID } from 'graphql';
import { SchemaDirectiveVisitor } from 'graphql-tools';
import { createHash } from 'crypto';

class UniqueIdDirective extends SchemaDirectiveVisitor {
  visitObject(type) {
    // @TODO: implement directive declaratin
    const { name = 'uid', from } = this.args;

    const fields = type.getFields();

    if (name in fields) {
      throw new Error(`Conflicting field name ${name}`);
    }

    fields[name] = {
      name,
      type: GraphQLID,
      description: 'Unique ID',
      args: [],
      resolve(object) {
        const hash = createHash('sha1');

        hash.update(type.name);

        from.forEach(fieldName => {
          hash.update(String(object[fieldName]));
        });

        return hash.digest('hex');
      },
    };
  }
}

export default UniqueIdDirective;
