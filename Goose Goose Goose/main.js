let money = 100;
let feathers = 0;

//Productors

//HUDs
let money_hud = document.getElementById("money_hud");
let prod_hud = document.getElementById("production_hud");

let geese_hud = document.getElementById("geese-list"); 

let desc_title = document.getElementById("title"); 
let desc_details = document.getElementById("desc"); 
let desc_stats = document.getElementById("stats"); 

let geese = {
    reg_geese: {
                name: "Regular Goose",
                desc: "Most common type of goose",
                quantity: 0,
                creep: 1.2,
                price: 50,
                money_prod: 5,
                feather_prod: 0,
                },
    fluf_geese: {
                name: "Fluffy Goose",
                desc: "Known for their fluff, might produce feathers",
                quantity: 0,
                creep: 1.2,
                price: 300,
                money_prod: 30,
                feather_prod: 2,
                },
}





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


function description(type){
    desc_title.textContent = geese[type].name;
    desc_details.textContent = geese[type].desc;


    let price = document.createElement('span');
    let m_prod = document.createElement('span');
    let f_prod = document.createElement('span');

    let buffer = document.createElement('span');
    buffer.textContent = "Price: "
    desc_stats.appendChild(buffer)
    price.textContent = geese[type].price;
    desc_stats.appendChild(price)

    buffer = document.createElement('span');
    buffer.textContent = "Money Production: "
    desc_stats.appendChild(buffer)
    m_prod.textContent = geese[type].money_prod;
    desc_stats.appendChild(m_prod)

    buffer = document.createElement('span');
    buffer.textContent = "Feather Production: "
    desc_stats.appendChild(buffer)
    f_prod.textContent = geese[type].feather_prod;
    desc_stats.appendChild(f_prod)
}

function close_description(){
    desc_title.textContent = "Welcome to Goose Goose Goose!";
    desc_details.textContent = "Buy geese, earn money, buy more geese, earn more money - and so on and so on!";

    desc_stats.innerHTML = "";
}



function update_hud(){
    prod_hud.textContent = calculate_prod();
    money_hud.textContent = money;
    
    for(let goose in geese){
        if(geese[goose].quantity > 0){
            console.log(geese_hud.querySelector(`#${goose}-qua`))

            geese_hud.querySelector(`#${goose}-name`).style.display = 'inline';
            geese_hud.querySelector(`#${goose}-name`).innerHTML = geese[goose].name;
            geese_hud.querySelector(`#${goose}-qua`).style.display = 'inline';
            geese_hud.querySelector(`#${goose}-qua`).innerHTML = geese[goose].quantity;
            console.log(geese_hud.querySelector(`#${goose}-qua`))
        }
    }
}



function buy_geese(type){
    if(money < geese[type].price) return false;
    money -= geese[type].price;
    geese[type].quantity++;
    geese[type].price = geese[type].price * geese[type].creep;
    geese[type].creep += 0.01;

    update_hud();
}

function calculate_money_prod(){
    let production
    for(let goose in geese){

    }
    return (geese.reg_geese.quantity * geese.reg_geese.money_prod) + (geese.fluf_geese.quantity * geese.fluf_geese.money_prod);
}


setInterval(money_tick, 1000);

money_tick();
function money_tick(){
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