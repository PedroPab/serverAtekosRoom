// setupWebSocket.js
import { WebSocketServer } from 'ws'
import Logs from '../utils/logColor/index.js'
import clients from './clients/index.js'
import subscriptions from './subscriptions/index.js'
import { eventRoom } from '../rooms/infrastructure/dependencies/eventRoom.js' // Importamos eventRoom

export default function setupWebSocket(server) {

	const wss = new WebSocketServer({ server })

	wss.on('connection', (ws, req) => {
		const remoteAddress = req.socket.remoteAddress
		Logs.logInfo(`Se conectó un nuevo WebSocket ${remoteAddress}`)

		let userId // Identificador único del cliente
		let event // Evento al que se suscribe el cliente
		let roomId // Room al que se suscribe el cliente
		// let message // Mensaje recibido del cliente

		ws.on('message', (message) => {
			const msg = JSON.parse(message) // Parsear el buffer a JSON
			//id del cliente socket
			userId = ws._socket._handle.fd

			switch (msg.type) {
				case 'identify':
					clients[userId] = ws
					Logs.logSuccess(`El cliente se identifica como ${userId}`)
					ws.send(`Te identificaste como ${userId}, suscríbete a un evento o espera actualizaciones de Room.`)
					break
				case 'subscribe':
					event = msg.event
					roomId = msg.room

					Logs.logSuccess(`El cliente ${userId} se suscribió al evento ${event} para el room ${roomId}`)

					// Verificar si existe el evento y el room, y añadir el usuario de forma más concisa
					subscriptions[msg.event] = subscriptions[msg.event] || {}
					subscriptions[msg.event][roomId] = subscriptions[msg.event][roomId] || []
					subscriptions[msg.event][roomId].push(userId)

					break
				case 'message':
					if (subscriptions[msg.event]) {
						subscriptions[msg.event].forEach(subscriber => {
							clients[subscriber].send(JSON.stringify(msg))
						})
					}
					break
				default:
					Logs.logInfo(msg)
					break
			}
		})

		ws.on('close', () => {
			Logs.logError(`Se desconectó el WebSocket ${remoteAddress}, con el id ${userId}`)
			// Limpiar al cliente de todas las suscripciones y de la lista de clientes
			Object.keys(subscriptions).forEach(event => {
				subscriptions[event] = subscriptions[event].filter(subscriber => subscriber !== userId)
			})
			delete clients[userId]
		})
	})

	// Escuchar eventos de Room y enviarlos a clientes suscritos
	eventRoom.on('room.update', (data) => {
		Logs.logInfo(`Evento de actualización de Room recibido para ${data.id}`)
		const roomId = data.id
		//miramos los que están suscritos a room.update del room que se actualizo

		const event = 'room.update'
		if (subscriptions[event]) {

			subscriptions[event][roomId].forEach(subscriber => {
				if (clients[subscriber]) {
					clients[subscriber].send(JSON.stringify({ event, data }))
				}
			})
		}
	})

	eventRoom.on('room.create', (data) => {
		Logs.logInfo(`Evento de creación de Room recibido para ${data.id}`)
		const event = 'room.create'
		if (subscriptions[event]) {
			subscriptions[event].forEach(subscriber => {
				if (clients[subscriber]) {
					clients[subscriber].send(JSON.stringify({ event, data }))
				}
			})
		}
	})

	return wss
}
