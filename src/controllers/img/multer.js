import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { __dirname } from '../../../dirname.js';


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // const uploadPath = path.join('public/img');
    const uploadPath = path.join(__dirname, 'public/img');
    fs.mkdir(uploadPath, { recursive: true }, (err) => {
      if (err) {
        return cb(err);
      }
      cb(null, uploadPath);
    });
  },
  filename: function (req, file, cb) {
    //el nombre sera según el la hora y fecha en texto  en la que se subió la foto
    const time = new Date().toISOString().replace(/:/g, '-');
    const fileName = `${time}-${file.originalname}`;
    cb(null, fileName);
  }
});

const upload = multer({ storage: storage });

export default upload;