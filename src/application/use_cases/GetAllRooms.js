class GetAllRooms {
  constructor(roomService) {
    this.roomService = roomService;
  }

  async execute() {
    return await this.roomService.getRooms();
  }
}

export default GetAllRooms;