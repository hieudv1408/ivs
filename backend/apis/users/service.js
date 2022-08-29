import UserModel from '#src/models/user.js';
import bcrypt from '#src/utils/bcrypt.js';
import jwt from '#src/utils/jwt.js';
import { UsernameOrPasswordWrongError, AdminExistedError } from '#src/exceptions/index.js';

const setup = async (password) => {
  const isAdminExisting = await UserModel.findOne({ username: 'admin' });
  if (isAdminExisting) {
    throw new AdminExistedError();
  }
  const admin = {
    username: 'admin',
    password: await bcrypt.hashPassword(password)
  }
  await UserModel.create(admin);
}

const login = async (username, password) => {
  const user = await UserModel.findOne({ username });
  let wrongInformation = false;
  if (!user) {
    wrongInformation = true;
  } else {
    wrongInformation = !(await bcrypt.comparePassword(password, user.password));
  }
  if (wrongInformation) {
    throw new UsernameOrPasswordWrongError();
  }
  return {
    token: jwt.encode({username})
  }
}

export default {
  setup,
  login
}