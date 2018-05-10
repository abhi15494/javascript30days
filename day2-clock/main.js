secondHand = document.querySelector(".sec-hand");
minHand = document.querySelector(".min-hand");
hourHand = document.querySelector(".hour-hand");

function setDate(){
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = date.getHours();

    const secDegree = ( sec / 60 ) * 360 - 90;
    const minDegree = ( min / 60 ) * 360 - 90;
    const hourDegree = ( hour / 12 ) * 360 - 90;

    secondHand.style.transform = `rotate( ${secDegree}deg )`;
    minHand.style.transform = `rotate( ${minDegree}deg )`;
    hourHand.style.transform = `rotate( ${hourDegree}deg )`;
}

setInterval(setDate, 1000);