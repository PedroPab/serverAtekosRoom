import express from 'express';
import path from 'path';
import { __dirname } from '../../../dirname.js';

const setPublicFolder = (app, folderPath) => {
  const publicPath = path.join(__dirname, folderPath);
  app.use(express.static(publicPath));
}

export default setPublicFolder;
