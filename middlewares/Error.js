const ErrorMiddleWare = (error, req, res) => {
  if (error instanceof errors.E_VALIDATION_ERROR) {
    return res.status(500).json({ msg: error.messages });
  }
  return res.status(500).json(error);
};

export default ErrorMiddleWare;
