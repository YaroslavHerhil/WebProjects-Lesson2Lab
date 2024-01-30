let email = document.getElementById("email-input");
let pass = document.getElementById("password-input");
let cpass = document.getElementById("password-confirm");

let email_error = document.getElementById("email-error");
let pass_error = document.getElementById("pass-error");
let cpass_error = document.getElementById("cpass-error");





function register(){
    email_error.textContent = "";
    pass_error.textContent = "";
    cpass_error.textContent = "";


    if(!(email.value)){
        email_error.textContent = "Email can't be empty!"
        return false;
    }

    let email_split = email.value.split("@");


    
    if(!pass.value){
        pass_error.textContent = "Password can't be empty!"
        return false;
    }

    if(!cpass.value){
        cpass_error.textContent = "Please confirm your password"
        return false;
    }
    
}