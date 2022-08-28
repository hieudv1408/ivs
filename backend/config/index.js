import dotenvSafe from 'dotenv-safe';
import path from 'path';
import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathEnv = path.join(__dirname, `../.env`);
if (fs.existsSync(pathEnv)) {
  dotenvSafe.config({
    allowEmptyValues: true,
    path: pathEnv,
    sample: path.join(__dirname, '../.env.example'),
  });
}

export default {
  mongodb: {
    protocol: process.env.MONGODB_PROTOCOL,
    username: process.env.MONGODB_USERNAME,
    pasword: process.env.MONGODB_PASSWORD,
    host: process.env.MONGODB_HOST,
    replicaSet: process.env.MONGODB_REPLICA_SET,
    dbName: process.env.MONGODB_NAME,
  },
  jwtSecret: process.env.JWT_SECRET || 'jwt-secret'
}