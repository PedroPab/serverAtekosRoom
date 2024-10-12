//controlador para las rutas de express de todo el proyecto
import express from 'express'


import RoomRouter from '../rooms/infrastructure/routes/RoomRoutes.js'
import ImgsRouter from '../imgs/infrastructure/routes/ImgRoutes.js'

import FocusProjectRouter from '../focusProjects/infrastructure/routes/FocusProjectRoutes.js'
import LinksRouter from '../links/infrastructure/routes/LinksRoutes.js'

const router = (app) => {

  app.get('/', (_, res) => {
    res.send('Hello World!').status(200)
  })

  const router = express.Router()

  app.use('/api/v1', router)

  router.get('/', (_, res) => {
    res.send('Hello World! (api/v1)').status(200)
  })

  router.use('/rooms', RoomRouter)
  router.use('/imgs', ImgsRouter)
  router.use('/focusProjects', FocusProjectRouter)
  router.use(['/links', 'l' ], LinksRouter)
}

export default router