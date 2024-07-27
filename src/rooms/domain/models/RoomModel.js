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
    id = null,
    name = '',
    description = '',
  }) {
    this.id = id
    // this.type = type
    this.name = name || id
    this.description = description || ''

    this.data = {}

    const date = new Date()

    this.dateCreate = date
    this.dateUpdate = date

    this.state = true
  }
}

export default Room