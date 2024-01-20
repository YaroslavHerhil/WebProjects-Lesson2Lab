let number = document.getElementById('number');

function random_number(){
    var new_number = Math.floor(Math.random() * 100);
    number.innerHTML = new_number;
}


let hide_button = document.getElementById('hide_button');
let paragraph = document.getElementById('paragraph');

let is_hidden = false;


function hide_text(){
    console.log(is_hidden);
    if(is_hidden){
        is_hidden = false;
        paragraph.style.opacity = 0;
    }
    else{
        is_hidden = true;
        paragraph.style.opacity = 1;
    }
}