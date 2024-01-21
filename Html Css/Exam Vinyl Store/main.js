

// vinyl_2.addEventListener("click", function()
//     {
//         alert("eee hee hee hee hee");
//     }
// ) 

let image_tags = document.getElementsByTagName('img');
console.log(image_tags);

let images_all = document.querySelectorAll('img');
console.log(images_all);

let images = document.querySelector('img');
console.log(images);


// images.forEach(image => {
//     image.onclick = function(){
//         alert('Aye');
//     };
// });

for (image of image_tags){
    image.addEventListener("click", function(){
        alert('Aye');
    });
}


// document.addEventListener("mousemove", (event) => {
//     console.log(`x:${event.clientX} y:${event.clientY}`);
// })

window.addEventListener("", (event) => {
    console.log(`Page Load Loaded :)`);
})


let counter = 12.50;
function on_tick(){
    console.log("Inflation!");
    counter++;
    document.getElementById('price_1').innerHTML = counter;
}
setInterval(on_tick, 100);

