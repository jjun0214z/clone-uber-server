const resolvers = {
  Subscription: {
    DriversSubscription: {
      subscribe: (_, __, { pubSub }) => {
        return pubSub.asyncIterator("dirverUpdate");
      },
    },
  },
};
export default resolvers;
