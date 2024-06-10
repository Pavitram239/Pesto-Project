const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn;
    } catch (error) {
      next(error);
    }
  };
};

export default asyncWrapper;
