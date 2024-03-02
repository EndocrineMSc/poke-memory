import '../App.css';
import { useState } from 'react';

import Icon from '@mdi/react';
import { mdiSquareEditOutline } from '@mdi/js';

function GeneralInfo() {
  return (
    <div className="generalInfo">
      <div className="generalInfoHeader">
        <h1>Lebenslauf</h1>
        <Info name="Name" type="text" />
      </div>
      <div className="otherInfoContainer">
        <div className="otherInfo">
          <b>E-Mail:</b>
          <Info name="Email" type="email" />
        </div>
        <div className="otherInfo">
          <b>Tel.:</b>
          <Info name="Telefon" type="tel" />
        </div>
      </div>
    </div>
  );
}

function Info({ name, type }) {
  const [showInput, setInput] = useState(false);
  const [inputText, setText] = useState(name);

  function handleButtonClick() {
    setInput(!showInput);
  }

  function handleInput(e) {
    setText(e.target.value);
  }

  return (
    <div className="info">
      <div className="noInput">
        <label htmlFor={name}>{inputText}</label>
        <button
          className="editButton"
          type="button"
          id={name}
          onClick={handleButtonClick}
          aria-label="show input"
        >
          <Icon path={mdiSquareEditOutline} size={2} />
        </button>
      </div>
      {showInput
        ? (
          <input
            type={type}
            id={name}
            onChange={handleInput}
            defaultValue={inputText}
          />
        ) : null}
    </div>
  );
}

export default GeneralInfo;
