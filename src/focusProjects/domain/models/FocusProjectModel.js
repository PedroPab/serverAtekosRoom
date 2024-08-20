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
    this.id = id;
    this.name = name;
    this.description = description;
    this.dateCreate = dateCreate;
    this.dateUpdate = dateUpdate;
    this.state = state;
    this.data = data || {}
  }
}

export default FocusProject;