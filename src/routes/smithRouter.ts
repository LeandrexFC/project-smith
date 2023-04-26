import { Router } from 'express';
import productsController from '../controller/products';
import userController from '../controller/user.controller';

const smithRouter = Router();

smithRouter.post('/products', productsController.createProduct);
smithRouter.get('/products', productsController.getProducts);
smithRouter.post('/users', userController.createUser);

export default smithRouter;
