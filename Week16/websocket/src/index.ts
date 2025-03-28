import {OPEN, WebSocketServer} from 'ws'; 

const server=new WebSocketServer({port:8080})

server.on('connection',(socket)=>{
    console.log('socket created');

    socket.on('message', (data)=>{
        const clientData=data.toString();
        console.log(clientData);

        server.clients.forEach((client)=>{
            if(client!==socket && client.readyState===OPEN){
                client.send(clientData);
            }
        })
    })

    // socket.send('connected to server')
})