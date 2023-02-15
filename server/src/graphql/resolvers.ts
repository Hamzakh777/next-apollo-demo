import { Resolvers } from "../../../core/src/__generated__/server/resolvers-types";
import { userList } from "../db";

export const resolvers: Resolvers = {
  Query: {
    users: (parent, args) => {
      const first = args.first || 20;
      const after = args.after || 0;
      const index = userList.findIndex((item) => item.uuid === after);
      const offset = index + 1;

      const users = userList.slice(offset, offset + first);
      const lastUser = users[users.length - 1];

      return {
        pageInfo: {
          endCursor: lastUser.uuid,
          hasNextPage: offset + first < userList.length,
        },
        edges: users.map((user) => ({
          cursor: user.uuid,
          node: user,
        })),
      };
    },
  },
};
