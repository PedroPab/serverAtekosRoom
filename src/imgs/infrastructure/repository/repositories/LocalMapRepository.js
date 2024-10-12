class LocalMapRepository {
  constructor() {
    this.map = new Map()
  }

  async save(key, value) {
    this.map.set(key, value)
    return value
  }

  async get(key) {
    return this.map.get(key)
  }

  async getAll() {
    //devuelve un array con los valores del map
    return Array.from(this.map.values())
  }

  getById(key) {
    return this.map.get(key)
  }

  async getByFilter({ key, option, value }) {
    const result = []
    this.map.forEach((v, k) => {
      if (v[option] === value) {
        result.push(v)
      }
    })
    return result
  }

  async update(key, value) {
    this.map.set(key, value)
  }

  async delete(key) {
    this.map.delete(key)
  }
}

export default LocalMapRepository