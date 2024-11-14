// handlers/messageHandlers.js
import Logs from '../../utils/logColor/index.js'
import clients from '../clients.js'
import subscriptions from '../subscriptions.js'

export function handleIdentify(ws, userId) {
	//deberíamos validar el usuario y su token
	//pero como todo es publico no es necesario
	clients[userId] = ws
	Logs.logSuccess(`El cliente se identifica como ${userId}`)
	ws.send(`Te identificaste como ${userId}, suscribete a un evento o espera actualizaciones de Room.`)
}

export function handleSubscribe(userId, msg) {
	const event = msg.event
	const roomId = msg.room

	Logs.logSuccess(`El cliente ${userId} se suscribió al evento ${event} para el room ${roomId}`)
	//aquí podríamos hacer una validación de autorización
	//pero como todo es publico no es necesario

	// Verificar si existe el evento y el room, y añadir el usuario de forma más concisa
	subscriptions[event] = subscriptions[event] || {}
	subscriptions[event][roomId] = subscriptions[event][roomId] || []
	subscriptions[event][roomId].push(userId)
}

export function handleMessage(msg) {
	if (subscriptions[msg.event]) {
		subscriptions[msg.event].forEach(subscriber => {
			clients[subscriber].send(JSON.stringify(msg))
		})
	}
}
