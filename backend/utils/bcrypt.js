import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  return new Promise((resolve) => {
    bcrypt.hash(password, 10, function(err, hash) {
      resolve(hash);
    });
  })
}

const comparePassword = async (password, hash) => {
  return new Promise((resolve) => {
    bcrypt.compare(password, hash, function(err, result) {
      if (result) {
        resolve(true);
      }
      resolve(false);
    });
  })
}

export default {
  hashPassword,
  comparePassword
}