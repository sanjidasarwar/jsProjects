function clock(){
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    
    const secHand = document.querySelector('.secondHand')
    const secDeg = ((sec/60)*360 )  + 90;
    secHand.style.transform= `rotate(${secDeg}deg)`;
    
    const minHand = document.querySelector('.minuteHand')
    const minDeg = ((min/60)*360 )+ ((seconds/60)*6)  + 90
    minHand.style.transform= `rotate(${minDeg}deg)`;
    
    const hrHand = document.querySelector('.hourHand')
    const hrDeg = ((hr/12)*360 )+ ((mins/60)*30) + 90
    hrHand.style.transform= `rotate(${hrDeg}deg)`;


    
}

setInterval(clock,1000)

/*
 60s--------------360deg
 1s----------------360deg/60s
 5s----------------5s*360deg/60s

*/

