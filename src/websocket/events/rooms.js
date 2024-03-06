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
    ws.send(JSON.stringify({ type: `update`, data }));
    return
  } catch (error) {
    throw error
  }
}