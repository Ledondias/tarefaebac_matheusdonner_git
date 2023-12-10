const clock = document.querySelector('.clocktime')

setInterval(function() {
    getCompleteHour()
}, 1000)

function getCompleteHour(){
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds

    clock.innerHTML = `${hour}:${minute}:${second}`
}