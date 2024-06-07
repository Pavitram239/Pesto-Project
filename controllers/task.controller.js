import Task from '../models/task.model.js';

export const getTasks = async (req, res, next) => {
  try {
    const tasks = Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    return next(error);
  }
};
export const createTask = async (req, res) => {};
export const getTask = async (req, res) => {};
export const updateTask = async (req, res) => {};
