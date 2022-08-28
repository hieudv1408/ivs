import service from './service.js';

export const getAll = async (req, res) => {
  const result = await service.getAll();
  return res.send({data: result})
}

export const getById = async (req, res) => {
  const result = await service.getById(req.params.id);
  return res.send({data: result})
}

export const create = async (req, res) => {
  const { email, name } = req.body;
  const result = await service.create(email, name);
  return res.send({data: result})
}