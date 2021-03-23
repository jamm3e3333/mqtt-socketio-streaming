const msg = {
    v_z: [],
    s_z: [],
    v_y: [],
    s_y: [],
    v_x: [],
    s_x: [],
    other: []
}

const parseMessage = (topic,message) => {
    switch(topic){
        case 'raspberry-vala/v_z':
            if(msg.v_z.length === 100){
                msg.v_z.shift();
            }
            msg.v_z.push(Math.round(parseFloat(message)*10000)/10000);
            break;

        case 'raspberry-vala/s_z':
            if(msg.s_z.length === 100){
                msg.s_z.shift();
            }
            msg.s_z.push(Math.round(parseFloat(message)*10000)/10000);
            break;

            case 'raspberry-vala/v_y':
                if(msg.v_y.length === 100){
                    msg.v_y.shift();
                }
                msg.v_y.push(Math.round(parseFloat(message)*10000)/10000);
                break;

            case 'raspberry-vala/s_y':
                if(msg.s_y.length === 100){
                    msg.s_y.shift();
                }
                msg.s_y.push(Math.round(parseFloat(message)*10000)/10000);
                break;

            case 'raspberry-vala/v_x':
                if(msg.v_x.length === 100){
                    msg.v_x.shift();
                }
                msg.v_x.push(Math.round(parseFloat(message)*10000)/10000);
                break;

            case 'raspberry-vala/s_x':
                if(msg.s_x.length === 100){
                    msg.s_x.shift();
                }
                msg.s_x.push(Math.round(parseFloat(message)*10000)/10000);
                break;
    }
    return msg;
}

module.exports = parseMessage;