class LinksController {
	constructor({
		createLink,
		getAllLinks,
		getLinkById,
		updateById,
	})
	{

		this.createLink = createLink
		this.getAllLinks = getAllLinks
		this.getLinkById = getLinkById
		this.updateById = updateById
	}
	async create(req, res) {
		try {
			const data = req.body
			const link = await this.createLink.execute(data)
			res.status(201).send(link)
		} catch (error) {
			res.status(400).send(error.message)
		}
	}
	async getAll(req, res) {
		try {
			const links = await this.getAllLinks.execute()
			res.status(200).send(links)
		} catch (error) {
			res.status(400).send(error.message)
		}
	}
	async getById(req, res) {
		try {
			const { id } = req.params
			const link = await this.getLinkById.execute(id)
			res.status(200).send(link)
		} catch (error) {
			res.status(400).send(error.message)
		}
	}
	async getByIdUse(req, res) {
		try {
			const { id } = req.params
			const link = await this.getLinkById.execute(id)
			res.redirect(link.url)
		} catch (error) {
			res.status(400).send(error.message)
		}
	}
	async update(req, res) {
		try {
			const id = req.params.id
			const data = req.body
			const link = await this.updateById.execute(id, data)
			res.status(200).send(link)
		} catch (error) {
			res.status(400).send(error.message)
		}
	}
}

export default LinksController
