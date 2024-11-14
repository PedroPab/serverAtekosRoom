import { responseMiddleware } from '../../../src/middlewares/returnsData/index.js'

describe('responseMiddleware', () => {
	it('should send response with status 200 if res.data is defined', () => {
		const req = {}
		const res = {
			data: { message: 'success' },
			rtaStatus: undefined,
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		}
		const next = jest.fn()

		responseMiddleware(req, res, next)

		expect(res.status).toHaveBeenCalledWith(200)
		expect(res.json).toHaveBeenCalledWith(res.data)
		expect(next).not.toHaveBeenCalled()
	})

	it('should send response with custom status if res.rtaStatus is defined', () => {
		const req = {}
		const res = {
			data: { message: 'success' },
			rtaStatus: 201,
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		}
		const next = jest.fn()

		responseMiddleware(req, res, next)

		expect(res.status).toHaveBeenCalledWith(201)
		expect(res.json).toHaveBeenCalledWith(res.data)
		expect(next).not.toHaveBeenCalled()
	})

	it('should call next if res.data is not defined', () => {
		const req = {}
		const res = {
			data: undefined,
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		}
		const next = jest.fn()

		responseMiddleware(req, res, next)

		expect(res.status).not.toHaveBeenCalled()
		expect(res.json).not.toHaveBeenCalled()
		expect(next).toHaveBeenCalled()
	})
})
