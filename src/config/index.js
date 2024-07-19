
import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'path';

import { __dirname } from './../../dirname.js';

const environment = process.env.NODE_ENV || 'development';

const envFile = resolve(__dirname, `.env.${environment}`);
dotenvConfig({ path: envFile });

console.log(`corriendo en ${environment}`);

// normalmente esta información se guarda en un archivo .json pero para ser mas compatible con sistemas de CI/CD se guarda en una variable de entorno
const serviceAccountJson = process.env.SERVICES_KEY_BUCKET || '{}';
const serviceAccount = JSON.parse(serviceAccountJson);


export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || 'localhost',
  //Config the bucket google cloud storage
  PROJECT_ID: process.env.PROJECT_ID || 'atekos',
  // KEY_FILE_NAME: process.env.KEY_FILE_NAME || '.servicesKeyBucket.json',
  BUCKET_NAME: process.env.BUCKET_NAME || 'server-bucket',
  SERVICES_KEY_BUCKET: serviceAccount
};

console.log({
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || 'localhost',
  //Config the bucket google cloud storage
  PROJECT_ID: process.env.PROJECT_ID || 'atekos',
  // KEY_FILE_NAME: process.env.KEY_FILE_NAME || '.servicesKeyBucket.json',
  BUCKET_NAME: process.env.BUCKET_NAME || 'server-bucket',
  SERVICES_KEY_BUCKET: serviceAccount
})