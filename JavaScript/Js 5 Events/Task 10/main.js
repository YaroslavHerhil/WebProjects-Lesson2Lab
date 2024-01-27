let dropdown_content = document.getElementById("dropdown-content");
let dropdown_button = document.getElementById("dropdown-button");

let isdown = false;

dropdown_button.onclick = () => {
    if(!isdown) 
    {
        dropdown_content.style.display = "block";
        isdown = true;
    }
    else{
        dropdown_content.style.display = "none";
        isdown = false;
    }
}
