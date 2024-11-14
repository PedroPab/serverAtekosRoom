import Room from './RoomModel.js'

describe('Room constructor', () => {
	// creamos la infancia de la clase Room
	it('should create an instance of Room', () => {
		const room = new Room({})
		expect(room).toBeInstanceOf(Room)
	})
	//miramos que el id sea igual al id que le pasamos
	it('should return the same id', () => {
		const room = new Room({ id: '1' })
		expect(room.id).toBe('1')
	})
	//miramos que tenga un id por defecto
	it('should return a default id', () => {
		const room = new Room({})
		expect(room.id).toBeDefined()
	})
	//miramos que el nombre sea igual al nombre que le pasamos
	it('should return the same name', () => {
		const room = new Room({ name: 'room1' })
		expect(room.name).toBe('room1')
	})
	//miramos que tenga un nombre por defecto
	it('should return a default name', () => {
		const room = new Room({})
		expect(room.name).toBeDefined()
	})
	//miramos que la descripción sea igual a la descripción que le pasamos
	it('should return the same description', () => {
		const room = new Room({ description: 'room1' })
		expect(room.description).toBe('room1')
	})
	//miramos que tenga una descripción por defecto
	it('should return a default description', () => {
		const room = new Room({})
		expect(room.description).toBeDefined()
	})
	//miramos que el objeto data sea un objeto vacío
	it('should return an empty object', () => {
		const room = new Room({})
		expect(room.data).toEqual({})
	})
	//miramos que la fecha de creación sea igual a la fecha de actualización
	it('should return the same dateCreate and dateUpdate', () => {
		const room = new Room({})
		expect(room.dateCreate).toBe(room.dateUpdate)
	})
	//miramos que el estado sea true
	it('should return true state', () => {
		const room = new Room({})
		expect(room.state).toBe(true)
	})
})