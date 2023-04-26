import ordersModel from '../models/orders.model';

async function getAllOrders() {
  return ordersModel.getAllOrders();
}

export default {
  getAllOrders,
};