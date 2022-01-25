import { objectType } from 'nexus';

export const Role = objectType({
  name: 'Role',
  definition(t) {
    t.nonNull.int('id');
    t.string('name');
    t.field('company', {
      type: 'Company',
      resolve: (parent, _, ctx) => {
        return ctx.db.role
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .company();
      },
    });
    t.list.field('skills', {
      type: 'Skill',
      resolve: (parent, _, ctx) => {
        return ctx.db.role
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .skills();
      },
    });
  },
});
