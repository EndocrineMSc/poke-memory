/* eslint-disable no-use-before-define */
import '../App.css';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import getPokeData from '../getPokeData';
import Card from './Card';
import { eventHandler, MON_CLICKED } from '../eventHandler';
import apiEndpoints from '../apiEndpoints';

function CardField() {
  const [pokeData, setPokeData] = useState([]);
  const [clickedMons, setClickedMons] = useState([]);
  const [pokeBallUrl, setBallUrl] = useState('');

  useEffect(() => {
    getRandomPokemon();
  }, []);

  useEffect(() => {
    const fetchPokeballImage = async () => {
      try {
        await fetch(apiEndpoints.getLoadingSprite)
          .then((response) => response.json())
          .then((response) => setBallUrl(response.sprites.default));
      } catch (error) {
        console.error('error fetching data');
      }
    };

    fetchPokeballImage();
  }, []);

  const getRandomIndex = () => {
    const index = Math.floor(Math.random() * 150) + 1;
    return index;
  };

  const handleCardClick = (e) => {
    const pokeName = e.currentTarget.getAttribute('data-name');

    if (clickedMons.includes(pokeName)) {
      setClickedMons([]);
      eventHandler.invoke(MON_CLICKED, false);
    } else {
      const newMons = clickedMons;
      newMons.push(pokeName);
      setClickedMons(newMons);
      eventHandler.invoke(MON_CLICKED, true);
    }
    setPokeData([]);
    setTimeout(() => getRandomPokemon(), 500);
  };

  const getRandomPokemon = async () => {
    const indeces = [];
    for (let i = 0; i < 10; i += 1) {
      const index = getRandomIndex();
      if (indeces.includes(index)) {
        i -= 1;
      } else {
        indeces.push(index);
      }
    }
    const pokemonDataArray = await Promise.all(
      indeces.map(async (index) => {
        const response = await getPokeData(index);
        return { name: response.name, sprite: response.sprites.front_default, id: uuidv4() };
      }),
    );
    setPokeData(pokemonDataArray);
  };

  return (
    <div className="cardField">
      { !pokeData[0] ? (
        [...Array(10)].map(() => (
          <button
            key={uuidv4()}
            type="button"
            className="cardButton"
            aria-label="PokeCard loading"
          >
            <Card
              image={pokeBallUrl}
              name="loading"
            />
          </button>
        )))
        : pokeData.map((data) => (
          <button
            key={data.id}
            data-name={data.name}
            type="button"
            className="cardButton"
            onClick={handleCardClick}
            aria-label={`PokeCard ${data.name}`}
          >
            <Card
              image={data.sprite}
              name={data.name}
            />
          </button>
        ))}
    </div>
  );
}

export default CardField;
