import mongoose from 'mongoose';
import { STATUS } from '../utils/constants.js';
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'title is required'],
    },
    description: {
      type: String,
      required: [true, 'description is required'],
    },
    status: {
      type: String,
      enum: Object.values(STATUS),
      default: STATUS.PENDING,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default mongoose.model('Task', taskSchema);
