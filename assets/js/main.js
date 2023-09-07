const offset = 0;
const limit = 15;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
  const pokemonName = `${pokemon.name}`;
  const pokemonNameUpper = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  return `
  <li class="pokemon">
          <span class="number">${pokemon.number}</span>
          <h2 class="name">${pokemonNameUpper}</h2>

          <div class="details">
            <ol class="types">
              <li class="type">Grass</li>
              <li class="type">Poison</li>
            </ol>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt=${pokemon.name}
            />
          </div>
        </li>
  `;
}

const pokemonList = document.getElementById("pokemon-list");

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});
