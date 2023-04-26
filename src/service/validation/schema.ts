import Joi from 'joi';

const productVerify = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export const validateProduct = (name: string, amount: string) => {
  const { error } = productVerify.validate({ name, amount });
  if (error?.message === '"name" is required' || error?.message === '"amount" is required') {
    return { type: 400, message: error.message };
  }
  if (error) return { type: 422, message: error.message };
  return { type: null, message: '' };
};

export default 'xablau';

/* 
const fieldsMissing = 'Some required fields are missing';

const LoginVerify = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).messages({
  'any.required': fieldsMissing,
  'string.empty': fieldsMissing,
  'string.email': fieldsMissing,
});

const validateLogin = (email, password) => {
  const { error } = LoginVerify.validate({ email, password });
  if (error) return { type: 400, message: error.message };
  return { type: null, message: '' };
};

const newUserValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  displayName: Joi.string().min(8).required(),
});

const validateNewUser = (email, password, displayName) => {
  const { error } = newUserValidation.validate({ email, password, displayName });
  if (error) return { type: 400, message: error.message };
  return { type: null, message: '' };
};

const categoriesValidation = Joi.object({ name: Joi.string().required() });

const validateCategories = (name) => {
  const { error } = categoriesValidation.validate({ name });
  if (error) return { type: 400, message: '"name" is required' };
  return { type: null, message: '' };
};

const postValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items().required(),
}).messages({
  'any.required': fieldsMissing,
});

const validatePost = (title, content, categoryIds) => {
  const { error } = postValidation.validate({ title, content, categoryIds });
  if (error) return error;
  return { type: null, message: '' };
};

*/