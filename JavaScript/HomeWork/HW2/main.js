let functions = [
    function age(){
        let age = prompt("your age:");
        if(age < 18){
            if(age > 12) alert("you're teenager");
            else alert("you're child");
        }
        else{
            if(age < 60) alert("You are an adult");
            else alert("You are a senior citizen");
        }
    },
    function specil_symbol(){
        let symbol_key = prompt("Number 0-9:");

        switch(symbol_key){
            case "1": 
                alert("!");
                break;
            case "2": 
                alert("@");
                break;
            case "3": 
                alert("#");
                break;
            case "4": 
                alert("$");
                break;
            case '5': 
                alert("%");
                break;
            case '6': 
                alert("^");
                break;
            case '7': 
                alert("&");
                break;
            case '8': 
                alert("*");
                break;
            case '9': 
                alert("(");
                break;
            case '0': 
                alert(")");
                break;
            default:
                alert("Wronmg")
                break;
        }
    },
    function check_same_numbers(){
        let number = prompt("Number with 3 digits:");
        if(number > 999 || number < 100){
            alert("Wronmg");
        }
        else{
            let digit_1 = number % 10;
            let digit_2 = Math.floor(number % 100 / 10);
            let digit_3 = Math.floor(number % 1000 / 100)

            if(digit_1 == digit_2 || digit_2 == digit_3 || digit_3 == digit_1)
                alert("Damn, your number has duplicates, very creative");
            else
                alert("Wow, your number is very unique");

        }
    },
    function check_leap_year(){
        let year = prompt("Give me a year");
        let leap = false;
        if(year % 100 != 0){
            if(year % 4 == 0){
                leap = true;
            }
        }
        else {
            if(year % 400 == 0){
                leap = true;
            }
        }
            
        alert(leap ? "Leap year!" : "Not a leap year:(");
    }
]




let container = document.getElementById("task-container");

for(let i = 0; i < functions.length; i++){
    let button = document.createElement("div");


    let new_id = `task-${i+1}`
    let new_color = i % 2 != 0? i*30 : (8-i) * 30;
    button.setAttribute("id", new_id)

    
    button.style.backgroundColor  = `hsl(${new_color},70%,60%)`
    button.style.color  = `hsl(${new_color},50%,20%)`
    button.style.borderColor  = `hsl(${new_color},70%,40%)`

    button.addEventListener("mouseover", () => {
        button.style.backgroundColor  = `hsl(${new_color},100%,70%)`
        button.style.borderColor  = `hsl(${new_color},80%,50%)`

    })
    button.addEventListener("mouseleave", () => {
        button.style.borderColor  = `hsl(${new_color},70%,40%)`
        button.style.backgroundColor  = `hsl(${new_color},70%,60%)`
    })

    
    button.addEventListener("click", () =>{functions[i]()});

    console.log(functions[i]);
    button.textContent = `Task ${i+1}`

    container.appendChild(button);
}
