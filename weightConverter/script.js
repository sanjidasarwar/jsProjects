const initailWeight = document.querySelector('#initailWeight')
const initailWeightValue = document.querySelector('#initailWeightValue')
const convertedWeight = document.querySelector('#convertedWeight')
let convertedWeightValue = document.querySelector('#convertedWeightValue')
const weightOptions = document.querySelectorAll('.weightOptions')

weightOptions.forEach(select=>{
    select.addEventListener('change', function(){
        const allOptions = this.options
    
        for(let i=0; i<allOptions.length;i++){
            if(allOptions[i].hasAttribute('selected')){
                allOptions[i].removeAttribute('selected')
            }
        }
    
        allOptions[this.selectedIndex].setAttribute('selected', 'selected')
    
    })
    
})



