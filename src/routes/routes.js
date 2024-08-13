//controlador para las rutas de express de todo el proyecto
import express from 'express';

import helloWord from './helloWord/index.js';
import room from './room/index.js';
import img from './img/index.js';
import vid from './vid/index.js';

import RoomRouter from './../rooms/infrastructure/routes/RoomRoutes.js';
import ImgsRouter from './../imgs/infrastructure/routes/ImgRoutes.js';

const router = (app) => {
  const router = express.Router();

  app.use('/api/v1', router);
  app.use('/', helloWord);
  router.use('/helloWord', helloWord);
  // router.use('/rooms', room);
  router.use('/imgs', img);
  router.use('/vids', vid);

  router.use('/rooms', RoomRouter);
  router.use('/imgsAtekos', ImgsRouter);
}

export default router;