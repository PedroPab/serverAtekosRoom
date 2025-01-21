
import { config as dotenvConfig } from 'dotenv'
import { resolve } from 'path'

import { __dirname } from '../../dirname.js'

const environment = process.env.NODE_ENV || 'development'

const envFile = resolve(__dirname, `.env.${environment}`)
dotenvConfig({ path: envFile })

console.log(`corriendo en ${environment}`)

// normalmente esta información se guarda en un archivo .json pero para ser mas compatible con sistemas de CI/CD se guarda en una variable de entorno
const serviceAccountJson = process.env.SERVICES_KEY_BUCKET || '{}'
const serviceAccount = JSON.parse(serviceAccountJson)

const ENV = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	PORT: process.env.PORT || 3012,
	HOST: process.env.HOST || 'localhost',
	//Config the bucket google cloud storage
	PROJECT_ID: process.env.PROJECT_ID || 'atekos',
	// KEY_FILE_NAME: process.env.KEY_FILE_NAME || '.servicesKeyBucket.json',
	BUCKET_NAME: process.env.BUCKET_NAME || 'server-bucket',
	SERVICES_KEY_BUCKET: serviceAccount,
	PORT_DATABASE: process.env.PORT_DATABASE || '8087',
	SERVICE_ACCOUNT: JSON.parse(process.env.SERVICE_ACCOUNT) || '',
	FIRESTORE_EMULATOR_HOST: process.env.FIRESTORE_EMULATOR_HOST || 'localhost:8097',
	IMG_REPOSITORY: process.env.IMG_REPOSITORY || 'local',
	PUBLISH_REPOSITORY: process.env.PUBLISH_REPOSITORY || 'local',
	FOCUS_ELEMENT_REPOSITORY: process.env.FOCUS_ELEMENT_REPOSITORY || 'mongo',
	FOCUS_PROJECT_REPOSITORY: process.env.FOCUS_PROJECT_REPOSITORY || 'mongo',
	LINKS_REPOSITORY: process.env.LINKS_REPOSITORY || 'local',
	MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017',
}

export default ENV
