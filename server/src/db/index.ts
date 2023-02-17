import casual from "casual";
import { User } from "../../../core/src/__generated__/server/resolvers-types";

casual.define("user", function () {
  return {
    emailAddress: casual.email,
    fullName: casual.full_name,
    address: casual.address,
    phoneNumber: casual.phone,
    hash: casual.uuid,
  };
});

const array_of = function (times: number, generator: () => User): User[] {
  const result: User[] = [];

  for (let i = 0; i < times; ++i) {
    result.push(generator());
  }

  return result;
};

export const userList: User[] = array_of(2000, (casual as any)._user);
