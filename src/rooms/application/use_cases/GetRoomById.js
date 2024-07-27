class GetRoomById {
  constructor(roomService) {
    this.roomService = roomService;
  }

  async execute({ id }) {
    return await this.roomService.getById(id);
  }
}

export default GetRoomById;