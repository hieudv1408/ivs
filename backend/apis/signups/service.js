import SignUpModel from '#src/models/signUp.js';

const getAll = async () => {
  return SignUpModel.find({});
}

const getById = async (id) => {
  return SignUpModel.findOne({_id: id});
}

const create = async (email, name) => {
  return SignUpModel.create({email, name});
}

export default {
  getAll,
  getById,
  create
}