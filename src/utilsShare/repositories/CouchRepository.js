import { getCouchDB } from '../../config/couchDb.js'

class CouchRepository {
	constructor(collectionName) {
		this.db = getCouchDB() // Usamos la base de datos configurada
		this.collectionName = collectionName // CouchDB no usa "colecciones", se puede manejar como prefijo
	}

	async save(key, value) {
		try {
			const doc = { _id: `${this.collectionName}:${key}`, ...value }
			const result = await this.db.insert(doc)
			return { id: result.id, ...value }
		} catch (error) {
			throw new Error(`Error al guardar el documento: ${error.message}`)
		}
	}

	async get(key) {
		try {
			const doc = await this.db.get(`${this.collectionName}:${key}`)
			return { id: doc._id, ...doc }
		} catch (error) {
			if (error.statusCode === 404) {
				throw new Error(`Documento con ID ${key} no encontrado.`)
			}
			throw new Error(`Error al obtener el documento: ${error.message}`)
		}
	}

	async getAll({ page = 1, limit = 50 } = {}) {
		try {
			const skip = (page - 1) * limit
			const result = await this.db.find({
				selector: { _id: { $regex: `^${this.collectionName}:` } },
				skip,
				limit
			})
			return result.docs.map(doc => ({ id: doc._id, ...doc }))
		} catch (error) {
			throw new Error(`Error al obtener todos los documentos: ${error.message}`)
		}
	}

	async getByFilter(filter, { page = 1, limit = 50 } = {}) {
		try {
			const query = {
				selector: { _id: { $regex: `^${this.collectionName}:` } }
			}
			if (filter && filter.key && filter.option && filter.value) {
				switch (filter.option) {
					case '==':
						query.selector[filter.key] = filter.value
						break
					case '!=':
						query.selector[filter.key] = { $ne: filter.value }
						break
					case '>':
						query.selector[filter.key] = { $gt: filter.value }
						break
					case '>=':
						query.selector[filter.key] = { $gte: filter.value }
						break
					case '<':
						query.selector[filter.key] = { $lt: filter.value }
						break
					case '<=':
						query.selector[filter.key] = { $lte: filter.value }
						break
					default:
						throw new Error(`Operador no soportado: ${filter.option}`)
				}
			}
			const skip = (page - 1) * limit
			query.skip = skip
			query.limit = limit
			const result = await this.db.find(query)
			return result.docs.map(doc => ({ id: doc._id, ...doc }))
		} catch (error) {
			throw new Error(`Error al obtener los documentos por filtro: ${error.message}`)
		}
	}

	async update(key, value) {
		try {
			const doc = await this.get(key) // Obtener el documento actual
			const updatedDoc = { ...doc, ...value }
			const result = await this.db.insert(updatedDoc)
			return { id: result.id, ...value }
		} catch (error) {
			throw new Error(`Error al actualizar el documento: ${error.message}`)
		}
	}

	async delete(key) {
		try {
			const doc = await this.get(key) // Obtener el documento actual
			const result = await this.db.destroy(doc._id, doc._rev)
			return { id: doc._id, message: `Documento eliminado exitosamente.` }
		} catch (error) {
			throw new Error(`Error al eliminar el documento: ${error.message}`)
		}
	}
}

export default CouchRepository
