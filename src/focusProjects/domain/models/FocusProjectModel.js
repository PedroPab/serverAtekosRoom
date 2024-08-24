import generateId from "../../../utilsShare/generateIds.js";

class FocusProject {
  constructor({
    id,
    name,
    description,
    dateCreate,
    dateUpdate,
    state,
    data
  }) {
    this.id = id || generateId()
    this.name = name || ''
    this.description = description || ''
    this.dateCreate = dateCreate || new Date();
    this.dateUpdate = dateUpdate || new Date();
    this.state = state ?? true;
    this.data = data || {}
  }
}

export default FocusProject;