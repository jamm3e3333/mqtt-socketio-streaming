const msg = {
    time1: [],
    time2: [],
    other: []
}

const parseMessage = (topic,message) => {
    switch(topic){
        case 'timestamp/time1':
            if(msg.time1.length === 5){
                msg.time1.shift();
            }
            msg.time1.push(message);
            break;

        case 'timestamp/time2':
            if(msg.time2.length === 5){
                msg.time2.shift();
            }
            msg.time2.push(message);
            break;

        default:
            if(msg.other.length === 5){
                msg.other.shift();
            }
            msg.other.push(message);
    }
    return msg;
}

module.exports = parseMessage;