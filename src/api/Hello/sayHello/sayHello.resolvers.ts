import { SayHelloResponse, SayHelloQueryArgs } from "src/types/graph";

const resolvers = {
  Query: {
    sayHello: (_: any, args: SayHelloQueryArgs): SayHelloResponse => {
      return {
        text: `Hello ${args.name}`,
        error: false
      };
    }
  }
};

export default resolvers;
