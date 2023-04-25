import productModel from '../models/product.model';

async function getAllProducts() {
  return productModel.getAllProducts();
}

async function createNewProduct(names: string, amounts: string) {
  return productModel.createProduct(names, amounts);
}

export default {
  createNewProduct,
  getAllProducts,
};