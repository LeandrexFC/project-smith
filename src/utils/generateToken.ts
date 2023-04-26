import jwt from 'jsonwebtoken';
// import User from '../types/user.type';

const secretKey = process.env.JWT_SECRET || 'coxinha';

async function generateToken(payload:object) {
  const token = jwt.sign(payload, secretKey, {
    expiresIn: '15m',
    algorithm: 'HS256',
  });
  return token;
}

export default {
  generateToken,
};