import { objectType } from 'nexus';

export const Skill = objectType({
  name: 'Skill',
  definition(t) {
    t.nonNull.int('id');
    t.string('name');
    t.field('role', {
      type: 'Role',
      resolve: (parent, _, ctx) => {
        return ctx.db.skill
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .role();
      },
    });
  },
});
