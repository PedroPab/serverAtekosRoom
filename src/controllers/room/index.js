import Boom from "@hapi/boom";
import Logs from "../../utils/logColor/index.js";
import { createRoom, findRoom, findRooms, updateRoom } from "./controller.js";


/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {Function} next
 */
export const getRooms = async (req, res, next) => {
  try {
    //consulatamos la lista todas room que tenermos registradas
    let rta = await findRooms();

    res.data = rta // Guarda los datos en res.data
    res.rtaStatus = 200
    next()

  } catch (error) {
    next(error)
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {Function} next
 */
export const getRoom = async (req, res, next) => {
  try {
    const id = req.params.id

    //el identificador de cada room es room-id ( room-4857sd57 )
    let rta = await findRoom(id)

    let status = 200

    if (!rta) {
      //si no hay un elemento  o un room , lo creamos
      const room = await createRoom(id)
      rta = room
      status = 201
    }

    res.data = rta; // Guarda los datos en res.data
    res.rtaStatus = status

    next()
  } catch (error) {
    next(error)
  }
}


/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {Function} next
 */
export const getParamRoom = async (req, res, next) => {
  try {
    const id = req.params.id
    const param = req.params.param

    //el identificador de cada room es room-id ( room-4857sd57 )
    let rta = await findRoom(id)

    let status = 200

    if (!rta) {
      //si no hay un elemento  o un room , lo creamos
      const room = await createRoom(id)
      rta = room
      status = 201
    }

    res.data = rta[param]; // Guarda los datos en res.data
    res.rtaStatus = status

    next()
  } catch (error) {
    next(error)
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {Function} next
 */
export const stateOn = async (req, res, next) => {
  try {
    const id = req.params.id

    let rta = await updateRoom(id, { state: true })

    let status = 202

    res.data = rta; // Guarda los datos en res.data
    res.rtaStatus = status
    next()
  } catch (error) {
    next(error)
  }
}

export const stateOff = async (req, res, next) => {
  try {
    const id = req.params.id

    let rta = await updateRoom(id, { state: false })

    let status = 202

    res.data = rta; // Guarda los datos en res.data
    res.rtaStatus = status
    next()
  } catch (error) {
    next(error)
  }
}

export const stateOffOn = async (req, res, next) => {
  try {
    const id = req.params.id

    let room = await findRoom(id)

    let status = 202

    if (!room) {
      //si no hay un elemento  o un room , lo creamos
      room = await createRoom(id)
      status = 201
    }

    let rta = await updateRoom(id, { state: !room.state })


    res.data = rta; // Guarda los datos en res.data
    res.rtaStatus = status
    next()
  } catch (error) {
    next(error)
  }
}
