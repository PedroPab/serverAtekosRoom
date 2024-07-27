class UpdateRoom {
  constructor(roomService) {
    this.roomService = roomService;
  }

  async execute({ id, data }) {
    return await this.roomService.update({ id, data });
  }
}

export default UpdateRoom;