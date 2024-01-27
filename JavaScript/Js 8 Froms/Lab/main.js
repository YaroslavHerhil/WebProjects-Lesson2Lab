/*1 */
let user_name1 = document.getElementById("user-login-input-1");
let user_remember1 = document.getElementById("remember-me");

function Hello_user(){
    let prompt = user_remember1.checked ? 'remember you pacifists' : 'don\'t remember you genocides';
    let name = `Hello, ${user_name1.value}, I `
    alert(name + prompt);

}
/*2 */
let email_2 = document.getElementById("email-input-2");
let user_pass_2 = document.getElementById("password-input-2");
let user_pass_confirm_2 = document.getElementById("password-confirm-2");

function email_sent(){
    let prompt;
    if(user_pass_2.value == user_pass_confirm_2.value){
        prompt = `Confirmation email sent to ${email_2.value}`

    }
    else{
        prompt = `Passwords do not match!`
    }
    alert(prompt);
}
//3
let firstname = document.getElementById("firstname-input-3");
let lastname = document.getElementById("lastname-input-3");
let birthday = document.getElementById("birthdate-input-3");

let genders = document.getElementsByName('gender-group');


let user_info = {
}

let country = document.getElementById("country-menu-3");
let city = document.getElementById("city-menu-3");

let checks = document.getElementById("skills").getElementsByTagName("input");


let info_grid = document.getElementById("info-grid");

function get_info(){
    info_grid.textContent = "";
    user_info.Firstname = firstname.value;
    user_info.Lastname = lastname.value;
    user_info.Birthday = birthday.value;

    let gender;
    for(let i = 0; i < genders.length; i++)
    {
        if(genders[i].checked){
            gender = genders[i].value;
        }
    }

    user_info.Gender = gender;
    user_info.Country = country.value;
    user_info.City = city.value;

    let skills = "";

    Array.prototype.forEach.call (checks, function (check) {
        if(check.checked){
            if(skills.length == 0)
                skills += check.value
            else
                skills += (", " + check.value)
        }
    });
    user_info.Skills = skills;
    for(let temp in user_info){
        let grid_key = document.createElement("div");
        let grid_value = document.createElement("div");

        grid_value.style.fontWeight = 600;     
        grid_value.style.backgroundColor = "#dac5f7";   
        grid_value.style.borderColor = "#834ec9";   

        grid_key.textContent = temp;
        grid_value.textContent = user_info[temp];

        info_grid.appendChild(grid_key);
        info_grid.appendChild(grid_value);
    }
}


//4
let red_input = document.getElementById("color-red");
let green_input = document.getElementById("color-green");
let blue_input = document.getElementById("color-blue");

let color_container = document.getElementById("color-container");


function add_color(){
    let red_val = red_input.value > 255 ? 255 : (red_input.value < 0 ? 0 : red_input.value)
    let green_val = green_input.value > 255 ? 255 : (green_input.value < 0 ? 0 : green_input.value)
    let blue_val = blue_input.value > 255 ? 255 : (blue_input.value < 0 ? 0 : blue_input.value)

    if(red_val && green_val && blue_val){
        color = `rgb(${red_val}, ${green_val}, ${blue_val})`

        let new_color_box = document.createElement("div");
        let new_color = document.createElement("div");
        let new_color_value = document.createElement("span");

        new_color.style.width = "50px";
        new_color.style.height = "50px";
        new_color.style.backgroundColor = color;

        new_color_value.textContent = color;

        new_color_box.appendChild(new_color);
        new_color_box.appendChild(new_color_value);

        color_container.appendChild(new_color_box);
    }
}



