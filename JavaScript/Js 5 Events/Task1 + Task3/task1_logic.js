let number = document.getElementById('number');

function random_number(){
    var new_number = Math.floor(Math.random() * 100);
    number.innerHTML = new_number;
}




let hide_button = document.getElementById('hide_button');
let paragraph = document.getElementById('paragraph');

let is_hidden = false;

let buffer = "";
buffer = paragraph.innerHTML;

function hide_text(){
    debugger;
    console.log(is_hidden);
    if(!is_hidden){
        paragraph.innerHTML = "";
        is_hidden = true;
    }
    else{
        paragraph.innerHTML = buffer;
        is_hidden = false;
    }
}