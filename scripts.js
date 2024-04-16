let form=document.getElementById('SighUp')


form.addEventListener('submit', function(event) {
    event.preventDefault();
    let passwordContainer = document.getElementById('passwordBox')
    let passwordField = document.getElementById('pass')
    let confirmPasswordField = document.getElementById('repass')
    let password = passwordField.value;
    let confirmPassword = confirmPasswordField.value;

    if(password!==confirmPassword){
        console.log("KUR")
        if (document.querySelector(".error-msg")){
        return
        }
        let err=document.createElement("p")
        err.textContent="* Passwords does not match"
        err.classList.add("error-msg")
        passwordContainer.appendChild(err)
        passwordField.style.borderColor="red"
        confirmPasswordField.style.borderColor="red"
        
    }
    else{
        form.submit()
    }  
});
