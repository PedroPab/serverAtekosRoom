import generateId from './generateIds';

describe('generateId', () => {
  it('should generate an id of the specified size', () => {
    const id = generateId(10);
    expect(id.length).toBe(10);
  });

  it('should generate a different id each time', () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).not.toBe(id2);
  });

  it('should generate an id consisting of alphanumeric characters', () => {
    const id = generateId();
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    expect(alphanumericRegex.test(id)).toBe(true);
  });
});