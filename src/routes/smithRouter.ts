import { Router } from 'express';
import productsController from '../controller/products';

const smithRouter = Router();

smithRouter.post('/products', productsController.createProduct);
smithRouter.get('/products', productsController.getProducts);

export default smithRouter;
