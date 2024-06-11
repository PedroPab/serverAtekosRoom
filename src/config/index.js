
import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'path';

import { __dirname } from './../../dirname.js';

const environment = process.env.NODE_ENV || 'development';

const envFile = resolve(__dirname, `.env.${environment}`);
dotenvConfig({ path: envFile });

console.log(`corriendo en ${environment}`);

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || 'localhost',
};
