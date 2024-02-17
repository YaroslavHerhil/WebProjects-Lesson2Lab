let money = 100;
let feathers = 0;
let max = 10;
let money_mod = 0;
let feather_mod = 0;

let ds_boost = 0;
let cm_boost = 0;
let bs_boost = 0;

let exp = 0;
let exp_mod = 1;
let exp_to_next = 100;
let exp_creep = 1.5;
let points = 20;
let lvl = 1;

let fragments = 0;


//HUD
let modal = document.getElementById('modal');

let exp_hud = document.getElementById('exp-hud');
let level_hud = document.getElementById('lvl-hud');
let exp_prog = document.getElementById('exp-prog');

let money_hud = document.getElementById("money_hud");
let feather_hud = document.getElementById("feather_hud");
let max_hud = document.getElementById("max-hud");
let act_hud = document.getElementById("act-hud");

let m_prod_hud = document.getElementById("money-production_hud");
let f_prod_hud = document.getElementById("feather-production_hud");

let geese_hud = document.getElementById("geese-list"); 

let desc_title = document.getElementById("title"); 
let desc_details = document.getElementById("desc"); 
let desc_stats = document.getElementById("stats"); 

let buy_geese_cont = document.getElementById("buy-geese-buttons"); 
let buy_builds_cont = document.getElementById("buy-building-buttons"); 

let act_upgrades_cont = document.getElementById("available-upgrades");
let bought_upgrades_cont = document.getElementById("bought-upgrades");
let fragments_hud = document.getElementById("fragments");


//Upgrades effects
let upgrades_effects ={
    unlock_cool_goose: function(){
        geese.cool_geese = locked_geese.cool_geese;
        delete locked_geese.cool_geese;

        upgrades.unlock_bean_goose = locked_upgrades.unlock_bean_goose;
        delete locked_upgrades.unlock_bean_goose;
    },
    unlock_windmills: function(){
            buildings.windmills = locked_buildings.windmills;
            delete locked_buildings.windmills;

            
            upgrades.unlock_academy = locked_upgrades.unlock_academy;
            delete locked_upgrades.unlock_academy;
            upgrades.coop_upgrade = locked_upgrades.coop_upgrade;
            delete locked_upgrades.coop_upgrade;
        },
    reg_geese_feathers: function(){
        geese.reg_geese.feather_prod += 0.2;

        upgrades.fluf_geese_money = locked_upgrades.fluf_geese_money;
        delete locked_upgrades.fluf_geese_money;
    },
    fluf_geese_money:  function(){
        geese.fluf_geese.money_prod += 5;

        upgrades.canada_geese_better = locked_upgrades.canada_geese_better;
        delete locked_upgrades.canada_geese_better;
    },
    canada_geese_better: function(){
        geese.canada_geese.money_prod += 10;
        geese.canada_geese.feather_prod_prod += 5;

        upgrades.fluf_geese_better = locked_upgrades.fluf_geese_better;
        delete locked_upgrades.fluf_geese_better;
    },
    fluf_geese_better:  function(){
        geese.fluf_geese.name = "Fuzzy Goose";
        geese.fluf_geese.desc = "Were known for their fluff. Now proudly wear fuzz instead. Produces a lot of feathers";
        geese.fluf_geese.feather_prod += 8;

        upgrades.dark_sun = locked_upgrades.dark_sun;
        delete locked_upgrades.dark_sun;
    },
    unlock_bean_goose:  function(){
        geese.bean_geese = locked_geese.bean_geese;
        delete locked_geese.bean_geese;

        upgrades.unlock_gold_goose = locked_upgrades.unlock_gold_goose;
        delete locked_upgrades.unlock_gold_goose;
    },
    unlock_gold_goose: function(){
        geese.gold_geese = locked_geese.gold_geese;
        delete locked_geese.gold_geese;

        upgrades.crimson_moon = locked_upgrades.crimson_moon;
        delete locked_upgrades.crimson_moon;
    },
    unlock_academy:  function(){
        buildings.academy = locked_buildings.academy;
        delete locked_buildings.academy;
    },
    coop_upgrade: function(){
        buildings.coop.name = "Stone Coop";
        buildings.coop.desc = "A rather complicated hut for birds to live in. Provides an entirety of 5 spaces for birds. Rock and Stone";
        buildings.coop.effect_amount = '5'
        delete building_effects.coop;
        building_effects.coop = function(){
            max += 5;
        }
        upgrades.field_upgrade = locked_upgrades.field_upgrade;
        delete locked_upgrades.field_upgrade;
    },
    field_upgrade: function(){
        buildings.field.name = "Mowed Field";
        buildings.field.desc = "A field for your birds to play golf and attend BBQ parties. Suburban dream";
        buildings.field.effect_amount = '12'
        delete building_effects.field;

        building_effects.field = function(){
            money_mod += 12;
        }

        upgrades.windmill_upgrade = locked_upgrades.windmill_upgrade;
        delete locked_upgrades.windmill_upgrade;
    },
    windmill_upgrade: function(){
        buildings.windmills.name = "Cloudmill";
        buildings.windmills.desc = "A building, specially designed to mill clouds in the sky. Naturally, by milling clouds it increases your feather gain";
        buildings.windmills.effect_amount = '20'
        delete building_effects.windmills;
        building_effects.windmills = function(){
            feather_mod += 20;
        }

        upgrades.blue_star = locked_upgrades.blue_star;
        delete locked_upgrades.blue_star;
    },
    blue_star: function(){
        let fragment = document.createElement("button");
        fragment.setAttribute("id", "blue-star")
        fragment.textContent = "Blue Star"
        fragments_hud.appendChild(fragment);
        fragments++;
        if(fragments == 3){
            upgrades.blessing = locked_upgrades.blessing;
            delete locked_upgrades.blessing;
        }
    },
    crimson_moon: function(){
        let fragment = document.createElement("button");
        fragment.setAttribute("id", "crimson-moon")
        fragment.textContent = "Crimson Moon"
        fragments_hud.appendChild(fragment);
        fragments++;
        if(fragments == 3){
            upgrades.blessing = locked_upgrades.blessing;
            delete locked_upgrades.blessing;
        }
    },
    dark_sun: function(){
        let fragment = document.createElement("button");
        fragment.setAttribute("id", "dark-sun")
        fragment.textContent = "Dark Sun"
        fragments_hud.appendChild(fragment);
        fragments++;
        if(fragments == 3){
            upgrades.blessing = locked_upgrades.blessing;
            delete locked_upgrades.blessing;
        }
    },
    blessing: function(){
        modal.style.display = 'block';
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
              }
        }
    }

}


//Upgrades
function create_upgrades(){
    return {
        unlock_cool_goose : {
            name: "Cool goose",
            desc: "Unlocks cool goose. 15% cooler than regular geese.",
            price: 1,
        },
        unlock_windmills : {
            name: "Windmills",
            desc: "Unlock a new building. May help with feather gain. Somehow",
            price: 1,
        },
        reg_geese_feathers : {
            name: "The Feathering",
            desc: "Make regular geese an itsy bitsy more fluffy",
            price: 1
        },
    }
}
let upgrades = create_upgrades();

let bought_upgrades = {
    
}

function create_locked_upgrades(){
    return {
        fluf_geese_money:
        {
            name: "Finance lessons",
            desc: "Teach fluffy geese how to make more money instead of just feathers",
            price: 1,
            
        },
        canada_geese_better:
        {
            name: "Blood lust",
            desc: "Bring out the true nature of the canadian geese. Increases canadian geese profits",
            price: 1,
        },
        fluf_geese_better:
        {
            name: "Rebranding",
            desc: "Fluff is out of season now. Rebrand fluffy geese to Fuzzy geese. Will absolutely increase profit",
            price: 2,
            
    
            
        },
        unlock_bean_goose : {
            name: "Bean goose",
            desc: "Unlocks bean goose. It's british, makes a lot of money",
            price: 1,
            
        },
    
        unlock_gold_goose : {
            name: "Gold goose",
            desc: "Unlocks gold goose. Might be the best goose in the game. Who knows",
            price: 2,
            
        },
    
        unlock_academy : {
            name: "The Academy",
            desc: "Unlock The Academy to boost exp. gain. Very sophisticated",
            price: 2,
            
        },
        coop_upgrade:
        {
            name: "Stone coops",
            desc: "Wooden coops are old and small. With new stone coops you'll be able to fit more geese!",
            price: 1,
            
        },
        field_upgrade:
        {
            name: "Mowed Lawns",
            desc: "Those unkept fields are no good for proper geese. Try moving them once in a while at least, okay?",
            price: 1,
            
        },
        windmill_upgrade:
        {
            name: "Cloudmills",
            desc: "We made your mills so tall, that they are literally milling clouds. And it even boosts feather production. Somehow",
            price: 2,
            
        },
    
        blue_star:
        {
            name: "Blue fragment",
            desc: "Part of a bigger picture. The Knowledge and Sight combined into one to form a solid shell. It requires company to grow to it's full potential",
            price: 2,
            
        },
        crimson_moon:
        {
            name: "Crimson fragment",
            desc: "Part of a bigger picture. The Gold and Blood formed into material possesions. It requires company to grow to it's full potential",
            price: 2,
            
        },
        dark_sun:
        {
            name: "Black fragment",
            desc: "Part of a bigger picture. The Time racing against itself to achive progress. It requires company to grow to it's full potential",
            price: 2,
            
        },
    
        blessing:
        {
            name: "A Blessing",
            desc: "By the powers above you have been granted the power of eternity. This upgrade will bring EVERYTHING back to the starting values. You will get to choose a blessing for your future adventure.",
            price: 0,
            
        },
    
    }
}
let locked_upgrades = create_locked_upgrades();

function create_locked_geese(){
    return {
        cool_geese: {
                    name: "Very Cool Goose",
                    desc: "Almost identical to regular goose, but with cool glasses. Might produce feathers.",
                    quantity: 0,
                    active: 0,
                    creep: 1.05,
                    creep_step: 0.003,
                    price: 60,
                    price_type: 'GD',
                    money_prod: 3,
                    feather_prod: 1,
                    },
        bean_geese: {
                    name: "Bean Goose",
                    desc: "Adapted to harsh british climate by eating beans on toast every morning. Produces a lot of gold. God bless the King",
                    quantity: 0,
                    active: 0,
                    creep: 1.2,
                    creep_step: 0.01,
                    price: 500,
                    price_type: 'F',
                    money_prod: 30,
                    feather_prod: 0,
                    },
        gold_geese: {
                    name: "Golden Goose",
                    desc: "Isn't actually a living being but a golden android from detroit. Still has the most networth around here. Literally the best goose in terms of utility",
                    quantity: 0,
                    active: 0,
                    creep: 1.5,
                    creep_step: 0.05,
                    price: 3000,
                    price_type: 'GD',
                    money_prod: 250,
                    feather_prod: 50,
                    },
                
    }
}
let locked_geese = create_locked_geese();
//Productors
function create_geese(){
    return {
        reg_geese :{
                    name: "Regular Goose",
                    desc: "Most common type of goose",
                    quantity: 1,
                    active: 0,
                    creep: 1.05,
                    creep_step: 0.002,
                    price: 50,
                    price_type: 'GD',
                    money_prod: 5,
                    feather_prod: 0,
                    },
        fluf_geese : {
                    name: "Fluffy Goose",
                    desc: "Known for their fluff, might produce feathers",
                    quantity: 0,
                    active: 0,
                    creep: 1.1,
                    creep_step: 0.005,
                    price: 300,
                    price_type: 'GD',
                    money_prod: 5,
                    feather_prod: 2,
                },
        canada_geese : {
                    name: "Canadian Goose",
                    desc: "A menace to society. Skilled in finance. You can catch one using parts of it's bretheren",
                    quantity: 0,
                    active: 0,
                    creep: 1.3,
                    creep_step: 0.03,
                    price: 1800,
                    price_type: 'F',
                    money_prod: 50,
                    feather_prod: 10,
                },
    
    }
}
let geese = create_geese();

let building_effects = {
    coop: function (){
        max += 3;
    },
    field: function (){
        money_mod += 0.03;
    },
    windmills: function (){
        feather_mod += 0.05;
    },
    academy: function (){
        exp_mod += 0.05;
    }   
}

function create_buildings(){
    return {
        coop : {
                    name: "Wooden coop",
                    desc: "A simple wooden hut for birds to live in. Provides 3 spaces for birds. Better than nuthin'",
                    quantity: 0,
                    creep: 2.5,
                    creep_step: 0.2,
                    price: 110,
                    price_type: 'GD',
                    effect_desc: 'Max',
                    effect_amount: '3',
                    
                    },
        field : {
                    name: "Field",
                    desc: "A field for your birds to graze and play. Who knew you could buy land with feathers! Provides a boost to money collection",
                    quantity: 0,
                    creep: 1.3,
                    creep_step: 0.01,
                    price: 400,
                    price_type: 'F',
                    effect_desc: 'Money boost',
                    effect_amount: '3%'
                    },
    }
}
let buildings = create_buildings();


function create_locked_buildings(){
    return {
        windmills : 
        {
            name: "Windmill",
            desc: "A building, specially designed to mill wind. By milling wind it increases feather income. Somehow",
            quantity: 0,
            creep: 1.35,
            creep_step: 0.02,
            price: 1200,
            price_type: 'GD',
            effect_desc: 'Feather boost',
            effect_amount: '5%'
        },
        academy : 
        {
            name: "The Academy",
            desc: "A very tall building filled with allegedly smart people. Boosts exp. gain",
            quantity: 0,
            creep: 1.5,
            creep_step: 0.05,
            price: 750,
            price_type: 'F',
            effect_desc: 'Exp. boost',
            effect_amount: '5%'
        },
    }
    
}
let locked_buildings = create_locked_buildings();



function load_data(){
        geese = JSON.parse(localStorage.getItem("geese"));
        buildings = JSON.parse(localStorage.getItem("buildings"));
        upgrades = JSON.parse(localStorage.getItem("upgrades"));

        bought_upgrades = JSON.parse(localStorage.getItem("bought_upgrades"));

        locked_geese = JSON.parse(localStorage.getItem("locked_geese"));
        locked_buildings = JSON.parse(localStorage.getItem("locked_buildings"));
        locked_upgrades = JSON.parse(localStorage.getItem("locked_upgrades"));

        let game_info = JSON.parse(localStorage.getItem("game_info"));
        exp = game_info.exp;
        exp_mod = game_info.exp;
        exp_creep = game_info.exp_creep;
        exp_to_next = game_info.exp_to_next;
        points = game_info.points;
        lvl = game_info.lvl;
        money = game_info.money;
        feathers = game_info.feathers;
        max = game_info.max;
        money_mod = game_info.money_mod;
        feather_mod = game_info.feather_mod;
        fragments = game_info.fragments;

        if("dark_sun" in bought_upgrades){
            upgrades_effects.dark_sun();
        }
        if("blue_star" in bought_upgrades){
            upgrades_effects.blue_star();
        }
        if("crimson_moon" in bought_upgrades){
            upgrades_effects.crimson_moon();
        }

}


function save_data(){
    try{
        localStorage.setItem('geese', JSON.stringify(geese));   
        localStorage.setItem('buildings', JSON.stringify(buildings));
        localStorage.setItem('upgrades', JSON.stringify(upgrades));

        localStorage.setItem('locked_geese', JSON.stringify(locked_geese));   
        localStorage.setItem('locked_buildings', JSON.stringify(locked_buildings));
        localStorage.setItem('locked_upgrades', JSON.stringify(locked_upgrades));

        localStorage.setItem('bought_upgrades', JSON.stringify(bought_upgrades)); 


        let game_info = {
            exp: exp,
            exp_mod: exp_mod,
            exp_to_next: exp_to_next,
            exp_creep: exp_creep,
            points: points,
            lvl: lvl,
            money: money,
            feathers: feathers,
            max: max,
            money_mod: money_mod,
            feather_mod: feather_mod,
            fragments: fragments,
        }
        localStorage.setItem('game_info', JSON.stringify(game_info))
   

        desc_title.textContent = "Saved!";
        desc_details.textContent = "Your data was saved succesfully. Good going";
    }
    catch(ex){
        desc_title.textContent = "Uh-oh!";
        desc_details.textContent = "There was some trouble while saving your data, condolences\nError: " + ex;
        localStorage.removeItem('geese');   
        localStorage.removeItem('buildings');
        localStorage.removeItem('upgrades');
        localStorage.removeItem('game_info');
    }
    

}



load_data();

load_geese();
load_buttons();
load_upgrades();
game_tick();

let tick = 1000;
for(let i = 0; i < ds_boost;i++){
    tick = tick - (tick * 0.1);
}
setInterval(game_tick, tick);



function load_geese(){
    geese_hud.innerHTML = "";
    for(let goose in geese){
        let new_goose = document.createElement('span');
        let new_goose_qua = document.createElement('span');
        let new_goose_act = document.createElement('span');
        let new_goose_pas = document.createElement('span');
        


        new_goose.setAttribute("id", `g-${goose}-name`);
        new_goose_qua.setAttribute("id", `g-${goose}-qua`);
        new_goose_act.setAttribute("id", `g-${goose}-act`);
        new_goose_pas.setAttribute("id", `g-${goose}-pas`);

        new_goose_pas.style.backgroundColor = 'red';
        new_goose_act.style.backgroundColor = 'green';
        new_goose_pas.style.cursor = 'pointer';
        new_goose_act.style.cursor = 'pointer';
        new_goose_act.style.padding = "0px 10px"
        new_goose_pas.style.padding = "0px 10px"
        new_goose_act.style.userSelect = "none"
        new_goose_pas.style.userSelect = "none"


        new_goose_act.onclick = () => {
            if(geese[goose].active + 1 <= geese[goose].quantity && get_all_active_geese() + 1 <= max){
                geese[goose].active++;
                update_hud();

            }
            
        }
        new_goose_pas.onclick = () => {
            if(geese[goose].active - 1 >= 0){
                geese[goose].active--;
                update_hud();
            }
        }

        new_goose.style.display = 'none';
        new_goose_qua.style.display = 'none';
        new_goose_act.style.display = 'none';
        new_goose_pas.style.display = 'none';
    
        
        new_goose_qua.appendChild(new_goose_act)
        new_goose_qua.appendChild(new_goose_pas)

        geese_hud.appendChild(new_goose)
        geese_hud.appendChild(new_goose_qua)
    }
}

function exp_description(){
    let exp_hud = document.createElement('span');
    let level_hud = document.createElement('span');
    let points_hud = document.createElement('span');

    let buffer = document.createElement('span');
    buffer.textContent = "Experience: ";
    desc_stats.appendChild(buffer);
    exp_hud.textContent = `${exp}/${exp_to_next}`;
    desc_stats.appendChild(exp_hud);

    buffer = document.createElement('span');
    buffer.textContent = "Level: ";
    desc_stats.appendChild(buffer);
    level_hud.textContent = lvl;
    desc_stats.appendChild(level_hud);

    buffer = document.createElement('span');
    buffer.textContent = "Upgrade points: ";
    desc_stats.appendChild(buffer);
    points_hud.textContent = points;
    desc_stats.appendChild(points_hud);
   
}

function description(type){
    let group;
    if(type in geese)
        group = geese;
    else if( type in buildings)
        group = buildings;
    else if( type in upgrades)
        group = upgrades;
    else if( type in bought_upgrades)
        group = bought_upgrades;


    desc_title.textContent = group[type].name;
    desc_details.textContent = group[type].desc;


    let price = document.createElement('span');
    let m_prod = document.createElement('span');
    let f_prod = document.createElement('span');

    let buffer = document.createElement('span');

    buffer.textContent = "Price: "
    desc_stats.appendChild(buffer)
    if(type in buildings || type in geese)
        price.textContent = Math.round(group[type].price * 100) / 100 + group[type].price_type;
    else 
    price.textContent = group[type].price ;
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
    else if(type in buildings){
        buffer = document.createElement('span');
        buffer.textContent = "In possesion:";
        desc_stats.appendChild(buffer)
        let qua = document.createElement('span');
        qua.textContent = group[type].quantity;
        desc_stats.appendChild(qua);


        buffer = document.createElement('span');
        buffer.textContent = group[type].effect_desc;
        desc_stats.appendChild(buffer)
        m_prod.textContent = '+' + group[type].effect_amount;
        desc_stats.appendChild(m_prod)
    }
    
}

function close_description(){
    desc_title.textContent = "Welcome to Goose Goose Goose!";
    desc_details.textContent = "Buy geese, earn money, buy more geese, earn more money - and so on and so on!";

    desc_stats.innerHTML = "";
}

function load_buttons(){
    buy_geese_cont.innerHTML = ""
    for(let goose in geese){
        let button = document.createElement('button');
        button.textContent = geese[goose].name;
        button.onclick = () => {buy_geese(goose);};
        button.onmouseenter = () => {description(goose)};
        button.onmouseleave = () => {close_description()};
        buy_geese_cont.appendChild(button);
    }

    buy_builds_cont.innerHTML = ""
    for(let build in buildings){
        let button = document.createElement('button');
        button.textContent = buildings[build].name;
        button.onclick = () => {buy_build(build);};
        button.onmouseenter = () => {description(build)};
        button.onmouseleave = () => {close_description()};
        buy_builds_cont.appendChild(button);
    }

}


function load_upgrades(){
    act_upgrades_cont.innerHTML = "";
    bought_upgrades_cont.innerHTML = "";
    for(let upgrade in upgrades){
        let button = document.createElement('button');
        button.textContent = upgrades[upgrade].name;
        button.onclick = () => {buy_upgrade(upgrade)};
        button.onmouseenter = () => {description(upgrade)};
        button.onmouseleave = () => {close_description()};
        act_upgrades_cont.appendChild(button);
    }
    for(let upgrade in bought_upgrades){
        let button = document.createElement('button');
        button.textContent = bought_upgrades[upgrade].name;
        button.onmouseenter = () => {description(upgrade)};
        button.onmouseleave = () => {close_description()};
        bought_upgrades_cont.appendChild(button);
    }
}

function update_hud(){
    m_prod_hud.textContent =  Math.round(calculate_money_prod() * 100) / 100 ;
    money_hud.textContent = Math.round(money * 100) / 100 
    f_prod_hud.textContent = Math.round(calculate_feather_prod() * 100) / 100 ;
    feather_hud.textContent = Math.round(feathers * 100) / 100 ;

    max_hud.textContent = max;
    act_hud.textContent = get_all_active_geese();

    level_hud.innerHTML = `Level: ${lvl}`
    exp_hud.innerHTML = `${exp}/${exp_to_next}`
    for(let goose in geese){
        if(geese[goose].quantity > 0){
            geese_hud.querySelector(`#g-${goose}-name`).style.display = 'inline';
            geese_hud.querySelector(`#g-${goose}-name`).innerHTML = geese[goose].name;
            geese_hud.querySelector(`#g-${goose}-qua`).style.display = 'inline';
            geese_hud.querySelector(`#g-${goose}-act`).style.display = 'inline';
            geese_hud.querySelector(`#g-${goose}-act`).innerHTML = geese[goose].active;
            geese_hud.querySelector(`#g-${goose}-pas`).style.display = 'inline';
            geese_hud.querySelector(`#g-${goose}-pas`).innerHTML = Number(geese[goose].quantity - geese[goose].active);
        }

        
    }
}









function buy_upgrade(upgrade){
    if(upgrades[upgrade].price <= points){
        points--;
        upgrades_effects[upgrade]();
        bought_upgrades[upgrade] = upgrades[upgrade];
        if(upgrade != "blessing")
            delete upgrades[upgrade];
        load_buttons();
        load_upgrades();
        load_geese();
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
    building_effects[type]();

    exp += 10;
    update_hud();
    close_description();
    description(type);
}




function buy_geese(type){
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


    exp += 5;

    update_hud();
    close_description();
    description(type);
}

function check_exp(){
    if(exp_prog.value == exp_prog.max){
        lvl++;
        points++;
        exp_to_next = Math.floor(exp_to_next + 100 * exp_creep);
        exp_creep += 0.2;

        
        exp = 0;
        exp_prog.max = exp_to_next;
    }
}





function get_all_active_geese(){
    let active = 0;
    for(let goose in geese){
        active += geese[goose].active;
    }
    return active;
}



function calculate_money_prod(){
    let production = 0;
    for(let goose in geese){
        production += geese[goose].active * geese[goose].money_prod * (1 + money_mod);
    }
    return production;
}

function calculate_feather_prod(){
    let production = 0;
    for(let goose in geese){
        production += geese[goose].active * geese[goose].feather_prod* (1 + feather_mod);
    }
    return production;
}







function game_tick(){
    let produced_money = calculate_money_prod();
    let produced_feathers = calculate_feather_prod();
    let gained_exp = 0;
    gained_exp += produced_money >= 1 ? Math.floor(Math.log10(produced_money)) : 0;
    gained_exp += produced_feathers >= 1 ? Math.floor(Math.log(produced_feathers) / Math.log(5)) : 0;

    exp += Math.floor(gained_exp * (1 + exp_mod)); 

    exp_prog.value = exp;
    check_exp();

    money += produced_money;
    feathers += produced_feathers;

    update_hud();
}






function bless_reset(selected_bless){
    switch(selected_bless){
        case 0: 
            cm_boost++;
            break;
        case 1:
            ds_boost++;
            break;
        case 2:
            bs_boost++;
            break;
        default:
            break;
    }


    money = 100;
    feathers = 0;
    feather_mod = 2 * cm_boost;
    money_mod = 2 * cm_boost;
    max = 10;

    exp = 0;
    exp_mod = 1 + (0.5 * bs_boost);
    exp_to_next = 100;
    exp_creep = 2.0;
    points = 20;
    lvl = 1;

    fragments = 0;


    upgrades = create_upgrades();
    locked_upgrades = create_locked_upgrades();
    bought_upgrades = {};
    
    geese = create_geese();
    locked_geese = create_locked_geese();

    buildings = create_buildings();
    locked_buildings = create_locked_buildings();
    fragments_hud.innerHTML = "";

    load_geese();
    load_buttons();
    load_upgrades();


    let tick = 1000;
    for(let i = 0; i < ds_boost;i++){
        tick = tick - (tick * 0.1);
    }
    setInterval(game_tick, tick);

    game_tick();
    save_data();
    modal.style.display = 'none';
}


let bless_button = document.getElementById("blessing-button");
let blessings = document.querySelectorAll("#blessing-cont div");
let blessing_desc = document.getElementById("blessing-desc");

function select_blessing(bless){
    switch(bless){
        case 0:
            blessing_desc.textContent = "The Blessing of the Crimson Moon. All that is material shall be plentiful. Increases feather and money production in your next loop.";
            bless_button.style.display = 'inline';
            break;
        case 1:
            blessing_desc.textContent = "The Blessing of the Dark Sun. Your time shall be rewarded generously. Game time is a bit faster next loop.";
            bless_button.style.display = 'inline';
            break;
        case 2:
            blessing_desc.textContent = "The Blessing of the Blue Star. Your expertise shall know no bounds. Bonus to experience gain next loop.";
            bless_button.style.display = 'inline';
            break;
        default:break;
    }
    bless_button.onclick = ()=>{ bless_reset(bless)};

}





let main_btn = document.getElementById("main-tab-btn");
let upgrades_btn = document.getElementById("upgrades-tab-btn");


let main_tab = document.getElementById('main');
let upgrades_tab = document.getElementById('upgrades');
function change_tab(tab) {
    switch(tab){
        case 'main':
            upgrades_tab.style.display = 'none'
            main_tab.style.display = 'block'
            
            break;
        case 'upgrades':
            main_tab.style.display = 'none'
            upgrades_tab.style.display = 'block'
            break;
        default:
            break;
    }
}