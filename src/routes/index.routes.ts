import { Router } from 'express';
import ProductController from '../controller/product.controller';
import UserController from '../controller/user.controller';

const router = Router();

const productController = new ProductController();
const userController = new UserController();

router
  .route('/products')
  .get(productController.getAll)
  .post(productController.create);

router
  .route('/users')
  .post(userController.create);

export default router;