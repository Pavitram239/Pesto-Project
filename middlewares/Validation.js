import vine, { errors } from '@vinejs/vine';
import { Error } from 'mongoose';
import Task from '../models/task.model.js';
import { NotFoundError } from '../utils/Errors.js';
const taskValidationSchema = vine.object({
  title: vine.string().minLength(3).maxLength(50),
  description: vine.string(),
  status: vine.string().optional(),
});

export const validationMiddleware = async (req, res, next) => {
  const data = req.body;

  try {
    const validator = vine.compile(taskValidationSchema);
    const output = await validator.validate(data);
    next();
  } catch (error) {
    next(error);
  }
};

export const idValidation = async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) throw new NotFoundError();
    next();
  } catch (error) {
    if (error instanceof Error.CastError) {
      return next(new NotFoundError());
    }
    next(error);
  }
};
