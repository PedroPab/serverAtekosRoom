import chalk from "chalk";

/**
 * Una funcion  para tener un estandar de  un log de info en codigo
 * @param {String} message 
 */
const logInfo = (message) => {
  console.log(chalk.blue.bgWhite.bold(message));
}
/**
 * Una funcion  para tener un estandar de  un log de error en codigo
 * @param {String} message 
 */
const logError = (message) => {
  console.log(chalk.red.bold(message));
}
/**
 * Una funcion  para tener un estandar de  un log de success en codigo
 * @param {String} message 
 */
const logSuccess = (message) => {
  console.log(chalk.green.bold(message));
}
/**
 * Una funcion  para tener un estandar de  un log de success en codigo
 * @param {String} message 
 */
const logDebugeer = (message) => {
  console.log(chalk.greenBright.bold(message));
}

const Logs = {
  logInfo,
  logError,
  logSuccess,
  logDebugeer,
}

export default Logs