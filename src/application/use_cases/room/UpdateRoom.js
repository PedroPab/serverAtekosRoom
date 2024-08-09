import Room from "../../../domain/models/RoomModel.js";
import CreateRoom from "./CreateRoom.js";
import GetRoomById from "./GetRoomById.js";

class UpdateRoom {
  constructor({ roomRepository }) {
    this.roomRepository = roomRepository;
    this.getById = new GetRoomById({ roomRepository });
    this.create = new CreateRoom({ roomRepository });
  }
  async execute({ id, data }) {
    let room = await this.getRoomOrCreate(id, data);
    room = this.modify(room, data);

    return await this.update(id, room);
  }
  async getRoomOrCreate(id, data) {
    try {
      const roomFind = await this.getRoom(id)
      if (roomFind) {
        return roomFind;
      }
      const roomCrete = await this.createRoom({ id, data });
      return roomCrete;
    } catch (error) {
      throw error;
    }
  }
  async getRoom(id) {
    try {
      return await this.roomRepository.getById(id);
    } catch (error) {
      return undefined
    }
  }
  async createRoom({ id, data }) {
    try {
      const room = new Room({ id, ...data });
      return await this.create.execute(room);
    } catch (error) {
      throw error;
    }
  }
  modify(room, data) {
    const rta = this.modifyData(room, data);
    return this.modifyUpdateDate(rta)
  }
  modifyData(room, data) {
    return { ...room, ...data }
  }
  modifyUpdateDate(room) {
    const update = new Date();
    room['dateUpdate'] = update;
    return room;
  }
  async update(id, room) {
    try {
      const newRoom = new Room(room);
      await this.roomRepository.update(id, newRoom);
      return newRoom;
    }
    catch (error) {
      throw error;
    }
  }
}

export default UpdateRoom;