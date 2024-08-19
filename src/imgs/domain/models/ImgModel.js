class ImgArtikuz {
  constructor({
    id,
    urlPublic,
    urlPrivate,
    name,
    description,
    dateCreate,
    dateUpdate,
    state,
  }) {
    this.id = id;
    this.urlPublic = urlPublic;
    this.urlPrivate = urlPrivate;
    this.name = name;
    this.description = description;
    this.dateCreate = dateCreate;
    this.dateUpdate = dateUpdate;
    this.state = state;
  }
}

export default ImgArtikuz;