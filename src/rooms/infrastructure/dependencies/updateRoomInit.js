import { roomRepository } from './roomRepository.js'
import UpdateRoom from './../../application/UpdateRoom.js'


const updateRoom = new UpdateRoom({ roomRepository })

export { updateRoom }