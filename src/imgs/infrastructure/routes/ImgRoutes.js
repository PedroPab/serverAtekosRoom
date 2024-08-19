import express from 'express';
import multer from 'multer';

import imgController from '../dependencies/initImg.js';

const router = express.Router();

//usaremos multer para poder manejar archivos
const upload = multer({ dest: 'public', limits: { fileSize: 1000000 } });


router.get('/Hello', (req, res) => {
  res.send('Hello World!');
})

router.post('/', upload.single('photo'), imgController.create.bind(imgController));


export default router;