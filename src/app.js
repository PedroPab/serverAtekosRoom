import express from 'express'

import router from './routes/index.js'
import middlewaresErrors from './middlewares/middlewaresErrors.js'
import middlewares from './middlewares/middlewares.js'

const app = express()

//aplicar los middlewares
middlewares(app)

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