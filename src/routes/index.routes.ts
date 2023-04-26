import { Router } from 'express';
import LoginController from '../controller/login.controller';
import OrderController from '../controller/order.controller';
import ProductController from '../controller/product.controller';
import UserController from '../controller/user.controller';
// import validateLogin from '../middleware/login.middleware';

const router = Router();

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();
const userLogin = new LoginController();

router
  .route('/products')
  .get(productController.getAll)
  .post(productController.create);

router
  .route('/users')
  .post(userController.create);

router
  .route('/orders')
  .get(orderController.getAll);

router
  .route('/login')
  .post(userLogin.user);

// para uso de middleware é só colocar ele antes do controller

export default router;