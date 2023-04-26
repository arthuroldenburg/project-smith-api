import jwt from 'jsonwebtoken';

const createToken = (user: string): string => {
  const newToken = jwt.sign(user, 'secret');
  return newToken;
};

export default createToken;