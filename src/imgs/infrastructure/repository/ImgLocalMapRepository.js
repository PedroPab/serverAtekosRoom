import ImgRepository from "../../domain/repository/ImgRepository.js";
import LocalMapRepository from "../../../utilsShare/repositories/LocalMapRepository.js";

const db = new LocalMapRepository();

class ImgLocalMapRepository extends ImgRepository {
  async save(id, data) {
    try {
      if (!id || !data) {
        throw new Error("ID y datos son requeridos");
      }
      const rta = db.save(id, data)
      return rta;
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

  //existe ya  un elemento con el mismo id
  async exist(id) {
    if (!id) {
      throw new Error("ID es requerido");
    }

    const rta = db.getById(id);
    if (!rta) {
      return false;
    }
    return true
  }

  async update(id, data) {
    if (!id || !data) {
      throw new Error("ID y datos son requeridos");
    }

    const rta = db.update(id, data);
    return rta;
  }

  async delete(id) {
    if (!id) {
      throw new Error("ID es requerido");
    }

    db.delete(id);
    return true;
  }
}

export default ImgLocalMapRepository;
