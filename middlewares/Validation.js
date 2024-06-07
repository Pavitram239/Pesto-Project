import vine from '@vinejs/vine';

const taskValidationSchema = vine.object({
  title: vine.string().minLength(8).maxLength(50),
  description: vine.string(),
  status: vine.string(),
});

export const validationMiddleware = async (req, res, next) => {
  try {
    const output = await vine.validate(taskValidationSchema, req.body);
    next();
  } catch (error) {
    next(error);
  }
};
