const password={
    showAndHidePassword: function (e) {
        const input = e.target.parentElement.previousElementSibling
        if(input.value!=='' && input.type==='password'){
            input.type = 'text'
            e.target.classList.replace('fa-eye','fa-eye-slash');
        }else{
            input.type = 'password'
            e.target.classList.replace('fa-eye-slash','fa-eye');
        }
    }
}


const showBtn = document.querySelectorAll('.show')

showBtn.forEach(btn=>{
    btn.addEventListener('click', password.showAndHidePassword)
})