import express from 'express';

import focusProjectController from '../dependencies/initFocusProject.js';

const router = express.Router();


router.get('/Hello', (req, res) => {
  res.send('Hello Focus Project !');
})

router.post('/', focusProjectController.create.bind(focusProjectController));


export default router;