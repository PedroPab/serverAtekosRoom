import FocusProject from '../domain/models/FocusProjectModel.js'

class CreateFocusProject {
	constructor({
		focusProjectRepository,
	}) {
		this.focusProjectRepository = focusProjectRepository
	}
	async execute({ id, ...data }) {
		return await this.retrieveOrCreateFocusProject(id, data)

	}
	async retrieveOrCreateFocusProject(id, data) {
		const focusProjectFind = await this.getFocusProject(id)
		if (focusProjectFind) {
			throw new Error(`Ya existe un proyecto con ese ID ${id}`)
		}
		const focusProjectCreated = await this.createFocusProject({ id, data })
		return focusProjectCreated
	}
	async getFocusProject(id) {
		try {
			return await this.focusProjectRepository.getById(id)
			// eslint-disable-next-line no-unused-vars
		} catch (error) {
			return undefined
		}
	}
	async createFocusProject({ id, data }) {
		const rta = new FocusProject({ id, ...data })
		return await this.focusProjectRepository.save(rta.id, rta)
	}
}

export default CreateFocusProject
