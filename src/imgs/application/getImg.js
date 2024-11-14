class GetImg {
	constructor({
		imgRepository,
	}) {
		this.imgRepository = imgRepository
	}

	async execute(id) {
		if (!id) {
			throw new Error('Id is required')
		}
		return await this.imgRepository.getById(id)
	}
}

export default GetImg
