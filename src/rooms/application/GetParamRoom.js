
class GetParamRoom {
  constructor({ roomRepository }) {
    this.roomRepository = roomRepository
  }

  async execute({ id, param }) {
    try {
      const room = await this.roomRepository.getById(id)
      if (!room) throw 'Room not fount'
      //consultamos si el parámetro existe el el objeto
      const valueParam = room[param]
      if (valueParam == undefined) throw 'Param not found'
      return valueParam
    } catch (error) {
      throw error
    }
  }
}

export default GetParamRoom