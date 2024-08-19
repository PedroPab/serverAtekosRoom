//controlador para las rutas de express de todo el proyecto
import express from 'express';


import RoomRouter from '../rooms/infrastructure/routes/RoomRoutes.js';
import ImgsRouter from '../imgs/infrastructure/routes/ImgRoutes.js';

const router = (app) => {
  const router = express.Router();

  app.use('/api/v1', router);

  router.use('/rooms', RoomRouter);
  router.use('/imgsAtekos', ImgsRouter);
}

export default router;