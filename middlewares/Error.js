const ErrorMiddleWare = (error, req, res) => {
  return res.status(500).json(error);
};
