import apiEndpoints from './apiEndpoints';

export default async function getPokeData(index) {
  try {
    const pokeData = (await fetch(apiEndpoints.getPokemon(index), {
      mode: 'cors',
      method: 'GET',
    })).json();
    return pokeData;
  } catch (error) {
    return null;
  }
}
