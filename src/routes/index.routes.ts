import { Router } from 'express';
import ProductController from '../controller/product.controller';

const router = Router();

const productController = new ProductController();

router.route('/products').get(productController.getAll);

export default router;