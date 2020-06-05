import React from 'react';
import WorkItem from './WorkItem';
import { arrayOf, object } from 'prop-types';

const Work = props => {
  const getWorkExperience = () => {
    const { workData } = props;
    const workItems = [];
    workData.forEach((val, index) => {
      workItems.push(<WorkItem key={index} workItemData={val}/>);
    })
    return workItems;
  }

  return (
    <section className="work">
      <h2 className="text-uppercase"><i className="fa fa-lg fa-building"></i> Work experience</h2>
      {getWorkExperience()}
    </section>
  );
};

Work.propTypes = {
  workData: arrayOf(object)
}

export default Work;
