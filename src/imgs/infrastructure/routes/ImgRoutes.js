import express from 'express';

import imgController from '../dependencies/initImg.js';

const router = express.Router();

router.get('/Hello', (req, res) => {
  res.send('Hello World!');
})

router.post('/', imgController.create.bind(imgController));

export default router;