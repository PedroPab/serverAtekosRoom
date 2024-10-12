import filename from '../../../../src/controllers/img/filename.js'
import { jest } from '@jest/globals'

describe('filename function', () => {
  let req, file, cb

  beforeEach(() => {
    req = {}
    file = { originalname: 'test.jpg' }
    cb = jest.fn()
  })

  it('generates a filename with the current time and the original filename', () => {
    filename(req, file, cb)
    const generatedFilename = cb.mock.calls[0][1]
    expect(generatedFilename).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}-\d{2}-\d{2}.\d{3}Z-test.jpg/)
    expect(cb.mock.calls[0][0]).toBeNull()
  })
})