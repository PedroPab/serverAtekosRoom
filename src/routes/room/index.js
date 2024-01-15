import express from 'express';
import * as controllers from '../../controllers/room/index.js';
import { responseMiddleware } from '../../middlewares/returnsData/index.js';

const router = express.Router();

// Define your routes here
router.get('/', controllers.getRooms, responseMiddleware);
router.get('/:id', controllers.getRoom, responseMiddleware);
router.get('/:id/:param', controllers.getParamRoom, responseMiddleware);
router.post('/on/:id', controllers.stateOn, responseMiddleware);
router.post('/off/:id', controllers.stateOff, responseMiddleware);
// router.put('/:id', controllers.putRoom, responseMiddleware);

export default router;