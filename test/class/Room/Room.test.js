import { Room } from '../../../src/class/Room/Room.js'

describe('Room Class', () => {
  let room
  beforeEach(() => {
    room = new Room({
      id: 'test-room-id',
      name: 'Test Room',
      description: 'This is a test room'
    })
  })
  describe('constructor', () => {
    it('should set the properties correctly', () => {
      expect(room.id).toBe('test-room-id')
      expect(room.name).toBe('Test Room')
      expect(room.description).toBe('This is a test room')
      expect(room.data).toEqual({})
      expect(room.dateCreate).toBeInstanceOf(Date)
      expect(room.dateUpdate).toBeInstanceOf(Date)
      expect(room.state).toBe(true)
    })

    it('should set the name to the id if no name is provided', () => {
      const newRoom = new Room({ id: 'no-name-room' })
      expect(newRoom.name).toBe('no-name-room')
    })

    it('should set the description to an empty string if no description is provided', () => {
      const newRoom = new Room({ id: 'no-description-room' })
      expect(newRoom.description).toBe('')
    })
  })

  describe('update', () => {
    it('should update the properties correctly', () => {
      const newData = {
        name: 'Updated Room',
        description: 'This is an updated test room'
      }
      room.update(newData)
      expect(room.name).toBe(newData.name)
      expect(room.description).toBe(newData.description)
    })

    it('should update the dateUpdate property to the current date', () => {
      const dateBeforeUpdate = room.dateUpdate
      room.update({ name: 'Another Room' })
      expect(room.dateUpdate).not.toBe(dateBeforeUpdate)
      expect(room.dateUpdate).toBeInstanceOf(Date)
    })
  })
})