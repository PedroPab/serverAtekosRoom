class GetAllRooms {
	constructor({ roomRepository }) {
		this.roomRepository = roomRepository
	}

	async execute() {
		return await this.roomRepository.getAll()
	}
}

export default GetAllRooms