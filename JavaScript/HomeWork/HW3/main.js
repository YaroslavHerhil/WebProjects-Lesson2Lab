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
    function digits_calc(){
        let number = Number(prompt('Your number: '));
        let digits = 0;
        while(number >= 1){
            number = number / 10;
            digits++;
        }
        alert("Digits : " + digits);
    },
    function digits_calc(){
        let number = 0;
        let negatives = 0; let positives = 0;  let even = 0;
        for(let i = 0; i < 10; i++){
            number = prompt(`Number ${i + 1}: `);
            
            if(number % 2 == 0)
                even++;

            if(number > 0)
                positives++
            else if(number < 0)
                negatives++;
            
        }

        alert(`Positive: ${positives} \nNegatives: ${negatives}\nZeros: ${10 - negatives - positives}\nEven: ${even}\nOdd: ${10 - even}`);
    },
    function digits_calc(){
        
        let engagement;
        do{
            let number1 = prompt(`Number 1: `);
            let sign = prompt(`+, -, * or /?`);
            let number2 = prompt(`Number 2: `);

            let result = 0;
            switch(sign){
                case '+':
                    result = number1 + number2;
                    break;
                case '-':
                    result = number1 - number2;
                    break;
                case '*':
                    result = number1 * number2;
                    break;
                case '/':
                    result = number1 / number2 ;
                    if(number2 != 0) 
                        break;
                default:
                    result = "NO";
                    break;
            }
            alert(`${number1} / ${number2} = ${result}`);

            engagement = Number(prompt(`Continue? {1 - Yes, 0 - NO!}`));

        }while(!!engagement)

       
    },
    function scroll(){
        let number = prompt(`Number: `);
        let number_a = [];
        while(number >= 1){
            number_a.unshift(number % 10)
            number = number / 10;
            number = Math.floor(number);
            
        }
        let scrolls = prompt(`Scroll by how much? `);

        
        number_a = number_a.slice(scrolls).concat(number_a.slice(0, scrolls));
        
        alert(number_a);
    } ,

    function week(){
        let date = new Date()
        let engagement;
        do{
            switch(date.getDay()){
                case 1:
                    alert("Monday");
                    break;
                case 2:
                    alert("Tuesday");
                    break;
                case 3:
                    alert("Wednesday");
                    break;
                case 4:
                    alert("Thursday");
                    break;
                case 5:
                    alert("Friday");
                    break;
                case 6:
                    alert("Saturday");
                    break;
                case 0:
                    alert("Sunday");
                    break;
                default:
                    alert("Monday..?//\\|");
                    break;
            }
            date.setDate(date.getDate() + 1)
            engagement = Number(prompt(`Continue? {1 - Yes, 0 - NO!}`));
        }while(!!engagement)

    },

    function multiplication_table(){
        let multy_table = "";
        for(let i = 2; i <= 9; i++){
            for(let j = 1; j <= 10; j++){
                multy_table += `${i} * ${j} = ${i * j}\n`
            }
            multy_table += ` \n\n`
        }

        alert(multy_table);

    },

    function guess(){
        let max = 100;
        let min = 1;
        let current_guess = 0;

        alert("Think of a number, I'll try to guess it?!")

        let correct = false;
        do{
            current_guess = Math.floor(Math.random() * (max - min) + min);
            answer = prompt(`Is your number {>}, {<} or {=} to ${current_guess}?`);
            switch(answer){
                case ">":
                    min = current_guess;
                    break;
                case "<":
                    max = current_guess;
                    break;
                case "=":
                    correct = true;
                    break;
                default:
                    alert("?????????")
                    continue;
            }

        }while(!correct)
        alert("Okay, we're done here")


    }
    

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