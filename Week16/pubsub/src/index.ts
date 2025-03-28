import {WebSocketServer} from 'ws';
import createClient from 'ioredis';

const server=new WebSocketServer({port:8080});
const topics=new Map();

const redisPub=new createClient();
const redisSub=new createClient();

redisSub.subscribe('global_topic');


server.on('connection',(socket)=>{

    socket.on('message', async (data)=>{
        const {type, topic, message}=JSON.parse(data.toString());

        if(type==='publish'){
            await redisPub.publish(topic,message)
            socket.send('message published')
        }
        else if(type==='subscribe'){
            if(!topics.has(topic)){
                topics.set(topic, new Set());
            }
            topics.get(topic).add(socket);
            socket.send(`Subscribe to the topic: ${topic}`)
        }
    })

    socket.on('close',()=>{
        topics.forEach((subscribers,topic)=>{
            subscribers.delete(socket);
            if(subscribers.size===0){
                topics.delete(topic);
            }
        })
    })
})

redisSub.on('message',(topic,message)=>{
    if(topics.has(topic)){
        for(const subscriber of topics.get(topic)){
            subscriber.send(`${topic}: ${message}`)
        }
    }
})


console.log('server is running')