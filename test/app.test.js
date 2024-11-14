import request from 'supertest'
import app from '../src/app.js' // Import your Express app

describe('Test global app', () => {
	//abrimos la conexión con el servidor en cada test
	let server
	// Close the server after each test
	afterEach(() => {
		server.close()
	})
	beforeAll(() => {
		server = app.listen(3045)
	})

	//test para verificar que la app esta corriendo
	it('should return 200', async () => {
		const response = await request(app).get('/')
		expect(response.statusCode).toBe(200)
	})

})