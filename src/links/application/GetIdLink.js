class GetIdLink {
	constructor({ linkRepository }) {
		this.linkRepository = linkRepository
	}
	async execute(id) {
		return this.linkRepository.getById(id)
	}
}

export default GetIdLink
