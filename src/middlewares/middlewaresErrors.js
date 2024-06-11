import { errorBoomHandler, errorHandler } from "./errorHandler/index.js";

const middlewaresErrors = (app) => {
  //middlewares para errores
  app.use(errorBoomHandler);
  app.use(errorHandler);
}

export default middlewaresErrors;