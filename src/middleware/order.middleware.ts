import { NextFunction, Request, Response } from 'express';
import { validateOrder } from '../service/validation/schema';

const orderMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  const error = validateOrder(productsIds);
  // console.log(error);
  if (error.type) return res.status(error.type).json({ message: error.message });
  next();
};

export default orderMiddleware;