// handlers/roomEventHandlers.js
import Logs from '../../utils/logColor/index.js'
import clients from '../clients.js'
import subscriptions from '../subscriptions.js'

export function handleRoomUpdate(data) {
	Logs.logInfo(`Evento de actualización de Room recibido para ${data.id}`)
	const roomId = data.id
	const event = 'room.update'

	if (subscriptions[event] && subscriptions[event][roomId]) {
		subscriptions[event][roomId].forEach(subscriber => {
			if (clients[subscriber]) {
				clients[subscriber].send(JSON.stringify({ event, data }))
			}
		})
	}
}

export function handleRoomCreate(data) {
	Logs.logInfo(`Evento de creación de Room recibido para ${data.id}`)
	const event = 'room.create'

	if (subscriptions[event]) {
		Object.keys(subscriptions[event]).forEach(roomId => {
			subscriptions[event][roomId].forEach(subscriber => {
				if (clients[subscriber]) {
					clients[subscriber].send(JSON.stringify({ event, data }))
				}
			})
		})
	}
}
