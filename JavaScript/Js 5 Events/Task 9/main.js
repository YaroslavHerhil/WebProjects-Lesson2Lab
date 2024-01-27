let like_button = document.getElementById("like-container");
let like_counter = document.getElementById("like-counter");

let likes = 0;

function like(){
    likes++;
    like_counter.textContent = likes;
}