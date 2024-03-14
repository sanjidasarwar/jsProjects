const inputText = document.querySelector('#inputText')
const copyBtn = document.querySelector('#copy')
const length = document.querySelector('#length')
const uppercase = document.querySelector('#uppercase')
const lowercase = document.querySelector('#lowercase')
const number = document.querySelector('#number')
const symbol = document.querySelector('#symbol')
const generateBtn = document.querySelector('#generateBtn')


const uppercaseValue = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercaseValue = 'abcdefghijklmnopqrstuvwxyz'
const numberValue = '0123456789'
const symbolValue = '!@#$%^&*()?.<\>|=+:;,[-_]'


generateBtn.addEventListener('click', function(){
    let selectedValue= ''

    if(uppercase.checked){
        selectedValue += uppercaseValue
    }
    if(lowercase.checked){
        selectedValue += lowercaseValue
    }
    if(number.checked){
        selectedValue += numberValue
    }
    if(symbol.checked){
        selectedValue += symbolValue
    }

    let password ='';

    for(let i=0; i<length.value; i++ ){
        let index = Math.floor(Math.random(selectedValue) * selectedValue.length)
        password +=selectedValue[index]
    }

    inputText.value = password


})

copyBtn.addEventListener('click', function(){
    if(inputText.value ==''){
     alert( 'Please generate password first')
    }else{
      // loading the content into our clipboard
      navigator.clipboard.writeText(inputText.value);
      alert('Your password has been copied')
    }
 })