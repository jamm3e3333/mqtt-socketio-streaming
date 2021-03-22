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
const $buttonValue_w1 = document.querySelector('#btn-value-w1');
$buttonValue_w1.classList.add('red');
$buttonValue_w1.setAttribute('disabled','disabled');

const $inputValue_w1 = document.querySelector('#input-value-w1');
//elements for rendering
const valueW_template = document.querySelector('#value-w1-template').innerHTML;
const valueW_component = document.querySelector('#value-w1-component');

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

$inputValue_w1.addEventListener('input',(e) => {
    if(isNaN(parseFloat(e.target.value)) === true && (e.target.value !== '' && e.target.value !== '-')){
        e.target.value = '';
        alert('Je povoleno pouze číslo.');
        e.target.focus();
    }

    if(!e.target.value){
        $buttonValue_w1.setAttribute('disabled','disabled');
        $buttonValue_w1.classList.remove('green');
        $buttonValue_w1.classList.add('red');
    }
    else{
        $buttonValue_w1.removeAttribute('disabled');
        $buttonValue_w1.classList.remove('red');
        $buttonValue_w1.classList.add('green');
    }
})

$buttonValue_w1.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.setAttribute('disabled','disabled');

    $buttonValue_w1.classList.add('red');
    $buttonValue_w1.classList.remove('green');
    
    let msg = '';
    const value_w = parseFloat($inputValue_w1.value.trim());
    $inputValue_w1.value = '';
    $inputValue_w1.setAttribute('disabled','disabled');

    socket.emit('value_w1', value_w, (error,data) => {
        if(error){
            console.log(error);
            msg = 'Zkontroluj připojení HIL simulátoru.';

            const html = Mustache.render(valueW_template, {
                status_w1: msg,
            });
            valueW_component.innerHTML = html;
            valueW_component.setAttribute('style','color: red');
        }
        else{
            console.log(JSON.parse(data.data).error.message, data.value);
            msg = JSON.parse(data.data).error.message;

            const html = Mustache.render(valueW_template, {
                status_w1: msg,
                value_w1: `, hodnota: ${data.value}`
            });
            valueW_component.innerHTML = html;
            valueW_component.setAttribute('style','color: dodgerblue');
        }

        $inputValue_w1.removeAttribute('disabled');
        $inputValue_w1.focus();
    });
    // socket.emit('changeValue', )
    // const formElement = $form_w.getElementsByTagName('input');
    // const elements = Array.from(formElement);
    // elements[0].setAttribute('style','background-color: pink');
})