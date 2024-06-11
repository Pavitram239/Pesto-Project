import { errors } from '@vinejs/vine';
import { Error } from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../utils/Errors.js';
const ErrorMiddleWare = (err, req, res, next) => {
  if (err instanceof errors.E_VALIDATION_ERROR) {
    return res.status(500).json({ msg: err.messages });
  }
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || 'Something went wrong, please try again later';
  res.status(statusCode).json({ msg: msg });
};

export default ErrorMiddleWare;
