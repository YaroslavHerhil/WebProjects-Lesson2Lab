const json_input = document.getElementById("json-input");
const json_output = document.getElementById("json-pretty-output");
const format_button = document.getElementById("format-button");
const error_m = document.getElementById("error-message");



function format_json(){
    json_output.textContent = ""
    try{
        let formatted_json = JSON.parse(json_input.value);
        json_output.textContent = JSON.stringify(formatted_json, null, 4);
        error_m.textContent = "";
    }
    catch(error){
        error_m.textContent = error;
    }
}


//--90-a90sf8uashfuias90fa90sf98897812964823657623572389


const user_cont = document.getElementById("user-cont");
const user_info_cont = document.getElementById("user-info-cont");




async function load_users(){
    try{                
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!(response.ok)){
            throw new Error("Your response is not ok :'( ; " + response.statusText);
        }
        console.log(response);
        let users = await response.json();
        users.forEach(user => {
            let new_user = document.createElement("div");
            new_user.textContent = user.name;
            user_cont.appendChild(new_user);
        });


        
    }
    catch(error){
        console.log(error);
    }
}

document.onload = load_users();
async function load_user_info(user){
    let temp_info_name    
    
}