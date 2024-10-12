import RoomRepository from '../../domain/repository/RoomRepository.js'
import Room from '../../domain/models/RoomModel.js'

const db = []

class LocalRoomRepository extends RoomRepository {
  async save({ id, data }) {
    if (!id || !data) {
      throw new Error('ID y datos son requeridos')
    }

    try {
      const room = new Room({ id, ...data })
      db.push(room)
      return room
    } catch (error) {
      throw error
    }
  }

  async getAll() {
    return db
  }

  async getById({ id }) {
    if (!id) {
      throw new Error('ID es requerido')
    }

    const room = db.find((room) => room.id === id)
    if (!room) {
      throw new Error(`No se encontró la sala con ID: ${id}`)
    }

    return room
  }

  async update({ id, data }) {
    if (!id || !data) {
      throw new Error('ID y datos son requeridos')
    }

    const index = db.findIndex((room) => room.id === id)
    if (index === -1) {
      throw new Error(`No se encontró la sala con ID: ${id}`)
    }

    db[index] = { ...db[index], ...data }
    return db[index]
  }
}

export default LocalRoomRepository
