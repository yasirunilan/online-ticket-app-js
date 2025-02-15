import joi from "joi";

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const registerSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
  firstName: joi.string().max(30).required(),
  lastName: joi.string().max(30).required(),
});

export default {
  loginSchema,
  registerSchema,
};
