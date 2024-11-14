import RoomController from '../controller/RoomController.js'

import { createRoom } from './createRoomInit.js'
import { getAllRooms } from './getAllRoomsInit.js'
import { getRoomById } from './getRoomByIdInit.js'
import { updateRoom } from './updateRoomInit.js'
import { getParamRoom } from './getParamRoomInit.js'
import { switchLightRoom } from './switchLightRoom.js'

//init controller
const roomController = new RoomController({
	createRoom,
	getAllRooms,
	getRoomById,
	updateRoom,
	getParamRoom,
	switchLightRoom,
})

export default roomController