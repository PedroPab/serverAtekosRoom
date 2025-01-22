import LinkRepository from '../../domain/repository/LinkRepository.js'
import CouchRepository from '../../../utilsShare/repositories/CouchRepository.js'

const db = new CouchRepository('links') // Nombre de la colección en CouchDB

class LinkCouchRepository extends LinkRepository {

	async save(id, data) {
		if (!id || !data) {
			throw new Error('ID y datos son requeridos')
		}

		const result = await db.save(id, { ...data })
		return result
	}

	async getAll() {
		return await db.getAll()
	}

	async getById(id) {
		if (!id) {
			throw new Error('ID es requerido')
		}

		const result = await db.get(id)
		if (!result) {
			throw new Error(`No se encontró el enlace con ID: ${id}`)
		}

		return result
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

export default LinkCouchRepository
