let dayBox= document.getElementById('day-box')
let hrBox =document.getElementById('hr-box');
let minBox =document.getElementById('min-box');
let secBox =document.getElementById('sec-box');
let deadline = new Date(2023, 9, 0, 0, 0);
let deadlineTime = deadline.getTime();

let head = document.getElementById('head');
head.textContent=deadline.getDate()

let addZeroes = (num) => (num < 10 ? `0${num}` : num);

function countDown(){
    let todayDate = new Date();
    let todayDateTime = todayDate.getTime();
    let remainingTime =deadlineTime - todayDateTime

    let oneMin= 60*1000;
    let oneHr= 60*oneMin;
    let oneDay= 24*oneHr;
    if(deadlineTime<todayDateTime){
        clearInterval(intervalFunc)
        let countdownHead = document.querySelector('.countdown')
        countdownHead.innerHTML='<h1>Countdown Has Expired</h1>'
    }else{
        let daysLeft=Math.floor(remainingTime/oneDay)
        let hrsLeft=Math.floor((remainingTime%oneDay)/oneHr)
        let minsLeft=Math.floor((remainingTime%oneHr)/oneMin)
        let secsLeft=Math.floor((remainingTime%oneMin)/1000)

        dayBox.textContent =addZeroes(daysLeft)
        hrBox.textContent =addZeroes(hrsLeft)
        minBox.textContent =addZeroes(minsLeft)
        secBox.textContent =addZeroes(secsLeft)
    }

}
let intervalFunc = setInterval(countDown,1000)
// countDown()

/* 
    1sec =1000ms
    1min =60*1000ms
    1hr =60*60*1000ms
    1day=24*60*60*1000ms


    daysLeft:
    24*60*60*1000ms---------1day
    1----------------------1/24*60*60*1000ms
    remainingTime----------(remainingTime/24*60*60*1000ms) day 

    hrsLeft 
    (remainingTime%24*60*60*1000ms) /60*60*1000ms 
    
    minsLeft  
    (remainingTime%24*60*60*1000ms) /60*1000ms 
    
    secsLeft   
    (remainingTime%24*60*60*1000ms) /1000ms 
    
    


*/