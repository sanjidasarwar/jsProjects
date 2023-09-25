function createClock(){
    let date = new Date();
    const hours=date.getHours()
    const min =date.getMinutes()
    const sec = date.getSeconds()
    let clock= document.getElementById('clockDiv');
    clock.innerText= hours+':'+ min + ":" + sec
}

setInterval(createClock, 1000)
