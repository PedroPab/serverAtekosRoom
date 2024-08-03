import request from 'supertest';

// import app from '../../../app.js';
// Por el momento vamos a importar a app con express directamente
import express from 'express';
const app = express();
import CreateRoom from './CreateRoom.js';

describe('CreateRoom', () => {
  let server;

  beforeAll(() => {
    server = app.listen(3045);
  });

  afterAll(() => {
    server.close();
  });

  describe('execute', () => {
    it('should create a new room', async () => {
      // Mock roomService
      const roomService = {
        createRoom: jest.fn().mockResolvedValue({ id: '123', name: 'Room 1' }),
      };

      const createRoom = new CreateRoom(roomService);

      const inputData = {
        id: '123',
        data: {
          name: 'Room 1',
          // Add other properties as needed
        },
      };

      const response = await createRoom.execute(inputData);

      expect(roomService.createRoom).toHaveBeenCalledWith(
        expect.objectContaining({
          id: '123',
          name: 'Room 1',
          // Add other properties as needed
        })
      );

      expect(response).toEqual({ id: '123', name: 'Room 1' });
    });
  });
});