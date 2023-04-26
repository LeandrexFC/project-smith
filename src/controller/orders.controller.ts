import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

async function getOrders(req: Request, res: Response) {
  const products = await ordersService.getAllOrders();

  return res.status(200).json(products);
}

export default {
  getOrders,
};