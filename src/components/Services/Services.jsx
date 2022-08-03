import React from 'react';
import data from './data';

const Services = () => {
	return (
		<section className='services' id='services'>
			<div className='container'>
				<div className='services-info'>
					<h2 className='services__title'>{data.title}</h2>
					<p className='services__desc'>{data.desc}</p>
				</div>
				<ul className='services-list'>
					{data.list.map((i, idx) => (
						<li key={idx} className='services-item'>
							<div className='services-image'>
								<img src={i.img} alt={i.title} />
							</div>
							<h3 className='services-item__title'>{i.title}</h3>
							<ul className='services-item-sublist'>
								{i.sublist.map((i, idx) => (
									<li key={idx} className='services-item__subitem'>
										{i}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Services;
