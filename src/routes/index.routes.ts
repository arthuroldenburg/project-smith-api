import { Router } from 'express';
import LoginController from '../controller/login.controller';
import OrderController from '../controller/order.controller';
import ProductController from '../controller/product.controller';
import UserController from '../controller/user.controller';
import productMiddleware from '../middleware/product.middleware';
import loginMiddleware from '../middleware/login.middleware';

const router = Router();

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();
const userLogin = new LoginController();

router
  .route('/products')
  .get(productController.getAll)
  .post(productMiddleware, productController.create);

router
  .route('/users')
  .post(userController.create);

router
  .route('/orders')
  .get(orderController.getAll);

router
  .route('/login')
  .post(loginMiddleware, userLogin.user);

// para uso de middleware é só colocar ele antes do controller

export default router;