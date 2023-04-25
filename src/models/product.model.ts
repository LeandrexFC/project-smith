import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import productType from '../types/products.type';

async function createProduct(name: string, amount: string): Promise<productType> {
  const finalResult = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)', 
    [name, amount],
  );
  const [dataInserted] = finalResult;
  const { insertId } = dataInserted;
  return { id: insertId, name, amount } as productType;
}

export default {
  createProduct,
};