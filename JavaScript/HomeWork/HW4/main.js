let functions = [
    function power_recursion(){
        function power_r(num, ex){
            return ex != 0 ? num * power_r(num, ex - 1) : 1;
        }

        let number  = prompt("Your number:");
        let pow  = prompt("To the power of?");
        alert(power_r(number,pow));


    },
    function gcd_recursion(){
        function gcd_r(num1, num2){
            return num2 != 0 ? gcd_r(num2, num1 % num2) : num1;
        }

        let number1  = prompt("Your number:");
        let number2  = prompt("Your second number:");
        alert("Gretest common divisor: " + gcd_r(number1,number2));


    },
    function highest_digit(){
        function max_digit_r(number) {
            if (number < 10) {
                return number;
            } else {
                let remaining = Math.floor(number / 10);
                let max_remaining = max_digit_r(remaining);
                
                return Math.max(number % 10, max_remaining);
            }
        }
        let number = prompt("Your number:");
        alert("Highest digit: " + max_digit_r(number));


    },
    function is_prime_or_is_primnt(){
        function is_prime_r(number, iteration = 2) {
            if (number <= 2)
                return number == 2;
            if (number % iteration == 0)
                return false;
            if (iteration * iteration > number)
                return true;
        
            return is_prime_r(number, iteration + 1);
        }
        let number = prompt("Your number:");
        alert(is_prime_r(number) ? "Very prime" : "Is prime NOT");


    },
    function is_prime_or_is_primnt(){
        function primer_r (num, factor = 2, factors = []) {
            if (num < 2) {
                return factors;
            }
            if (num % factor == 0) {
                factors.push(factor);
                primer_r(num / factor, factor, factors);
            }
            else {
                primer_r(num, factor + 1, factors);
            }
            return factors;
        }
        
        let number = prompt("Your number:");
        let factors = primer_r(number);
        let factors_string = `${factors[0]}`;
        for(let i = 1; i < factors.length; i++){
            factors_string = factors_string + ` * ${factors[i]}`
        }
        alert("Factors: "+ factors_string);


    },
    function fibonacci_recurse(){
        function fibonacci_r(num) {
            if (num === 0) {
                return 0;
            } else if (num === 1) {
                return 1;
            }
            
            return fibonacci_r(num - 1) + fibonacci_r(num - 2);
        }
        
        let number = Number(prompt("Your number:"));
        alert("Your number but fibonacci😨: "+fibonacci_r(number) );


    },
    
    
]




let container = document.getElementById("task-container");

for(let i = 0; i < functions.length; i++){
    let button = document.createElement("div");


    let new_id = `task-${i+1}`
    let new_color = i % 2 != 0 ? i*30 : (8-i) * 30;
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