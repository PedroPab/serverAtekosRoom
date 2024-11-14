import { roomRepository } from './roomRepository.js'
import UpdateRoom from './../../application/UpdateRoom.js'
import { eventRoom } from './eventRoom.js'
import { getRoomById } from './getRoomByIdInit.js'
import { createRoom } from './createRoomInit.js'

const updateRoom = new UpdateRoom({
	roomRepository,
	eventRoom,
	getRoomById,
	createRoom,
})

export { updateRoom }