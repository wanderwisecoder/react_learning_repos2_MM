import React from 'react';
import CoreConcept from '../Concept/CoreConcept';
import { CORE_CONCEPTS } from '../../data.js';

const CoreConcepts = () => {
	return (
		<div>
			<section id='core-concepts'>
				<h2>Core Concepts</h2>
				<ul id='concepts'>
					{/* Dynamic way of outputting the CORE_CONCEPTS array of objects */}
					{CORE_CONCEPTS.map((conceptItem) => (
						<CoreConcept key={conceptItem.title} {...conceptItem} />
					))}
					{/* Static way of outputting the CORE_CONCEPTS array of objects */}
					{/* <CoreConcept image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} />
        <CoreConcept {...CORE_CONCEPTS[1]} />
        <CoreConcept {...CORE_CONCEPTS[2]} />
        <CoreConcept {...CORE_CONCEPTS[3]} /> */}
				</ul>
			</section>
		</div>
	);
};

export default CoreConcepts;
