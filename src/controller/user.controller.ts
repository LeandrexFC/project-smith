import { Request, Response } from 'express';
import userService from '../services/user.service';

async function createUser(req:Request, res: Response) {
  const finalResult = await userService.createUser(req.body);

  return res.status(201).json(finalResult);
}

async function login(req:Request, res: Response) {
  const { username, password } = req.body;

  const { type, message, token } = await userService.validateLogin(username, password);

  if (type === 'REQUIRED_FIELD') {
    return res.status(400).json({ message });
  } if (type === 'INVALID_USER') {
    return res.status(401).json({ message });
  } return res.status(200).json({ token });
}

export default {
  createUser,
  login,
};