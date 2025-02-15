class ImgController {
	constructor({
		getAllImgs,
		getIdImg,
		getFilterImgs,
		createImg,
		updateImg,
		deleteImg,
	}) {
		this.getAllImgs = getAllImgs
		this.getIdImg = getIdImg
		this.getFilterImgs = getFilterImgs
		this.createImg = createImg
		this.updateImg = updateImg
		this.deleteImg = deleteImg
	}

	async getAll(req, res) {
		try {
			const imgs = await this.getAllImgs.execute()
			res.status(200).json(imgs)
		} catch (error) {
			res.status(400).json({ error: error.message })
		}
	}

	async getId(req, res) {
		try {
			const { id } = req.params
			const img = await this.getIdImg.execute(id)
			res.status(200).json(img)
		} catch (error) {
			res.status(400).json({ error: error.message })
		}
	}

	async create(req, res) {
		try {
			const nameImg = `${Date.now()}-${req.file.originalname}`

			const file = {
				buffer: req.file.buffer,
				name: nameImg,
				mimetype: req.file.mimetype,
			}
			const id = file.name
			const data = {
				...req.body,
				file,
			}
			const newImg = await this.createImg.execute({ id, data })
			console.log(`[ ~ ImgController ~ create ~ newImg]`, newImg)
			res.status(201).json(newImg)
		} catch (error) {
			res.status(400).json({ error: error.message })
		}
	}
}

export default ImgController
