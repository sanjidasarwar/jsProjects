const allLetter = document.querySelectorAll('span')

allLetter.forEach(letter=>{
    letter.addEventListener('click', function(){
        this.classList.add('active')

        this.addEventListener('animationend', function() {
            letter.classList.remove('active');
        }, { once: true });
    })
})