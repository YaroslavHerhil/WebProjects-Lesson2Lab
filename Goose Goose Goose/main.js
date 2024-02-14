let money = 100;
let feathers = 0;


//HUD


let money_hud = document.getElementById("money_hud");
let feather_hud = document.getElementById("feather_hud");

let m_prod_hud = document.getElementById("money-production_hud");
let f_prod_hud = document.getElementById("feather-production_hud");

let geese_hud = document.getElementById("geese-list"); 

let desc_title = document.getElementById("title"); 
let desc_details = document.getElementById("desc"); 
let desc_stats = document.getElementById("stats"); 

let buy_geese_cont = document.getElementById("buy-geese-buttons"); 
let buy_builds_cont = document.getElementById("buy-building-buttons"); 

let upgrades_cont = document.getElementById("upgrades");
//Upgrades

//Productors
let geese = {
    reg_geese: {
                name: "Regular Goose",
                desc: "Most common type of goose",
                quantity: 0,
                creep: 1.05,
                creep_step: 0.002,
                price: 50,
                price_type: 'GD',
                money_prod: 5,
                feather_prod: 0,
                },
    fluf_geese: {
                name: "Fluffy Goose",
                desc: "Known for their fluff, might produce feathers",
                quantity: 0,
                creep: 1.1,
                creep_step: 0.005,
                price: 300,
                price_type: 'GD',
                money_prod: 8,
                feather_prod: 2,
            },
    canada_geese: {
                name: "Canadian Goose",
                desc: "A menace to society. Skilled in finance. You can catch one using parts of it's bretheren",
                quantity: 0,
                creep: 1.3,
                creep_step: 0.03,
                price: 1800,
                price_type: 'F',
                money_prod: 50,
                feather_prod: 10,
            },
}
let buildings = {
    coop: {
                name: "Wooden coop",
                desc: "A simple wooden hut for birds to live in. Provides 10 spaces for each bird. Better than nuthin'",
                quantity: 1,
                creep: 2.5,
                creep_step: 0.2,
                price: 110,
                price_type: 'GD',
                effect_desc: "Capacity:",
                effect: 10,
                effect_step: 10
                },
    field: {
                name: "Field",
                desc: "A field for your birds to graze and play. Who knew you could buy land with feathers! Provides a boost to money collection",
                quantity: 0,
                creep: 1.3,
                creep_step: 0.01,
                price: 400,
                price_type: 'F',
                effect_desc: "Boost:",
                effect: 0.03,
                effect_step: 0
                },
}

load_data();




function load_data(){
        geese = JSON.parse(localStorage.getItem("geese"));
        buildings = JSON.parse(localStorage.getItem("buildings"));
        money = JSON.parse(localStorage.getItem("money"));
        feathers = JSON.parse(localStorage.getItem("feathers"));
}


function save_data(){
    try{
        localStorage.setItem('geese', JSON.stringify(geese));   
        localStorage.setItem('buildings', JSON.stringify(buildings));
        localStorage.setItem('money', money);
        localStorage.setItem('feathers', feathers);

        desc_title.textContent = "Saved!";
        desc_details.textContent = "Your data saved succesfully. Good going";
    }
    catch(ex){
        desc_title.textContent = "Uh-oh!";
        desc_details.textContent = "There was some trouble while saving your data, condolences\nError: " + ex;
        localStorage.removeItem('geese');   
        localStorage.removeItem('buildings');
        localStorage.removeItem('money');
        localStorage.removeItem('feathers');
    }
    

}





load_geese();

function load_geese(){
    for(let goose in geese){
        new_goose = document.createElement('span');
        new_goose_qua = document.createElement('span');
        new_goose.setAttribute("id", `${goose}-name`)
        new_goose_qua.setAttribute("id", `${goose}-qua`)
        
        new_goose.style.display = 'none'
        new_goose_qua.style.display = 'none'
    
        geese_hud.appendChild(new_goose)
        geese_hud.appendChild(new_goose_qua)
    }
}


function description(type){
    let group;
    if(type in geese)
        group = geese;
    else 
        group = buildings;


    desc_title.textContent = group[type].name;
    desc_details.textContent = group[type].desc;


    let price = document.createElement('span');
    let m_prod = document.createElement('span');
    let f_prod = document.createElement('span');

    let buffer = document.createElement('span');

    buffer.textContent = "Price: "
    desc_stats.appendChild(buffer)
    
    price.textContent = Math.round(group[type].price * 100) / 100 + group[type].price_type;
    desc_stats.appendChild(price)

    if(type in geese){
        buffer = document.createElement('span');
        buffer.textContent = "Money Production: "
        desc_stats.appendChild(buffer)
        m_prod.textContent = group[type].money_prod;
        desc_stats.appendChild(m_prod)

        buffer = document.createElement('span');
        buffer.textContent = "Feather Production: "
        desc_stats.appendChild(buffer)
        f_prod.textContent = group[type].feather_prod;
        desc_stats.appendChild(f_prod)
    }
    else{
        buffer = document.createElement('span');
        buffer.textContent = group[type].effect_desc;
        desc_stats.appendChild(buffer)
        m_prod.textContent = '+' + group[type].effect;
        desc_stats.appendChild(m_prod)
    }
    
}

function close_description(){
    desc_title.textContent = "Welcome to Goose Goose Goose!";
    desc_details.textContent = "Buy geese, earn money, buy more geese, earn more money - and so on and so on!";

    desc_stats.innerHTML = "";
}

function load_buttons(){

    for(let goose in geese){
        let button = document.createElement('button');
        button.textContent = geese[goose].name;
        button.onclick = () => {buy_geese(goose);};
        button.onmouseenter = () => {description(goose)};
        button.onmouseleave = () => {close_description()};
        buy_geese_cont.appendChild(button);
    }


    for(let build in buildings){
        let button = document.createElement('button');
        button.textContent = buildings[build].name;
        button.onclick = () => {buy_build(build);};
        button.onmouseenter = () => {description(build)};
        button.onmouseleave = () => {close_description()};
        buy_builds_cont.appendChild(button);
    }
}
load_buttons();
function update_hud(){
    m_prod_hud.textContent =  Math.round(calculate_money_prod() * 100) / 100 ;
    money_hud.textContent = Math.round(money * 100) / 100 
    f_prod_hud.textContent = Math.round(calculate_feather_prod() * 100) / 100 ;
    feather_hud.textContent = Math.round(feathers * 100) / 100 ;
    for(let goose in geese){
        if(geese[goose].quantity > 0){

            geese_hud.querySelector(`#${goose}-name`).style.display = 'inline';
            geese_hud.querySelector(`#${goose}-name`).innerHTML = geese[goose].name;
            geese_hud.querySelector(`#${goose}-qua`).style.display = 'inline';
            geese_hud.querySelector(`#${goose}-qua`).innerHTML = geese[goose].quantity + "/" + buildings.coop.effect;
        }

        
    }
}

function buy_build(type){
    if(buildings[type].price_type == "GD"){
        if(money < buildings[type].price) return false;
        money -= buildings[type].price;
    }
    else{
        if(feathers < buildings[type].price) return false;
        feathers -= buildings[type].price;
    }
    
    buildings[type].quantity++;
    buildings[type].price = buildings[type].price * buildings[type].creep;
    buildings[type].creep += buildings[type].creep_step;
    buildings[type].effect += buildings[type].effect_step;

    update_hud();
    close_description();
    description(type);
}

function buy_geese(type){
    if(buildings.coop.effect <= geese[type].quantity) return false;
    if(geese[type].price_type == "GD"){
        if(money < geese[type].price) return false;
        money -= geese[type].price;
    }
    else{
        if(feathers < geese[type].price) return false;
        feathers -= geese[type].price;
    }
    geese[type].quantity++;
    geese[type].price = geese[type].price * geese[type].creep;
    geese[type].creep += geese[type].creep_step;

    update_hud();
    close_description();
    description(type);
}

function calculate_money_prod(){
    let production = 0;
    for(let goose in geese){
        production += geese[goose].quantity * geese[goose].money_prod * (1 + (buildings.field.effect * buildings.field.quantity));
    }
    return production;
}

function calculate_feather_prod(){
    let production = 0;
    for(let goose in geese){
        production += geese[goose].quantity * geese[goose].feather_prod;
    }
    return production;
}


setInterval(game_tick, 100);

game_tick();
function game_tick(){
    money += calculate_money_prod();
    feathers += calculate_feather_prod()

    update_hud();
}
let main_btn = document.getElementsByClassName("tab-btn")[0];
change_tab(main_btn, 'main');

function change_tab(target, tab) {
    let tabs = document.getElementsByClassName("tabs");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    let tab_btns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tab_btns.length; i++) {
        tab_btns[i].style.backgroundColor = "#f3bd76";
    }
    document.getElementById(tab).style.display = "block";
    target.style.backgroundColor = "#e7b068";
}