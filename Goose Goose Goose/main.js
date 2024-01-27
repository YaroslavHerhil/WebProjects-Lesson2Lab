class Goose{
    constructor(){
        this._production = 1;
        this._level = 0;
    }


    get getProduction(){
        return this._production
    }
}

const RegularGoose = class extends Goose{
    constructor(){
    }
}

let money = 0;




let money_hud = document.getElementById("money_hud");

setInterval(MoneyTick(), 1000);

function MoneyTick(){
    debugger;
    money += RegularGoose.getProduction;

    money_hud.innerHTML = money;
}