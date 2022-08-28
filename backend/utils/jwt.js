import jwt from 'jsonwebtoken';
import config from '#src/config/index.js';

const encode = (data) => {
  return jwt.sign(
    data,
    config.jwtSecret,
    { expiresIn: parseInt(process.env.JWT_EXPIRED_SECONDS) || 60 * 60 }
  );
}

const decode = (token) => {
  jwt.verify(token, config.jwtSecret);
  return jwt.decode(token);
}

export default {
  encode,
  decode
}