
import express from 'express';
import { uploadPhoto } from '../../controllers/img/uploadPhoto.js';
import upload from '../../controllers/img/multer.js';

const router = express.Router();

router.post('/', upload.single('photo'), uploadPhoto);
router.get('/', upload.single('photo'), uploadPhoto);

export default router;
