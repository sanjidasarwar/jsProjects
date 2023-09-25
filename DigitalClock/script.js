function createClock(){
    let date = new Date();
    let hr=date.getHours()
    let min =date.getMinutes()
    let sec = date.getSeconds()
    let am_pm = 'AM'

    // Setting time for 12 Hrs format
   if(hr>12){
        hr -= 12
        am_pm = 'PM'
   }
   if(hr==0){
        hr = 12
   }

   hr = (hr<10 )? '0' + hr : hr
   min = (min<10 )? '0' + min : min
   sec = (sec<10 )? '0' + sec : sec

    let clock= document.getElementById('clockDiv');
    clock.innerText= hr+':'+ min + ":" + sec + am_pm
}

setInterval(createClock, 1000)
