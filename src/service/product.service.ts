import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';

class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }

  create(name: string, amount: string): Promise<Product> {
    return this.model.create(name, amount);
  }
}

export default ProductService;