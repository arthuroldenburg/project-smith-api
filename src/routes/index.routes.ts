import { Router } from 'express';
import LoginController from '../controller/login.controller';
import OrderController from '../controller/order.controller';
import ProductController from '../controller/product.controller';
import UserController from '../controller/user.controller';
import productMiddleware from '../middleware/product.middleware';
import loginMiddleware from '../middleware/login.middleware';
import userMiddleware from '../middleware/user.middleware';
import tokenMiddleware from '../middleware/tokenVerify.middleware';
import orderMiddleware from '../middleware/order.middleware';

const router = Router();

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();
const userLoginController = new LoginController();

router
  .route('/products')
  .get(productController.getAll)
  .post(productMiddleware, productController.create);

router
  .route('/users')
  .post(userMiddleware, userController.create);

router
  .route('/orders')
  .get(orderController.getAll)
  .post(tokenMiddleware, orderMiddleware, orderController.create);

router
  .route('/login')
  .post(loginMiddleware, userLoginController.user);

// para uso de middleware é só colocar ele antes do controller

export default router;