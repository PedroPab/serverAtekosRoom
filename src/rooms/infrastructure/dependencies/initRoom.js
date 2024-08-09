import CreateRoom from './../../application/CreateRoom.js'
import GetAllRooms from './../../application/GetAllRooms.js';
import GetParamRoom from './../../application/GetParamRoom.js';
import GetRoomById from './../../application/GetRoomById.js';
import SwitchLightRoom from './../../application/SwitchLightRoom.js';
import UpdateRoom from './../../application/UpdateRoom.js';
// import LocalRoomRepository from '../repository/localRoomRepository.js';
import RoomController from '../controller/RoomController.js';
import RoomLocalMapRepository from '../repository/RoomLocalMapRepository.js';

//repository
// const roomRepository = new LocalRoomRepository();
const roomRepository = new RoomLocalMapRepository();

//use cases
const createRoom = new CreateRoom({ roomRepository });
const getAllRooms = new GetAllRooms({ roomRepository });
const getRoomById = new GetRoomById({ roomRepository });
const updateRoom = new UpdateRoom({ roomRepository });
const getParamRoom = new GetParamRoom({ roomRepository });
const switchLightRoom = new SwitchLightRoom({ roomRepository });
//init controller
const roomController = new RoomController({
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  getParamRoom,
  switchLightRoom,
});

export default roomController;