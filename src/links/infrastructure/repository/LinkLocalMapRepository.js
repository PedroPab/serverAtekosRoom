import LinkRepository from "../../domain/repository/LinkRepository.js";
import LocalMapRepository from "./../../../utilsShare/repositories/LocalMapRepository.js";

const db = new LocalMapRepository();

class LinkLocalMapRepository extends LinkRepository {
  async save(id, data) {
    try {
      if (!id || !data) {
        throw new Error("ID y datos son requeridos");
      }
      const room = db.save(id, data)
      return room;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    return db.getAll();
  }

  async getById(id) {
    if (!id) {
      throw new Error("ID es requerido");
    }

    const rta = db.getById(id);
    if (!rta) {
      throw new Error(`No se encontró la sala con ID: ${id}`);
    }

    return rta;
  }

  async update(id, data) {
    if (!id || !data) {
      throw new Error("ID y datos son requeridos");
    }

    const room = db.update(id, data);
    return room;
  }

  async delete(id) {
    if (!id) {
      throw new Error("ID es requerido");
    }

    db.delete(id);
    return true;
  }
}

export default LinkLocalMapRepository;
