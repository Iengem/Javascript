password = document.querySelector('#password')
confirmpass = document.querySelector('#confirm')
showpass = document.querySelector('.first')
eye = document.querySelector('.firsteye')
showpass1 = document.querySelector('.second')
eye1 = document.querySelector('.secondeye')
span = document.querySelector('.error')
span1 = document.querySelector('.error1')
btn = document.querySelector('.submit')

showpass.addEventListener('click', function(){
    changepassword(password);
    showpass.innerHTML = '<style>'+'.first{display:none}'+'</style>'
    eye.innerHTML = '<style>'+'.firsteye{display:flex}'+'<style>'
})
eye.addEventListener('click',function(){
    changepassword(password)
    showpass.innerHTML = '<style>'+'.first{display:flex}'+'</style>'
    eye.innerHTML = '<style>'+'.firsteye{display:none}'+'<style>'
})

showpass1.addEventListener('click', function(){
    changepassword(confirmpass);
    showpass1.innerHTML = '<style>'+'.second{display:none}'+'</style>'
    eye1.innerHTML = '<style>'+'.secondeye{display:flex}'+'<style>'
})
eye1.addEventListener('click',function(){
    changepassword(confirmpass)
    showpass1.innerHTML = '<style>'+'.second{display:flex}'+'</style>'
    eye1.innerHTML = '<style>'+'.secondeye{display:none}'+'<style>'
})

btn.addEventListener('click', function(){
    if(password.value.length<7){
        span.innerText ='Password must be at least 7 characters'
    }
    else if(password.value.length>7 && password.value===confirmpass.value){
        span.innerText =''
        span1.innerText = ''
        btn.type ='submit'
    }
    else if(password.value!==confirmpass.value){
        span1.innerText = 'Passwords are not the same'
    }
})
function changepassword(password){
    if(password.type ==='password'){
        password.type = 'text'
    }
    else if(password.type ==='text'){
        password.type = 'password'
    }
}