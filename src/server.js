import http from 'http'
import app from './app.js'
import ENV from './config/dotEnv.js'
import Logs from './utils/logColor/index.js'

import setupWebsocketServer from './websocket/index.js'

const server = http.createServer(app)

//iniciamos el servidor de WebSocket
setupWebsocketServer(server)

const PORT = ENV.PORT
const HOST = ENV.HOST

server.listen(PORT, () => {
	Logs.logInfo(`Server is running on port http://${HOST}:${PORT}`)
})