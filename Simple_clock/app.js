setInterval(setClock,1000)

const hourHand=document.querySelector('[data-hour-hand]');
const minuteHand=document.querySelector('[data-minute-hand]');
const secondHand=document.querySelector('[data-second-hand]');
// console.log(hourHand,minuteHand,secondHand)

function setClock(){
    const currentDate=new Date()
    const secondRatio=currentDate.getSeconds()/60
    const minuteRatio=(secondRatio+currentDate.getMinutes())/60
    const hoursRatio=(minuteRatio+currentDate.getHours())/12

    // console.log(secondRatio,minuteRatio,hoursRatio)

    setRotation(secondHand,secondRatio)
    setRotation(minuteHand,minuteRatio)
    setRotation(hourHand,hoursRatio)


}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360)
   
}