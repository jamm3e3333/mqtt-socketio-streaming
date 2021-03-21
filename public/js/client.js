const socket = io();

/////////////////////////////////////////////////////////////////
//chartjs element
var ctx1 = document.getElementById('myChart1').getContext('2d');
var chart1 = new Chart(ctx1,{
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
        datasets: [{
            label: 'Rychlost v ose z',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            borderCapStyle: 'square',
            borderWidth: 3,
            borderJoinStyle: 'bevel',
            pointBorderWidth: 0,
            pointRadius: 0,
            cubicInterpolationMode: 'monotone',
            data: []
        }]
    },

    options: {
        tooltips: {
            enabled: false
        }
    }
});

var ctx2 = document.getElementById('myChart2').getContext('2d');
var chart2 = new Chart(ctx2,{
    type: 'line',
    data:{
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
        datasets: [{
            label: 'Poloha v ose z',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            borderCapStyle: 'square',
            borderWidth: 3,
            borderJoinStyle: 'bevel',
            pointBorderWidth: 0,
            pointRadius: 0,
            cubicInterpolationMode: 'monotone',
            data: []
        }]
    },
    options: {
        tooltips: {
            enabled: false
        }
    }
})

/////////////////////////////////////////////////////////////////
//elements from html
const testComponent = document.querySelector('#time-component');
const testTemplate = document.querySelector('#time-template').innerHTML;

socket.on('message', (message) => {
    chart1.data.datasets[0].data = message.time1;
    chart1.update();

    chart2.data.datasets[0].data = message.time2;
    chart2.update();

    // const html = Mustache.render(testTemplate, {
    //     time1: message.time1.toString(),
    //     time2: message.time2.toString(),
    //     other: message.other
    // });
    // testComponent.innerHTML = html;
})