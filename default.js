const server = "https://pokedextr.uwista.dev";

document.addEventListener('DOMContentLoaded', function() {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
    M.Tabs.init(document.querySelectorAll('.tabs'));
    loadListing();
    getPokemon(1);
    loadUser();
});

function closeNav(){
    M.Sidenav.init(document.querySelector('#listing')).close();
}

async function sendRequest(url, method, data){
    const options = {method};
    if(data){
        options.body = JSON.stringify(data);
        options.headers = {'Content-Type':'application/json'};
    }
    let response = await fetch(url, options);
    return response.json();
}

function loadUser(){
    let userid = window.localStorage.getItem('user_id');
    if(userid && userid !== ""){
        document.querySelector('#user_id').value = userid;
    }
}

//gets the id from the id text field or prompts the user if the field is empty
function getId(){
    let user_id = document.querySelector('#user_id').value;

    if(!user_id){
        user_id = prompt("Please enter student ID");
        window.localStorage.setItem('user_id', user_id);
        document.querySelector('#user_id').value = user_id;
        
    }
    return user_id;
}

function toast(message){
    console.log(message);
    alert(message);
}