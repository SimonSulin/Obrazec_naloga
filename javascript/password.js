let pass1 = document.querySelector('#password');
let pass2 = document.querySelector('#password2');
let result = document.querySelector('#label2');
let submit_btn = document.querySelector('#btn-submit')


function checkPassword () {
    result.innerText = pass1.value == pass2.value ? 'Passwords match' : 'Passwords dont match';
    pass1.value == pass2.value ? submit_btn.disabled=false :submit_btn.disabled=true ;
}

pass1.addEventListener('keyup', () => {
    if (pass2.value.length != 0) checkPassword();
})

pass2.addEventListener('keyup', checkPassword);