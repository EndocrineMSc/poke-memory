const apiEndpoints = {
  getLoadingSprite: 'https://pokeapi.co/api/v2/item/poke-ball/',
  getPokemon(id) {
    return `https://pokeapi.co/api/v2/pokemon/${id}/`;
  },
};

export default apiEndpoints;
