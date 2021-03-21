const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const mqtt = require('mqtt');
const path = require('path');
const chalk = require('chalk');

const parseMessage = require('./utils/parseMessage.js');

const publicPath = path.join(__dirname, '../public/');
const app = express();
app.use(express.json());
app.use(express.static(publicPath));

const port = process.env.PORT || 3050;

var client = mqtt.connect('mqtt://127.0.0.1:1883');
const server = http.createServer(app);
const io = socketio(server);

client.on('connect', () => {
    console.log(chalk.blueBright('MQTT klient připojen'));
    client.subscribe('timestamp/#', (err) => {
        
        console.log(chalk.blueBright('Proběhl subscribe na dané topics.'));
        if(err){
            console.log(chalk.red(`
                Error while subscribing to topics.\n
                Error message: ${err}
            `))
        }
    })
})

client.on('message', (topic,message) => {
    io.emit('message', parseMessage(topic,message.toString()));
})

client.on('offline', () => {
    console.log('MQTT broker is offline.');
    client.unsubscribe('timestamp/#', () => {
        io.emit('message',('MQTT broker offline.'));
    })
})

io.on('connection', (socket) => {
    console.log(`Klient pripojen s id: ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`Klient s id: ${socket.id} se odpojil.`);
    })
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
