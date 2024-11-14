import ImgRepository from '../../domain/repository/ImgRepository.js'
import FirebaseRepository from '../../../utilsShare/repositories/FirebaseRepository.js'

const db = new FirebaseRepository('imgs')

class ImgFirebaseRepository extends ImgRepository {
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
		const rta = await db.getById(id)
		if (!rta) {
			return false
		}
		return true
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

export default ImgFirebaseRepository
