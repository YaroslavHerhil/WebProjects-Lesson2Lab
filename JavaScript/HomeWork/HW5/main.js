let car = {
    manufacturer : "GameFreak",
    model : "Wolk",
    year_of_release : "2077",
    average_speed : 90
}

let car_para = document.getElementById("car-info");
let car_butt = document.getElementById("car-time");

car_butt.addEventListener("click", () =>{
    let dest = prompt("Distance:");
    alert(trip_time_calc(dest, car) + " hr")
})


function car_info(some_car){
    return `Manufactured by: ${some_car.manufacturer} | | Model: ${some_car.model} | | Year of release: ${some_car.year_of_release} | | Average speed: ${some_car.average_speed}`;
}

function trip_time_calc(dest, some_car){
    let time = dest / some_car.average_speed;
    return Math.round((time + Math.floor(time * 0.25)) * 100) / 100;
}

car_para.textContent = car_info(car);

//kjkljkljkljkljkljkljkljkljkljkljkljkljkljkljkljkljkljkljkljkljkljklj

let fra1_input = document.getElementById("fraction-1");
let fra2_input = document.getElementById("fraction-2");


let add_btn = document.getElementById("add");
let substract_btn = document.getElementById("substract");
let multiply_btn = document.getElementById("multiply");
let divide_btn = document.getElementById("divide");

add_btn.onclick = () => {
    let fraction_1 = {numer: fra1_input.value.split("/")[0], denom: fra1_input.value.split("/")[1]};
    let fraction_2 = {numer: fra2_input.value.split("/")[0], denom: fra2_input.value.split("/")[1]};

    let result = add_fractions(fraction_1, fraction_2);
    alert(`${fraction_1.numer}/${fraction_1.denom} + ${fraction_2.numer}/${fraction_2.denom} = ${result.numer}/${result.denom}`)
}
substract_btn.onclick = () => {
    let fraction_1 =  {numer: fra1_input.value.split("/")[0], denom: fra1_input.value.split("/")[1]};
    let fraction_2 =  {numer: fra2_input.value.split("/")[0], denom: fra2_input.value.split("/")[1]};

    let result = substract_fractions(fraction_1, fraction_2);
    alert(`${fraction_1.numer}/${fraction_1.denom} - ${fraction_2.numer}/${fraction_2.denom} = ${result.numer}/${result.denom}`)
}
multiply_btn.onclick = () => {
    let fraction_1 =  {numer: fra1_input.value.split("/")[0], denom: fra1_input.value.split("/")[1]};
    let fraction_2 =  {numer: fra2_input.value.split("/")[0], denom: fra2_input.value.split("/")[1]};

    let result = multiply_fractions(fraction_1, fraction_2);
    alert(`${fraction_1.numer}/${fraction_1.denom} * ${fraction_2.numer}/${fraction_2.denom} = ${result.numer}/${result.denom}`)
}
divide_btn.onclick = () => {
    let fraction_1 =  {numer: fra1_input.value.split("/")[0], denom: fra1_input.value.split("/")[1]};
    let fraction_2 =  {numer: fra2_input.value.split("/")[0], denom: fra2_input.value.split("/")[1]};

    let result = divide_fractions(fraction_1, fraction_2);
    alert(`${fraction_1.numer}/${fraction_1.denom} / ${fraction_2.numer}/${fraction_2.denom} = ${result.numer}/${result.denom}`)
}



function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
function shorten(fraction){
    let divisor = gcd(fraction.numer, fraction.denom);
    
    let new_numer = fraction.numer / divisor;
    let new_denom = fraction.denom / divisor;

    return { numer: new_numer, denom: new_denom };
}

function add_fractions(fraction1, fraction2) {
    let common_denom = fraction1.denom * fraction2.denom;
    
    let res_numer = fraction1.numer * fraction2.denom + fraction2.numer * fraction1.denom;
    
    return shorten({ numer: res_numer, denom: common_denom });
}

function substract_fractions(fraction1, fraction2) {
    let common_denom = fraction1.denom * fraction2.denom;
    
    let res_numer = fraction1.numer * fraction2.denom - fraction2.numer * fraction1.denom;
    
    return shorten({ numer: res_numer, denom: common_denom });
}

function multiply_fractions(fraction1, fraction2) {
    let res_denom = fraction1.denom * fraction2.denom;
    
    let res_numer = fraction1.numer * fraction2.numer;
    
    return shorten({ numer: res_numer, denom: res_denom });
}
function divide_fractions(fraction1, fraction2) {
    let res_denom = fraction1.numer * fraction2.denom;
    
    let res_numer = fraction1.denom * fraction2.denom;
    
    return shorten({ numer: res_numer, denom: res_denom });
}

//iopaopdopadopaidpoiaopdiaopdiopaidop

let time_span = document.getElementById("time");

let butn_hours = document.getElementById("add-hours");
let butn_mins = document.getElementById("add-mins");
let butn_secs = document.getElementById("add-secs");


let time_add = document.getElementById("add-time");

let time = {
    seconds: new Date().getSeconds(),
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
}

butn_hours.onclick = () => { add_hours(time);};
butn_mins.onclick = () => { add_minutes(time);};
butn_secs.onclick = () => { add_seconds(time);};


function show_time(time){
    time_span.textContent = `${time.hours}:${time.minutes}:${time.seconds}`;
}

function check_time(time){
    let leftovers = 0;

    if(time.seconds >= 60){
        leftovers = Math.floor(time.seconds / 60);
        time.seconds = time.seconds % 60;
    }
    time.minutes = time.minutes + leftovers;
    leftovers = 0
    if(time.minutes >= 60){
        leftovers = Math.floor(time.minutes / 60);
        time.minutes = time.minutes % 60;
    }
    time.hours = time.hours + leftovers;
    if(time.hours >= 24){
        time.hours = time.hours % 24;
    }
}

function add_seconds(time){
    let value = Number(time_add.value);

    time.seconds = time.seconds + value;
    check_time(time);
    show_time(time);
}
function add_minutes(time){
    let value = Number(time_add.value);

    time.minutes = time.minutes + value;
    check_time(time);
    show_time(time);
}
function add_hours(time){
    let value = Number(time_add.value);

    time.hours = time.hours + value;
    check_time(time);
    show_time(time);
}







show_time(time);