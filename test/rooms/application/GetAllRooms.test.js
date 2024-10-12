import GetAllRooms from '../../../src/rooms/application/GetAllRooms.js'

class RoomRepositoryTest {
  constructor() {
    this.rooms = []
  }
  async getAll() {
    return this.rooms
  }
}

describe('GetAllRooms', () => {
  let getAllRooms
  let roomRepository

  beforeEach(() => {
    roomRepository = new RoomRepositoryTest()
    getAllRooms = new GetAllRooms({ roomRepository })
  })

  it('should return all rooms from the repository', async () => {
    const rooms = [{ id: 1, name: 'Room 1' }, { id: 2, name: 'Room 2' }]
    roomRepository.getAll = jest.fn().mockResolvedValue(rooms)

    const result = await getAllRooms.execute()

    expect(result).toEqual(rooms)
    expect(roomRepository.getAll).toHaveBeenCalledTimes(1)
  })
})