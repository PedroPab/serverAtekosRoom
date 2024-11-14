import { roomRepository } from './roomRepository.js'
import GetAllRooms from './../../application/GetAllRooms.js'

const getAllRooms = new GetAllRooms({ roomRepository })

export { getAllRooms }