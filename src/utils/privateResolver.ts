const privateResolver = (resolverfunction) => async (
  parent,
  args,
  context,
  info
) => {
  if (!context.req.user) {
    throw new Error("No JWT, I refuse to proceed");
  }
  const resolved = await resolverfunction(parent, args, context, info);
  return resolved;
};

export default privateResolver;
