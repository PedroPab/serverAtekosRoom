import app from './app.js';
import ENV from './config/index.js'
import { logInfo } from './utils/logColor/index.js';

const PORT = ENV.PORT

app.listen(PORT, () => {
  logInfo(`Server is running on port ${PORT}`)
});