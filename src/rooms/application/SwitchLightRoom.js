import Room from '../domain/models/RoomModel.js'

class SwitchLightRoom {
	constructor({
		getRoomById,
		updateRoom,
		createRoom
	}) {
		this.getById = getRoomById
		this.update = updateRoom
		this.create = createRoom
	}

	async execute({ id }) {
		// eslint-disable-next-line no-useless-catch
		try {
			let room
			try {
				//usamos un caso de uso para buscar el Room por id
				room = await this.getById.execute(id)
				// eslint-disable-next-line no-unused-vars
			} catch (error) {
				room = new Room({ id })
				//creamos el room en la base de datos
				await this.create.execute(room)
			}
			//modificar el valor del parámetro de la luz que es un booleano en el state
			const newValueState = !room['state']
			room['state'] = newValueState
			//guardamos el cambio con el caso de uso de update
			await this.update.execute({ id, data: room })
			return newValueState
		} catch (error) {
			throw error
		}
	}
}

export default SwitchLightRoom
