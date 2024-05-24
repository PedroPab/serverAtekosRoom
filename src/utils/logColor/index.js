import chalk from "chalk";

/**
 * Una funcion  para tener un estandar de  un log de info en codigo
 * @param {String} message 
 */
const logInfo = (message) => {
  message = JSON.stringify(message, null, 2)
  console.log(chalk.blue.bgWhite.bold(message));
}
/**
 * Una funcion  para tener un estandar de  un log de error en codigo
 * @param {String} message 
 */
const logError = (message) => {
  message = JSON.stringify(message, null, 2)
  console.log(chalk.red.bold(message));
}
/**
 * Una funcion  para tener un estandar de  un log de success en codigo
 * @param {String} message 
 */
const logSuccess = (message) => {
  message = JSON.stringify(message, null, 2)
  console.log(chalk.green.bold(message));
}
/**
 * Una funcion  para tener un estandar de  un log de success en codigo
 * @param {String} message 
 */
const logDebugger = (message) => {
  message = JSON.stringify(message, null, 2)
  console.log(chalk.greenBright.bold(message));
}

const Logs = {
  logInfo,
  logError,
  logSuccess,
  logDebugger,
}

export default Logs