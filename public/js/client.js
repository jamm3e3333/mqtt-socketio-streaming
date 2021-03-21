const socket = io();

/////////////////////////////////////////////////////////////////
//elements from html
const testComponent = document.querySelector('#time-component');
const testTemplate = document.querySelector('#time-template').innerHTML;

socket.on('message', (message) => {
    const html = Mustache.render(testTemplate, {
        time1: message.time1.toString(),
        time2: message.time2.toString(),
        other: message.other
    });
    testComponent.innerHTML = html;
})