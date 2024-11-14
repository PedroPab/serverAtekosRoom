// setupWebSocket.js
import { WebSocketServer } from 'ws'
import { handleConnection } from './handlers/connectionHandlers.js'
import { handleRoomUpdate, handleRoomCreate } from './handlers/roomEventHandlers.js'
import { eventRoom } from '../rooms/infrastructure/dependencies/eventRoom.js' // Importamos eventRoom

export default function setupWebSocket(server) {
	const wss = new WebSocketServer({ server })

	wss.on('connection', handleConnection)

	// Escuchar eventos de Room y enviarlos a clientes suscritos
	eventRoom.on('room.update', handleRoomUpdate)
	eventRoom.on('room.create', handleRoomCreate)

	return wss
}
