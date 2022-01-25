import { objectType } from 'nexus';

export const Company = objectType({
  name: 'Company',
  definition(t) {
    t.nonNull.int('id');
    t.string('name');
    t.string('contactPerson');
    t.string('bio');
    t.string('email');
    t.string('website');
    t.int('roleId');
    t.nonNull.list.nonNull.field('roles', {
      type: 'Role',
      resolve: (parent, _, ctx) => {
        return ctx.db.company
          .findUnique({
            where: { id: parent.id },
          })
          .roles();
      },
    });
  },
});
