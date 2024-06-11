
import express from 'express';
import { uploadPhoto } from '../../controllers/img/uploadPhoto.js';
import upload from '../../controllers/img/multer.js';
import { listFiles } from '../../functions/directoryAndFile/listFiles/index.js';
import { lastFile } from '../../functions/directoryAndFile/lastFile/index.js';

const router = express.Router();

const dirPhat = './public/img';

router.post('/', upload.single('photo'), uploadPhoto);
// router.get('/', upload.single('photo'), uploadPhoto);

router.get('/',
  (req, res) => {
    try {
      res.status(200).send({ message: 'Ruta de imágenes' });
    } catch (error) {
      res.status(500).send({ message: 'Error al mostrar la ruta de imágenes' });
    }
  });

router.get('/id/:id',
  async (req, res) => {
    try {
      const nameFile = req.params.id
      res.sendFile(nameFile, { root: dirPhat });
    } catch (error) {
      res.status(500).send({ message: 'Error al mostrar la imagen' });
    }
  });

router.get('/list',
  async (req, res) => {
    try {
      //leemos los nombre de todos archivos en la carpeta img
      const list = await listFiles(dirPhat)
      res.status(200).send(list);
    } catch (error) {
      res.status(500).send({ message: 'Error al listar las imágenes' });
    }
  })

router.get('/last',
  async (req, res) => {
    try {
      const file = await lastFile(dirPhat)
      console.log('file', file);
      res.sendFile(file, { root: dirPhat });
    } catch (error) {
      res.status(500).send({ message: 'Error al listar las imágenes' });
    }
  })

export default router;
