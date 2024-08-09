class GetRoomById {
  constructor({ roomRepository }) {
    this.roomRepository = roomRepository;
  }

  async execute(id) {
    return await this.roomRepository.getById(id);
  }
}

export default GetRoomById;