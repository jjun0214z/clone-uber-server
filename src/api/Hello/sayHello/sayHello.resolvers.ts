import { Greeting } from "src/types/graph";

const resolvers = {
  Query: {
    sayHello: (): Greeting => {
      return {
        text: "Hey hello how are you",
        error: false
      };
    }
  }
};

export default resolvers;
