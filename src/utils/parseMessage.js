const msg = {
    time1: [],
    time2: [],
    other: []
}

const parseMessage = (topic,message) => {
    switch(topic){
        case 'raspberry-vala/v_z':
            if(msg.time1.length === 25){
                msg.time1.shift();
            }
            msg.time1.push(Math.round(parseFloat(message)*10000)/10000);
            break;

        case 'raspberry-vala/s_z':
            if(msg.time2.length === 25){
                msg.time2.shift();
            }
            msg.time2.push(Math.round(parseFloat(message)*10000)/10000);
            break;
    }
    return msg;
}

module.exports = parseMessage;