//se debe de cambiar la clase si se va a usar una base de datos diferetes
import Database from "./localDatabase/index.js"


class StorebaseService {
  constructor() {
    //aqui cambiamos la clase que se encarfa de las consultas de la base de datos (por si las combiamos)
    const Store = new Database()
  }
  // Método para guardar un valor en la base de datos
  async setValue(key, value) {
    try {
      const rta = await this.Store.setValue(key, value)
      return rta
    } catch (error) {
      throw error
    }
  }

  // Método para obtener un valor de la base de datos
  async getValue(key) {
    try {
      const rta = await this.Store.getValue(key)
      return rta
    } catch (error) {
      throw error
    }
  }

  // Método para eliminar un valor de la base de datos
  async deleteValue(key) {
    try {
      const rta = await this.Store.deleteValue(key);
      return rta
    } catch (error) {
      throw error
    }
  }
}

export default StorebaseService
