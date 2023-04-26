import { NextFunction, Request, Response } from 'express';
import validateUser from '../service/validation/schema';

const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, level, password } = req.body;
  const error = validateUser(username, vocation, level, password);
  console.log(error);
  if (error.type) return res.status(error.type).json({ message: error.message });
  next();
};

export default userMiddleware;