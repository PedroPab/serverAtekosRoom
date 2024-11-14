import LinkRepository from '../../domain/repository/LinkRepository.js'
import FirebaseRepository from '../../../utilsShare/repositories/FirebaseRepository.js'
import LocalMapRepository from '../../../utilsShare/repositories/LocalMapRepository.js'

const db = new FirebaseRepository('links')
const dbCache = new LocalMapRepository()

class LinkFirebaseCacheRepository extends LinkRepository {
	async initialize() {
		const totalDataBase = await db.getAll()
		if (totalDataBase.length === 0) {
			return
		}
		totalDataBase.forEach(async (element) => {
			await dbCache.save(element.id, element)
		})
		return
	}
	async save(id, data) {
		if (!id || !data) {
			throw new Error('ID y datos son requeridos')
		}

		const rta = await db.save(id, { ...data })
		await dbCache.save(id, rta)
		return rta
	}

	async getAll() {
		return await db.getAll()
	}

	async getById(id) {
		if (!id) {
			throw new Error('ID es requerido')
		}

		// const rta = await db.getById(id)
		//usar la cache
		let rta = await dbCache.getById(id)
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
		await dbCache.save(id, rta)
		return rta
	}

	async delete(id) {
		if (!id) {
			throw new Error('ID es requerido')
		}

		await db.delete(id)
		await dbCache.delete(id)
		return true
	}
}

export default LinkFirebaseCacheRepository
