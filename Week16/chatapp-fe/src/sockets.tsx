// import WebSocket from 'ws';

const socketOne=new WebSocket('ws://localhost:8080/')
const socketTwo=new WebSocket('ws://localhost:8080')


socketOne.onopen=()=>{
    console.log('connected to socket one');
}
socketTwo.onopen=()=>{
    console.log('connected to socket two');
}

socketOne.onmessage=(event)=>{
    console.log(event.data);
}
socketTwo.onmessage=(event)=>{
    console.log(event.data);
}

export{
    socketOne,
    socketTwo
}