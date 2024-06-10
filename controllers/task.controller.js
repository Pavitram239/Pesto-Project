import Task from '../models/task.model.js';

export const getTasks = async (req, res, next) => {
  console.log(req.body);
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    return next(error);
  }
};

export const createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ msg: 'task created' });
  } catch (error) {
    return next(error);
  }
};

export const getTask = async (req, res, next) => {
  try {
    const task = Task.findById(req.id);
    res.status(200).json(task);
  } catch (error) {
    return next(error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const updatedTask = Task.findByIdAndUpdate(req.id, req.body, { new: true });
    res.status(201).json({ msg: 'task updated' });
  } catch (error) {
    return next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.id);
    res.status(200).json({ msg: 'task deleted' });
  } catch (error) {
    return next(error);
  }
};
