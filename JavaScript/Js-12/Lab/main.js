let user_input = document.getElementById('user-input');
let avatar = document.getElementById('avatar');
let user_name = document.getElementById('name-span');
let user_email = document.getElementById('email-span');
let user_login = document.getElementById('login-span');
let repos_anchor = document.getElementById('repos-url');
let html_anchor = document.getElementById('html-url');
let user_bio = document.getElementById('bio-span');



function get_user_data() {
    axios.get(`https://api.github.com/users/${user_input.value}`)
        .then(response => {
            avatar.src = response.data.avatar_url;
            user_name.textContent = response.data.name;
            user_login.textContent = response.data.login;
            user_email.textContent = response.data.email;
            user_bio.textContent = response.data.bio;
            
            html_anchor.textContent = response.data.html_url;
            html_anchor.href = response.data.html_url;
            repos_anchor.textContent = response.data.repos_url;
            repos_anchor.href = response.data.repos_url;
            console.log(response);
        })
        .catch(error => {
            alert("Unable to find a user by this name")
        });

}



