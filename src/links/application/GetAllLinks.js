class GetAllLinks {
	constructor({ linkRepository }) {
		this.linkRepository = linkRepository
	}

	async execute() {
		return this.linkRepository.getAll()
	}
}

export default GetAllLinks
