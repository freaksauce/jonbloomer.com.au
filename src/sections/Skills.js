import React from 'react';
import { arrayOf, object } from 'prop-types';

const Skills = props => {
  const { skillsData } = props
    const getSkills = skillsData[0].keywords.map(function(item, index) {
      return (<li key={index}><span className="label label-success">{item}</span></li>)
    });

  	return (
  	  <section className="skills">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-code"></i> Skills</h2>
        <ul className="skills-list">{getSkills}</ul>
      </section>
  	)
};

Skills.propTypes = {
  skillsData: arrayOf(object).isRequired
}

export default Skills;
