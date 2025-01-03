import FocusProjectRepository from '../../domain/repository/FocusProjectRepository.js'
import LocalMapRepository from '../../../utilsShare/repositories/LocalMapRepository.js'

const db = new LocalMapRepository()

class FocusProjectLocalMapRepository extends FocusProjectRepository {
	async save(id, data) {
		if (!id || !data) {
			throw new Error('ID y datos son requeridos')
		}
		const rta = db.save(id, data)
		return rta
	}

	async getAll(pagination) {
		return db.getAll(pagination)
	}

	async getFilter(filter, pagination) {
		return db.getByFilter(filter, pagination)
	}

	async getById(id) {
		if (!id) {
			throw new Error('ID es requerido')
		}

		const rta = db.getById(id)
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

		const rta = db.update(id, data)
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

export default FocusProjectLocalMapRepository
