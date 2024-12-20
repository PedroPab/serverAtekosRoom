import FocusProjectRepository from '../../domain/repository/FocusProjectRepository.js'
import FirebaseRepository from '../../../utilsShare/repositories/FirebaseRepository.js'

const db = new FirebaseRepository('focusProjects')

class FocusProjectFirebaseRepository extends FocusProjectRepository {
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

		const rta = await db.getById(id)
		if (!rta) {
			throw new Error(`No se encontró la sala con ID: ${id}`)
		}

		return rta
	}

	//existe ya  un elemento con el mismo id
	async exist(id) {
		if (!id) {
			throw new Error('ID es requerido')
		}
		try {
			const rta = await db.getById(id)
			if (!rta) {
				return false
			}
			return true
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

export default FocusProjectFirebaseRepository
