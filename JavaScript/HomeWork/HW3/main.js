let functions = [

    function range_sum(){
        let head = Number(prompt("From:"))
        let tail = Number(prompt("To:"))
        let sum = 0;
        for(let i = head; i <= tail; i++){
            sum = sum + i;
        }
        alert(`Sum = ${sum}`);
    },
    function highest_common_fa(){
        let number1 = prompt('Number 1: ');
        let number2 = prompt('Number 2: ');

        
        if(number1 <= 0 || number2 <= 0){
            alert("Wromng");
            return false;
        }

        let hcf;
        let celling = number1 > number2 ? number2 : number1
        for (let i = 1; i <= celling; i++) {

            if( number1 % i == 0 && number2 % i == 0) 
                hcf = i;
            
        }
        alert("Highest common factor: " + hcf);
    },
    function factors(){
        let number = prompt('Your number: ');

        if(number <= 0){
            alert("Wromng");
            return false;
        }

        let factors = "1";
        for (let i = 2; i <= number; i++) {
            if(number % i == 0)
                factors += `, ${i}`;
        }
        alert("Factors : " + factors);
    },
    function factors(){
        debugger;
        let number = Number(prompt('Your number: '));
        let digits = 0;
        while(number > 1){
            number = number / 10;
            digits++;
        }
        alert("Digits : " + digits);
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