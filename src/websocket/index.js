import { WebSocketServer } from 'ws'
import Logs from '../utils/logColor/index.js'
import clients from './clients/index.js'
import subscriptions from './subscriptions/index.js'

export default function setupWebSocket(server) {

  const wss = new WebSocketServer({ server })

  wss.on('connection', (ws, req) => {
    const remoteAddress = req.socket.remoteAddress
    Logs.logInfo(`se conecto un nuevo websocket ${remoteAddress}`)

    let userId // Identificador único del cliente

    ws.on('message', (message) => {
      console.log(`[ ~ ws.on ~ message]`, message)
      //recibit buffer y parsear a json
      const message2 = message.toString()
      const msg = JSON.parse(message)

      switch (msg.type) {
        case 'identify':
          userId = msg.userId
          clients[userId] = ws
          Logs.logSuccess(`el cliente se identifica como ${userId}`)
          ws.send(`Te identificaste como ${userId}, suscribete a un evento o espera a que te volvamos a mandar un mensaje xd`)
          break
        case 'subscribe':
          // Añadir este cliente a la lista de suscripciones para el evento especificado
          Logs.logSuccess(`el cliente ${userId} se suscribió al evento ${msg.event}`)
          if (subscriptions[msg.event]) {
            subscriptions[msg.event].push(userId)
          } else {
            subscriptions[msg.event] = [userId]
          }
          break
        case 'message':
          // Enviar el mensaje a todos los clientes suscritos al evento especificado
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
      Logs.logError(`se desconecto el websocket ${remoteAddress}, con el id ${userId}`)
      // Limpiar al cliente de todas las suscripciones y la lista de clientes
      Object.keys(subscriptions).forEach(event => {
        subscriptions[event] = subscriptions[event].filter(subscriber => subscriber !== userId)
      })
      delete clients[userId]
    })
  })

  return wss

}
