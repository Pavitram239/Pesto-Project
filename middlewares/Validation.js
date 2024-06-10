import vine from '@vinejs/vine';

const taskValidationSchema = vine.object({
  title: vine.string().minLength(3).maxLength(50),
  description: vine.string(),
  status: vine.string().optional(),
});

export const validationMiddleware = async (req, res, next) => {
  const data = req.body;

  try {
    const output = await vine.validate({ taskValidationSchema, data });
    next();
  } catch (error) {
    next(error);
  }
};
