import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

import taskRouter from './routes/task.route.js';
import ErrorMiddleWare from './middlewares/Error.js';

app.use('/api/v1/tasks', taskRouter);
app.use(ErrorMiddleWare);

const PORT = process.env.PORT || 3100;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('DB Connected');
    app.listen(PORT, () => {
      console.log(`server running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
