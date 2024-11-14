import cors from 'cors'

const crossOriginIsolated = () => {
	//permitir el acceso a la API desde cualquier origen
	cors({ origin: true })
}

export default crossOriginIsolated
