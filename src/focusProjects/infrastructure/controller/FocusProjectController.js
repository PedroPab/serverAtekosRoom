class FocusProjectController {
	constructor({
		getAllFocusProjects,
		getIdFocusProject,
		getFilterFocusProjects,
		createFocusProject,
		updateFocusProject,
		deleteFocusProject,
		createFocusElementFromProject,
		getAllElementsByIdFocusProject
	}) {
		this.getAllFocusProjects = getAllFocusProjects
		this.getIdFocusProject = getIdFocusProject
		this.getFilterFocusProjects = getFilterFocusProjects
		this.createFocusProject = createFocusProject
		this.updateFocusProject = updateFocusProject
		this.deleteFocusProject = deleteFocusProject
		this.createFocusElementFromProject = createFocusElementFromProject
		this.getAllElementsByIdFocusProject = getAllElementsByIdFocusProject
	}

	async getAll(req, res) {
		try {
			//pagination
			const { page = 1, limit = 10 } = req.query
			const pagination = { page, limit }
			const focusProjects = await this.getAllFocusProjects.execute(pagination)
			res.status(200).json(focusProjects)
		} catch (error) {
			res.status(400).json({ error: error.message })
		}
	}

	async getId(req, res) {
		try {
			const { id } = req.params
			const focusProject = await this.getIdFocusProject.execute(id)
			res.status(200).json(focusProject)
		} catch (error) {
			res.status(400).json({ error: error.message })
		}
	}

	async create(req, res) {
		try {
			const body = req.body
			const newFocusProject = await this.createFocusProject.execute(body)
			res.status(201).json(newFocusProject)
		} catch (error) {
			res.status(400).json({ error: error.message })
		}
	}

	async createFocusElement(req, res) {
		try {
			const { id: focusProjectId } = req.params
			// const dataBody = req.body

			const nameImg = `${Date.now()}-${req.file?.originalname || 'default'}`

			const file = {
				buffer: req.file.buffer,
				name: nameImg,
				mimetype: req.file.mimetype,
			}

			const data = {
				...req.body,
				file,
			}

			const newFocusElement = await this.createFocusElementFromProject.execute({ focusProjectId, ...data })
			res.status(201).json(newFocusElement)
		} catch (error) {
			res.status(400).json({ error: error.message })
		}
	}
	async getAllElements(req, res) {
		try {
			const { id } = req.params
			const { page = 1, limit = 10 } = req.query
			const focusElements = await this.getAllElementsByIdFocusProject.execute({ focusProjectId: id, pagination: { page, limit } })
			res.status(200).json(focusElements)
		} catch (error) {
			res.status(400).json({ error: error.message })
		}
	}
}

export default FocusProjectController
