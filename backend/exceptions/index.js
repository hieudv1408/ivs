export function UserNotExistingError (username) {
  this.name = 'UserNameNotExistingError';
  this.message = `Username "${username}" does not exist`;
  this.status = 400;
}

export function TokenExpiredError () {
  this.name = 'TokenExpiredError';
  this.message = `Token was expired`;
  this.status = 401;
}

export function TokenInvalidError () {
  this.name = 'TokenInvalidError';
  this.message = `Token is invalid`;
  this.status = 400;
}

export function UsernameOrPasswordWrongError () {
  this.name = 'UsernameOrPasswordWrongError';
  this.message = `Username or Password is incorrect`;
  this.status = 400;
}

export function AdminExistedError () {
  this.name = 'AdminExistedError';
  this.message = `Admin account existed`;
  this.status = 400;
}