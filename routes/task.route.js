import express from 'express';
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from '../controllers/task.controller.js';
import {
  idValidation,
  validationMiddleware,
} from '../middlewares/Validation.js';
const router = express.Router();

router.route('/').get(getTasks).post(validationMiddleware, createTask);
router
  .route('/:id')
  .get(idValidation, getTask)
  .post(idValidation, validationMiddleware, updateTask)
  .delete(idValidation, deleteTask);

export default router;
