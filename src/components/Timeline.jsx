import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TimelineEntry from './TimelineEntry';
import TimelineButton from './TimelineButton';

function Timeline({ headerText }) {
  const [timespans, setTimespan] = useState([{
    spanKey: uuidv4(), startYear: 2021, institute: 'Mustermann AG', title: 'Mustermacher', details: ['Anfertigen von Mustern'],
  }]);

  const addTimespan = ({
    startYear, endYear, institute, title, details,
  }) => {
    setTimespan((prevExperiences) => [...prevExperiences, {
      spanKey: uuidv4(), startYear, endYear, institute, title, details,
    }]);
  };

  return (
    <div className={headerText}>
      <h1 className="timelineHeader">
        {headerText}
        <TimelineButton addTimespan={addTimespan} />
      </h1>
      {timespans.map((timespan) => (
        <TimelineEntry
          key={timespan.spanKey}
          spanKey={timespan.spanKey}
          startYear={timespan.startYear}
          endYear={timespan.endYear}
          institute={timespan.institute}
          title={timespan.title}
          details={timespan.details}
        />
      ))}
    </div>
  );
}

export default Timeline;
