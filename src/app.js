import express from 'express';
import routes from './routes/index.js';
import routesRoom from './routes/room/index.js';
import routesImg from './routes/img/index.js';
import routesVid from './routes/vid/index.js';
import { errorBoomHandler, errorHandler } from './middlewares/errorHandler/index.js';

import path from 'path';
import { __dirname } from '../dirname.js';

const app = express();

//hacer publica la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

//mostrar un log de todos datos que llegan al servidor
app.use((req, res, next) => {
  console.log('Method: ', req.method);
  console.log('URL: ', req.url);
  console.log('Headers: ', req.headers);
  console.log('Body: ', req.body);
  next();
})

app.use('/', routes);
app.use('/room', routesRoom);
app.use('/img', routesImg);
app.use('/vid', routesVid);

//middlewares para errores
app.use(errorBoomHandler);
app.use(errorHandler);


export default app;