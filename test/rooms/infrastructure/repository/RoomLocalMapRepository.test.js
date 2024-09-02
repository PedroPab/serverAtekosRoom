import RoomLocalMapRepository from "../../../../src/rooms/infrastructure/repository/RoomLocalMapRepository.js";

class LocalMapRepositoryTest {
  constructor() {
    this.data = new Map();
  }
  async save(id, data) {
    this.data.set(id, data);
    return data;
  }
}
const db = new LocalMapRepositoryTest();

jest.mock("../../../../src/utilsShare/repositories/LocalMapRepository.js", () => {
  return jest.fn().mockImplementation(() => db);
});

describe("RoomLocalMapRepository", () => {
  describe("save", () => {
    it("should save a room with the given ID and data", async () => {
      // Arrange
      const id = "room1";
      const data = { name: "Room 1", capacity: 10 };
      const repository = new RoomLocalMapRepository();

      // Act
      const room = await repository.save(id, data);

      // Assert
      expect(room).toEqual(data);
    });

    it("should throw an error if ID or data is missing", async () => {
      // Arrange
      const id = null;
      const data = { name: "Room 1", capacity: 10 };
      const repository = new RoomLocalMapRepository();

      // Act and Assert
      await expect(repository.save(id, data)).rejects.toThrow("ID y datos son requeridos");
    });
  });
});