export class Room {
  constructor({
    id,
    // type,
    name,
    description
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
  update(data) {
    //debemos de actualizar solo los parametros que mandamos
    for (const key in data) {
      // eslint-disable-next-line no-prototype-builtins
      if (data.hasOwnProperty(key)) {
        this[key] = data[key]
      }
    }
    this.dateUpdate = new Date()
  }
}
