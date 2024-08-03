import CreateRoom from '../../application/use_cases/room/CreateRoom.js';
import GetAllRooms from '../../application/use_cases/room/GetAllRooms.js';
import GetRoomById from '../../application/use_cases/room/GetRoomById.js';
import UpdateRoom from '../../application/use_cases/room/UpdateRoom.js';
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

//init controller
const roomController = new RoomController({
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom
});

export default roomController;