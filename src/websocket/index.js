import { WebSocketServer } from 'ws';

export default function setupWebSocket(server) {

  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws) => {

    //mostramos el id del socket
    console.log(`Socket id: ${ws._socket.remoteAddress}`)

    console.log(`New client connected!`, ws._socket.remoteAddress)

    ws.on('message', (message) => {
      console.log('received: %s', message);
    });

    ws.send('Hello! Message from server!!');
  });
}