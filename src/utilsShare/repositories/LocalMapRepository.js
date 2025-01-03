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

	async getAll({ page = 1, limit = 50 } = {}) {
		const values = Array.from(this.map.values())
		const start = (page - 1) * limit
		const end = page * limit
		return values.slice(start, end)
	}

	getById(key) {
		return this.map.get(key)
	}

	async getByFilter({ key, option, value }, { page = 1, limit = 50 } = {}) {
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

		// eslint-disable-next-line no-unused-vars
		for (const [_, mapValue] of this.map.entries()) {
			if (compare(mapValue[key], value, option)) {
				results.push(mapValue)
			}
		}

		const start = (page - 1) * limit
		const end = page * limit
		return results.slice(start, end)
	}

	async update(key, value) {
		this.map.set(key, value)
	}

	async delete(key) {
		this.map.delete(key)
	}
}

export default LocalMapRepository
