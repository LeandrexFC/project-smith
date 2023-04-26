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

async function validateLogin(username: string, password: string) {
  if (!username) {
    return { type: 'REQUIRED_FIELD', message: '"username" is required' };
  } if (!password) {
    return { type: 'REQUIRED_FIELD', message: '"password" is required' };
  }
  
  const isValid = await userModel.verifyLogin(username, password);

  if (!isValid) {
    return { type: 'INVALID_USER', message: 'Username or password invalid' };
  } if (isValid.password !== password) {
    return { type: 'INVALID_USER', message: 'Username or password invalid' };
  } 
  const token = await generateToken.generateToken(isValid);
  return { type: null, message: '', token };
}

export default {
  createUser,
  validateLogin,
};