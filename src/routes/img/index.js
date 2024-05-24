
import express from 'express';
import { uploadPhoto } from '../../controllers/img/uploadPhoto.js';
import upload from '../../controllers/img/multer.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.post('/', upload.single('photo'), uploadPhoto);
router.get('/', upload.single('photo'), uploadPhoto);

//visualizar la imagen
router.get('/id/:id', (req, res) => {
  1
  try {
    const filePath = path.resolve(__dirname, `../../../public/img/${req.params.id}`);

    // res.sendFile(`public/img/${req.params.id}`, { root: '.' });
    res.sendFile(filePath);

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Error al mostrar la imagen' });
  }
});

//list names all images
router.get('/list', (req, res) => {
  try {
    const path = './public/img';

    //leemos los nombre de todos archivos en la carpeta img
    fs.readdir(path, (err, files) => {
      if (err) {
        console.log(err);
        res.status(500).send({ message: 'Error al listar las imágenes' });
      } else {
        res.status(200).send(files);
      }
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Error al listar las imágenes' });
  }
})

export default router;
