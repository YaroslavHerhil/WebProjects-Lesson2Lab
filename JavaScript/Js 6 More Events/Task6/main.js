let headlines = Array(
    "What is Lorem Ipsum?",
    "Why do we use it?", 
    "Where does it come from?",
);

let paraghraphs = Array(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever "+
    "since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five " + 
    "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of" +
    "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including" +
    "versions of Lorem Ipsum.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using " +
    "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like " +
    "readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search " +
    "for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, " +
    "sometimes on purpose (injected humour and the like).", 
    "Contrary to popular belief, Lorem Ipsum Is not simply random text. It has roots in a plece of classical Latin literature from 45 BC, making It " +
    "over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin " +
    "words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable " +
    "source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by " +
    "Cicero, written in 45 BC.",
);
let main_content = document.getElementById("content");


function remove_article(element_id){
    let removable_element = document.getElementById(element_id);

    removable_element.remove();
}

for(let i = 0; i < 3;i++){



    let article = document.createElement('div');
    article.setAttribute("id", ("article_" + i));

    let menu = document.createElement("div");
    menu.setAttribute("class", "menu");
    

    let headline = document.createElement('h3');
    headline.innerHTML = headlines[i];
    let line = document.createElement('hr');

    let para = document.createElement('p');
    para.innerHTML = paraghraphs[i];

    let buf_button = document.createElement('button');
    buf_button.innerHTML = "Remove";



    buf_button.addEventListener("click", () => {
        remove_article(article.id);
    })



    article.appendChild(menu);
    article.appendChild(para);
    article.appendChild(line);
    menu.appendChild(headline);
    menu.appendChild(buf_button);



    main_content.appendChild(article);
}
