import ImgRepository from '../../domain/repository/ImgRepository.js'
import CouchRepository from '../../../utilsShare/repositories/CouchRepository.js'

const db = new CouchRepository('images') // Nombre de la colección en CouchDB

class ImgCouchRepository extends ImgRepository {

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

	async getById(id) {
		if (!id) {
			throw new Error('ID es requerido')
		}

		const result = await db.get(id)
		if (!result) {
			throw new Error(`No se encontró el documento con ID: ${id}`)
		}

		return result
	}

	async exist(id) {
		if (!id) {
			throw new Error('ID es requerido')
		}

		try {
			const result = await db.get(id)
			return !!result
		}
		catch (error) {
			if (error.message === `Documento con ID ${id} no encontrado.`) {
				return false
			}
			throw error
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

export default ImgCouchRepository
