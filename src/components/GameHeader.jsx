import '../App.css';

function GameHeader() {
  return (
    <div className="gameHeader">
      <h1 className="header">
        Pokemon Memory Cards Game
      </h1>
      <div className="rules">
        Click as many gen.1 Pokemon as you can without clicking any twice!
      </div>
    </div>
  );
}

export default GameHeader;
