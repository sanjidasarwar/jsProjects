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
    },
    confirmPassword: function () {
        const password = document.getElementById('password').value
        const confimPassword = document.getElementById('confimPassword').value

        if(confimPassword.length && confimPassword !==password){
            alert('Password and Confirm Password not matched')
        }
    }
}


const showBtn = document.querySelectorAll('.show')

showBtn.forEach(btn=>{
    btn.addEventListener('click', password.showAndHidePassword)
})

const form = document.getElementById('passwordForm')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    password.confirmPassword()
})

