import nano from 'nano'
import ENV from './dotEnv.js'

const couchdbURL = ENV.COUCHDB_URI // URI con usuario, contraseña y puerto
const dbName = 'couchdb'

let couch
let db

try {
	if (!couch) {
		console.log('Conectando a CouchDB...')
		// Crear el cliente
		couch = nano(couchdbURL)

		// Verificar la conexión
		await couch.db.list()
		console.log('✅ Conexión exitosa a CouchDB')

		// Crear la base de datos si no existe
		const databases = await couch.db.list()
		if (!databases.includes(dbName)) {
			await couch.db.create(dbName)
			console.log(`✅ Base de datos '${dbName}' creada`)
		}

		// Usar la base de datos
		db = couch.use(dbName)
	}
} catch (error) {
	console.error('❌ Error conectando a CouchDB:', error.message)
	process.exit(1) // Finaliza el proceso si hay un error
}

export function getCouchDB() {
	if (!db) {
		throw new Error(
			'La base de datos no está inicializada. Llama a connectCouchDB primero.'
		)
	}
	return db
}
