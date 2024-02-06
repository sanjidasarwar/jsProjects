const allLetter = document.querySelectorAll('span')

allLetter.forEach(letter=>{
    letter.addEventListener('click', function(){
        letter.classList.add('active')

        letter.addEventListener('animationend', function() {
            letter.classList.remove('active');
        }, { once: true });
    })
})