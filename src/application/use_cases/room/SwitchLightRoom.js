import GetRoomById from "./GetRoomById.js";
import UpdateRoom from "./UpdateRoom.js";

class SwitchLightRoom {
  constructor({ roomRepository }) {
    this.roomRepository = roomRepository;
    this.getById = new GetRoomById({ roomRepository });
    this.update = new UpdateRoom({ roomRepository });
  }

  async execute({ id }) {
    try {
      //usamos un caso de uso para buscar el Room por id
      const room = await this.getById.execute(id);
      //modificar el valor del parámetro de la luz que es un booleano en el state
      room['state'] = !room['state'];
      //guardamos el cambio con el caso de uso de update
      await this.update.execute({ id, data: room });
      return true
    } catch (error) {
      throw error;
    }
  }
}

export default SwitchLightRoom;