import React from 'react';
import hero from '../../../assets/images/hero.jpg';

const Hero = () => {
	return (
		<section className='hero container'>
			<div className='hero__info'>
				<h1 className='hero__title'>Подарите себе время, узнайте, что мы можем сделать для вас</h1>
				<a href='#modal' className='hero__btn'>
					Оставить заявку
				</a>
			</div>
			<div className='hero__image'>
				<img src={hero} alt='hero' />
			</div>
		</section>
	);
};

export default Hero;
