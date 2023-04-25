import { Request, Response } from 'express';
import ProductService from '../service/product.service';

class ProductController {
  productService: ProductService;

  constructor(productService = new ProductService()) {
    this.productService = productService;
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  }

  async create(req: Request, res: Response): Promise<void> {
    const { name, amount } = req.body;
    const productCreated = await this.productService.create(name, amount);
    res.status(201).json(productCreated);
  }
}

export default ProductController;