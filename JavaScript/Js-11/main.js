const load_button = document.getElementById("load-butt");
const info_container = document.getElementById("info-container");











async function load_data(){
    try{                
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        if(!(responce.ok)){
            throw new Error("Your responce is not ok :'( ;" + responce.statusText);
        }
        const data = await  responce.json();


        console.log(data.title);
        
    }
    catch(error){
        alert(error);
    }
}

load_button.addEventListener("click", load_data);