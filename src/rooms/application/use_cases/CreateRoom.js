import Room from '../../domain/models/RoomModel.js'

class CreateRoom {
  constructor(roomService) {
    this.roomService = roomService;
  }

  async execute({ id, data }) {
    const room = new Room({ id, ...data });
    return await this.roomService.createRoom(room);
  }
}

export default CreateRoom;