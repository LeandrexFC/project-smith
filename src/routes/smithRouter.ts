import { Router } from 'express';
import productsController from '../controller/products';
import userController from '../controller/user.controller';
import ordersController from '../controller/orders.controller';

const smithRouter = Router();

smithRouter.post('/products', productsController.createProduct);
smithRouter.get('/products', productsController.getProducts);
smithRouter.post('/users', userController.createUser);
smithRouter.post('/login', userController.login);
smithRouter.get('/orders', ordersController.getOrders);

export default smithRouter;
