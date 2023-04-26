/* eslint-disable camelcase */
import { RowDataPacket } from 'mysql2';
import connection from './connection';
import orderType from '../types/orders.type';

async function getAllOrders(): Promise<orderType[]> {
  const [products] = await connection
    .execute<RowDataPacket[]>(`SELECT orders.id, orders.user_id AS userId, 
    JSON_ARRAYAGG(products.id) AS productsIds FROM Trybesmith.orders 
    JOIN Trybesmith.products ON orders.id = products.order_id GROUP BY orders.id`);
  
  return products as orderType[];
}

export default {
  getAllOrders,
};