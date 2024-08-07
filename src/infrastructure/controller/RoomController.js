

class RoomController {
  constructor({
    createRoom,
    getAllRooms,
    getRoomById,
    update,
    getParamRoom,
    switchLightRoom,
  }) {
    this.createRoom = createRoom;
    this.getAllRooms = getAllRooms;
    this.getRoomById = getRoomById;
    this.updateRoom = update;
    this.getParamRoom = getParamRoom;
    this.switchLightRoom = switchLightRoom;
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
      const id = req.params.id;
      const room = await this.getRoomById.execute(id);
      res.status(200).json(room);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getParam(req, res) {
    try {
      const id = req.params.id;
      const param = req.params.param;
      const rta = await this.getParamRoom.execute({ id, param });
      res.status(200).json(rta);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  async switchLight(req, res) {
    try {
      const id = req.params.id;
      const rta = await this.switchLightRoom.execute({ id });
      res.status(200).json(rta);
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
