import express from 'express';
import roomController from '../dependencies/initRoom.js';

const router = express.Router();

router.post('/', roomController.create.bind(roomController));
router.get('/create', roomController.create.bind(roomController));
router.get('/', roomController.getAll.bind(roomController));
//consultar un parámetro de un room
router.get('/:id/findParam', roomController.getParam.bind(roomController));
router.get('/:id/switchLight', roomController.switchLight.bind(roomController));
router.patch('/:id/modify', roomController.modify.bind(roomController));
router.get('/:id', roomController.getById.bind(roomController));
router.put('/:id', roomController.update.bind(roomController));


export default router;