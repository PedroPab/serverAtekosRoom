import express from 'express';
import routes from './routes/index.js';
import routesRoom from './routes/room/index.js';
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

app.use('/', routes);
app.use('/room', routesRoom);


//middlewares para errores
app.use(errorBoomHandler);
app.use(errorHandler);


export default app;