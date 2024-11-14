import CreateRoom from './../../application/CreateRoom.js'
import { roomRepository } from './roomRepository.js'

const createRoom = new CreateRoom({ roomRepository })

export { createRoom }