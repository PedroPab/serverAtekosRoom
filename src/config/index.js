
import { config as dotenvConfig } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const environment = process.env.NODE_ENV || 'development';

const envFile = resolve(__dirname, `./../../.env.${environment}`);
dotenvConfig({ path: envFile });

console.log(`corriendo en ${environment}`);

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || 'localhost',
};
