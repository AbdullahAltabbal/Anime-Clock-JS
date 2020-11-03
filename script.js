const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');



function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const min = now.getMinutes();
    const minDegress = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegress}deg)`;


    const hour = now.getMinutes();
    const hourDegress = ((hour / 12) * 360) + 90;
    hourDegress.style.transform = `rotate(${hourDegress}deg)`;

}

setInterval(setDate, 1000);