export default async function getPokeData(index) {
  try {
    const pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`, {
      mode: 'cors',
      method: 'GET',
    })
      .then((response) => response.json());
    return pokeData;
  } catch (error) {
    return null;
  }
}
