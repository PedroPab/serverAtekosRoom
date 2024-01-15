import express from 'express';
import routes from './routes/index.js';
import routesRoom from './routes/room/index.js';
import { errorBoomHandler, errorHandler } from './middlewares/errorHandler/index.js';

const app = express();

app.use(express.json());

app.use('/', routes);
app.use('/room', routesRoom);


//middlewares para errores
app.use(errorBoomHandler);
app.use(errorHandler);


export default app;