import { Request, Response } from 'express';
import userService from '../services/user.service';

async function createUser(req:Request, res: Response) {
  const finalResult = await userService.createUser(req.body);

  return res.status(201).json(finalResult);
}

export default {
  createUser,
};