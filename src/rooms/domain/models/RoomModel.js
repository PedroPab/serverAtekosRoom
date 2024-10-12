import generateId from '../../../utilsShare/generateIds.js'

/**
 * @param {Object} objet
 * @param {String} param0.id
 * @param {String} param0.name
 * @param {String} param0.description
 * @param {String} param0.type
 *
 * @returns {Room}
 */
export class Room {
  /**
   * @param {Object} param0
   * @param {String} param0.id
   * @param {String} param0.name
   * @param {String} param0.description
   */
  constructor({
    id,
    name = '',
    description = '',
    dateCreate,
    dateUpdate,
    state,
  }) {
    this.id = id || generateId()
    // this.type = type
    this.name = name || this.id
    this.description = description || ''

    this.data = {}

    const date = new Date()

    this.dateCreate = dateCreate || date
    this.dateUpdate = dateUpdate || date

    this.state = state ?? true
  }
}

export default Room