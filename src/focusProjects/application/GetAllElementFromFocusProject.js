import FindFilterFocusElement from '../../focusElement/application/FindFilterFocusElement.js'
import FindFocusProject from './FindFocusProject.js'

class GetAllElementFromFocusProject {
	constructor({
		focusProjectRepository,
		focusElementRepository
	}) {
		this.focusProjectRepository = focusProjectRepository
		this.focusElementRepository = focusElementRepository
		this.findFocusProject = new FindFocusProject({ focusProjectRepository })
		this.getFilterFocusElement = new FindFilterFocusElement({ focusElementRepository })
	}

	async execute({ focusProjectId, pagination }) {
		await this.findFocusProject.execute(focusProjectId)
		//convertir en numero la pagina y el limite
		let { page, limit } = pagination
		page = parseInt(page)
		limit = parseInt(limit)

		const filter = {
			key: 'focusProjectId',
			value: focusProjectId,
			option: '=='
		}
		const elements = await this.getFilterFocusElement.execute(filter, { page, limit })

		return elements
	}
}

export default GetAllElementFromFocusProject
