const msg = {
    v_z: [],
    s_z: [],
    v_y: [],
    s_y: [],
    v_x: [],
    s_x: [],
    x_y: [],
    z_x: [],
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
    //////////////////////////////////////////////////////////////////////
    //pushing data as object to the x_y array 
    if(msg.s_x.length && msg.s_y.length){
        if(msg.x_y.length === 100){
            msg.x_y.shift();
        }
        msg.x_y.push({
            x: msg.s_y[msg.s_y.length-1],
            y: msg.s_x[msg.s_y.length-1]
        })
    }

    //////////////////////////////////////////////////////////////////////
    //pushing data as object to the z_x array 
    if(msg.s_x.length && msg.s_z.length){
        if(msg.z_x.length === 100){
            msg.z_x.shift();
        }
        msg.z_x.push({
            x: msg.s_x[msg.s_x.length-1],
            y: msg.s_z[msg.s_z.length-1]
        })
    }
    
    return msg;
}

module.exports = parseMessage;