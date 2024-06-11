//controlador para las rutas de express de todo el proyecto
import express from 'express';

import helloWord from './helloWord/index.js';
import room from './room/index.js';
import img from './img/index.js';
import vid from './vid/index.js';

const router = (app) => {
  const router = express.Router();

  app.use('/api/v1', router);
  app.use('/', helloWord);
  router.use('/helloWord', helloWord);
  router.use('/room', room);
  router.use('/img', img);
  router.use('/vid', vid);
}

export default router;