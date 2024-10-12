class FindFilterFocusElement {
  constructor({
    focusElementRepository,
  }) {
    this.focusElementRepository = focusElementRepository
  }
  async execute(filter) {
    return await this.focusElementRepository.getFilter(filter)

  }
}

export default FindFilterFocusElement
