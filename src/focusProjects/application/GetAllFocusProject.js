class GetAllFocusProject {
	constructor({
		focusProjectRepository,
	}) {
		this.focusProjectRepository = focusProjectRepository
	}
	async execute(pagination) {
		return await this.focusProjectRepository.getAll(pagination)
	}
}

export default GetAllFocusProject
