class CreateFocusElementFromProject {
	constructor({
		focusProjectRepository,
		focusElementRepository,
		findFocusElement,
		createFocusElement,
	}) {
		this.focusProjectRepository = focusProjectRepository
		this.focusElementRepository = focusElementRepository
		this.findFocusElement = findFocusElement
		this.createFocusElement = createFocusElement
	}
	async execute({ id, ...data }) {
		try {
			const focusProjectId = data.focusProjectId

			const focusProjectFind = await this.findFocusElement.execute(focusProjectId)
			if (!focusProjectFind) {
				throw new Error('Error creating focus element')
			}

			return await this.createFocusElement.execute({ id, data })
		} catch (error) {
			console.error(error)
			throw error
		}
	}
}

export default CreateFocusElementFromProject
