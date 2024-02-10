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
    },
    function check_palindrome(){
        let number = prompt("Give me a number(5 digits)");
        if(number > 99999 || number < 10000){
            alert("Wromng");
            return;
        }
        let last_half = number % 100;
        let first_half = Math.floor(number % 100000 / 10000) + Math.floor(number % 10000 / 1000) * 10;
            
        alert(first_half == last_half ? "This number is a palindrome!" : "This number isnt a palindrome!!!");
    },
    function check_palindrome(){
        let USD = prompt("Give me amount(dolar)");
        const EUR = 0.93;
        const UAN = 7.19;
        const AZN = 1.70;
        let user_choice = prompt("Convert to what?[EUR, UAN, AZN]");
        switch(user_choice.toLowerCase()){
            case "1":
            case "eur":
                alert(`${USD} USD is - ${USD * EUR} EUR`);
                break;
            case "2":
            case "uan":
                alert(`${USD} USD is - ${USD * UAN} UAN`);
                break;
            case "3":
            case "azn":
                alert(`${USD} USD is - ${USD * AZN} AZN`);
                break;
            default:
                alert("Wronmg")
                break;
        }

    },
    function calculate_discount(){
        let cost = prompt("Cost of your purchase:");
        let discount = 0;
        if(cost >= 500){
            discount = 7;
        }
        else if (cost >= 300){
            discount = 5;
        }
        else if (cost >= 200){
            discount = 3;
        }

        alert(!!discount ? `With the discount of ${discount}% you only have to pay ${Math.round( (cost * (1 - discount / 100)) * 100  ) / 100}$!` : `No discounts. Full price is ${cost}$`)
    },
    function circle_fit(){
        let circ = prompt("Circumference of a circle:");
        let peri = prompt("perimeter of a square:");

        let diam = circ / Math.PI;
        let side = peri / 4;

        alert(diam <= side? "The circle could fit into the square(if it wanted to)" : "The circle couldn't fit into the square(it doesn't want to anyways)")

    },
    function questions(){
        let points = 0;
        alert("I will ask you three questions. Very important questions")
        let first = prompt("What goes first: cereal or milk?\n1)Cereal\n2)Milk\n3)Either is fine");
        switch(first){
            case "1":
            case "1)":
                alert("Correct. That was easy, right?");
                points = points+ 2;
                break;
            case "2":
            case "2)":
                alert("You are a psycho. Incorrect");
                points = points- 1;
                break;
            case "3":
            case "3)":
                alert("No answer is even worse than wrong answer. Double incorrect");
                points = points- 2;
                break;
            default:
                alert("I couldn't quite understand that so Let's just skip this one");
                break;
        }

        alert("Next question")
        let second = prompt("Who wins in a fight: a billion lions or the sun?\n1)Lions\n2)Sun\n3)What kind of question is that??");

        switch(second){
            case "1":
            case "1)":
                alert("Disrespect against celestial bodies. Double Incorrect");
                points = points- 2;
                break;
            case "2":
            case "2)":
                alert("Obviously the only correct answer");
                points = points+ 2;
                break;
            case "3":
            case "3)":
                alert("Answering a question with a question is rude. Incorrect");
                points = points- 1;
                break;
            default:
                alert("...let's just skip this one");
                break;
        }

        alert("Alright, last question")
        let third = prompt("Who is standing outside your window?\n1)Noone, silly!\n2)They are watching\n3)What is this - 2014? When was this even funny? Thats it, I'm out of here");

        switch(third){
            case "1":
            case "1)":
                alert("Correct!");
                points = points+ 2;
                break;
            case "2":
            case "2)":
                alert("They are gone for now");
                points = points+ 2;
                break;
            case "3":
            case "3)":
            default:
                alert("...");
                break;
        }
        if(points == 6){
            alert("Congratulations! You got the actual maximum amount of points.\n");
        }
        else if (points == -4){
            alert("Congratulations! You got the actual minimum amount of points.");
        }
        else{
            alert("Congratulations! You got the maximum amount of points(Which is " + points + "). You dont get a prize");
        }
    },

    function next_day(){
        let year = prompt("Gimme a year");
        let month = prompt("Gimme a month");
        let day = prompt("Gimme a day")

        let date = new Date(year, month, day)
        alert(`Today: ${date.getDate()}:${date.getMonth()}:${date.getFullYear()}`);
        date.setDate(date.getDate() + 1)
        alert(`Tomorrow: ${date.getDate()}:${date.getMonth()}:${date.getFullYear()}`);


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
