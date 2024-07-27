

class RoomService {
  constructor({ roomRepository }) {
    this.roomRepository = roomRepository;
  }

  async createRoom(room) {
    return this.roomRepository.save(room);
  }

  async getRooms() {
    return this.roomRepository.getAll();
  }

  async getRoomById(id) {
    return this.roomRepository.getById(id);
  }

  async updateRoom({ id, data }) {
    return this.roomRepository.update({ id, data });
  }
}

export default RoomService;