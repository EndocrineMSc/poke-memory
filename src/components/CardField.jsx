/* eslint-disable no-use-before-define */
import '../App.css';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import getPokeData from '../getPokeData';
import Card from './Card';
import { eventHandler, MON_CLICKED } from '../eventHandler';

function CardField() {
  const [pokeData, setPokeData] = useState([]);
  const [clickedMons, setClickedMons] = useState([]);

  useEffect(() => {
    getRandomPokemon();
  }, []);

  const getRandomIndex = () => {
    const index = Math.floor(Math.random() * 150) + 1;
    return index;
  };

  const handleCardClick = (e) => {
    const pokeName = e.currentTarget.getAttribute('data-name');
    console.log(pokeName);

    if (clickedMons.includes(pokeName)) {
      setClickedMons([]);
      getRandomPokemon();
      eventHandler.invoke(MON_CLICKED, false);
    } else {
      const newMons = clickedMons;
      newMons.push(pokeName);
      setClickedMons(newMons);
      getRandomPokemon();
      eventHandler.invoke(MON_CLICKED, true);
      console.log(clickedMons);
    }
  };

  const getRandomPokemon = () => {
    const indeces = [];
    for (let i = 0; i < 10; i += 1) {
      const index = getRandomIndex();
      if (indeces.includes(index)) {
        i -= 1;
      } else {
        indeces.push(index);
      }
    }
    setPokeData([]);
    Promise.all(
      indeces.map((index) => getPokeData(index)
        .then(({ name, sprites }) => ({ name, sprite: sprites.front_default, id: uuidv4() }))),
    ).then((pokemonDataArray) => {
      setPokeData(pokemonDataArray);
    });
  };

  return (
    <div className="cardField">
      { !pokeData[0] ? (
        <div>loading</div>
      )
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
