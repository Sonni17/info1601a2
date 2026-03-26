async function loadListing(){
     fetch(`${BASE_URL}/pokemon`)
    .then(res => res.json())
    .then(data => displayListing(data))
    .catch(err => console.error("loadListing error:", err));

}

function displayListing(pokemon){
     const listing = document.getElementById("listing");
  listing.innerHTML = "";
 
  pokemon.forEach(p => {
    const a = document.createElement("a");
    a.href      = `#${p.name}`;
    a.id        = p.name;
    a.className = "collection-item";
    a.textContent = p.name;
    a.onclick   = () => getPokemon(p.id);
    listing.appendChild(a);

});

async function getPokemon(id){
   currentPokemonId = pokemon_id;
 
  fetch(`${BASE_URL}/pokemon/${pokemon_id}`)
    .then(res => res.json())
    .then(data => displayPokemon(data))
    .catch(err => console.error("getPokemon error:", err));

}

function displayPokemon(pokemon){
     const result = document.getElementById("result");
 
  result.innerHTML = `
    <div id="pokemon-detail" class="card col m12 l10 offset-l1" style="margin-top: 20px">
      <div class="card-image">
        <img class="teal" src="${pokemon.image}" alt="${pokemon.name} Image">
      </div>
      <div class="card-content">
        <span class="card-title"><p>${pokemon.name} #${pokemon.id}</p></span>
        <p>Type1: ${pokemon.type1}</p>
        <p>Weight: ${pokemon.weight}</p>
        <p>Height: ${pokemon.height}</p>
        <a onclick="catchPokemon(${pokemon.id})"
           id="catchBtn"
           style="position:absolute; right:15px; bottom:80px"
           class="btn-floating btn-large waves-effect waves-light red">
          <span class="iconify" style="font-size:40px; margin-top:8px"
                data-icon="mdi-pokeball" data-inline="false"></span>
        </a>
      </div>
    </div>
  `;
}
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