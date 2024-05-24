import express from 'express';
import * as controllers from '../controllers/index.js';
import upload from '../controllers/img/multer.js';
import { uploadPhoto } from '../controllers/img/uploadPhoto.js';

const router = express.Router();

//mostramos todos las rooms que hay registrados
router.get('/', controllers.getHome);
router.post('/', controllers.getHome);

router.post('/img', upload.single('photo'), uploadPhoto);
router.get('/img', upload.single('photo'), uploadPhoto);
export default router;