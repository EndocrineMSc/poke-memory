import { v4 as uuidv4 } from 'uuid';

function TimelineButton({ addTimespan }) {
  const handleButtonClick = () => {
    addTimespan({
      startYear: '2022',
      endYear: null,
      institute: 'Roche',
      title: 'Test Job',
      details: [{ text: 'a', id: uuidv4() }, { text: 'b', id: uuidv4() }],
    });
  };

  return (
    <button type="button" onClick={handleButtonClick}>
      Add
    </button>
  );
}

export default TimelineButton;
