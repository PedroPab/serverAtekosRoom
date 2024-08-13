class ImgArtikuz {
  constructor({
    urlPublic,
    urlPrivate,
    name,
    description,
    dateCreate,
    dateUpdate,
    state,
  }) {
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