//aplicar los middlewares disponibles en la carpeta middlewares
import crossOriginIsolated from './crossOriginIsolated/index.js'
import expressJson from './expressJson/index.js'
import logsDetails from './logsDetails/logsDetails.js'

const middlewares = (app) => {
	//cors
	crossOriginIsolated(app)
	expressJson(app)
	logsDetails(app)
}

export default middlewares