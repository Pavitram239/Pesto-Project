import vine, { errors } from "@vinejs/vine";

const schema = vine.object({
  username: vine.string(),
  email: vine.string().email(),
  password: vine.string().minLength(8).maxLength(32).confirmed(),
});

const data = {
  username: "virk",
  email: "virk@example.com",
  password: "secretsdgfdg",
  password_confirmation: "secretsdgfdg",
};

try {
  const validator = vine.compile(schema);
  const output = await validator.validate(data);
} catch (error) {
  if (error instanceof errors.E_VALIDATION_ERROR) {
    console.log(error.messages);
  }
}
