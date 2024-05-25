
import express from 'express';
import initCreateVideo from '../../functions/createVideo/index.js';
import { listFiles } from '../../functions/directoryAndFile/listFiles/index.js';
import { lastFile } from '../../functions/directoryAndFile/lastFile/index.js';

const router = express.Router();

const dirPhat = './public/vid';
// router.post('/', upload.single('photo'), uploadPhoto);
// router.get('/', upload.single('photo'), uploadPhoto);

router.get('/id/:id',
  async (req, res) => {
    try {
      const nameFile = req.params.id
      res.sendFile(nameFile, { root: dirPhat });
    } catch (error) {
      res.status(500).send({ message: 'Error al mostrar el video' });
    }
  });

router.get('/list',
  async (req, res) => {
    try {
      //leemos los nombre de todos archivos en la carpeta img
      const list = await listFiles(dirPhat)
      res.status(200).send(list);
    } catch (error) {
      res.status(500).send({ message: 'Error al listar los videos' });
    }
  })

router.get('/last',
  async (req, res) => {
    try {
      const file = await lastFile(dirPhat)
      console.log('file', file);
      res.sendFile(file, { root: dirPhat });
    } catch (error) {
      res.status(500).send({ message: 'Error al listar los videos' });
    }
  })

router.get('/createVideo', (req, res) => {
  initCreateVideo();
  res.send('Video creado');
})

export default router;
