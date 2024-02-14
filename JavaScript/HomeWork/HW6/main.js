
let name_input = document.getElementById("name-input");

name_input.addEventListener("input", check_text);
function check_text(event){
    const reg = /^[a-zA-Z]$/;
    let length = event.currentTarget.value.length;
    if(reg.test(event.currentTarget.value[length - 1])){
        console.log('is a letter')
    }
    else{
        console.log("is not");
        event.currentTarget.value = event.currentTarget.value.substring(0, length - 1)
    }
}
//a-d0-a9d0-a0-d0asd90a

let modal_win = document.getElementById("modal");

function toggle_modal_window(){
    if(modal_win.style.display == ""){
        modal_win.style.display = "block";

    }
    else{
        modal_win.style.display = "";
    }
}

//aopodioaiodaidopa
let color = 2;
let lights = [
document.getElementById("red"),
document.getElementById("yellow"),
document.getElementById("green"),
]
toggle_lights();

function toggle_lights(){

   switch(color){
    case 0:
        lights[color].style.backgroundColor = "#6e5454"
        lights[color].style.boxShadow = "";
        color++;
        lights[color].style.backgroundColor = "#f1f13f"
        lights[color].style.boxShadow = "0px 0px 30px 5px #f1f13f94";
        break;
    case 1:
        lights[color].style.backgroundColor = "#747457"
        lights[color].style.boxShadow = "";
        color++;
        lights[color].style.backgroundColor = "#93ec17"
        lights[color].style.boxShadow = "0px 0px 30px 5px #93ec1779";
        break;
    case 2:
        lights[color].style.backgroundColor = "#72805f"
        lights[color].style.boxShadow = "";
        color = 0;
        lights[color].style.backgroundColor = "#e23939"
        lights[color].style.boxShadow = "0px 0px 30px 5px #e239399c";
        break;
   }
}



let books  = document.getElementById("books").children;

for(let i = 0;i < books.length; i++){
    books[i].addEventListener('click', highlight_book);
}

function highlight_book(event){
    for(let i = 0;i < books.length; i++){
        books[i].style.backgroundColor = ""
    }
    event.currentTarget.style.backgroundColor = "#f8c14a"
}


let tooltip_btn  = document.getElementById("tooltip-button");
let tooltip  = document.getElementById("tooltip");

tooltip_btn.addEventListener("mouseover",show_tooltip);
tooltip_btn.addEventListener("mouseleave",hide_tooltip);
tooltip.addEventListener("mouseover",show_tooltip);
tooltip.addEventListener("mouseleave",hide_tooltip);

function show_tooltip(){
    tooltip.style.display = "block";
    let tip_rect = tooltip_btn.getBoundingClientRect();
    let pseudo_tip = tooltip.querySelector(":before");
        

    if(tip_rect.top - 75 < 0){
        tooltip.style.top = (tip_rect.top + window.scrollY + 20)+ "px";
        document.documentElement.style.setProperty('--bottomColor', "#7b86a7");
        document.documentElement.style.setProperty('--topColor', "#00000000");
        document.documentElement.style.setProperty('--bottom', "53px");
        
    }
    else{
        debugger
        tooltip.style.top = (tip_rect.top + window.scrollY - 75)+ "px";
        document.documentElement.style.setProperty('--bottomColor', "#00000000");
        document.documentElement.style.setProperty('--topColor', "#7b86a7");
        document.documentElement.style.setProperty('--bottom', "-17px");
        
    }
}

function hide_tooltip(){
    tooltip.style.display = "none";

}
//10-3910489071491
let lists = document.getElementsByTagName("ul");
for(let i = 0;i < lists.length;i++){
    lists[i].addEventListener("click", toggle_element)
}

function toggle_element(event){

    let target = event.target;
    if (target.parentNode === this) {

        let children =  event.currentTarget.getElementsByTagName("li");
        debugger;
        if(children[0].style.display == "none")
            for(let i = 0; i < children.length;i++){
                children[i].style.display = "";
            }
        else
            for(let i = 0; i < children.length;i++){
                children[i].style.display = "none";
            }
    }
}
//0990854453rtyuhioujuguoh

let resizer = document.getElementById("resizer");
let resizable = document.getElementById("resizable-cont");


let resizing = false;
let startX, startY, startWidth, startHeight;

resizer.addEventListener("mousedown", (event) => {
    resizing = true
    startX = event.clientX;
    startY = event.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(resizable).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(resizable).height, 10);
})
document.addEventListener("mouseup", () => {resizing = false})
document.addEventListener('mousemove', resize);






function resize(event){
    if(!resizing)
        return false;
    let new_width = startWidth + event.clientX - startX;
    let new_height = startHeight + event.clientY - startY

    if (new_height < 25) new_height = 25;
    if (new_width < 50) new_width = 50;
    resizable.style.width = new_width + 'px';
    resizable.style.height = new_height + 'px';
}
