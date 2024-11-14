import path from 'path'
import express from 'express'
import setPublicFolder from '../../../src/middlewares/setPublicFolder/setPublicFolder.js'
// import { __dirname } from '../../../dirname.js'

jest.mock('express', () => {
	const express = jest.fn(() => ({
		use: jest.fn()
	}))
	express.static = jest.fn().mockReturnValue('staticMiddleware')
	return express
})

jest.mock('path', () => ({
	join: jest.fn()
}))

jest.mock('../../../dirname.js', () => ({
	__dirname: '/mocked/dirname'
}))

describe('setPublicFolder', () => {
	it('should set the public folder correctly', () => {
		const app = express()
		const folderPath = 'public'

		const mockPublicPath = '/mocked/dirname/public'
		path.join.mockReturnValue(mockPublicPath)

		setPublicFolder(app, folderPath)

		expect(path.join).toHaveBeenCalledWith('/mocked/dirname', folderPath)
		expect(express.static).toHaveBeenCalledWith(mockPublicPath)
		expect(app.use).toHaveBeenCalledWith('staticMiddleware')
	})
})
