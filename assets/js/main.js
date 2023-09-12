const pokemonList = document.getElementById("pokemon-list");
const loadMoreButton = document.getElementById("load-more-button");
const limit = 5;
let offset = 0;
const maxRecords = 15;

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) => `
      <li class="pokemon ${pokemon.types[0]}">
              <span class="number">#${pokemon.id
                .toString()
                .padStart(3, "0")}</span>
              <h2 class="name">${
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
              }</h2>
    
              <div class="details">
                <ol class="types">
                  ${pokemon.types
                    .map((type) => `<li class="type ${type}">${type}</li>`)
                    .join("")}
                </ol>
                <img src="${pokemon.photo}"
                  alt=${pokemon.name}
                />
              </div>
            </li>
      `
      )
      .join("");

    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const limitNextPage = offset + limit;

  if (limitNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});
