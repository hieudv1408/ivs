import service from './service.js';

export const setup = async (req, res) => {
  const result = await service.setup(req.body.password);
  return res.send({data: result})
}

export const login = async (req, res) => {
  const result = await service.login(req.body.username, req.body.password);
  return res.send({data: result})
}