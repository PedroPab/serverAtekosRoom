import FocusProjectRepository from '../../../focusProjects/domain/repository/FocusProjectRepository.js'
import FirebaseRepository from '../../../utilsShare/repositories/FirebaseRepository.js'

const db = new FirebaseRepository('focusElements')

class FocusElementFirebaseRepository extends FocusProjectRepository {
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

	async getFilter(filter) {
		if (!filter) {
			throw new Error('Filtro es requerido')
		}

		const rta = await db.getByFilter(filter)
		return rta
	}

	//existe ya  un elemento con el mismo id
	async exist(id) {
		if (!id) {
			throw new Error('ID es requerido')
		}

		const rta = db.getById(id)
		if (!rta) {
			return false
		}
		return true
	}

	async update(id, data) {
		if (!id || !data) {
			throw new Error('ID y datos son requeridos')
		}

		const rta = db.update(id, { ...data })
		return rta
	}

	async delete(id) {
		if (!id) {
			throw new Error('ID es requerido')
		}

		db.delete(id)
		return true
	}
}

export default FocusElementFirebaseRepository
