import '../App.css';
import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiSquareEditOutline } from '@mdi/js';
import TimelineEntryForm from './TimelineEntryForm';
import { eventHandler, TIMESPAN_EDITED } from '../eventhandler';

function TimelineEntry({
  spanKey, startYear, endYear, institute, title, details,
}) {
  const [spanInfo, setSpanInfo] = useState({
    spanStartYear: startYear || '',
    spanEndYear: endYear || 'jetzt',
    spanInstitute: institute || '',
    spanTitle: title || '',
    spanDetails: details,
  });

  const [firstRender, setFirstRender] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const editTimespan = (data) => {
    if (data.spanKey === spanKey) {
      setSpanInfo({
        spanStartYear: data.formStartYear,
        spanEndYear: data.formEndYear,
        spanInstitute: data.formInstitute,
        spanTitle: data.formTitle,
        spanDetails: data.formDetails,
      });
    }
  };

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  if (firstRender) {
    eventHandler.subscribe(TIMESPAN_EDITED, editTimespan);
    setFirstRender(false);
  }

  return (
    <>
      <div className="entryHeader">
        <h2 className="timespan">
          {spanInfo.spanStartYear}
          {' '}
          -
          {' '}
          {spanInfo.spanEndYear}
          {' '}
          &middot;
          {' '}
          {spanInfo.spanInstitute}
          {' '}
          &middot;
          {' '}
          {spanInfo.spanTitle}
        </h2>
        <button
          className="editButton"
          type="button"
          onClick={handleButtonClick}
          aria-label="show input"
        >
          <Icon path={mdiSquareEditOutline} size={2} />
        </button>
      </div>
      <ul className="timespan">
        {spanInfo.spanDetails
          ? spanInfo.spanDetails.map((detail) => (
            <li key={detail.id}>{detail.text}</li>
          ))
          : null}
      </ul>
      {
        showForm ? (
          <TimelineEntryForm
            spanKey={spanKey}
            startYear={spanInfo.spanStartYear}
            endYear={spanInfo.spanEndYear}
            institute={spanInfo.spanInstitute}
            title={spanInfo.spanTitle}
          />
        ) : null
      }

    </>
  );
}

export default TimelineEntry;
