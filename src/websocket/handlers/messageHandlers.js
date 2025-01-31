// handlers/messageHandlers.js
import { switchLightRoom } from '../../rooms/infrastructure/dependencies/switchLightRoom.js'
import { updateRoom } from '../../rooms/infrastructure/dependencies/updateRoomInit.js'
import Logs from '../../utils/logColor/index.js'
import clients from '../clients.js'
import subscriptions from '../subscriptions.js'

export function handleIdentify(ws, userId) {
	//deberíamos validar el usuario y su token
	//pero como todo es publico no es necesario
	clients[userId] = ws
	Logs.logSuccess(`El cliente se identifica como ${userId}`)
	const response = {
		type: `message`,
		data: `Te identificaste como ${userId}, suscribete a un evento o espera actualizaciones de Room.`
	}
	ws.send(JSON.stringify(response))
}

export function handleSubscribe(ws, userId, msg) {
	const event = msg.event
	const roomId = msg.room

	Logs.logSuccess(`El cliente ${userId} se suscribió al evento ${event} para el room ${roomId}`)
	//aquí podríamos hacer una validación de autorización
	//pero como todo es publico no es necesario

	// Verificar si existe el evento y el room, y añadir el usuario de forma más concisa
	subscriptions[event] = subscriptions[event] || {}
	subscriptions[event][roomId] = subscriptions[event][roomId] || []
	subscriptions[event][roomId].push(userId)
	const response = {
		type: 'message',
		data: `Te has suscrito correctamente al evento ${event} para el room ${roomId}.`
	}
	ws.send(JSON.stringify(response))
}

export function handleMessage(msg) {
	if (subscriptions[msg.event]) {
		subscriptions[msg.event].forEach(subscriber => {
			clients[subscriber].send(JSON.stringify(msg))
		})
	}
}

export async function handleAction(msg) {
	console.log(`[ ~ handleAction ~ msg]`, msg)
	//miramos el evento qeu quiere hacer
	const { event } = msg

	switch (event) {
		case 'room.update':
			//ejecutamos el caso de uso para el room
			await updateRoom.execute({ id: msg.room, data: msg.data })
			break
		case 'room.switchLight':
			await switchLightRoom.execute({ id: msg.room })
			break
		default:
			console.log('No hay ningún evento evento que podamos manejar')
			break
	}
}