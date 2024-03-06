import Logs from "../../utils/logColor/index.js"
import clients from "../clients/index.js"

export const socketEventIdRoom = (idSocket, data) => {
  try {
    //becamos el ws según el id
    const ws = clients[idSocket]
    if (!ws) {
      // el socket esta desconectado
      throw `el socket ${idSocket} esta desconectado`
    }
    const rta = { type: `update`, data }
    Logs.logInfo(`mandamos esta info al socket ${idSocket}: ${JSON.stringify(rta)}`)
    ws.send(JSON.stringify(rta));
    return
  } catch (error) {
    throw error
  }
}