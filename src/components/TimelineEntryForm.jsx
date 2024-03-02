import '../App.css';
import { useState } from 'react';
import { eventHandler, TIMESPAN_EDITED } from '../eventhandler';

function TimelineEntryForm({
  spanKey, startYear, endYear, institute, title,
}) {
  const [formStartYear, setFormStartYear] = useState(startYear || '');
  const [formEndYear, setFormEndYear] = useState(endYear || '');
  const [formInstitute, setFormInstitute] = useState(institute || '');
  const [formTitle, setFormTitle] = useState(title || '');

  const handleButtonClick = () => {
    eventHandler.invoke(TIMESPAN_EDITED, {
      spanKey, formStartYear, formEndYear, formInstitute, formTitle,
    });
  };

  return (
    <form className="formContainer">
      <div className="labelContainer">
        <label htmlFor="formStartYear">
          Arbeitsbeginn (Jahr)
          <input
            type="text"
            id="formStartYear"
            defaultValue={formStartYear}
            onChange={(e) => setFormStartYear(e.target.value)}
          />
        </label>

        <label htmlFor="formEndYear">
          Arbeitsende (Jahr/Leer)
          <input
            type="text"
            id="formEndYear"
            defaultValue={formEndYear}
            onChange={(e) => setFormEndYear(e.target.value)}
          />
        </label>

        <label htmlFor="formInstitute">
          Institut
          <input
            type="text"
            id="formInstitute"
            defaultValue={formInstitute}
            onChange={(e) => setFormInstitute(e.target.value)}
          />
        </label>

        <label htmlFor="formTitle">
          Bezeichnung
          <input
            type="text"
            id="formTitle"
            defaultValue={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
          />
        </label>
      </div>

      <button
        type="button"
        onClick={handleButtonClick}
      >
        Submits
      </button>
    </form>
  );
}

export default TimelineEntryForm;
