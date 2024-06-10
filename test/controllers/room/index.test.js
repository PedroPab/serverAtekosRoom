import { createRoom } from '../../../src/controllers/room/controller.js';
import StoreBaseService from '../../../src/database/index.js';
import { COLLECTIONS } from '../../../src/utils/collectionNames/collectionNames.js';

const DataBaseStub = {
  setValue: (key, value) => ({}),
  getValue: (key) => ([]),
  deleteValue: (key) => ({}),
};
jest.mock('../../../src/database/index.js', () => jest.fn().mockImplementation(() => DataBaseStub));

describe('Room Controller', () => {
  let Data;

  beforeEach(() => {
    Data = new StoreBaseService();
  });

  describe('createRoom', () => {
    it('solo comprobamos el resultado de crear un Room', async () => {
      const idRoom = 'test-room-id';

      const result = await createRoom(idRoom);

      expect(result.id).toBe(idRoom);
    });

  });

});
