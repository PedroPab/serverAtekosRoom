import { MongoClient } from 'mongodb'
import ENV from '../dotEnv.js'

const uri = ENV.MONGO_URI // Con puerto
const dbName = 'mongodb'

let client
let db

try {
	if (!client) {
		client = new MongoClient(uri)

		// Conectar y obtener la base de datos
		await client.connect()
		db = client.db(dbName)
		console.log('✅ Conexión exitosa a MongoDB')
	}
} catch (error) {
	console.error('❌ Error conectando a MongoDB:', error.message)
	process.exit(1) // Finaliza el proceso si hay un error
}

export function getMongoDB() {
	if (!db) {
		throw new Error(
			'La base de datos no está inicializada. Llama a connectMongoDB primero.'
		)
	}
	return db
}
