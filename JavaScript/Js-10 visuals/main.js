const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
let tool_s = document.getElementById("tool-select");
let brush_s = document.getElementById("brush-select");

let color_s = document.getElementById("color-select");

let width_s = document.getElementById("width-select")
let height_s = document.getElementById("height-select")

width_s.max = 100;
height_s.max = 300;

let width_label = document.getElementById("width-label")
let height_label = document.getElementById("height-label")
let brush_label = document.getElementById("brush-label")






height_s.style.display = "none";
height_label.style.display = "none";

brush_label.style.display = "none";
brush_s.style.display = "none";





let draw_mode = false;
let brush = "0";


const scale = window.devicePixelRatio;

function rescale(){
    canvas.width = window.innerWidth; //Math.floor(canvas.offsetWidth * scale)
    canvas.height = window.innerHeight//Math.floor(canvas.offsetHeight * scale)
}
ctx.setTransform(1, 0,0,1,0,0);

window.onload = rescale();
window.onresize = rescale();


canvas.addEventListener("click", create_shape);
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", () =>{
    draw_mode = true;
})

canvas.addEventListener("mouseup", () =>{
    draw_mode = false;
})

function check_shape(){
    switch(tool_s.value){
        case "0":
            width_label.textContent = "Size:";
            height_label.style.display = "none";
            height_s.style.display = "none";
            width_s.max = 500;
            height_s.max = 500;
            break;
        case "1":
            width_label.textContent = "Width:";
            height_label.textContent = "Height:";
            height_label.style.display = "block";
            height_s.style.display = "block";
            width_s.max = 500;
            height_s.max = 500;
            break;
        case "2":
            width_label.textContent = "Brush size:";
            height_label.style.display = "none";
            height_s.style.display = "none";
            brush_label.style.display = "block";
            brush_s.style.display = "block";
            width_s.max = 100;
            break;
    }
}

function draw(event){
    if(!draw_mode || tool_s.value != '2'){
        return false;
    }
    let x = event.clientX;
    let y = event.clientY;
    let color = color_s.value;
    let width = width_s.value

    ctx.beginPath();

    switch(brush){
        case '0':
            ctx.arc(x,y,width,20,Math.PI*2, true);
            break;
        case '1':
            ctx.fillRect(x - width /2, y - width/2, width, width);
            break;
        case '2':
            ctx.clearRect(x - width /2, y - width/2, width, width);
            break;
    }
    ctx.fillStyle = color;

    ctx.closePath();

    ctx.fill();
}


function create_shape(event) {

    if(tool_s.value == "2"){
        return false;
    }
    let color = color_s.value;
    let x = event.clientX;
    let y = event.clientY;
    let width = width_s.value
    let height = height_s.value



    ctx.beginPath();

    switch(tool_s.value){
        case '0':
            ctx.arc(x,y,width,20,Math.PI*2, true);
            break;
        case '1':
            ctx.fillRect(x - width /2, y - height/2, width, height);
    }
    ctx.fillStyle = color;
    ctx.closePath();

    ctx.fill();
}


