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

function calculateWeight (inputField){
    let input;
    let result;

    if(inputField.id == 'convertedWeightValue'){
        input = convertedWeightValue.value;
    }else{
        input = initailWeightValue.value;
    }

    if(initailWeight.value=='kg' && convertedWeight.value=='pound'){
        if(inputField.id == 'convertedWeightValue'){
            result = input /2.20462

            initailWeightValue.value = result.toFixed(4);
            // to activate the field editable
            initailWeightValue.removeAttribute('readonly');
        }else{
            result = input *2.20462

            convertedWeightValue.value = result.toFixed(4);
            // to activate the field editable
            convertedWeightValue.removeAttribute('readonly');
        }    
    }                      


}

initailWeightValue.addEventListener('input', function(){
    calculateWeight(initailWeightValue)
})
convertedWeightValue.addEventListener('input', function(){
    calculateWeight(convertedWeightValue)
})



calculateWeight(initailWeightValue)


