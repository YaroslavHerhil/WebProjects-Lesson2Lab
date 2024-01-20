let mouse_zone = document.getElementById('mouse_zone');
let span_pos = document.getElementById('pos');
let span_button = document.getElementById('button');

mouse_zone.addEventListener("mousemove", (event) => {
        span_pos.innerHTML = `X:${event.clientX} Y:${event.clientY}`
})

mouse_zone.addEventListener("mousedown", (event) => {
    var text = "";
    switch(event.button){
        case 0:
            text = "Left mouse button!";
            break;
        case 1:
            text = "Middle mouse button!";
            break;
        case 2:
            text = "Right mouse button!";
            break;
        default: 
            text = "????";
            break;
    }
    span_button.innerHTML = text;
})