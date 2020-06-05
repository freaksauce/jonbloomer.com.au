import React from 'react';
import { arrayOf, object } from 'prop-types';

const Education = props => {
	const { educationData } = props;
	const getEducation = educationData.map(function(item, index) {
		return (
			<div key={index}>
				<h3>{item.studyType} {item.area}</h3>
				<h4>{item.institution}</h4>
				<p>Studied: {item.startDate} - {item.endDate}</p>
			</div>
			)
	});

	return (
		<section className="education">
			<h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i> Education</h2>
			{getEducation}
		</section>
	)
};

Education.propTypes = {
	educationData: arrayOf(object).isRequired
}

export default Education;
