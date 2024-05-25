
import express from 'express';
import { uploadPhoto } from '../../controllers/img/uploadPhoto.js';
import upload from '../../controllers/img/multer.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import initCreateVideo from '../../functions/createVideo/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.post('/', upload.single('photo'), uploadPhoto);
router.get('/', upload.single('photo'), uploadPhoto);

//visualizar la imagen
router.get('/id/:id', (req, res) => {
  try {
    const filePath = path.resolve(__dirname, `../../../public/img/${req.params.id}`);
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

//ver el ulimo nombre de la imagen
router.get('/last', (req, res) => {
  try {
    const path = './public/img';
    //leemos los nombre de todos archivos en la carpeta img
    fs.readdir(path, (err, files) => {
      if (err) {
        console.log(err);
        res.status(500).send({ message: 'Error al listar las imágenes' });
      } else {
        const file = files[files.length - 1];
        res.sendFile(file, { root: 'public/img' });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Error al listar las imágenes' });
  }
})

//crear un video con todas las imagenes
router.get('/createVideo', (req, res) => {
  initCreateVideo();
  res.send('Video creado');
})

export default router;
