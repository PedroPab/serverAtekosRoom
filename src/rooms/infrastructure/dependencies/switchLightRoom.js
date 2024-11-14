import SwitchLightRoom from './../../application/SwitchLightRoom.js'

import { getRoomById } from './getRoomByIdInit.js'
import { updateRoom } from './updateRoomInit.js'
import { createRoom } from './createRoomInit.js'

const switchLightRoom = new SwitchLightRoom({
	getRoomById,
	updateRoom,
	createRoom,
})

export { switchLightRoom }