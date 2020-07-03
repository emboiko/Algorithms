// Frequency counting pattern

const containsDuplicatePrimitives = (...args) => {
  const argCounter = {};

  args.forEach((arg, i) => {
    argCounter[arg] = argCounter[arg] + 1 || 1
  });

  for (let arg in argCounter) {
    if (argCounter[arg] > 1) return false;
  }

  return true;
}

// Or do this:

const hasDuplicates = () => {
  return new Set(arguments).size !== arguments.length;
}
