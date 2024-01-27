let progress_bar = document.getElementById("bar");

function progress_progress_bar(){
    let new_value = Number(progress_bar.getAttribute("value"));
    let remaimning = 1 - new_value;
    console.log(remaimning * 0.05);
    progress_bar.setAttribute("value", new_value + remaimning * 0.05);
}