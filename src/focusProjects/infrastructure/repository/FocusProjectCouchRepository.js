import FocusProjectRepository from '../../domain/repository/FocusProjectRepository.js'
import CouchRepository from '../../../utilsShare/repositories/CouchRepository.js'

const db = new CouchRepository('focusProjects') // Nombre de la colección en CouchDB

class FocusProjectCouchRepository extends FocusProjectRepository {
	async save(id, data) {
		if (!id || !data) {
			throw new Error('ID y datos son requeridos')
		}

		const rta = await db.save(id, { ...data })
		return rta
	}

	async getAll() {
		return await db.getAll()
	}

	async getById(id) {
		if (!id) {
			throw new Error('ID es requerido')
		}

		const rta = await db.get(id)
		if (!rta) {
			throw new Error(`No se encontró el documento con ID: ${id}`)
		}

		return rta
	}

	async exist(id) {
		if (!id) {
			throw new Error('ID es requerido')
		}

		try {
			const rta = await db.get(id)
			return !!rta // Devuelve true si el documento existe, false si no
		} catch (error) {
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

		const rta = await db.update(id, { ...data })
		return rta
	}

	async delete(id) {
		if (!id) {
			throw new Error('ID es requerido')
		}

		await db.delete(id)
		return true
	}
}

export default FocusProjectCouchRepository
