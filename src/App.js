/* eslint-disable react/jsx-filename-extension */
import Timeline from './components/Timeline';
import GeneralInfo from './components/GeneralInfo';

function App() {
  // const details = ['Entwicklung Random Access Chlia', 'Nase popeln'];

  return (
    <>
      <GeneralInfo />
      <Timeline headerText="Berufserfahrung" />
      <Timeline headerText="Bildungsweg" />
    </>
  );
}

export default App;
