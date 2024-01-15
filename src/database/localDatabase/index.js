class LocalDatabase {
  constructor() {
    this.data = {};
  }

  // Método para guardar un valor en la base de datos
  setValue(key, value) {
    this.data[key] = value;
  }

  // Método para obtener un valor de la base de datos
  getValue(key) {
    return this.data[key];
  }

  // Método para eliminar un valor de la base de datos
  deleteValue(key) {
    delete this.data[key];
  }
}

export default LocalDatabase;
