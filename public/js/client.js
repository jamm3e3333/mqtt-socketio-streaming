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
            backgroundColor: 'rgb(255, 99, 132,0)',
            borderColor: 'rgb(255, 99, 132)',
            borderCapStyle: 'square',
            borderWidth: 5,
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
        },
        scales: {
            yAxes: [{
                id: 'y-axis-v_z',
                type: 'linear',
                scaleLabel: {
                    display: true,
                    labelString: 'v [m/s]'
                }
            }],
            xAxes: [{
                id: 'x-axis-v_z',
                scaleLabel: {
                    display: true,
                    labelString: 'n'
                }
            }]
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
            backgroundColor: 'rgba(255, 255, 255,0)',
            borderColor: 'rgb(255, 99, 132)',
            borderCapStyle: 'square',
            borderWidth: 5,
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
        },
        scales: {
            yAxes: [{
                id: 'y-axis-s_z',
                type: 'linear',
                scaleLabel: {
                    display: true,
                    labelString: 's [m]'
                }
            }],
            xAxes: [{
                id: 'x-axis-s_z',
                scaleLabel: {
                    display: true,
                    labelString: 'n'
                }
            }]
        }
    }
})

var ctx3 = document.getElementById('myChart3').getContext('2d');
var chart3 = new Chart(ctx3,{
    type: 'line',
    data:{
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
        datasets: [{
            label: 'Rychlost v ose y',
            backgroundColor: 'rgba(255, 255, 255,0)',
            borderColor: 'rgb(255, 99, 132)',
            borderCapStyle: 'square',
            borderWidth: 5,
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
        },
        scales: {
            yAxes: [{
                id: 'y-axis-v_y',
                type: 'linear',
                scaleLabel: {
                    display: true,
                    labelString: 'v [m/s]'
                }
            }],
            xAxes: [{
                id: 'x-axis-v_y',
                scaleLabel: {
                    display: true,
                    labelString: 'n'
                }
            }]
        }
    }
})

var ctx4 = document.getElementById('myChart4').getContext('2d');
var chart4 = new Chart(ctx4,{
    type: 'line',
    data:{
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
        datasets: [{
            label: 'Poloha v ose y',
            backgroundColor: 'rgba(255, 255, 255,0)',
            borderColor: 'rgb(255, 99, 132)',
            borderCapStyle: 'square',
            borderWidth: 5,
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
        },
        scales: {
            yAxes: [{
                id: 'y-axis-s_y',
                type: 'linear',
                scaleLabel: {
                    display: true,
                    labelString: 's [m]'
                }
            }],
            xAxes: [{
                id: 'x-axis-s_y',
                scaleLabel: {
                    display: true,
                    labelString: 'n'
                }
            }]
        }
    }
})

var ctx5 = document.getElementById('myChart5').getContext('2d');
var chart5 = new Chart(ctx5,{
    type: 'line',
    data:{
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
        datasets: [{
            label: 'Ryhlost v ose x',
            backgroundColor: 'rgba(255, 255, 255,0)',
            borderColor: 'rgb(255, 99, 132)',
            borderCapStyle: 'square',
            borderWidth: 5,
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
        },
        scales: {
            yAxes: [{
                id: 'y-axis-v_x',
                type: 'linear',
                scaleLabel: {
                    display: true,
                    labelString: 'v [m/s]'
                }
            }],
            xAxes: [{
                id: 'x-axis-v_x',
                scaleLabel: {
                    display: true,
                    labelString: 'n'
                }
            }]
        }
    }
})

var ctx6 = document.getElementById('myChart6').getContext('2d');
var chart6 = new Chart(ctx6,{
    type: 'line',
    data:{
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
        datasets: [{
            label: 'Poloha v ose x',
            backgroundColor: 'rgba(255, 255, 255,0)',
            borderColor: 'rgb(255, 99, 132)',
            borderCapStyle: 'square',
            borderWidth: 5,
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
        },
        scales: {
            yAxes: [{
                id: 'y-axis-s_x',
                type: 'linear',
                scaleLabel: {
                    display: true,
                    labelString: 's [m]'
                }
            }],
            xAxes: [{
                id: 'x-axis-s_x',
                scaleLabel: {
                    display: true,
                    labelString: 'n'
                }
            }]
        }
    }
})

/////////////////////////////////////////////////////////////////
//elements from html
const testComponent = document.querySelector('#time-component');
const testTemplate = document.querySelector('#time-template').innerHTML;

/////////////////////////////////////////////////////////////////
//elements for changing the value via post request
const $form_w = document.querySelector('#f1');

const valueW_templates_array = [];
valueW_templates_array[0] = document.querySelector('#value-w1-template').innerHTML;
valueW_templates_array[1] = document.querySelector('#value-w2-template').innerHTML;
valueW_templates_array[2] = document.querySelector('#value-w3-template').innerHTML;
valueW_templates_array[3] = document.querySelector('#value-w4-template').innerHTML;

const valueW_components_array = [];
valueW_components_array[0] = document.querySelector('#value-w1-component');
valueW_components_array[1] = document.querySelector('#value-w2-component');
valueW_components_array[2] = document.querySelector('#value-w3-component');
valueW_components_array[3] = document.querySelector('#value-w4-component');


socket.on('message', (message) => {
    chart1.data.datasets[0].data = message.v_z;
    chart1.update();

    chart2.data.datasets[0].data = message.s_z;
    chart2.update();

    chart3.data.datasets[0].data = message.v_y;
    chart3.update();

    chart4.data.datasets[0].data = message.s_y;
    chart4.update();

    chart5.data.datasets[0].data = message.v_x;
    chart5.update();

    chart6.data.datasets[0].data = message.s_x;
    chart6.update();
})


let inputs_w = $form_w.getElementsByTagName('input');
let buttons_w = $form_w.getElementsByTagName('button');
buttons_w = Array.from(buttons_w);
inputs_w = Array.from(inputs_w);

inputs_w.forEach((input, i) => {
    input.addEventListener('input', (e) => {
        if(isNaN(parseFloat(e.target.value)) === true && (e.target.value !== '' && e.target.value !== '-')){
            e.target.value = '';
            alert('Je povoleno pouze číslo.');
            e.target.focus();
        }
    
        if(!e.target.value){
            buttons_w[i].setAttribute('disabled','disabled');
            buttons_w[i].classList.remove('green');
            buttons_w[i].classList.add('red');
        }
        else{
            buttons_w[i].removeAttribute('disabled');
            buttons_w[i].classList.remove('red');
            buttons_w[i].classList.add('green');
        }
    })
})

buttons_w.forEach((button, i) => {
    button.classList.add('red');
    button.setAttribute('disabled','disabled');
    button.addEventListener('click', (e) => {
        e.preventDefault();

        e.target.setAttribute('disabled','disabled');
        e.target.classList.add('red');
        e.target.classList.remove('green');

        let msg = '';
        const value_w = parseFloat(inputs_w[i].value.trim());
        inputs_w[i].value = '';
        inputs_w[i].setAttribute('disabled','disabled');

        socket.emit('value_w', value_w, (i+1), (error,data) => {
            if(error){
                console.log(error,i);
                msg = 'HIL simulátor je offline.';
    
                const html = Mustache.render(valueW_templates_array[i], {
                    status_w: msg,
                });
                valueW_components_array[i].innerHTML = html;
                valueW_components_array[i].setAttribute('style','color: red');
            }
            else{
                msg = JSON.parse(data.data).error.message;
    
                const html = Mustache.render(valueW_templates_array[i], {
                    status_w: msg,
                    value_w: `, hodnota: ${data.value}`
                });
                valueW_components_array[i].innerHTML = html;
                valueW_components_array[i].setAttribute('style','color: dodgerblue');
            }
            window.scrollTo(0,0);
            inputs_w[i].removeAttribute('disabled');
            inputs_w[i].focus();
        })
    })
})
