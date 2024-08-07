class UpdateRoom {
  constructor({ roomRepository }) {
    this.roomRepository = roomRepository;
  }

  async execute({ id, data }) {
    return await this.roomRepository.update(id, data);
  }
}

export default UpdateRoom;