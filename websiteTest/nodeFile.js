const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        if (message === 'buttonPressed') {
            ws.send('Button was pressed on Bangle.js 2!');
        }
    });
});

console.log('WebSocket server is running on ws://localhost:8080');