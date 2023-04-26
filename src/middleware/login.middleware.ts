import { NextFunction, Request, Response } from 'express';
import { validateLogin } from '../service/validation/schema';

const loginMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const error = validateLogin(username, password);
  console.log(error);
  if (error.type) return res.status(error.type).json({ message: error.message });
  next();
};

export default loginMiddleware;