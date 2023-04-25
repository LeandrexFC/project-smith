import { Request, Response } from 'express';
import productsServices from '../services/products.services';

async function getProducts(req: Request, res: Response) {
  const products = await productsServices.getAllProducts();

  return res.status(200).json(products);
}

async function createProduct(req: Request, res: Response) {
  const { name, amount } = req.body;
  const result = await productsServices.createNewProduct(name, amount);

  return res.status(201).json(result);
}

export default {
  createProduct,
  getProducts,
};