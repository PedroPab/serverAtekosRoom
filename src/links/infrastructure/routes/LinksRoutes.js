import express from 'express';

import linkController from '../dependencies/initLinks.js';

const router = express.Router();

router.post('/', linkController.create.bind(linkController));

// router.get('/:id', linksController.getAllElements.bind(linksController))

export default router;
