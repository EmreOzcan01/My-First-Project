const btn = document.querySelector('#btn')
const input = document.querySelector('#input')
const mass = document.querySelector('#mass')
const didNot = document.querySelector('#didNot')
const select = document.querySelector('select')
const img = document.querySelector('img')
const askDiv = document.querySelector('#askDiv')
const ask = document.querySelector('#ask')
const gravity = document.querySelector('#gravity')
const earthGravity = 9.8
const jupiterGravity = 23.1
const marsGravity = 3.7
const mercuryGravity = 3.7
const moonGravity = 1.6
const neptuneGravity = 11
const plutoGravity = 0.7
const saturnGravity = 9
const uranusGravity = 8.7
const venusGravity = 8.9

btn.addEventListener(
    'click',
    (e) => {

        if (input.value == '') {
            mass.style.display = 'block'
            askDiv.style.display = 'none'
        } else {
            mass.style.display = 'none'

            if(select.value == '') {
                didNot.style.display = 'block'
            } else {
                didNot.style.display = 'none'
            }

        }

        if (select.value != '' && input.value != '') {
            img.style.display = 'block';
            askDiv.style.display = 'block';

            if (select.value == 0) {
                img.src = './images/earth.png'
                ask.textContent = 'The Weight Of The Object On EARTH'
                gravity.textContent = (input.value * earthGravity).toFixed(2) + ' N'
            }
            if (select.value == 1) {
                img.src = './images/jupiter.png'
                ask.textContent = 'The Weight Of The Object On JUPİTER'
                gravity.textContent = (input.value * jupiterGravity).toFixed(2) + ' N'
            }    
            if (select.value == 2) {
                img.src = './images/mars.png'
                ask.textContent = 'The Weight Of The Object On MARS'
                gravity.textContent = (input.value * marsGravity).toFixed(2) + ' N'
            }    
            if (select.value == 3) {
                img.src = './images/mercury.png'
                ask.textContent = 'The Weight Of The Object On MERCURY'
                gravity.textContent = (input.value * mercuryGravity).toFixed(2) + ' N'
            }    
            if (select.value == 4) {
                img.src = './images/moon.png'
                ask.textContent = 'The Weight Of The Object On MOON'
                gravity.textContent = (input.value * moonGravity).toFixed(2) + ' N'
            }    
            if (select.value == 5) {
                img.src = './images/neptune.png'
                ask.textContent = 'The Weight Of The Object On NEPTUNE'
                gravity.textContent = (input.value * neptuneGravity).toFixed(2) + ' N'
            }    
            if (select.value == 6) {
                img.src = './images/pluto.png'
                ask.textContent = 'The Weight Of The Object On PLUTO'
                gravity.textContent = (input.value * plutoGravity).toFixed(2) + ' N'
            }    
            if (select.value == 7) {
                img.src = './images/saturn.png'
                ask.textContent = 'The Weight Of The Object On SATURN'
                gravity.textContent = (input.value * saturnGravity).toFixed(2) + ' N'
            }    
            if (select.value == 8) {
                img.src = './images/uranus.png'
                ask.textContent = 'The Weight Of The Object On URANUS'
                gravity.textContent = (input.value * uranusGravity).toFixed(2) + ' N'
            }    
            if (select.value == 9) {
                img.src = './images/venus.png'
                ask.textContent = 'The Weight Of The Object On VENUS'
                gravity.textContent = (input.value * venusGravity).toFixed(2) + ' N'
            }    

        } else {
            img.style.display = 'none'
            img.src = ''
        }
    }
)

