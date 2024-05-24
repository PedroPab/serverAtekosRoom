import express from 'express';
import routes from './routes/index.js';
import routesRoom from './routes/room/index.js';
import routesImg from './routes/img/index.js';
import { errorBoomHandler, errorHandler } from './middlewares/errorHandler/index.js';

const app = express();

app.use(express.json());

//mostrar un log de todos datos que llegan al servidor
app.use((req, res, next) => {
  console.log('Method: ', req.method);
  console.log('URL: ', req.url);
  console.log('Headers: ', req.headers);
  console.log('Body: ', req.body);
  next();
})

//hacer publica la carpeta public
app.use(express.static('public'));

app.use('/', routes);
app.use('/room', routesRoom);
app.use('/img', routesImg);


//middlewares para errores
app.use(errorBoomHandler);
app.use(errorHandler);


export default app;