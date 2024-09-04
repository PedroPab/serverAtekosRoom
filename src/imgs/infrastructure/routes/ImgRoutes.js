import express from 'express';
import multer from 'multer';

import imgController from '../dependencies/initImg.js';

const router = express.Router();

// Configurar multer para almacenar los archivos en memoria (Buffer)
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/Hello', (req, res) => {
  res.send('Hello World!');
})

router.get('/', imgController.getAll.bind(imgController));
router.get('/:id', imgController.getId.bind(imgController));
router.post('/', upload.single('photo'), imgController.create.bind(imgController));


export default router;