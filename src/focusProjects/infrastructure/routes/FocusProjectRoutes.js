import express from 'express';

import focusProjectController from '../dependencies/initFocusProject.js';

const router = express.Router();

router.get('/', focusProjectController.getAll.bind(focusProjectController))

router.post('/', focusProjectController.create.bind(focusProjectController));

router.post('/:id/element', focusProjectController.createFocusElement.bind(focusProjectController));
router.get('/:id/element', focusProjectController.getAllElements.bind(focusProjectController))



export default router;