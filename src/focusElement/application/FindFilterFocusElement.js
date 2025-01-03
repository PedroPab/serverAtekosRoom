class FindFilterFocusElement {
	constructor({
		focusElementRepository,
	}) {
		this.focusElementRepository = focusElementRepository
	}
	async execute(filter, pagination) {
		return await this.focusElementRepository.getFilter(filter, pagination)

	}
}

export default FindFilterFocusElement
