import CreateRoom from '../../application/use_cases/CreateRoom.js';
import GetAllRooms from '../../application/use_cases/GetAllRooms.js';
import GetRoomById from '../../application/use_cases/GetRoomById.js';
import UpdateRoom from '../../application/use_cases/UpdateRoom.js';
import LocalRoomRepository from '../repository/localRoomRepository.js';
import RoomService from '../../domain/services/RoomService.js';

class RoomController {
  constructor() {
    //repository
    this.roomRepository = new LocalRoomRepository();
    //service
    this.roomService = new RoomService({ roomRepository: this.roomRepository });
    //use cases
    this.createRoom = new CreateRoom(this.roomService);
    this.getAllRooms = new GetAllRooms(this.roomService);
    this.getRoomById = new GetRoomById(this.roomService);
    this.updateRoom = new UpdateRoom(this.roomService);
  }

  async create(req, res) {
    try {
      //miramos si hay body o si son dato de query params
      const id = req?.query?.id || req?.body?.id || null;
      const data = req.query.id ? req.query : req.body;

      const room = await this.createRoom.execute({ id, data });
      res.status(201).json(room);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const rooms = await this.getAllRooms.execute();
      res.status(200).json(rooms);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const room = await this.getRoomById.execute({ id: req.params.id });
      res.status(200).json(room);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const room = await this.updateRoom.execute({ id: req.params.id, data: req.body });
      res.status(200).json(room);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default RoomController;
