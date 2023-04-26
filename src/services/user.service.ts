import userModel from '../models/user.model';
import User from '../types/user.type';
import generateToken from '../utils/generateToken';

async function createUser(user: User) {
  const newUser = await userModel.createUser(user);
  if (!newUser) {
    throw new Error('INVALID_USER');
  }
  const result = await generateToken.generateToken(newUser);

  return { token: result };
}

export default {
  createUser,
};