//aplicar los middlewares disponibles en la carpeta middlewares
import crossOriginIsolated from './crossOriginIsolated/index.js'
import expressJson from './expressJson/index.js'
import logsDetails from './logsDetails/logsDetails.js'
import setPublicFolder from './setPublicFolder/setPublicFolder.js'

const middlewares = (app) => {
  //cors
  crossOriginIsolated(app)
  expressJson(app)
  logsDetails(app)
  setPublicFolder(app, 'public')
}

export default middlewares