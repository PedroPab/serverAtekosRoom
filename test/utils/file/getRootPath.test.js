const path = require('path')
const fs = require('fs')
const getRootPath = require('../../../src/utils/files/getRootPath.js')

jest.mock('fs')

describe('getRootPath', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('debería devolver el directorio raíz del proyecto', () => {
		const mockDir = '/user/project'
		const mockPackageJsonPath = path.join(mockDir, 'package.json')

		// Mock de fs.existsSync para que devuelva true cuando se busque package.json
		fs.existsSync = jest.fn((filePath) => filePath === mockPackageJsonPath)

		const originalDirname = __dirname
		Object.defineProperty(global, '__dirname', {
			value: path.join(mockDir, 'subdir'),
			writable: true
		})

		const result = getRootPath()
		expect(result).toBe(mockDir)

		// Restaurar __dirname original
		Object.defineProperty(global, '__dirname', {
			value: originalDirname,
			writable: true
		})
	})

	it('debería lanzar un error si no se encuentra package.json', () => {
		// Mock de fs.existsSync para que devuelva false siempre
		fs.existsSync = jest.fn().mockReturnValue(false)

		const originalDirname = __dirname
		Object.defineProperty(global, '__dirname', {
			value: '/some/random/path',
			writable: true
		})

		expect(() => getRootPath()).toThrow('No se pudo encontrar el directorio raíz del proyecto')

		// Restaurar __dirname original
		Object.defineProperty(global, '__dirname', {
			value: originalDirname,
			writable: true
		})
	})

	it('debería recorrer hacia arriba los directorios hasta encontrar package.json', () => {
		const mockDir = '/user/project'
		const mockPackageJsonPath = path.join(mockDir, 'package.json')

		// Mock de fs.existsSync para devolver false en subdirectorios y true en la raíz
		fs.existsSync = jest.fn((filePath) => filePath === mockPackageJsonPath)

		const originalDirname = __dirname
		Object.defineProperty(global, '__dirname', {
			value: path.join(mockDir, 'subdir', 'subsubdir'),
			writable: true
		})

		const result = getRootPath()
		expect(result).toBe(mockDir)

		// Restaurar __dirname original
		Object.defineProperty(global, '__dirname', {
			value: originalDirname,
			writable: true
		})
	})
})
