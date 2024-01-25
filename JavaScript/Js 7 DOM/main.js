let number_text = document.getElementById("number-span");

let number_value = 0;


function number_change(up){
    number_value = (up ? number_value + 1 : number_value - 1);

    number_text.textContent = number_value;
}



/*0-0--=0-38958290ue9r90f0dikofhiehuo4utuipjgnvkjla */
let block_container = document.getElementById("block-container");
let comments_container = document.getElementById("comments");

let review_input = document.getElementById("review-input");
let user_name = document.getElementById("user-input");


function add_block(){
    let new_div = document.createElement("div");
    new_div.style.backgroundColor = get_random_color();
    new_div.onclick = () => {review_input.style.color = new_div.style.backgroundColor;user_name.style.color = new_div.style.backgroundColor;}

    let new_close_div = document.createElement("div");
    new_close_div.setAttribute("id", "close")
    new_close_div.textContent = "X";
    new_close_div.onclick = () => { new_div.remove();}


    new_div.appendChild(new_close_div);
    block_container.appendChild(new_div);
    
}

function post_comment(){
    let line = document.createElement('hr');

    let new_comment_cont = document.createElement("div");
    new_comment_cont.setAttribute("class", "comment-container");

    let new_comment_para = document.createElement("p");
    let new_commenter_name = document.createElement("h3");

    new_comment_cont.style.color = review_input.style.color;

    new_comment_para.textContent = review_input.value;


    if(user_name.value){
        new_commenter_name.textContent = user_name.value
    }
    else{
        new_commenter_name.textContent = "User";
    }

    new_comment_cont.appendChild(new_commenter_name);
    new_comment_cont.appendChild(line);
    new_comment_cont.appendChild(new_comment_para);
    new_comment_cont.appendChild(line);
    


    comments_container.appendChild(new_comment_cont);
}




function get_random_color() {
    let color = '#'
    let red = get_random_int(0,255).toString(16);
    let green = get_random_int(0,255).toString(16);
    let blue = get_random_int(0,255).toString(16);


    return color + red + green + blue;
}

function get_random_int(min, max) {   
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*haidfjpaskfl;jfjkhaoikfljasnkfhasofk,.asnhfkjsaifp[]sanbfhvasuiido[';asjdfjkhasif*/

let stored_countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
    'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
    'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica',
    'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor (Timor-Leste)',
    'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France',
    'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti',
    'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan',
    'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon',
    'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali',
    'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro',
    'Morocco', 'Mozambique', 'Myanmar (Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria',
    'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
    'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
    'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
    'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname',
    'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia',
    'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay',
    'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];
let suggestions = [];
let search_input = document.getElementById("search-input");
let search_suggest = document.getElementById("search-suggest");



function suggest_text(){
    suggestions = [];
    search_suggest.textContent = "";

    let prompt = search_input.value.toLowerCase();
    
    for(let country in stored_countries){
        
    }

    stored_countries.every(country => {
        if(country.toLowerCase().includes(prompt) && prompt != ""){
            if(suggestions.length <= 5)
                suggestions.push(country); 
            else{
                suggestions.push("...")
                return false;
            }
            return true;
        }
    });

    if(suggestions.length > 0){
        suggestions.forEach( suggestion => {
            let new_suggest = document.createElement("p");
            new_suggest.textContent = suggestion;
            if(new_suggest.textContent != "...")
                new_suggest.onclick = () => {search_input.value = new_suggest.textContent;search_suggest.style.display = "none";}
            search_suggest.appendChild(new_suggest);
        });
        search_suggest.style.display = "block";
    }
    else{
        search_suggest.style.display = "none";
    }
}

