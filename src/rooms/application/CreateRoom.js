import Room from '../domain/models/RoomModel.js';

class CreateRoom {
  constructor({ roomRepository }) {
    this.roomRepository = roomRepository;
  }

  async execute({ id, data }) {
    const room = new Room({ id, ...data });
    return await this.roomRepository.save(room.id, room);
  }
}

export default CreateRoom;