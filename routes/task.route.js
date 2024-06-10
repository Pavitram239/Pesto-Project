import express from 'express';
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from '../controllers/task.controller.js';
import { validationMiddleware } from '../middlewares/Validation.js';
const router = express.Router();

router.route('/').get(getTasks).post(validationMiddleware, createTask);
router
  .route('/:id')
  .get(getTask)
  .post(validationMiddleware, updateTask)
  .delete(deleteTask);

export default router;
