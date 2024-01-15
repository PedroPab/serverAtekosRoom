import app from './app.js';
import ENV from './config/index.js'
import Logs from './utils/logColor/index.js';

const PORT = ENV.PORT
const HOST = ENV.HOST

app.listen(PORT, () => {
  Logs.logInfo(`Server is running on port http://${HOST}:${PORT}`)
});