//aplicar los middlewares disponibles en la carpeta middlewares
import expressJson from "./expressJson/index.js";
import logsDetails from "./logsDetails/logsDetails.js";
import setPublicFolder from "./setPublicFolder/setPublicFolder.js";

const middlewares = (app) => {
  expressJson(app);
  logsDetails(app);
  setPublicFolder(app, 'public');
}

export default middlewares;