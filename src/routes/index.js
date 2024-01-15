import express from 'express';
import * as controllers from '../controllers/index.js';

const router = express.Router();

//mostramos todos las rooms que hay registradoss
router.get('/', controllers.getHome);

export default router;