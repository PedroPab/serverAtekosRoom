import express from 'express';
import RoomController from '../controller/RoomController.js';

const router = express.Router();
const roomController = new RoomController();

router.post('/', (req, res) => roomController.create(req, res));
router.get('/create', (req, res) => roomController.create(req, res));
router.get('/', (req, res) => roomController.getAll(req, res));
router.get('/:id', (req, res) => roomController.getById(req, res));
router.put('/:id', (req, res) => roomController.update(req, res));

export default router;