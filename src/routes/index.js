import express from 'express';
import * as controllers from '../controllers/index.js';

const router = express.Router();

// Define your routes here
router.get('/', controllers.getHome);

export default router;