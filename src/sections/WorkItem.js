import React from 'react';
import { object } from 'prop-types';

const WorkItem = props => {
  const { workItemData } = props
  const getWorkDates = () => {
    const startdate = workItemData.startDate;
    let enddate = null;
    if (workItemData.endDate !== '') {
      enddate = workItemData.endDate;
    } else {
      enddate = 'Present';
    }

    return <span className='startdate'>{startdate} - {enddate}</span>
  }

  const getHighlights = workItemData.highlights.map(function(item, index) {
    return (<li key={index}>{item}</li>)
  });

  return (
    <div className="workItem">
      <h3>{workItemData.position}, <span>{workItemData.company}</span></h3>
      <p className="workDates">{getWorkDates()}</p>
      <p>{workItemData.summary}</p>
      <ul>{getHighlights}</ul>
    </div>
  )
};

WorkItem.propTypes = {
  workItemData: object.isRequired
}

export default WorkItem;
