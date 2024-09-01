class FindFilterFocusElement {
  constructor({
    focusElementRepository,
  }) {
    this.focusElementRepository = focusElementRepository;
  }
  async execute(filter) {
    try {
      return await this.focusElementRepository.getFilter(filter);
    } catch (error) {
      throw error;
    }
  }
}

export default FindFilterFocusElement;