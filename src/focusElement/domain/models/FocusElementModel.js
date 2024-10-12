import MEDIA_TYPES_FOCUS_ELEMENT from './mediaType/index.js'

class FocusElement {
  constructor({
    id,
    focusProjectId,
    name,
    description,
    dateCreate,
    dateUpdate,
    state,
    type,
    data,
    elementPureId,
  }) {
    this.id = id || ''
    this.focusProjectId = focusProjectId || ''
    this.name = name || ''
    this.description = description || ''
    this.dateCreate = dateCreate || new Date()
    this.dateUpdate = dateUpdate || new Date()
    this.state = state ?? true

    this.type = type || ''
    //convertir un objeto en array
    const types_media = Object.values(MEDIA_TYPES_FOCUS_ELEMENT)
    //verificar si el tipo de dato es valido
    if (!types_media.includes(this.type)) {
      throw new Error('Invalid type of media')
    }

    this.data = data || {}
    this.elementPureId = elementPureId || ''
  }
}

export default FocusElement