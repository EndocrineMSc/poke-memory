import apiEndpoints from './apiEndpoints';

export default async function getPokeData(index) {
  try {
    let pokeData = (await fetch(apiEndpoints.getPokemon(index), {
      mode: 'cors',
      method: 'GET',
    }));
    pokeData = await pokeData.json();
    return pokeData;
  } catch (error) {
    return null;
  }
}
