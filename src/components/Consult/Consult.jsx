import React from 'react';

const Consult = () => {
	return (
		<section className='consult'>
			<div className='container'>
				<h2 className='consult__title'>Оставьте заявку</h2>
				<p className='consult__desc'>Мы сделаем все возможное</p>
				<form className='consult-form form'>
					<input className='consult-form__input' type='text' placeholder='Ваше имя' />
					<input className='consult-form__input' type='text' placeholder='Введите номер телефона' />
					<button className='consult-form__btn' type='submit'>
						Отправить
					</button>
				</form>
			</div>
		</section>
	);
};

export default Consult;
