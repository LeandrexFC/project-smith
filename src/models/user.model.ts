import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import User from '../types/user.type';

async function createUser(user: User): Promise<User> {
  const { username, vocation, level, password } = user;
  const finalResult = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password ) VALUES (?, ?, ?, ?)', 
    [username, vocation, level, password],
  );
  const [dataInserted] = finalResult;
  const { insertId } = dataInserted;
  return { id: insertId, username, vocation, level, password } as User;
} 

export default {
  createUser,
};