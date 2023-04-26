import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

async function verifyLogin(username: string, password:string) {
  const [verify] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
    [username, password],
  );
  if (verify.length === 0) {
    return null;
  }

  const user = verify[0];

  return { id: user.id, username: user.username, password: user.password };
}

export default {
  createUser,
  verifyLogin,
};