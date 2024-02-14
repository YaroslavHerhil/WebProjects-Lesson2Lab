
let track = document.getElementById('track');
let bar = document.getElementById('bar');


track.addEventListener("mousedown", start_track);

function start_track(event) {
  start_pos = event.clientX;
  document.addEventListener("mouseup", end_track);
  document.addEventListener("mousemove", trackbar);
}

function trackbar(event) {
  let new_pos = event.clientX;
  let bar_rect = bar.getBoundingClientRect();
  if(new_pos < bar_rect.x) new_pos = bar_rect.x;
  if(new_pos > bar_rect.x + bar_rect.width - 15) new_pos = bar_rect.x + bar_rect.width -15;
  track.style.left = new_pos + "px";
}

function end_track() {
  document.removeEventListener("mouseup", end_track);
  document.removeEventListener("mousemove", trackbar);
}

//0as90d9pad9ad9a90da90

let current = 0;
let image = document.getElementById('image');
let forward = document.getElementById('grape-forward');
let backward = document.getElementById('grape-backward');

let grapes = [
  "grapes/1.jpg",
  "grapes/2.jpg",
  "grapes/3.jpg",
  "grapes/4.jpg",
  "grapes/5.jpg",
]


function check_grapes(){
  backward.style.backgroundColor = "CCC";
  forward.style.backgroundColor = "CCC";
  forward.style.opacity  = 1;
  backward.style.opacity  = 1;

  backward.onclick = () => {toggle_grape(-1)} ;
  forward.onclick = () => {toggle_grape(1)} ;
  
  if(current == 0){
    backward.onclick = "";
    backward.style.opacity  = 0.5;

  }

  if(current == 4){
    forward.onclick = "";
    forward.style.opacity  = 0.5;
  }

}

check_grapes();

function toggle_grape(step){
    current += step;
    image.src = grapes[current];
    check_grapes();
}

//0asd980a8d908a90d8a90sd89as

let articles = document.getElementById('articles').getElementsByTagName('h3')
for(let i = 0; i < articles.length; i++){
      articles[i].addEventListener("click", toggle_article)
}

function toggle_article(){
  



  let this_content = this.parentNode.querySelector("span");
  
  if(this_content.style.display == "none" || this_content.style.display == ""){
    this_content.style.display = "block";
  }
  else{
    this_content.style.display = "none";
  }


  let all_content = this.parentNode.parentNode.getElementsByTagName("span");
  for(let i = 0; i , all_content.length; i++){
    if(all_content[i] != this_content)
      all_content[i].style.display = "none";
  }
}