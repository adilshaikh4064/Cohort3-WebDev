"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const server = new ws_1.WebSocketServer({ port: 8080 });
server.on('connection', (socket) => {
    console.log('socket created');
    socket.on('message', (data) => {
        const clientData = data.toString();
        console.log(clientData);
        server.clients.forEach((client) => {
            if (client !== socket && client.readyState === ws_1.OPEN) {
                client.send(clientData);
            }
        });
    });
    // socket.send('connected to server')
});
