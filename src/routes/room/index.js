import express from 'express';
import * as controllers from '../../controllers/room/index.js';
import { responseMiddleware } from '../../middlewares/returnsData/index.js';

const router = express.Router();

// Define your routes here
router.get('/', controllers.getRooms, responseMiddleware);
//recojer informacion de una room en especifico
router.get('/param/:id/:param', controllers.getParamRoom, responseMiddleware);
router.get('/:id', controllers.getRoom, responseMiddleware);
//cambiar los parmetros
router.post('/on/:id', controllers.stateOn, responseMiddleware);
router.post('/off/:id', controllers.stateOff, responseMiddleware);
// router.put('/:id', controllers.putRoom, responseMiddleware);

export default router;