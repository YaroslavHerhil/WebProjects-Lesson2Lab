

//1
function name(){
    let user_name  = prompt("Name?");
    alert("Hi, " + user_name);
}

//2
const today = new Date().getFullYear();

function age() {
    let birth_year = prompt("Year of birth?");
    alert("So, you're " + (today - birth_year));
}

//
function square_circ(){
    let side = prompt("Side of a square (in metres):");
    alert("P = " + (side*4) + "m");
}

//4
function circle_area(){
    let radius = prompt("Radius of a circle (in metres):");
    alert("Area = " + (Math.round( (Math.pow(radius, 2) * Math.PI) * 100) / 100.0) + " m^2");
}
//5
function velocity(){
    let distance = prompt("Distance(in kilometres):");
    let time = prompt("TIme (in hours):");
    
    alert("Velocity: " + (Math.round( distance / time * 100) / 100.0)  + " km/h");
}
//6
const eur_to_usd = 0.92;
function convert_usd(){
    let dollars = prompt("Input amount of USD:")
    alert(`${dollars} USD = ${Math.round( dollars * eur_to_usd * 100) / 100} EUR`)
}

//7

//there seem to be quite a lot of discussion about information units online
//Id say something like "I hate to be a pedant" but i love being a pedant so here it goes
//some sources say GB is 1024 MB others say its 1000
//But in actuality a Gigabyte is just 1000 Megabytes, but a *GIBI*byte is 1024 *MEBI*bytes (sounds very silly but its just short for *prefix*-binary | GIBI = Giga-binary)
//Former is an SI unit so it uses decimal (10^3 MB), latter is in binary (2^10 MiB) 
//Im using Gigabytes so in this example 1 GB = 1000 MB

function storage_820(){
    let storage = prompt("Size of your flashdrive(in Gigabytes)");
    alert(`Your flash drive could fit approximately ${Math.round(storage * 1000 / 820 * 100) / 100} pieces of data weighing 820 MB`)
}

//8

function choco_inflation(){
    let wallet = prompt("Your money (in dillar):");
    let choc_price = prompt("Price of a chocolate bar:");
    alert(`You could buy ${Math.floor(wallet / choc_price)} chocolate bars and be left with ${Math.round((wallet % choc_price) * 100) / 100 }$ of change`)
}


//9
function palindrome(){
    let fav_number = prompt("Your favorite 3 digit number:");

    let rebmun = fav_number % 10 * 100 + Math.floor(fav_number % 100 / 10) * 10 + Math.floor(fav_number % 1000 / 100)
    
    alert(`${rebmun} = ${fav_number % 10 * 100} + ${Math.floor(fav_number % 100 / 10) * 10 } + ${Math.floor(fav_number % 1000 / 100)}`);
}


//10
function is_even_2(){
    let number = prompt("Number:");

    alert( `Your number is ${number % 2 == 0 ? "even! Congratulations!" : "odd."}`);
}



let buttons = document.getElementById("task-container").children;
console.log(buttons);

for(let i = 0; i < buttons.length; i++){
    let new_id = `task-${i+1}`
    let new_color = i % 2== 0? i*30 : (8-i) * 30;
    buttons[i].setAttribute("id", new_id)

    
    buttons[i].style.backgroundColor  = `hsl(${new_color},70%,60%)`
    buttons[i].style.color  = `hsl(${new_color},50%,20%)`
    buttons[i].style.borderColor  = `hsl(${new_color},70%,40%)`

    buttons[i].addEventListener("mouseover", () => {
        buttons[i].style.backgroundColor  = `hsl(${new_color},100%,70%)`
        buttons[i].style.borderColor  = `hsl(${new_color},80%,50%)`

    })
    buttons[i].addEventListener("mouseleave", () => {
        buttons[i].style.borderColor  = `hsl(${new_color},70%,40%)`
        buttons[i].style.backgroundColor  = `hsl(${new_color},70%,60%)`
    })


    console.log(buttons[i]);
}
