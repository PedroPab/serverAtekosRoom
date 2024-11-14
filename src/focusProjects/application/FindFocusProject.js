class FindFocusProject {
	constructor({
		focusProjectRepository,
	}) {
		this.focusProjectRepository = focusProjectRepository
	}
	async execute(id) {
		return await this.focusProjectRepository.getById(id)

	}
}

export default FindFocusProject
