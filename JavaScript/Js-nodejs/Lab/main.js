let email = document.getElementById("email-input");
let pass = document.getElementById("password-input");
let cpass = document.getElementById("password-confirm");

let email_error = document.getElementById("email-error");
let pass_error = document.getElementById("pass-error");
let cpass_error = document.getElementById("cpass-error");
let guide_pass = document.getElementById("guidelines");

let user = {
    pass,
    email
}


function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
function isValidPassword(pass){
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(pass);
}

function register(){
    guide_pass.style.display = "none";
    email_error.textContent = "";
    pass_error.textContent = "";
    cpass_error.textContent = "";


    if(!(email.value)){
        email_error.textContent = "Email can't be empty!"
        return false;
    }
    else if(!isValidEmail(email.value)){
        email_error.textContent = "Email is invalid!"
        return false;
    }


    
    if(!pass.value){
        pass_error.textContent = "Password can't be empty!"
        return false;
    }
    else if(!isValidPassword(pass.value)){
        pass_error.textContent = "Password is invalid!  " + pass.value;
        guide_pass.style.display = "block";
        return false;
    }

    if(!cpass.value){
        cpass_error.textContent = "Please confirm your password"
        return false;
    }
    else if(cpass.value != pass.value){
        cpass_error.textContent = "Your passwords must match"
        return false;
    }
    
    if(pass.value == getCookie(email.value)){
        alert("User already registered. Redirecting.")
    }
    else{
        setCookie(email.value, pass.value, 1);
    }
    window.location.href = "info.html";
}

    function setCookie(name, value, day) {
        let expires = '';
        if (value.length > 0) {
            /* document.cookie = `${encodeURIComponent()}` */

            const date = new Date();

            date.setTime(date.getTime() + (day * 24 * 60 * 60 * 1000));

            expires = '; expires=' + date.toUTCString();

            document.cookie = name + '=' + value + expires + '; path=/';
        }

    }


function getCookie(name){
    const nameC = name + "=";
    const Cookies = document.cookie.split(";");
    for(let i = 0; i < Cookies.length; i++){
        let cook = Cookies[i]
        while(cook.charAt(0) === ' '){
            cook = cook.substring(1);
        }
        if(cook.indexOf(nameC) === 0){
            return decodeURIComponent(cook.substring(nameC.length));
        }
    }
    return null;
}
