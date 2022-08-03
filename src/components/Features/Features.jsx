import React from 'react';
import data from './data';

const Features = () => {
	return (
		<section className='features'>
			<div className='container'>
				<ul className='features-list'>
					{data.list.map((i, idx) => (
						<li key={idx} className='features-item'>
							<div className='features-image'>
								<img src={i.img} alt={i.title} />
							</div>
							<h3 className='features-item__title'>{i.title}</h3>
							<p className='features-item__desc'>{i.text}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Features;
