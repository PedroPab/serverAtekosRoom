const logsDetails = (app) => {
  app.use((req, res, next) => {
    //identificar desde donde se ejecuto la petición
    //si es de un navegador o de un cliente como postman o un servidor o un dispositivo como el esp32 o Arduino mostrar los logs
    const userAgent = req.headers['user-agent'];
    const agentsValid = ['PostmanRuntime', 'Arduino', 'ESP32', 'axios', 'axios/0.21.1'];
    const isAgentValid = agentsValid.some(agentValid => userAgent.includes(agentValid));
    if (isAgentValid) {
      console.log('Method: ', req.method);
      console.log('URL: ', req.url);
      console.log('Headers: ', req.headers);
      console.log('Body: ', req.body);
    }
    next();
  })
}

export default logsDetails;