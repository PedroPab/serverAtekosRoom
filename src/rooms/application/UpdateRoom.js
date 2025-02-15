import Room from '../domain/models/RoomModel.js'

class UpdateRoom {
	constructor({
		roomRepository,
		eventRoom,
		getRoomById,
		createRoom,
	}) {
		this.roomRepository = roomRepository
		this.eventRoom = eventRoom
		this.getById = getRoomById
		this.create = createRoom
	}
	async execute({ id, data }) {
		let room = await this.getRoomOrCreate(id, data)
		room = this.modify(room, data)

		const rta = await this.update(id, room)
		this.eventRoom.emit('room.update', rta)
		return rta
	}
	async getRoomOrCreate(id, data) {
		const roomFind = await this.getRoom(id)
		if (roomFind) {
			return roomFind
		}
		const roomCrete = await this.createRoom({ id, data })
		return roomCrete
	}
	async getRoom(id) {
		try {
			return await this.roomRepository.getById(id)
			// eslint-disable-next-line no-unused-vars
		} catch (error) {
			return undefined
		}
	}
	async createRoom({ id, data }) {
		const room = new Room({ id, ...data })
		return await this.create.execute(room)
	}
	modify(room, data) {
		const rta = this.modifyData(room, data)
		return this.modifyUpdateDate(rta)
	}
	modifyData(room, data) {
		return { ...room, ...data }
	}
	modifyUpdateDate(room) {
		const update = new Date()
		room['dateUpdate'] = update
		return room
	}
	async update(id, room) {
		const newRoom = new Room(room)
		await this.roomRepository.update(id, newRoom)
		return newRoom
	}
}

export default UpdateRoom
