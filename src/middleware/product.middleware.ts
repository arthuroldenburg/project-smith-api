import { NextFunction, Request, Response } from 'express';
import { validateProduct } from '../service/validation/schema';

const productMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  const error = validateProduct(name, amount);
  if (error.type) return res.status(error.type).json({ message: error.message });
  next();
};

export default productMiddleware;