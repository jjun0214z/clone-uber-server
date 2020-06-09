import {
  FacebookConnectMutationArgs,
  FacebookConnectResponse,
} from "src/types/graph";
import { Resovlers } from "src/types/resolvers";
import User from "src/entities/User";

const resolvers: Resovlers = {
  Mutation: {
    FacebookConnect: async (
      _,
      args: FacebookConnectMutationArgs
    ): Promise<FacebookConnectResponse> => {
      const { fbId } = args;
      try {
        const existingUser = await User.findOne(fbId);
        if (existingUser) {
          return {
            ok: true,
            error: null,
            token: "Comming soon",
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        };
      }
      try {
        await User.create({
          ...args,
          profilePhoto: `https://graph.facebook.com/${fbId}/picture?type=squre`,
        }).save();
        return {
          ok: true,
          error: null,
          token: "Comming soon",
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        };
      }
    },
  },
};

export default resolvers;
