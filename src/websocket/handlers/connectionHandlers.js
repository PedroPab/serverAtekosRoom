// handlers/connectionHandlers.js
import Logs from '../../utils/logColor/index.js'
import { handleIdentify, handleSubscribe, handleMessage } from './messageHandlers.js'
import clients from '../clients.js'
import subscriptions from '../subscriptions.js'

export function handleConnection(ws, req) {
	const remoteAddress = req.socket.remoteAddress
	Logs.logInfo(`Se conectó un nuevo WebSocket ${remoteAddress}`)

	let userId = ws._socket._handle.fd // Identificador único del cliente

	ws.on('message', (message) => {
		const msg = JSON.parse(message) // Parsear el buffer a JSON
		switch (msg.type) {
			case 'identify':
				handleIdentify(ws, userId)
				break
			case 'subscribe':
				handleSubscribe(userId, msg)
				break
			case 'message':
				handleMessage(msg)
				break
			default:
				Logs.logInfo(msg)
				break
		}
	})

	ws.on('close', () => handleDisconnection(remoteAddress, userId))
}

export function handleDisconnection(remoteAddress, userId) {
	Logs.logError(`Se desconectó el WebSocket ${remoteAddress}, con el id ${userId}`)
	// Limpiar al cliente de todas las suscripciones y de la lista de clientes
	Object.keys(subscriptions).forEach(event => {
		Object.keys(subscriptions[event]).forEach(roomId => {
			subscriptions[event][roomId] = subscriptions[event][roomId].filter(subscriber => subscriber !== userId)
		})
	})
	delete clients[userId]
}
