import FocusElementRepository from '../../domain/repository/FocusElementRepository.js'
import MongoRepository from '../../../utilsShare/repositories/MongoRepository.js'

const db = new MongoRepository('focusElements') // Nombre de la colección en MongoDB

class FocusElementMongoRepository extends FocusElementRepository {

	async save(id, data) {
		if (!id || !data) {
			throw new Error('ID y datos son requeridos')
		}

		const result = await db.save(id, { ...data })
		return result
	}

	async getAll({ page = 1, limit = 50 } = {}) {
		return await db.getAll({ page, limit })
	}

	async getId(id) {
		if (!id) {
			throw new Error('ID es requerido')
		}

		const result = await db.get(id)
		if (!result) {
			throw new Error(`No se encontró el documento con ID: ${id}`)
		}

		return result
	}

	async getFilter(filter, { page = 1, limit = 50 } = {}) {
		if (!filter) {
			throw new Error('El filtro es requerido')
		}

		try {
			const docs = await db.getByFilter(filter, { page, limit })
			return docs
		} catch (error) {
			throw new Error(`Error al filtrar los documentos: ${error.message}`)
		}
	}

	async update(id, data) {
		if (!id || !data) {
			throw new Error('ID y datos son requeridos')
		}

		const result = await db.update(id, { ...data })
		return result
	}

	async delete(id) {
		if (!id) {
			throw new Error('ID es requerido')
		}

		await db.delete(id)
		return true
	}
}

export default FocusElementMongoRepository
