import express from 'express';

import router from './routes/index.js';
import middlewaresErrors from './middlewares/middlewaresErrors.js';
import middlewares from './middlewares/middlewares.js';

const app = express();

//aplicar los middlewares
middlewares(app);

//aplicar las rutas
router(app);

//middlewares para errores
middlewaresErrors(app);


export default app;