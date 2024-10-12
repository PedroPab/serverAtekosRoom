import CreateFocusProject from '../../../src/focusProjects/application/CreateFocusProject.js'

describe('CreateFocusProject', () => {
  let createFocusProject
  let focusProjectRepository

  beforeEach(() => {
    focusProjectRepository = {
      getById: jest.fn(),
      save: jest.fn(),
    }
    createFocusProject = new CreateFocusProject({ focusProjectRepository })
  })

  it('should retrieve or create a focus project', async () => {
    const id = '1'
    const data = { name: 'Project 1', description: 'Sample project' }

    focusProjectRepository.getById.mockResolvedValueOnce(undefined)
    focusProjectRepository.save.mockResolvedValueOnce({ id, ...data })

    const result = await createFocusProject.execute({ id, ...data })

    expect(focusProjectRepository.getById).toHaveBeenCalledWith(id)
    expect(focusProjectRepository.save).toHaveBeenCalledWith(id, { id, ...data })
    expect(result).toEqual({ id, ...data })
  })

  it('should throw an error if focus project already exists', async () => {
    const id = '1'
    const data = { name: 'Project 1', description: 'Sample project' }

    focusProjectRepository.getById.mockResolvedValueOnce({ id, ...data })

    await expect(createFocusProject.execute({ id, ...data })).rejects.toThrow('Error creating focus project')
    expect(focusProjectRepository.getById).toHaveBeenCalledWith(id)
    expect(focusProjectRepository.save).not.toHaveBeenCalled()
  })

  it('should throw an error if focus project repository throws an error', async () => {
    const id = '1'
    const data = { name: 'Project 1', description: 'Sample project' }
    const error = new Error('Repository error')

    focusProjectRepository.getById.mockRejectedValueOnce(error)

    await expect(createFocusProject.execute({ id, ...data })).rejects.toThrow(error)
    expect(focusProjectRepository.getById).toHaveBeenCalledWith(id)
    expect(focusProjectRepository.save).not.toHaveBeenCalled()
  })
})