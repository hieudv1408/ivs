import jwt from '#src/utils/jwt.js';

export default (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw `Don't have authorization`;
    }
    const split = authorization.split('Bearer ');
    if (split[0] != '' || split[1] == '') {
      throw 'Format is incorrect'
    }
    const decode = jwt.decode(split[1]);
    req.tokenData = decode;
    next();
  } catch (err) {
    next(err);
  }
}