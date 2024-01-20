// let number = document.getElementById('number');

// function random_number(){
//     var new_number = Math.floor(Math.random() * 100);
//     number.innerHTML = new_number;
// }



//----------------------------------------

// let mouse_zone = document.getElementById('mouse_zone');
// let span_pos = document.getElementById('pos');
// let span_button = document.getElementById('button');

// mouse_zone.addEventListener("mousemove", (event) => {
//         span_pos.innerHTML = `X:${event.clientX} Y:${event.clientY}`
// })

// mouse_zone.addEventListener("mousedown", (event) => {
//     var text = "";
//     switch(event.button){
//         case 0:
//             text = "Left mouse button!";
//             break;
//         case 1:
//             text = "Middle mouse button!";
//             break;
//         case 2:
//             text = "Right mouse button!";
//             break;
//         default: 
//             text = "????";
//             break;
//     }
//     span_button.innerHTML = text;
// })
//--------------------------------
// let hide_button = document.getElementById('hide_button');
// let paragraph = document.getElementById('paragraph');

// let is_hidden = false;


// function hide_text(){
//     console.log(is_hidden);
//     if(is_hidden){
//         is_hidden = false;
//         paragraph.style.opacity = 0;
//     }
//     else{
//         is_hidden = true;
//         paragraph.style.opacity = 1;
//     }
// }

//4
let p_text = document.getElementById('text');

function change_text(text){
   switch(text){
    case "HTML":
        p_text.innerHTML = "Hypertext Markup Language (HTML) is the backbone of web development, acting as the structural foundation for creating and organizing content on the internet. With its tags and attributes, HTML facilitates the creation of text, images, links, and multimedia elements on web pages. Developers harness its power to craft seamless and visually appealing websites. From defining headings and paragraphs to embedding forms and media, HTML serves as the skeleton that browsers interpret to render engaging online experiences."
        break;
    case "CSS":
        p_text.innerHTML = "Cascading Style Sheets (CSS) elevates the aesthetics of web pages, enabling designers to apply styles, layouts, and formatting to HTML elements. This powerful styling language introduces selectors, properties, and values, allowing developers to control the presentation of content. CSS is instrumental in achieving responsiveness, ensuring that websites look sleek and professional on various devices. With its ability to handle colors, fonts, and positioning, CSS empowers designers to unleash creativity, making user interfaces visually captivating and harmonious."
        break;
    case "JS":
        p_text.innerHTML = "JavaScript, often hailed as the \"language of the web,\" brings interactivity and dynamism to static web pages. As a versatile scripting language, it runs on the client side, enabling real-time updates and user interactions. JavaScript seamlessly integrates with HTML and CSS, allowing developers to create responsive and feature-rich applications. From validating forms and manipulating the Document Object Model (DOM) to fetching data asynchronously, JavaScript plays a pivotal role in enhancing user experience on the ever-evolving landscape of the World Wide Web."
        break;
    default:
        p_text.innerHTML = "Huh";break;
   }
   console.log("hello there");
}
