//imporotovani node_modules/
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const mqtt = require('mqtt');
const path = require('path');
const chalk = require('chalk');

//importovani funkce na parsovani topics
const parseMessage = require('./utils/parseMessage.js');

//urceni public slozky
const publicPath = path.join(__dirname, '../public/');
//definice app funkce
const app = express();
app.use(express.json());
app.use(express.static(publicPath));

//urceni portu na kterem bezi webserver
const port = process.env.PORT || 3050;

//pripojeni mqtt clienta na broker
var client = mqtt.connect('mqtt://192.168.1.227:1883');
//definice serveru a pripojeni socket.io
const server = http.createServer(app);
const io = socketio(server);

//event na pripojeni mqtt klienta
client.on('connect', () => {
    console.log(chalk.blueBright('MQTT klient připojen'));
    //subscribe na topics
    client.subscribe('raspberry-vala/s_z', (err) => {
        console.log(chalk.blueBright('Proběhl subscribe na dané topics.'));
        if(err){
            console.log(chalk.red(`
                Chyba při subscribe na topics.\n
                Error: ${err}
            `))
        }
    })
    client.subscribe('raspberry-vala/v_z', (err) => {
        console.log(chalk.blueBright('Proběhl subscribe na dané topics.'));
        if(err){
            console.log(chalk.red(`
                Chyba při subscribe na topics.\n
                Error: ${err}
            `))
        }
    })
})


//event na prijeti zpravy na subscribed topics
client.on('message', (topic,message) => {
    io.emit('message', parseMessage(topic,message.toString()));
})

//event na odpojeni mqtt klienta od brokeru
client.on('offline', () => {
    console.log(chalk.red('MQTT broker je offline.'));
    client.unsubscribe('timestamp/#', () => {
        //cb 
    })
})


//event na pripojeni klienta na socket.io
io.on('connection', (socket) => {
    console.log(`Klient připojen s id: "${socket.id}"`);

    //event disconnect klienta od socket.io
    socket.on('disconnect', () => {
        console.log(`Klient s id: "${socket.id}" se odpojil.`);
    })
})

//event na naslouchani
server.listen(port, () => {
    console.log(`Server naslouchá na portu: "${port}"`);
})
