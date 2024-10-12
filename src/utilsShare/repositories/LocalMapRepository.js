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
    const results = []

    const compare = (a, b, operator) => {
      switch (operator) {
        case '==': return a == b
        case '===': return a === b
        case '!=': return a != b
        case '!==': return a !== b
        case '>': return a > b
        case '>=': return a >= b
        case '<': return a < b
        case '<=': return a <= b
        default: return false
      }
    }

    for (const [_, mapValue] of this.map.entries()) {
      if (compare(mapValue[key], value, option)) {
        results.push(mapValue)
      }
    }

    return results
  }

  async update(key, value) {
    this.map.set(key, value)
  }

  async delete(key) {
    this.map.delete(key)
  }
}

export default LocalMapRepository