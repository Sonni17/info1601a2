const BASE_URL = "https://pokedextr.uwista.dev";

async function loadListing() {
    const res     = await fetch(`${BASE_URL}/pokemon`);
    const pokemon = await res.json();
    displayListing(pokemon);
}

function displayListing(pokemon) {
    const listing = document.getElementById("listing");
    listing.innerHTML = "";

    pokemon.forEach(p => {
        const a       = document.createElement("a");
        a.href        = `#${p.name}`;
        a.id          = p.name;
        a.className   = "collection-item";
        a.textContent = p.name;
        a.setAttribute("onclick", `getPokemon(${p.id})`);
        listing.appendChild(a);
    });
}

async function getPokemon(id) {
    const res     = await fetch(`${BASE_URL}/pokemon/${id}`);
    const pokemon = await res.json();
    displayPokemon(pokemon);
}

function displayPokemon(pokemon) {
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

// Bonus Functions
async function catchPokemon(pokemon_id) {
    const user_id = getId();
    const name    = prompt('Please enter a name');
    if (!name) return;

    await fetch(`${BASE_URL}/mypokemon/${user_id}`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ pokemon_id: String(pokemon_id), name: name })
    });

    getMyPokemon();
}

async function getMyPokemon() {
    const user_id = getId();
    if (!user_id) return;

    const res       = await fetch(`${BASE_URL}/mypokemon/${user_id}`);
    const mypokemon = await res.json();
    displayMyPokemon(mypokemon);
}

function displayMyPokemon(mypokemon) {
    const table = document.getElementById("myPokeListing");
    table.innerHTML = "";

    mypokemon.forEach(p => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${p.name}</td>
            <td>${p.species}</td>
            <td>
                <button class="waves-effect waves-light btn"
                        onclick="releasePokemon(${p.user_pokemon_id})">Release</button>
            </td>
        `;
        table.appendChild(tr);
    });
}

async function releasePokemon(user_pokemon_id) {
    const user_id = getId();

    await fetch(`${BASE_URL}/mypokemon/${user_id}/${user_pokemon_id}`, {
        method: "DELETE"
    });

    // toast();
    getMyPokemon();
}

// Load pokemon listing on page start
loadListing();