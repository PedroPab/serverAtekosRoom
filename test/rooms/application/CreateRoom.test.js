import CreateRoom from '../../../src/rooms/application/CreateRoom.js'
import Room from '../../../src/rooms/domain/models/RoomModel.js'

describe('CreateRoom Use Case', () => { 
	let mockRoomRepository
	let createRoom

	beforeEach(() => {
		// Crear un mock del repositorio
		mockRoomRepository = {
			save: jest.fn()
		}

		// Instanciar el caso de uso con el mock del repositorio
		createRoom = new CreateRoom({ roomRepository: mockRoomRepository })
	})

	it('should create a room and save it in the repository', async () => {
		const roomData = {
			id: 'room123',
			state: false,
		}

		const expectedRoom = new Room(roomData)

		// Mock de la implementación del método save para que devuelva el objeto Room
		mockRoomRepository.save.mockResolvedValue(expectedRoom)

		// Ejecutar el caso de uso
		const result = await createRoom.execute(roomData)


		// Verificar que el resultado es el esperado
		expect(result).toEqual(expectedRoom)
	})

	it('should throw an error if roomRepository.save fails', async () => {
		const roomData = {
			id: 'room123',
			data: {
				name: 'Conference Room',
				capacity: 20
			}
		}

		// Mock de la implementación del método save para que lance un error
		mockRoomRepository.save.mockRejectedValue(new Error('Failed to save room'))

		// Verificar que el caso de uso lanza un error
		await expect(createRoom.execute(roomData)).rejects.toThrow('Failed to save room')
	})
})
