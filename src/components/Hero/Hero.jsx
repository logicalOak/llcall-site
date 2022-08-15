import React from 'react';
import hero from '../../../assets/images/hero.jpg';

const Hero = ({ active, setActive }) => {
	const handler = () => {};
	return (
		<section className='hero container'>
			<div className='hero__info'>
				<h1 className='hero__title'>Подарите себе время, узнайте, что мы можем сделать для вас</h1>
				<button onClick={() => setActive(true)} className='hero__btn'>
					Оставить заявку
				</button>
			</div>
			<div className='hero__image'>
				<img src={hero} alt='hero' />
			</div>
		</section>
	);
};

export default Hero;
