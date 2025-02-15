import { getMongoDB } from '../../config/mongo/mongoConfig.js'

class MongoRepository {
	constructor(collectionName) {
		this.collection = getMongoDB().collection(collectionName)
	}

	async save(key, value) {
		try {
			const result = await this.collection.insertOne({ _id: key, ...value })
			return { id: result.insertedId, ...value }
		} catch (error) {
			throw new Error(`Error al guardar el documento: ${error.message}`)
		}
	}

	async get(key) {
		try {
			const doc = await this.collection.findOne({ _id: key })
			if (!doc) {
				throw new Error(`Documento con ID ${key} no encontrado.`)
			}
			return { id: doc._id, ...doc }
		} catch (error) {
			throw new Error(`Error al obtener el documento: ${error.message}`)
		}
	}

	async getAll({ page = 1, limit = 50 } = {}) {
		try {
			const skip = (page - 1) * limit
			const docs = await this.collection.find().skip(skip).limit(limit).toArray()
			return docs.map(doc => ({ id: doc._id, ...doc }))
		} catch (error) {
			throw new Error(`Error al obtener todos los documentos: ${error.message}`)
		}
	}

	async getByFilter(filter, { page = 1, limit = 50 } = {}) {
		try {
			const query = {}
			if (filter && filter.key && filter.option && filter.value) {
				switch (filter.option) {
					case '==':
						query[filter.key] = filter.value
						break
					case '!=':
						query[filter.key] = { $ne: filter.value }
						break
					case '>':
						query[filter.key] = { $gt: filter.value }
						break
					case '>=':
						query[filter.key] = { $gte: filter.value }
						break
					case '<':
						query[filter.key] = { $lt: filter.value }
						break
					case '<=':
						query[filter.key] = { $lte: filter.value }
						break
					default:
						throw new Error(`Operador no soportado: ${filter.option}`)
				}
			}

			const skip = (page - 1) * limit
			const docs = await this.collection.find(query).skip(skip).limit(limit).toArray()
			return docs.map(doc => ({ id: doc._id, ...doc }))
		} catch (error) {
			throw new Error(`Error al obtener los documentos por filtro: ${error.message}`)
		}
	}

	async update(key, value) {
		try {
			const result = await this.collection.updateOne({ _id: key }, { $set: value })
			if (result.matchedCount === 0) {
				throw new Error(`Documento con ID ${key} no encontrado.`)
			}
			return { id: key, ...value }
		} catch (error) {
			throw new Error(`Error al actualizar el documento: ${error.message}`)
		}
	}

	async delete(key) {
		try {
			const result = await this.collection.deleteOne({ _id: key })
			if (result.deletedCount === 0) {
				throw new Error(`Documento con ID ${key} no encontrado.`)
			}
			return { id: key, message: `Documento eliminado exitosamente.` }
		} catch (error) {
			throw new Error(`Error al eliminar el documento: ${error.message}`)
		}
	}
}

export default MongoRepository
