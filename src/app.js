import express from 'express'

import router from './routes/index.js'
import middlewaresErrors from './middlewares/middlewaresErrors.js'
import middlewares from './middlewares/middlewares.js'

const app = express()

//cors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})

//aplicar los middlewares
middlewares(app)
app.use((req, res, next) => {
	console.table({ path: req.path, method: req.method, origin: req.headers.origin, body: req.body, from: req.headers.referer })
	next()
})

//aplicar las rutas
router(app)

//404 not found
app.use((req, res) => {
	//mandar la pagina de public/html/404.html
	res.status(404).sendFile('404.html', { root: 'public/html' })
})

//middlewares para errores
middlewaresErrors(app)


export default app
