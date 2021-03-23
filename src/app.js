//imporotovani node_modules/
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const mqtt = require('mqtt');
const path = require('path');
const chalk = require('chalk');


//importovani metody na parsovani topics
const parseMessage = require('./utils/parseMessage.js');
//importovani metod na posilani requests
const { getParams, postParams } = require('./utils/req.js');

//urceni public slozky
const publicPath = path.join(__dirname, '../public/');
//definice app funkce
const app = express();
app.use(express.json());
app.use(express.static(publicPath));

//urceni portu na kterem bezi webserver
const port = process.env.PORT || 3050;

const hostLocal = '127.0.0.1';
const hostRPi = '192.168.1.227'
//pripojeni mqtt clienta na broker
var client = mqtt.connect(`mqtt://${hostRPi}:1883`);
//definice serveru a pripojeni socket.io
const server = http.createServer(app);
const io = socketio(server);

//event na pripojeni mqtt klienta
client.on('connect', () => {
    console.log(chalk.blueBright('MQTT klient připojen.'));
    //subscribe na topics
    client.subscribe('raspberry-vala/s_y', (err) => {
        console.log(chalk.blueBright('Proběhl subscribe na topic s_y.'));
        if(err){
            console.log(chalk.red(`
                Chyba při subscribe na topic s_y.\n
                Error: ${err}
            `))
        }
    })
    client.subscribe('raspberry-vala/v_y', (err) => {
        console.log(chalk.blueBright('Proběhl subscribe na topic v_y.'));
        if(err){
            console.log(chalk.red(`
                Chyba při subscribe na topic v_y.\n
                Error: ${err}
            `))
        }
    })
    client.subscribe('raspberry-vala/v_z', (err) => {
        console.log(chalk.blueBright('Proběhl subscribe na topic v_z.'));
        if(err){
            console.log(chalk.red(`
                Chyba při subscribe na topic v_z.\n
                Error: ${err}
            `))
        }
    })
    client.subscribe('raspberry-vala/s_z', (err) => {
        console.log(chalk.blueBright('Proběhl subscribe na topic s_z.'));
        if(err){
            console.log(chalk.red(`
                Chyba při subscribe na topic s_z.\n
                Error: ${err}
            `))
        }
    })
    client.subscribe('raspberry-vala/v_x', (err) => {
        console.log(chalk.blueBright('Proběhl subscribe na topic v_x.'));
        if(err){
            console.log(chalk.red(`
                Chyba při subscribe na topic v_x.\n
                Error: ${err}
            `))
        }
    })
    client.subscribe('raspberry-vala/s_x', (err) => {
        console.log(chalk.blueBright('Proběhl subscribe na topic s_x.'));
        if(err){
            console.log(chalk.red(`
                Chyba při subscribe na topic s_x.\n
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
    client.unsubscribe('raspberry-vala/#', () => {
        //cb 
    })
})


//event na pripojeni klienta na socket.io
io.on('connection', (socket) => {
    console.log(`Klient připojen s id: "${socket.id}"`);

    //reques post metoda
    socket.on('value_w', (message, i,cb) => {
        postParams(`W${i}:ycn`, message, (error, data) => {
            if(error){
                cb(error,undefined);
                console.log(chalk.redBright(`
                    ${error} pro hodnotu W${i}:ycn
                `));
            }
            else{
                cb(undefined,{
                    value: message,
                    data: data.body
                });
            }
        })
    })

    //event disconnect klienta od socket.io
    socket.on('disconnect', () => {
        console.log(`Klient s id: "${socket.id}" se odpojil.`);
    })
})

//event na naslouchani
server.listen(port, () => {
    console.log(chalk.inverse.greenBright(`Server naslouchá na portu: "${port}"`));
})
