/* eslint-disable react/jsx-filename-extension */
import './App.css';
import GameHeader from './components/GameHeader';
import Counter from './components/Counter';
import CardField from './components/CardField';

function App() {
  return (
    <div className="gameBody">
      <Counter />
      <GameHeader />
      <CardField />
    </div>
  );
}

export default App;
