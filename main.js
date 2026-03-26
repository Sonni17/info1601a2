async function loadListing(){
     fetch(`${BASE_URL}/pokemon`)
    .then(res => res.json())
    .then(data => displayListing(data))
    .catch(err => console.error("loadListing error:", err));

}

function displayListing(pokemon){
    //receives an array of pokemon objects and displays it on the page in #listing

}

async function getPokemon(id){
   //makes a request to the get pokemon detail API url
   //gets the data from the request and sends it to displayPokemon()

}

function displayPokemon(pokemon){
    //receives a pokemon object and displays its data on the page in #result
}

// Bonus Functions

async function catchPokemon(pokemon_id){
    const user_id = getId();//gets the userid from the text field or prompts the user
    const name = prompt('Please enter a name')//prompts the user to enter a name

    //makes a request to the capture pokemon API url passing the name data in the body
}

async function getMyPokemon(){
    //makes a request to the get captured pokemon API url
    //get the data from the request and sends it to displayMyPokemon()
    const user_id = getId();

}

function displayMyPokemon(mypokemon){
    //receives an array of mypokemon objects and displays its data on the page in #myPokeListing
}

async function releasePokemon(user_pokemon_id){
    const user_id = getId();//gets the userid from the text field or prompts the user
    //makes a request to the release pokemon API url then call getMyPokemon() to reload the table
    // toast();  //send a toast message after the request is made
}