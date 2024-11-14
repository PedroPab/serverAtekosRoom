import { roomRepository } from './roomRepository.js'
import GetParamRoom from './../../application/GetParamRoom.js'

const getParamRoom = new GetParamRoom({ roomRepository })

export { getParamRoom }