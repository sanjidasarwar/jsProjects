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
    },
    isLengthValid: function (password) {
        return password.length >= 8;
    },

    hasLowercase: function (password) {
        return /[a-z]/.test(password);
    },

    hasUppercase: function (password) {
        return /[A-Z]/.test(password);
    },

    hasNumeric: function (password) {
        return /[0-9]/.test(password);
    },

    hasSpecialCharacter: function (password) {
        return /[!@#$%^&*()\-_=+{}[\]|;:'",.<>?]/.test(password);
    },
    passwordValidation: function (password) {
        const msgDiv = document.getElementById('errorMsg')

        if (!this.isLengthValid(password)) {
            msgDiv.innerText = 'Password must be 8 characters';
            msgDiv.style.color = 'red';
            return;
        }

        if (!this.hasLowercase(password)) {
            msgDiv.innerText = 'Password is missing a lowercase letter';
            msgDiv.style.color = 'red';
            return;
        }

        if (!this.hasUppercase(password)) {
            msgDiv.innerText = 'Password is missing an uppercase letter';
            msgDiv.style.color = 'red';
            return;
        }

        if (!this.hasNumeric(password)) {
            msgDiv.innerText = 'Password is missing a numeric value';
            msgDiv.style.color = 'red';
            return;
        }

        if (!this.hasSpecialCharacter(password)) {
            msgDiv.innerText = 'Password is missing a special character';
            msgDiv.style.color = 'red';
            return;
        }

        msgDiv.innerText = 'Password is strong';
        msgDiv.style.color = 'green';
       
    }
}

// show and hide password
const showBtn = document.querySelectorAll('.show')
showBtn.forEach(btn=>{
    btn.addEventListener('click', password.showAndHidePassword)
})

// confirm password
const form = document.getElementById('passwordForm')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    password.confirmPassword()
})

// password validation
const passwordInput =document.getElementById('password')
passwordInput.addEventListener('input', function () {
    const passwordValue= passwordInput.value
    password.passwordValidation(passwordValue)
    
})
