import { roomRepository } from './roomRepository.js'
import GetRoomById from './../../application/GetRoomById.js'

const getRoomById = new GetRoomById({ roomRepository })

export { getRoomById }