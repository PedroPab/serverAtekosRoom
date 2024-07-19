import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { __dirname } from '../../../../dirname.js';
import filename from '../filename.js';

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
  filename: filename
});

export default storage;