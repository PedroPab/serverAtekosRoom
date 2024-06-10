import { Room } from "../../class/room/index.js";
import StoreBaseService from "../../database/index.js";
import { COLLECTIONS } from "../../utils/collectionNames/collectionNames.js";
import Logs from "../../utils/logColor/index.js";
import { socketEventIdRoom } from "../../websocket/events/rooms.js";
const Data = new StoreBaseService()

async function createRoom(id) {
  try {
    const room = new Room({ id: id, })
    //guardamos el nuevo room en la base de datos
    const save = await Data.setValue(`${COLLECTIONS.room}-${id}`, room)

    //guardamos el nuevo id en la lista de ids de los rooms
    let listRooms = await Data.getValue(COLLECTIONS.rooms)

    if (!listRooms) listRooms = []

    listRooms.push(id)

    await Data.setValue(COLLECTIONS.rooms, listRooms)

    return room
  } catch (error) {
    throw error
  }
}
async function updateRoom(id, dataUpdate) {
  try {

    let room = await findRoom(id)

    if (!room) room = await createRoom(id)

    room.update(dataUpdate)

    //guardamos el  room mnodificado  la base de datos
    const save = await Data.setValue(`${COLLECTIONS.room}-${id}`, room)

    // nos conectamos con el servicio de websocket para mostrar el cambio del estado al id que este suscrito a ella o que ella
    //por el momento le mandaremos el mensaje al mismo id del socket
    try {
      socketEventIdRoom(id, room)
    } catch (error) {
      Logs.logError(error)
      Logs.logError(`Haaaa, ayuda`)
    }

    return room
  } catch (error) {
    throw error
  }
}



async function findRooms() {
  try {
    let rta = await Data.getValue(COLLECTIONS.rooms);
    if (!rta) rta = [];
    return rta;
  } catch (error) {
    throw error
  }
}

/**
 * @param {String} id 
 * @returns {Promise<Room>}
 */
async function findRoom(id) {
  try {
    return await Data.getValue(`${COLLECTIONS.room}-${id}`)
    //optemos el room y lo coverimos en una clase para tener acceso a sus metodos

  } catch (error) {
    throw error
  }
}

export {
  createRoom,
  findRooms,
  updateRoom,
  findRoom,
}