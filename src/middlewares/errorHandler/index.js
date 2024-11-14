import Boom from '@hapi/boom'
import Logs from '../../utils/logColor/index.js'

export const errorBoomHandler = (err, req, res, next) => {
	Logs.logInfo(`[errorBoomHandler]`)
	console.log('err', err)

	if (Boom.isBoom(err)) {
		Logs.logError(err.output.payload)
		return res.status(err.output.statusCode).json(err.output.payload)
	}
	next(err)
}

export const errorHandler = (err, req, res) => {
	Logs.logInfo(`[errorHandler]`)
	Logs.logError(err)
	const statusCode = err.statusCode || 500
	// console.error(err.message, err.stack);
	res.status(statusCode).json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	})
}


